"use client";

import React from "react";
import AnimatedLogo from "@/components/AnimatedLogo";

const BackgroundEffect: React.FC = () => {
  return (
    <div className="absolute inset-0 flex justify-center items-center pt-10 md:pt-80 pointer-events-none">
      {/* Centered background logos */}
      <div className="opacity-75 h-fit w-full pointer-events-auto">
        <AnimatedLogo className="w-[400px] md:w-[600px] lg:w-[950px] h-auto " />
      </div>
      <div className="opacity-75 h-fit w-full pointer-events-auto transform -scale-x-100">
        <AnimatedLogo className="w-[400px] md:w-[600px] lg:w-[950px] h-auto" />
      </div>
    </div>
  );
};

export default BackgroundEffect;
