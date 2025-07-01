import React from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

interface ArrowProps extends React.SVGProps<SVGSVGElement> {
  direction?: 'up' | 'down' | 'left' | 'right';
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({
    direction = 'down',
    stroke = 1,
    className,
    ...props  
}) => {
  const getRotation = () => {
    switch (direction) {
      case 'up':
        return 180;
      case 'left':
        return 90;
      case 'right':
        return -90;
      default:
        return 0;
    }
  };

  return (
    <motion.svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ rotate: getRotation() }}
    transition={{ duration: 0.3 }}
    {...(props as  SVGMotionProps<SVGSVGElement>)} 
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={stroke}
      d="M19 9l-7 7-7-7"
    />
  </motion.svg>
  );
};

export default Arrow;
