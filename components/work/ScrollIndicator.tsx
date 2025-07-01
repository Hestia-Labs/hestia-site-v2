import React from 'react';
import { ChevronDown } from 'lucide-react';

export function ScrollIndicator() {
  return (
    <div className="flex justify-center -mt-12 mb-8 animate-bounce">
      <ChevronDown className="w-6 h-6 text-foreground/40" />
    </div>
  );
} 