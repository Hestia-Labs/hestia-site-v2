'use client';

import React from 'react';

interface ContactOption {
  id: string;
  title: string;
  email: string;
  description?: string;
}

interface ContactOptionsProps {
  options: ContactOption[];
}

export function ContactOptions({ options }: ContactOptionsProps) {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      {options.map((option) => (
        <div key={option.id} className="transition-all duration-300">
          <div className="mb-2">
            <h3 className="text-2xl font-bellefair">
              {option.title}
            </h3>
            {option.description && (
              <p className="text-sm text-muted-foreground">{option.description}</p>
            )}
          </div>
          <div className="mt-2">
            <a 
              href={`mailto:${option.email}`}
              className="font-avenirNext text-black hover:underline"
            >
              {option.email}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactOptions; 