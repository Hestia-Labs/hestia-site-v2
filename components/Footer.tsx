"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FullArrow from "./Icons/FullArrow";
import { motion } from "framer-motion";
import TransitionLink from "./TransitionLink";

const footerContent = {
  navigation: [
    { title: "Work", href: "/work" },
    { title: "About", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "UX/UI Design", href: "/services/ux-ui-design" },
    { title: "Software Development", href: "/services/software-development" },
    { title: "Brand Creation", href: "/services/brand-creation" },
  ],
  contact: {
    cta: { title: "Get in Touch", href: "/contact" },
    address: ["123 Innovation Drive", "Suite 100", "Tech City, Country"],
  },
  socials: [
    { title: "Facebook", href: "https://facebook.com" },
    { title: "Twitter", href: "https://twitter.com" },
    { title: "Instagram", href: "https://instagram.com" },
  ],
  legal: [
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
    { title: "Sitemap", href: "/sitemap" },
  ],
};

export default function Footer() {
  const [formStatus, setFormStatus] = React.useState<{
    success: boolean;
    error: string | null;
  }>({ success: false, error: null });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    if (email) {
      console.log("Submitted email:", email);
      setFormStatus({ success: true, error: null });
      event.currentTarget.reset();
    } else {
      setFormStatus({
        success: false,
        error: "Please enter a valid email address.",
      });
    }
  };

  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-full mx-auto px-4 py-16 sm:px-6 lg:px-12">
        {/* CTA Section */}
        <div className=" flex justify-between items-center pt-10 border-t border-foreground/10 py-8 w-full relative overflow-hidden">

            <div>
                <h3 className="font-bellefair text-5xl mb-8 leading-tight relative z-10">
                Let's create something<br />extraordinary
                </h3>
                <Link href={footerContent.contact.cta.href}>
                    <Button className="font-bellefair bg-foreground h-12 px-8 text-xl relative z-10 transition-colors group ">
                        {footerContent.contact.cta.title}
                    
                        <FullArrow onClickEffect className="w-6 h-6" />
                     
                    </Button>
                </Link>
            </div>
          {/* Animated background graphic */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="h-1/2 w-8/12"  
            >
            <motion.svg
                viewBox="0 0 1200 300"
                className="h-full w-full"  
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity="0.7"
                whileHover={{
                
                strokeOpacity: 1,
                transition: { duration: 0.3 },
                }}
            >
                <defs>
                <pattern id="chipPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                    <rect width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.2" strokeOpacity="0.3"/>
                </pattern>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/>
                    <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                </defs>

                <rect width="1200" height="300" fill="url(#chipPattern)" />

           

                {/* Main horizontal trace */}
                <motion.path 
                d="M50 150 H1150" 
                strokeDasharray="10,10"
                whileHover={{
                    strokeDashoffset: -20,
                    transition: { duration: 2, repeat: Infinity, ease: "linear" }
                }}
                />
                
                {/* Animated parallel traces */}
                <motion.g>
                {[100, 200].map((y) => (
                    <motion.path
                    key={y}
                    d={`M50 ${y} H1150`}
                    strokeDasharray="5,5"
                    strokeOpacity="0.6"
                    whileHover={{
                        strokeWidth: 1,
                        strokeOpacity: 1,
                        strokeDashoffset: -10,
                        transition: { duration: 1, repeat: Infinity }
                    }}
                    />
                ))}
                </motion.g>

                {/* Interactive chip components */}
                {[
                { x: 200, y: 120, w: 60, h: 40 },
                { x: 400, y: 80, w: 80, h: 60 },
                { x: 600, y: 140, w: 50, h: 30 },
                { x: 800, y: 110, w: 70, h: 50 },
                { x: 1000, y: 130, w: 60, h: 40 }
                ].map((chip, i) => (
                <motion.rect
                    key={i}
                    x={chip.x}
                    y={chip.y}
                    width={chip.w}
                    height={chip.h}
                    rx="4"
                    fill="none"
                    strokeOpacity="0.8"
                    whileHover={{
                    strokeWidth: 1.5,
                    stroke: "hsl(var(--primary))",
                    filter: "url(#glow)",
                    transition: { 
                        type: "spring",
                        stiffness: 300,
                        damping: 10
                    }
                    }}
                />
                ))}

                {/* Animated vertical connections */}
                {[
                { x: 230, y1: 140, y2: 100 },
                { x: 440, y1: 110, y2: 80 },
                { x: 635, y1: 155, y2: 140 },
                { x: 835, y1: 135, y2: 110 },
                { x: 1030, y1: 150, y2: 130 }
                ].map((conn, i) => (
                <motion.path
                    key={i}
                    d={`M${conn.x} ${conn.y1} V${conn.y2}`}
                    strokeDasharray="5,3"
                    whileHover={{
                    strokeDashoffset: [0, -8, 0],
                    strokeOpacity: 1,
                    transition: { duration: 0.5, repeat: Infinity }
                    }}
                />
                ))}

                {/* Hover-reactive decorative lines */}
                <motion.g>
                <motion.path
                    d="M100 50 L200 150"
                    strokeDasharray="3,2"
                    strokeOpacity="0.5"
                    whileHover={{
                    strokeDasharray: "3,0",
                    strokeOpacity: 1,
                    transition: { duration: 0.3 }
                    }}
                />
                <motion.path
                    d="M1100 250 L1000 150"
                    strokeDasharray="3,2"
                    strokeOpacity="0.5"
                    whileHover={{
                    strokeDasharray: "3,0",
                    strokeOpacity: 1,
                    transition: { duration: 0.3 }
                    }}
                />
                </motion.g>

                {/* Floating connection dots */}
                <motion.g fill="hsl(var(--primary))" opacity="0">
                {[200, 400, 600, 800, 1000].map((x, i) => (
                    <motion.circle
                    key={x}
                    cx={x}
                    cy={150}
                    r="3"
                    animate={{
                        opacity: [0, 0.8, 0],
                        y: ["0%", "-30%", "0%"],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                    }}
                    />
                ))}
                </motion.g>
            </motion.svg>
            </motion.div>
                            
        </div>

        {/* Rest of Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {/* Brand & Office Section */}
          <div className="md:col-span-1 py-4">
            <div className="space-y-8">
              <h3 className="font-bellefair text-2xl mb-4 tracking-wide">Office</h3>
              <address className="not-italic text-base space-y-2 opacity-80 font-avenirNext px-1 hover:text-primary hover:underline hover:underline-primary transition-colors ">
                {footerContent.contact.address.map((line, index) => (
                  <p key={index} className="leading-normal">{line}</p>
                ))}
              </address>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 py-4">
            <h3 className="font-bellefair text-2xl mb-6 tracking-wide">Navigation</h3>
            <div className="grid grid-cols-2  gap-y-4 px-1">
              {footerContent.navigation.map((item) => (
                <div key={item.title} className="py-1.5 font-avenirNext">
                  <TransitionLink
                    href={item.href}
                    className="text-base hover:text-primary transition-colors group flex items-center justify-start "
                  >
                    <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.title}
                    </span>
                    <FullArrow className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
                  </TransitionLink>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-1 py-4">
            <div className="space-y-10">
              <div>
                <h3 className="font-bellefair text-2xl mb-6 tracking-wide">Connect</h3>
                <ul className="space-y-4 px-1">
                  {footerContent.socials.map((social) => (
                    <li key={social.title} className="py-1.5 font-avenirNext">
                      <Link
                        href={social.href}
                        className="text-base hover:text-primary transition-colors opacity-80 hover:opacity-100 flex items-center gap-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FullArrow className="w-4 h-4 rotate-180 flex-shrink-0" />
                        <span className="truncate">{social.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter & CTA */}
          <div className="md:col-span-2 py-4">
            <div className="space-y-10">
              <div className="w-full">
                <h3 className="font-bellefair text-3xl mb-6 tracking-wide">Newsletter</h3>
                <div className="px-1">
                  <p className="text-foreground/60 mb-4">Stay updated with our latest news and exclusive offers</p>
                  <form className="group relative" onSubmit={handleSubmit}>
                    <div className="flex items-center border-b-2 border-foreground/20 pb-3 focus-within:border-primary transition-colors">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="w-full bg-transparent pr-14 py-2 focus:outline-none placeholder-foreground/50 text-base"
                      />
                      <button
                        type="submit"
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:text-primary transition-colors"
                      >
                        <FullArrow className="w-6 h-6" onClickEffect />
                      </button>
                    </div>
                    {formStatus.success && (
                      <p className=" absolute text-primary mt-2">Thank you for subscribing!</p>
                    )}
                    {formStatus.error && (
                      <p className="absolute text-red-500 mt-2">{formStatus.error}</p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="mt-20 pt-10 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 text-sm">
            <p className="text-foreground/60 text-center md:text-left">
              © Hestia Labs {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              {footerContent.legal.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-foreground/60 hover:text-primary transition-colors px-2 py-1"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
