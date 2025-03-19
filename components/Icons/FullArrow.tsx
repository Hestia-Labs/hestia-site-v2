import React from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

interface FullArrowProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  strokeWidth?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  onClickEffect?: boolean;
}

const FullArrow: React.FC<FullArrowProps> = ({
  className = 'w-6 h-6 text-primary',
  strokeWidth = 1,
  direction = 'right',
  onClickEffect = false,
  ...props
}) => {
  const getRotation = () => {
    switch (direction) {
      case 'up':
        return 90;
      case 'left':
        return 180;
      case 'down':
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
      whileHover={onClickEffect ? { x: 5 } : {}}
      whileTap={onClickEffect ? { scale: 0.9 } : {}}
      transition={{ duration: 0.3, type: 'spring' }}
      {...(props as SVGMotionProps<SVGSVGElement>)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </motion.svg>
  );
};

export default FullArrow;