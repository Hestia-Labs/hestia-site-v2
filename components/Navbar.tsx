"use client";

import * as React from "react";
import Logo from "./Logo";
import AnimatedLogo from "./AnimatedLogo";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import TransitionLink from "./TransitionLink";
import LanguageSwitcher from "./Languaje";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

type NavbarProps = {
  invert?: boolean;
};

export function Navbar({ invert = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [scrollY, setScrollY] = React.useState(0);
  const lastScrollY = React.useRef(0);

  const navbarItems = React.useMemo(() => ({
    home: { title: "HOME", href: "/cleaning" },
    links: [
      { title: "SERVICES", href: "/cleaning#services" },
      { title: "PROCESS", href: "/cleaning#process" },
      { title: "SAFETY", href: "/cleaning#safety" },
    ],
    contact: { title: "GET QUOTE", href: "/cleaning-contact" },
  }), []);

  React.useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) return;
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const menuVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: "-100%", opacity: 0 },
  };

  const bgLogoVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 0.1, scale: 1.2 },
  };

  return (
    <motion.nav
      initial={{ y: 0, backgroundColor: "transparent" }}
      animate={{
        y: showNavbar ? 0 : -100,
        backgroundColor: scrollY > 50 ? (invert ? "black" : "hsl(var(--background))") : "transparent",
      }}
      transition={{ duration: 0.3 }}
      className={cn("flex items-center px-8  text-xl fixed top-0 left-0 right-0 z-50 shadow-md", invert && "text-white")}
    >
      {/* Left Section: Logo */}
      <div className="flex-1 flex items-center">
        <TransitionLink href="/cleaning" className="flex items-center z-50">
          <Logo inverted={invert} className={cn("w-36 h-auto", { "opacity-0": isMenuOpen })} />
        </TransitionLink>
      </div>

      {/* Center Section: Navigation Menu - Desktop */}
      <div className="hidden md:flex flex-1 justify-center items-center px-4">
        <NavigationMenu>
          <NavigationMenuList className={cn("flex space-x-8 font-bellefair")}>
            {/* Home Link */}
            <NavigationMenuItem>
              <TransitionLink href={navbarItems.home.href} 
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-colors focus:outline-none",
                  "font-bellefair text-base",
                  invert 
                    ? "text-yellow-400 hover:text-yellow-300" 
                    : "text-yellow-600 hover:text-yellow-500"
                )}
              >
                {navbarItems.home.title}
              </TransitionLink>
            </NavigationMenuItem>
            
            {/* Other Navigation Links */}
            {navbarItems.links.map((link) => (
              <NavigationMenuItem key={link.title}>
                <a href={link.href} 
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm  transition-colors focus:outline-none",
                    "font-bellefair text-base",
                    invert 
                      ? "text-white hover:text-yellow-400" 
                      : "text-black hover:text-yellow-600"
                  )}
                >
                  {link.title}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right Section: Contact Button and Language Switcher */}
      <div className="hidden md:flex flex-1 justify-end items-center space-x-6">
        {/* Language Switcher */}
        <LanguageSwitcher 
          className={cn(invert ? "text-white" : "text-black")}
          buttonClassName={cn(invert ? "text-white" : "text-black")}
        />

        <TransitionLink href={navbarItems.contact.href} >
          <Button
            className={cn(
              "font-bellefair uppercase bg-yellow-500 hover:bg-yellow-600 text-black border-0"
            )}
          >
            {navbarItems.contact.title}
          </Button>
        </TransitionLink>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center space-x-4">
        {/* Language Switcher for Mobile */}
        <LanguageSwitcher 
          className={cn(isMenuOpen ? "text-white" : invert ? "text-white" : "text-black")}
          buttonClassName={cn(isMenuOpen ? "text-white" : invert ? "text-white" : "text-black")}
        />
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 z-50 relative"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <Menu className={cn("w-8 h-8", invert ? "text-white" : "text-black")} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-40 flex flex-col md:hidden"
          >
            {/* Animated Background Logo */}
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, duration: 0.6 }}
              variants={bgLogoVariants}
              className="absolute right-0 translate-y-1/2 opacity-10 pointer-events-none"
            >
              <AnimatedLogo className="w-[700px] h-auto pointer-events-none" scale={0.3} />
            </motion.div>

            <div className="flex justify-between items-center p-4 border-b border-white/20">
              <Logo className="w-36 h-auto" inverted />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-6">
              {/* Home Link */}
              <TransitionLink
                href={navbarItems.home.href}
                className="block uppercase font-bellefair text-2xl text-yellow-400 hover:text-yellow-300 transition-colors p-3 border-b border-yellow-400/30"
                onClick={() => setIsMenuOpen(false)}
              >
                {navbarItems.home.title}
              </TransitionLink>

              {/* Mobile Navigation Links */}
              {navbarItems.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block uppercase font-bellefair text-xl text-white hover:text-yellow-400 transition-colors p-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              ))}

              {/* Contact CTA */}
              <TransitionLink
                href={navbarItems.contact.href}
                className="block uppercase font-bellefair text-xl text-black bg-yellow-500 hover:bg-yellow-600 p-4 mt-8 text-center transition-colors rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {navbarItems.contact.title}
              </TransitionLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}