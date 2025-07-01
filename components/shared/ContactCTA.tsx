import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ContactCTAProps {
  title: string;
  description: string;
  buttonText: string;
  className?: string;
}

export default function ContactCTA({ 
  title, 
  description, 
  buttonText,
  className = ""
}: ContactCTAProps) {
  return (
    <section className={`py-24 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-bellefair text-4xl md:text-5xl uppercase mb-6">
          {title}
        </h2>
        <p className="font-avenirNext text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          {description}
        </p>
        <Link href="/contact" passHref>
          <Button className="bg-black hover:bg-primary text-white px-8 py-6 rounded-sm text-lg transition-colors">
            <span className="font-bellefair uppercase tracking-wider">{buttonText}</span>
          </Button>
        </Link>
      </div>
    </section>
  );
} 