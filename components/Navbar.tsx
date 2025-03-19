"use client";

import * as React from "react";
import Link from "next/link";
import Logo from "./Logo";
import AnimatedLogo from "./AnimatedLogo";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import TransitionLink from "./TransitionLink";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navbarItems = {
  services: [
    { 
      title: "UX DESIGN", 
      href: "/services/ux-design", 
      description: "User-centered design to create intuitive and engaging experiences."
    },
    { 
      title: "SOFTWARE DEVELOPMENT", 
      href: "/services/software-development", 
      description: "Custom software solutions built with modern technologies for web, mobile, and desktop."
    },
    { 
      title: "DIGITAL MARKETING", 
      href: "/services/digital-marketing", 
      description: "Strategic campaigns to grow your online presence and reach."
    },
  ],
  links: [
    { title: "WORK", href: "/work" },
    { title: "ABOUT", href: "/about" },
    { title: "BLOG", href: "/blog" },
  ],
  contact: { title: "GET IN TOUCH", href: "/contact" },
};

type NavbarProps = {
  invert?: boolean;
};

export function Navbar({ invert = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [scrollY, setScrollY] = React.useState(0);
  const lastScrollY = React.useRef(0);

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
      className={cn("flex items-center px-4 text-xl fixed top-0 left-0 right-0 z-50", invert && "text-white")}
    >
      {/* Left Section: Logo */}
      <div className="flex-1 flex items-center">
        <TransitionLink href="/" className="flex items-center z-50">
          <Logo inverted={invert} className={cn("w-36 h-auto p-2", { "opacity-0": isMenuOpen })} />
        </TransitionLink>
      </div>

      {/* Center Section: Navigation Menu */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <NavigationMenu>
          <NavigationMenuList className={cn("flex space-x-4 font-bellefair")}>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                invert={invert}
                className={cn(
                  "font-bellefair text-base", 
                  invert ? "text-white hover:text-black" : "text-black hover:text-black"
                )}
              >
                SERVICES
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className={cn(
                    "grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] rounded-md",
                    invert
                      ? "bg-black border border-white shadow-lg"
                      : "bg-white border border-gray-200 shadow-lg"
                  )}
                >
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <TransitionLink
                        className={cn(
                          "flex h-full w-full select-none flex-col justify-center items-center rounded-md p-6 no-underline outline-none focus:shadow-md",
                          invert
                            ? "bg-gradient-to-b from-black to-gray-800"
                            : "bg-gradient-to-b from-white to-gray-100"
                        )}
                        href="/services"
                      >
                        <svg
                          viewBox="0 0 400 200"
                          className="w-full h-full max-w-md"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.5"
                        >
                          {/* Horizontal divider */}
                          <line x1="20" y1="100" x2="380" y2="100" strokeDasharray="4,2" />
                          {/* Vertical divider */}
                          <line x1="200" y1="20" x2="200" y2="180" strokeDasharray="4,2" />
                          {/* Central focal circle */}
                          <circle cx="200" cy="100" r="5" fill="currentColor" />
                          {/* Peripheral circles */}
                          <circle cx="100" cy="100" r="3" fill="currentColor" />
                          <circle cx="300" cy="100" r="3" fill="currentColor" />
                          <circle cx="200" cy="50" r="3" fill="currentColor" />
                          <circle cx="200" cy="150" r="3" fill="currentColor" />
                          {/* Connecting dashed lines */}
                          <line x1="100" y1="100" x2="200" y2="50" strokeDasharray="2,2" />
                          <line x1="300" y1="100" x2="200" y2="50" strokeDasharray="2,2" />
                          <line x1="100" y1="100" x2="200" y2="150" strokeDasharray="2,2" />
                          <line x1="300" y1="100" x2="200" y2="150" strokeDasharray="2,2" />
                        </svg>
                        <div
                          className={cn("mb-2 mt-4 text-lg font-medium text-center", invert && "text-white")}
                        >
                          Our Services
                        </div>
                        <p
                          className={cn(
                            "text-sm leading-tight text-center",
                            invert ? "text-gray-300" : "text-gray-600"
                          )}
                        >
                          Discover strategic solutions to transform your business vision into reality.
                        </p>
                      </TransitionLink>
                    </NavigationMenuLink>
                  </li>
                  {navbarItems.services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                      invert={invert}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {navbarItems.links.map((link) => (
              <NavigationMenuItem key={link.title}>
                <TransitionLink href={link.href} 
                  className={cn(
                    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    "font-bellefair text-base",
                    invert 
                      ? "text-white hover:bg-white/20 hover:text-black" 
                      : "text-black hover:bg-black/10"
                  )}
                >
                  {link.title}
                </TransitionLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right Section: Contact Button */}
      <div className="hidden md:flex flex-1 justify-end items-center">
        <Link href={navbarItems.contact.href} passHref>
          <Button
            className={cn(
              "font-bellefair",
              invert ? "bg-primary border border-white/0 hover:border-white hover:bg-black" : "bg-black"
            )}
          >
            {navbarItems.contact.title}
          </Button>
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 z-50 relative"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <X className="w-8 h-8 text-white absolute right-2 top-2" />
        ) : (
          <Menu className={cn("w-8 h-8", invert ? "text-white" : "text-black")} />
        )}
      </button>

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

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="space-y-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex justify-between items-center p-2 text-xl font-bellefair text-white hover:bg-black"
                >
                  SERVICES
                  {isServicesOpen ? (
                    <ChevronUp strokeWidth={1} />
                  ) : (
                    <ChevronDown strokeWidth={1} />
                  )}
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 space-y-4 overflow-hidden mt-2 border-l border-white/10"
                    >
                      {navbarItems.services.map((service, index) => (
                        <motion.div 
                          key={service.href} 
                          className="mb-4 last:mb-0"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <TransitionLink
                            href={service.href}
                            className="font-bellefair text-base text-white hover:text-gray-300 transition-colors block"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.title}
                          </TransitionLink>
                          <p className="text-sm text-gray-400 mt-1 font-avenirNext pr-4">
                            {service.description}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navbarItems.links.map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className="block font-bellefair text-xl text-white hover:text-gray-300 transition-colors p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </TransitionLink>
              ))}

              <TransitionLink
                href={navbarItems.contact.href}
                className="block font-bellefair text-xl text-white bg-primary/20 hover:bg-primary/30 p-3 mt-6 text-center transition-colors rounded"
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

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string;
  invert?: boolean;
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, children, invert, href = "#", ...props }, ref) => {
  return (
    <li>
      <TransitionLink
        href={href}
        className={cn(
          "flex select-none flex-col justify-center rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          invert ? "text-white" : "text-black",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p
          className={cn("line-clamp-2 mt-1 text-sm leading-snug ", 
            invert ? "text-gray-300" : "text-gray-700"
          )}
        >
          {children}
        </p>
      </TransitionLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
