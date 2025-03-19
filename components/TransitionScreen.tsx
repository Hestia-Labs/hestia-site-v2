'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TransitionScreenProps {
  isVisible: boolean;
  onAnimationComplete?: () => void;
}

const TransitionScreen: React.FC<TransitionScreenProps> = ({ 
  isVisible, 
  onAnimationComplete 
}) => {
  // This handles whether the component should be rendered at all
  const [shouldRender, setShouldRender] = useState(isVisible);
  
  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    }
  }, [isVisible]);

  // This handles the animation complete event for the container
  const handleExitComplete = () => {
    if (!isVisible) {
      setShouldRender(false);
      // Call the completion callback when the exit animation is done
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }
  };

  if (!shouldRender) return null;

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {shouldRender && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative w-[335px] h-[470px]">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 700 1200" 
              width="335" 
              height="470" 
              preserveAspectRatio="xMidYMid meet"
            >
              <g transform="scale(0.9) translate(70, 340)">
                <motion.g 
                  initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
                  animate={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                  exit={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeInOut",
                    exit: { duration: 0.4 }
                  }}
                >
                  <polygon points="35.0,177.9 35.0,707.0 0.0,672.1 0.0,212.9" fill="white"/>
                  <polygon points="183.8,-46.5 183.8,806.9 148.8,771.9 148.8,-11.5" fill="white"/>
                  <polygon points="516.3,379.9 516.3,672.1 481.3,707.0 481.3,403.9 306.3,336.4 306.3,-251.9 341.3,-286.9 341.3,312.4" fill="white"/>
                  <polygon points="516.3,90.1 516.3,242.7 481.3,242.7 481.3,55.0" fill="white"/>
                  <polygon points="341.3,446.6 341.3,946.9 306.3,911.9 306.3,481.7" fill="white"/>
                  <polygon points="682.6,212.9 682.6,661.8 647.6,696.8 647.6,177.9" fill="white"/>
                </motion.g>
              </g>
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransitionScreen; 