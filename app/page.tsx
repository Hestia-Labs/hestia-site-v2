"use client";

import React from "react";
import BackgroundEffect from "@/components/BackgroundEffect";
import WorkCarousel from "@/components/Landing/Work";
import Arrow from "@/components/Icons/Arrow";
import Services from "@/components/Landing/Services";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      {/* Section for Background effect and Main Text */}
      <section className="relative flex flex-col items-center justify-center p-8 pb-20 gap-24 sm:p-20 ">
        <BackgroundEffect />
        <main className="flex flex-col gap-16 items-center justify-center w-full pointer-events-none mt-32">
          <h1 className="font-bellefair uppercase font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-wider text-center text-primary z-10">
            Your Vision, Our Expertise
          </h1>
          <p className="font-avenirNext text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-normal text-center text-foreground z-10 pointer-events-none">
            At Hestia Labs, we are more than just a software engineering agency — we are your partners in innovation. Our mission is to empower businesses with cutting-edge technology solutions that drive growth and success in a rapidly evolving digital world.
          </p>
          <div
            className="flex flex-col items-center gap-4 mt-36 md:mt-12 cursor-pointer group pointer-events-auto z-10"
            onClick={() => {
              const workSection = document.getElementById("work");
              if (workSection) {
                workSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="text-center text-xl sm:text-2xl md:text-3xl font-bellefair uppercase text-foreground">See Our Work</span>
            <Arrow className="w-10 h-10 text-primary transform transition-transform duration-300 group-hover:translate-y-1" color="text-primary" strokeWidth={1} />
          </div>
        </main>
      </section>

      {/* Section for WorkCarousel with asymmetric layout */}
      <section id="work" className="w-full flex flex-col justify-center items-center bg-background/50 mt-40">
        <div className="w-full max-w-[1600px] py-20">
          <h2 className="font-bellefair text-4xl md:text-5xl text-center mb-24 z-10">Our Work</h2>
          
          <div className="space-y-16 md:space-y-32">
            {/* First project - fullscreen layout */}
            <WorkCarousel 
              stopCarousel 
              variant="fullscreen" 
              projectIndex={0}
              animationDirection="left"
              animationDistance={40}
            />
            
            {/* Second project - split layout (text left, image right) */}
            <WorkCarousel 
              stopCarousel 
              variant="split" 
              projectIndex={1}
              animationDirection="right"
              animationDistance={50}
            />
            
            {/* Third project - compact layout */}
            <WorkCarousel 
              stopCarousel 
              variant="compact" 
              projectIndex={2}
              animationDirection="bottom"
              animationDistance={30}
            />
          </div>
          
          {/* See All Work CTA */}
          <motion.div 
            className="flex justify-center mt-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Link href="/work" className="group">
              <div className="border-2 border-black hover:bg-black transition-colors duration-300 py-4 px-12">
                <span className="font-bellefair uppercase text-xl md:text-2xl tracking-wider group-hover:text-white transition-colors duration-300">
                  See All Work
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
      
      <section id="services" className="w-full">
        <Services />
      </section>

     
    </div>
  );
}
