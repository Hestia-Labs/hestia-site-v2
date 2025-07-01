"use client";

import React from "react";
import { motion } from "framer-motion";

export interface LogoProps extends React.SVGProps<SVGSVGElement> {
  scale?: number;      // Scale factor for the polygon group.
  background?: boolean; // If true, use a transform better suited for background usage.
}

const polygons = [
  "2193.7,1347.9 2193.7,1877 2158.7,1842.1 2158.7,1382.9",
  "2342.5,1123.5 2342.5,1976.9 2307.5,1941.9 2307.5,1158.5",
  "2675,1549.9 2675,1842.1 2640,1877 2640,1573.9 2465,1506.4 2465,918.1 2500,883.1 2500,1482.4",
  "2675,1260.1 2675,1412.7 2640,1412.7 2640,1225",
  "2500,1616.6 2500,2116.9 2465,2081.9 2465,1651.7",
  "2841.3,1382.9 2841.3,1831.8 2806.3,1866.8 2806.3,1347.9",
];

const getTransform = (background: boolean, scale: number) =>
  background ? `translate(50,50) scale(${scale})` : `translate(-575,-100) scale(${scale})`;

const AnimatedLogo: React.FC<LogoProps> = ({
  scale = 0.3,
  background = false,
  className = '',
  ...props
}) => {
  const transformValue = getTransform(background, scale);
  return (
    <div className={`relative ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="60 160 230 400"
        {...props}
        className="relative z-10 w-full h-full"
      >
        <defs>
          {/* Simple, clean accent color for outlines */}
          <linearGradient 
            id="outline-gradient" 
            gradientUnits="objectBoundingBox"
            x1="0" 
            y1="1" 
            x2="1" 
            y2="0"
          >
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        <g transform={transformValue}>
          {polygons.map((points, i) => (
            <motion.g key={i} initial="rest" whileHover="hover">
              {/* Base shape with subtle transition */}
              <motion.polygon
                points={points}
                fill="hsl(var(--secondary))"
                variants={{
                  rest: { 
                    fill: "hsl(var(--secondary))",
                    y: 0 
                  },
                  hover: { 
                    fill: "hsl(var(--secondary))",
                    transition: { duration: 0.3, ease: "easeOut" } 
                  },
                }}
              />
              
              {/* Clean outline that appears on hover */}
              <motion.polygon
                points={points}
                fill="none"
                stroke="url(#outline-gradient)"
                strokeWidth="1"
                variants={{
                  rest: { 
                    opacity: 0, 
                    pathLength: 0,
                    strokeWidth: "0.5"
                  },
                  hover: { 
                    opacity: 1, 
                    pathLength: 1,
                    strokeWidth: "0.5",
                    transition: { 
                      pathLength: { duration: 0.6, ease: "easeOut" },
                      opacity: { duration: 0.2 },
                      strokeWidth: { duration: 0.3, delay: 0.1 }
                    }
                  },
                }}
              />
              
              {/* Subtle accent in the corners that appears on hover */}
              <motion.polygon
                points={points}
                fill="hsl(var(--primary))"
                variants={{
                  rest: { 
                    opacity: 0,
                  },
                  hover: { 
                    opacity: 0.15,
                    transition: { 
                      opacity: { duration: 0.5, ease: "easeOut" },
                      scale: { duration: 0.4, ease: [0.19, 1, 0.22, 1] }
                    }
                  },
                }}
              />
            </motion.g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;
