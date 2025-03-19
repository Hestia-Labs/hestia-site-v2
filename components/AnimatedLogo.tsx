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
          <linearGradient
            id="shine-gradient"
            gradientUnits="objectBoundingBox"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="40%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g transform={transformValue}>
          {polygons.map((points, i) => (
            <motion.g key={i} initial="rest" whileHover="hover">
              <motion.polygon
                points={points}
                fill="hsl(var(--secondary))"
                variants={{
                  rest: { opacity: 1 },
                  hover: { opacity: 0, transition: { duration: 0.2, ease: "linear" } },
                }}
              />
              <motion.polygon
                points={points}
                fill="url(#shine-gradient)"
                variants={{
                  rest: { opacity: 0, filter: "drop-shadow(0 0 0px transparent)" },
                  hover: {
                    opacity: 1,
                    filter: "drop-shadow(0 0 8px hsla(var(--primary),0.5))",
                    transition: { duration: 0.2, ease: "linear" },
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
