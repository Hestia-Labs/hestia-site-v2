'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Check, Send } from "lucide-react";

const budgetOptions = [
  { value: "30k-50k", label: "30K - 50K" },
  { value: "15k-30k", label: "15K - 30K" },
  { value: "8k-15k", label: "8K - 15K" },
  { value: "idk", label: "I don't know yet" },
];

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleBudgetChange = (value: string) => {
    setFormState((prev) => ({ ...prev, budget: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form and show success state
    setFormState({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      budget: ''
    });
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset success message after delay
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Card className="lg:col-span-2 overflow-hidden">
      <CardHeader className="text-center mb-10 mt-10">
        <CardTitle className="text-4xl font-bellefair uppercase">
          Work inquiries
        </CardTitle>
        <CardDescription className="font-avenirNext text-xl">
          Fill out the form below to discuss your project with us
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6 font-avenirNext p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2 ">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus:border-black focus-visible:ring-0"
                value={formState.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus:border-black focus-visible:ring-0"
                value={formState.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                placeholder="Your company"
                className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus:border-black focus-visible:ring-0"
                value={formState.company}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus:border-black focus-visible:ring-0"
                value={formState.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project..."
              className="border-0 border-b border-gray-300 rounded-none px-0 py-2 min-h-32 focus:border-black focus-visible:ring-0"
              required
              value={formState.message}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label>Budget Range</Label>
            <RadioGroup
              className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-md"
              value={formState.budget}
              onValueChange={handleBudgetChange}
            >
              {budgetOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem id={option.value} value={option.value} />
                  <Label htmlFor={option.value} className="cursor-pointer">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              className='bg-black text-white px-6 py-3 text-lg'
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  Sent!
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </span>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export default ContactForm; 