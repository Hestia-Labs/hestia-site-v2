"use client";

import * as React from "react";
import TransitionLink from "./TransitionLink";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";
import Logo from "./Logo";
import { useTranslations } from "next-intl";
import { subscribeToNewsletter } from "@/app/actions/newsletter";

export default function Footer() {
  const t = useTranslations('CleaningFooter');
  
  const [formStatus, setFormStatus] = React.useState<{
    success: boolean;
    error: string | null;
    isSubmitting: boolean;
  }>({ success: false, error: null, isSubmitting: false });

  const footerContent = React.useMemo(() => ({
    quickLinks: [
      { title: t('quickLinks.home'), href: "/cleaning" },
      { title: t('quickLinks.services'), href: "/cleaning#services" },
      { title: t('quickLinks.process'), href: "/cleaning#process" },
      { title: t('quickLinks.safety'), href: "/cleaning#safety" },
      { title: t('quickLinks.quote'), href: "/cleaning-contact" },
    ],
    contact: {
      phone: t('contact.phone'),
      email: t('contact.email'),
      address: [
        t('contact.areas.houston'),
        t('contact.areas.katy'),
        t('contact.areas.sugarLand'),
        t('contact.areas.woodlands'),
        t('contact.areas.cypress')
      ],
      hours: t('contact.hours'),
    },
    certifications: [
      { icon: Shield, title: t('certifications.osha.title'), description: t('certifications.osha.description') },
      { icon: Award, title: t('certifications.licensed.title'), description: t('certifications.licensed.description') },
      { icon: Clock, title: t('certifications.response.title'), description: t('certifications.response.description') },
    ],
    legal: [
      { title: t('legal.privacy'), href: "#" },
      { title: t('legal.terms'), href: "#" },
      { title: t('legal.safety'), href: "#" },
    ],
  }), [t]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    if (!email || !email.includes('@')) {
      setFormStatus({
        success: false,
        error: t('newsletter.error'),
        isSubmitting: false,
      });
      return;
    }

    setFormStatus({ success: false, error: null, isSubmitting: true });

    try {
      const result = await subscribeToNewsletter(email);

      if (!result.success) {
        throw new Error(result.error || 'Failed to subscribe');
      }

      setFormStatus({ success: true, error: null, isSubmitting: false });
      event.currentTarget.reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ success: false, error: null, isSubmitting: false });
      }, 5000);

    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setFormStatus({
        success: false,
        error: t('newsletter.error'),
        isSubmitting: false,
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">


      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Logo className="w-40 h-auto" inverted />
            </div>
            <p className="text-gray-400 mb-6">
              {t('companyDescription')}
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
            <h3 className="font-bellefair text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">{t('quickLinks.title')}</h3>
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
            <h3 className="font-bellefair text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">{t('serviceAreas.title')}</h3>
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
                {t('serviceAreas.description')}
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="md:col-span-1">
            <h3 className="font-bellefair text-xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">{t('certifications.title')}</h3>
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
                {t('newsletter.title')}
              </h3>
              <p className="text-gray-400 mb-6">
                {t('newsletter.description')}
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder={t('newsletter.placeholder')}
                  required
                  className="flex-1 px-4 py-3 bg-gray-900/50 border border-amber-400/30 rounded-lg focus:outline-none focus:border-amber-400 text-white placeholder-gray-400 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-gray-900 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus.isSubmitting ? 'SUBSCRIBING...' : t('newsletter.subscribe')}
                </button>
              </form>
              {formStatus.success && (
                <p className="text-amber-400 mt-3">{t('newsletter.success')}</p>
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
            {t('legal.copyright', { year: new Date().getFullYear() })}
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