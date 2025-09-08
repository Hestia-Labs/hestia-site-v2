"use client";

import * as React from "react";
import Link from "next/link";
import TransitionLink from "./TransitionLink";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const footerT = useTranslations("Footer");
  
  const [formStatus, setFormStatus] = React.useState<{
    success: boolean;
    error: string | null;
  }>({ success: false, error: null });

  const footerContent = React.useMemo(() => ({
    quickLinks: [
      { title: "Home", href: "/cleaning" },
      { title: "Services", href: "/cleaning#services" },
      { title: "Process", href: "/cleaning#process" },
      { title: "Safety Standards", href: "/cleaning#safety" },
      { title: "Get Quote", href: "/cleaning-contact" },
    ],
    contact: {
      phone: "1-800-CLEAN-NOW",
      email: "info@hestia-cleaning.com",
      address: ["Houston, TX", "Dallas, TX", "San Antonio, TX"],
      hours: "24/7 Emergency Response",
    },
    certifications: [
      { icon: Shield, title: "OSHA Certified", description: "Safety Compliant" },
      { icon: Award, title: "Licensed & Insured", description: "Full Coverage" },
      { icon: Clock, title: "48 Hour Response", description: "Quick Mobilization" },
    ],
    legal: [
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
      { title: "Safety Guidelines", href: "#" },
    ],
  }), []);

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
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-400 to-yellow-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="font-bellefair text-4xl text-black mb-2">
                Ready for a Spotless Site?
              </h3>
              <p className="text-black/80 text-lg">
                Professional post-construction cleaning services available 24/7
              </p>
            </div>
            <TransitionLink href="/cleaning-contact">
              <button className="bg-gray-900 hover:bg-gray-800 text-white  py-4 px-8 rounded-lg text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 border-2 border-gray-700 hover:border-gray-600">
                GET FREE QUOTE
              </button>
            </TransitionLink>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo className="w-40 h-auto" inverted />
            </div>
            <p className="text-gray-400 mb-6">
              Texas' trusted post-construction cleaning specialists. OSHA-compliant, 
              fully insured, and ready for rapid deployment.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 text-amber-400 mr-3" />
                <span>{footerContent.contact.phone}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 text-amber-400 mr-3" />
                <span>{footerContent.contact.email}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 text-amber-400 mr-3" />
                <span>{footerContent.contact.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-bellefair text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">QUICK LINKS</h3>
            <ul className="space-y-3">
              {footerContent.quickLinks.map((link) => (
                <li key={link.title}>
                  <TransitionLink
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="mr-2">→</span>
                    <span>{link.title}</span>
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="md:col-span-1">
            <h3 className="font-bellefair text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">SERVICE AREAS</h3>
            <ul className="space-y-3">
              {footerContent.contact.address.map((area, index) => (
                <li key={index} className="flex items-start text-gray-400">
                  <MapPin className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-gray-400 text-sm">
                Serving all of East Texas, South Texas, and the Greater Houston Area
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="md:col-span-1">
            <h3 className="font-bellefair text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">CERTIFICATIONS</h3>
            <div className="space-y-4">
              {footerContent.certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div key={index} className="flex items-start">
                    <Icon className="w-6 h-6 text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white ">{cert.title}</div>
                      <div className="text-gray-400 text-sm">{cert.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        {/* Newsletter Section */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-amber-400/20">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-bellefair text-2xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">
                STAY UPDATED
              </h3>
              <p className="text-gray-400 mb-6">
                Get the latest updates on cleaning standards, safety protocols, and special offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-amber-400/30 rounded-lg focus:outline-none focus:border-amber-400 text-white placeholder-gray-400 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-gray-900  rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  SUBSCRIBE
                </button>
              </form>
              {formStatus.success && (
                <p className="text-amber-400 mt-3">Thank you for subscribing!</p>
              )}
              {formStatus.error && (
                <p className="text-red-500 mt-3">{formStatus.error}</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Legal Footer */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 text-sm">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Hestia Cleaning Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerContent.legal.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}