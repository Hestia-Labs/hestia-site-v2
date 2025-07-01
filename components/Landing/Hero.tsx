"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import BackgroundEffect from "@/components/BackgroundEffect";
import Arrow from "@/components/Icons/Arrow";

// Animation variants
const titleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.19, 1, 0.22, 1],
      delay: 0.2
    }
  }
};

const paragraphVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 15 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.19, 1, 0.22, 1],
      delay: 0.4
    }
  }
};

const ctaVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 15
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.19, 1, 0.22, 1],
      delay: 0.7
    }
  }
};

const gridVariants: Variants = {
  hidden: { 
    opacity: 0
  },
  visible: { 
    opacity: 0.08,
    transition: { 
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

// Types for the component props
interface HeroProps {
  title: string;
  description: string;
  ctaText?: string;
}

export default function Hero({ 
  title = "Your Vision, Our Expertise", 
  description = "At Hestia Labs, we are more than just a software engineering agency — we are your partners in innovation. Our mission is to empower businesses with cutting-edge technology solutions that drive growth and success in a rapidly evolving digital world.",
  ctaText = "See Our Work"
}: HeroProps) {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [controls, hasAnimated]);

  const handleScrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center p-8 pb-20 sm:p-20 ">
      {/* Enhanced grid pattern with animation */}
      <motion.div 
        className="absolute inset-0"
        initial="hidden"
        animate={controls}
        variants={gridVariants}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>
      
      {/* Background effect with logos */}
      <BackgroundEffect />

      {/* Main content with animated entrance */}
      <main className="flex flex-col gap-16 items-center justify-center w-full pointer-events-none mt-32 max-w-6xl mx-auto relative z-10">
        <motion.h1 
          className="font-bellefair uppercase font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wider text-center text-primary text-nowrap"
          initial="hidden"
          animate={controls}
          variants={titleVariants}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="font-avenirNext text-lg sm:text-xl md:text-2xl leading-relaxed tracking-normal text-center text-foreground max-w-4xl"
          initial="hidden"
          animate={controls}
          variants={paragraphVariants}
        >
          {description}
        </motion.p>
        
        <motion.div
          className="flex flex-col items-center gap-4 mt-16 md:mt-12 cursor-pointer group pointer-events-auto"
          initial="hidden"
          animate={controls}
          variants={ctaVariants}
          onClick={handleScrollToWork}
        >
          <span className="text-center text-xl sm:text-2xl md:text-3xl font-bellefair uppercase text-foreground relative overflow-hidden group-hover:text-primary transition-colors duration-300">
            {ctaText}
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
          <Arrow 
            className="w-10 h-10 text-primary transform transition-all duration-300 group-hover:translate-y-1" 
            color="text-primary" 
            strokeWidth={1} 
          />
        </motion.div>
      </main>
    </section>
  );
} 