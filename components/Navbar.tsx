"use client";

import * as React from "react";
import Logo from "./Logo";
import AnimatedLogo from "./AnimatedLogo";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import TransitionLink from "./TransitionLink";
import LanguageSwitcher from "./Languaje";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type NavbarProps = {
  invert?: boolean;
};

export function Navbar({ invert = false }: NavbarProps) {
  const navT = useTranslations("Navigation");
  const commonT = useTranslations("Common");
  const servicesT = useTranslations("Services");
  const serviceDescT = useTranslations("ServiceDescriptions");
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [scrollY, setScrollY] = React.useState(0);
  const lastScrollY = React.useRef(0);

  const navbarItems = React.useMemo(() => ({
    services: [
      { 
        title: servicesT("uxuiDesign"), 
        href: "/services/ux-ui-design", 
        description: serviceDescT("uxuiDesign")
      },
      { 
        title: servicesT("softwareDevelopment"), 
        href: "/services/software-development", 
        description: serviceDescT("softwareDevelopment")
      },
      { 
        title: servicesT("brandIdentity"), 
        href: "/services/brand-creation", 
        description: serviceDescT("brandCreation")
      },
    ],
    links: [
      { title: navT("work"), href: "/work" },
      { title: navT("about"), href: "/about" },
      { title: navT("blog"), href: "/blog" },
      { title: navT("careers"), href: "/careers" },
    ],
    contact: { title: commonT("getInTouch"), href: "/contact" },
  }), [navT, commonT, servicesT, serviceDescT]);

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
                {navT("serviceMenu")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className={cn(
                    "p-4 text-sm space-y-2 md:w-[320px] rounded-sm",
                    invert
                      ? "bg-black border border-white/30 shadow-lg"
                      : "bg-white border border-gray-200 shadow-lg"
                  )}
                >
                  {/* Services Overview Item */}
                  <li className={cn(
                    "transition-all duration-300 overflow-hidden group",
                    invert 
                      ? "hover:bg-white/10" 
                      : "hover:bg-black/5"
                  )}>
                    <TransitionLink 
                      href="/services"
                      className={cn(
                        "p-4 block border relative",
                        invert 
                          ? "border-white/30 text-white" 
                          : "border-black/30 text-black"
                      )}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bellefair tracking-wide">
                          {navT("servicesOverview")}
                        </span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                          <path d="M12 4L12 20M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className={cn(
                        "block mt-1 text-sm font-avenirNext",
                        invert ? "text-white/60" : "text-black/60"
                      )}>
                        {navT("exploreServices")}
                      </span>
                      <span className={cn(
                        "absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300",
                        invert ? "bg-white" : "bg-black"
                      )}></span>
                    </TransitionLink>
                  </li>
                  
                  <div className={cn(
                    "h-[1px] w-full my-1",
                    invert ? "bg-white/10" : "bg-black/10"
                  )}></div>
                  
                  {navbarItems.services.map((service) => (
                    <li 
                      key={service.title} 
                      className={cn(
                        "transition-all duration-300 overflow-hidden group",
                        invert 
                          ? "hover:bg-white/10" 
                          : "hover:bg-black/5"
                      )}
                    >
                      <TransitionLink 
                        href={service.href}
                        className={cn(
                          "p-4 block border relative",
                          invert 
                            ? "border-white/20 text-white" 
                            : "border-black/30 text-black"
                        )}
                      >
                        <span className="font-bellefair tracking-wide">
                          {service.title}
                        </span>
                        <span className={cn(
                          "block mt-1 text-sm font-avenirNext opacity-0 max-h-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 overflow-hidden",
                          invert ? "text-white/70" : "text-black/70"
                        )}>
                          {service.description}
                        </span>
                        <span className={cn(
                          "absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300",
                          invert ? "bg-white" : "bg-black"
                        )}></span>
                      </TransitionLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {navbarItems.links.map((link) => (
              <NavigationMenuItem key={link.title}>
                <TransitionLink href={link.href} 
                  className={cn(
                    "group uppercase inline-flex h-9 w-max items-center justify-center rounded-sm px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50",
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

      {/* Right Section: Contact Button and Language Switcher */}
      <div className="hidden md:flex flex-1 justify-end items-center space-x-4">
        {/* Language Switcher */}
        <LanguageSwitcher 
          className={cn(invert ? "text-white" : "text-black")}
          buttonClassName={cn(invert ? "text-white" : "text-black")}
        />

        <TransitionLink href={navbarItems.contact.href} >
          <Button
            className={cn(
              "font-bellefair uppercase",
              invert ? "bg-primary border border-white/0 hover:border-white hover:bg-black" : "bg-black"
            )}
          >
            {navbarItems.contact.title}
          </Button>
        </TransitionLink>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex items-center space-x-4">
        {/* Language Switcher for Mobile - Visible even when menu is closed */}
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
            <X className="w-8 h-8 text-white absolute right-0 top-2 hidden " />
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

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <div className="space-y-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex justify-between items-center p-2 text-xl font-bellefair text-white hover:bg-black"
                >
                  {navT("serviceMenu")}
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
                      {/* Services Overview for Mobile */}
                      <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <TransitionLink
                          href="/services"
                          className="font-bellefair uppercase text-base text-white hover:text-gray-300 transition-colors block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {navT("servicesOverview")}
                        </TransitionLink>
                        <p className="text-sm text-gray-400 mt-1 font-avenirNext pr-4">
                          {navT("exploreServices")}
                        </p>
                      </motion.div>

                      <div className="h-[1px] w-full my-2 bg-white/10"></div>
                      
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
                  className="block uppercase font-bellefair text-xl text-white hover:text-gray-300 transition-colors p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </TransitionLink>
              ))}

              <TransitionLink
                href={navbarItems.contact.href}
                className="block uppercase font-bellefair text-xl text-white bg-primary hover:bg-primary/80 p-3 mt-6 text-center transition-colors rounded"
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

const ListItem = ({ className, title, children, invert, href = "#", ...props }: ListItemProps) => {
  return (
    <li>
      <TransitionLink
        href={href}
        className={cn(
          "flex select-none flex-col justify-center rounded-sm p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
};
ListItem.displayName = "ListItem";
