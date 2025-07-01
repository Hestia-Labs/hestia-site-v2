"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

type LanguageSwitcherProps = {
  className?: string;
  buttonClassName?: string;
};

export default function LanguageSwitcher({
  className = "",
  buttonClassName = "",
}: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [locale, setLocale] = useState(currentLocale);

  // Update state when currentLocale changes
  useEffect(() => {
    setLocale(currentLocale);
  }, [currentLocale]);

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;

    setLocale(newLocale);
    
    // Navigate to the new locale path
    router.push(pathname, { locale: newLocale, scroll: false });
  };

  return (
    <div className={`font-bellefair uppercase flex items-center space-x-2 ${className}`}>
      <button
        onClick={() => handleLocaleChange("en")}
        className={` md:text-sm transition-opacity duration-200 ${
          locale === "en" 
            ? "opacity-100 font-medium" 
            : "opacity-50 hover:opacity-80"
        } ${buttonClassName}`}
        aria-label="Switch to English"
      >
        EN
      </button>

      <span className="font-thin">|</span>

      <button
        onClick={() => handleLocaleChange("es")}
        className={`md:text-sm transition-opacity duration-200 ${
          locale === "es" 
            ? "opacity-100 font-medium" 
            : "opacity-50 hover:opacity-80"
        } ${buttonClassName}`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
}
