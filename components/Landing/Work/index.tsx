"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'

type AnimationDirection = 'left' | 'right' | 'top' | 'bottom';

interface WorkCarouselProps {
  stopCarousel?: boolean;
  variant?: 'fullscreen' | 'split' | 'compact';
  projectIndex?: number;
  animationDirection?: AnimationDirection;
  animationDistance?: number; // In percentage (0-100)
}

export default function WorkCarousel({ 
  stopCarousel = false, 
  variant = 'fullscreen',
  projectIndex = 0,
  animationDirection = 'left',
  animationDistance = 30 // Default 30% off-center
}: WorkCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(projectIndex)
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    const handleResize = () => {
      checkMobile()
      setActiveIndex(projectIndex)
    }
    checkMobile()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [projectIndex])

  useEffect(() => {
    if (stopCarousel) {
      setActiveIndex(projectIndex)
      return
    }

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [stopCarousel, projectIndex])

  // Calculate initial position based on animation direction
  const getInitialPosition = () => {
    const distance = isMobile ? animationDistance * 0.7 : animationDistance;
    switch(animationDirection) {
      case 'left': return { x: `-${distance}%`, y: '0%' };
      case 'right': return { x: `${distance}%`, y: '0%' };
      case 'top': return { x: '0%', y: `-${distance}%` };
      case 'bottom': return { x: '0%', y: `${distance}%` };
      default: return { x: `-${distance}%`, y: '0%' };
    }
  };

  const initialPosition = getInitialPosition();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, 
    [0, 0.5, 1], 
    [1, isMobile ? 1.05 : 1.15, 1]
  )

  const x = useTransform(scrollYProgress, 
    [0, 0.5, 1], 
    [initialPosition.x, '0%', initialPosition.x]
  )

  const y = useTransform(scrollYProgress, 
    [0, 0.5, 1], 
    [initialPosition.y, '0%', initialPosition.y]
  )

  // Animation constants based on direction
  const getAnimationProps = (direction: AnimationDirection = animationDirection, distance: number = 50) => {
    switch(direction) {
      case 'left':
        return {
          initial: { opacity: 0, x: -distance },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        };
      case 'right':
        return {
          initial: { opacity: 0, x: distance },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        };
      case 'top':
        return {
          initial: { opacity: 0, y: -distance },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        };
      case 'bottom':
        return {
          initial: { opacity: 0, y: distance },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        };
      default:
        return {
          initial: { opacity: 0, x: -distance },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        };
    }
  };
  
  // Render different layouts based on variant
  if (variant === 'split') {
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center px-4 md:px-8 my-12">
        <motion.div 
          ref={containerRef}
          className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          style={{ scale, x, y }}
        >
          {/* Left side: Text content */}
          <motion.div 
            className="order-2 md:order-1 p-6 md:p-12 flex flex-col space-y-6"
            {...getAnimationProps(animationDirection === 'right' ? 'left' : 'right')}
          >
            <div className="space-y-2">
              <h3 className="text-foreground font-bellefair text-3xl md:text-4xl tracking-tight uppercase">
                {projects[activeIndex].name}
              </h3>
              <div className="flex flex-row items-center gap-4 mt-2">
                <span className="text-muted-foreground font-medium text-sm md:text-base">
                  {projects[activeIndex].category}
                </span>
                <span className="text-muted-foreground/40">•</span>
                <span className="text-muted-foreground/80 font-medium text-sm md:text-base">
                  {projects[activeIndex].type}
                </span>
              </div>
            </div>
            
            <p className="text-foreground/80 text-base md:text-lg font-avenirNext leading-relaxed">
              {projects[activeIndex].tagline}
            </p>
            
            <Link href={projects[activeIndex].href}>
              <Button 
                className='bg-background text-popover hover:bg-background/70 transition-colors mt-6'
              >
                View Case Study
              </Button>
            </Link>
          </motion.div>
          
          {/* Right side: Image */}
          <motion.div 
            className="order-1 md:order-2 aspect-[16/9] rounded-xl overflow-hidden shadow-xl relative"
            {...getAnimationProps(animationDirection)}
          >
            <motion.img
              src={projects[activeIndex].image}
              className="w-full h-full object-cover"
              alt={projects[activeIndex].name}
              whileHover={{ scale: 1.05, filter: "grayscale(0%)" }}
              initial={{ filter: "grayscale(80%)" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    );
  }
  
  if (variant === 'compact') {
    return (
      <div className="w-full min-h-[70vh] flex items-center justify-center px-4 md:px-8 my-12">
        <motion.div
          ref={containerRef}
          style={{ scale, x, y }}
          className="relative w-full max-w-4xl cursor-pointer group"
          onHoverStart={() => !isMobile && setIsHovered(true)}
          onHoverEnd={() => !isMobile && setIsHovered(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Image with caption on the side */}
            <motion.div 
              className="md:col-span-2 aspect-[16/9] rounded-xl overflow-hidden shadow-xl relative"
              {...getAnimationProps(animationDirection)}
            >
              <motion.img
                src={projects[activeIndex].image}
                className="w-full h-full object-cover"
                alt={projects[activeIndex].name}
                initial={{ filter: "grayscale(80%)" }}
                whileHover={{ filter: "grayscale(0%)" }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="absolute inset-0 bg-popover/90 backdrop-blur-sm p-6 flex items-end"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  href={projects[activeIndex].href}
                  className="w-full"
                >
                  <Button 
                    className='bg-background text-popover hover:bg-background/70 transition-colors w-full'
                  >
                    View Case Study
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="space-y-4 p-4"
              {...getAnimationProps(animationDirection === 'left' ? 'right' : 'left')}
            >
              <h3 className="text-foreground font-bellefair text-xl md:text-3xl tracking-tight uppercase">
                {projects[activeIndex].name}
              </h3>
              <p className="text-foreground/80 text-base md:text-lg font-avenirNext">
                {projects[activeIndex].tagline}
              </p>
              <div className="flex flex-col gap-2 mt-4">
                <span className="text-muted-foreground font-medium text-sm">
                  {projects[activeIndex].category}
                </span>
                <span className="text-muted-foreground/80 font-medium text-sm">
                  {projects[activeIndex].type}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }
  
  // Default fullscreen layout
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center px-4 md:px-8 py-12 my-12">
      <motion.div
        ref={containerRef}
        style={{ scale, x, y }}
        className="relative w-full max-w-4xl mx-auto cursor-pointer group"
        onHoverStart={() => !isMobile && setIsHovered(true)}
        onHoverEnd={() => !isMobile && setIsHovered(false)}
      >
        {/* Image Container with Overlay */}
        <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-xl relative">
          <AnimatePresence mode="wait">
            <motion.div 
              className="relative h-full w-full"
              key={projects[activeIndex].id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src={projects[activeIndex].image}
                className="w-full h-full object-cover"
                alt={projects[activeIndex].name}
                initial={{ filter: "grayscale(80%)" }}
                whileHover={{ filter: "grayscale(0%)" }}
                transition={{ duration: 0.3 }}
              />

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-popover/90 backdrop-blur-sm flex flex-col items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <motion.div
                  className="text-center space-y-4"
                  initial={{ y: 20 }}
                  animate={{ y: isHovered ? 0 : 20 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bellefair text-background">
                    {projects[activeIndex].tagline}
                  </h2>
                  <Link 
                    href={projects[activeIndex].href}
                  >
                    <Button 
                        className='bg-background text-popover hover:bg-background/70 transition-colors mt-6'
                    >
                        View Case Study
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Content Below Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${projects[activeIndex].id}-text`}
            {...getAnimationProps('bottom', 30)}
            className="mt-4 md:mt-6"
          >
            <div className="flex flex-row justify-between items-start md:items-center gap-2 md:gap-4">
              <h3 className="text-foreground font-bellefair text-xl md:text-3xl tracking-tight uppercase">
                {projects[activeIndex].name}
              </h3>
              <div className="flex flex-row items-start md:items-center gap-2 md:gap-4">
                <span className="text-muted-foreground font-medium text-sm md:text-base">
                  {projects[activeIndex].category}
                </span>
                <span className="text-muted-foreground/40">•</span>
                <span className="text-muted-foreground/80 font-medium text-sm md:text-base">
                  {projects[activeIndex].type}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}