"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, Send, Upload } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";
import { useTranslations } from "next-intl";

export function  JobApplicationForm() {
  const commonT = useTranslations("Common");
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    resume: null as File | null,
    coverLetter: null as File | null,
    portfolio: null as File | null,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle file uploads
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {formSubmitted ? (
            <motion.div 
              className="bg-white p-10 rounded-sm shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bellefair text-2xl uppercase mb-4">{commonT("applicationSubmitted")}</h3>
              <p className="font-avenirNext text-gray-600 mb-8">
                {commonT("applicationSubmittedDescription")}
              </p>
              <TransitionLink 
                href="/careers" 
                className="font-bellefair uppercase text-sm border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
              >
                {commonT("backToCareers")}
              </TransitionLink>
            </motion.div>
          ) : (
            <Card className="overflow-hidden shadow-sm border border-gray-100">
              <CardHeader className="text-center mb-6 mt-6">
                <CardTitle className="text-3xl font-bellefair uppercase">
                  {commonT("applyNow")}
                </CardTitle>
                <CardDescription className="font-avenirNext text-lg">
                  {commonT("applyNowDescription")}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                <form 
                  onSubmit={handleSubmit}
                  className="space-y-6 font-avenirNext p-6"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">{commonT("fullName")}</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder={commonT("fullNamePlaceholder")}
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus:border-black focus-visible:ring-0"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">{commonT("email")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={commonT("emailPlaceholder")}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus:border-black focus-visible:ring-0"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">{commonT("phone")}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-0 border-b border-gray-300 rounded-none px-0 py-2 focus:border-black focus-visible:ring-0"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">{commonT("tellUs")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={commonT("tellUsAboutYouPlaceholder")}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-0 border-b border-gray-300 rounded-none px-0 py-2 min-h-32 focus:border-black focus-visible:ring-0"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between">
                    <div className="space-y-2">
                      <Label htmlFor="resume" className="flex items-center h-6">
                        {commonT("resume")} <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="resume"
                          name="resume"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          required
                          className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
                        />
                        <div className="flex items-center justify-between border-b border-gray-300 py-2">
                          <span className="text-gray-500 text-sm truncate">
                            {formData.resume ? formData.resume.name : commonT("uploadFile")+ "..."}
                          </span>
                          <Upload className="h-4 w-4 text-gray-500" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{commonT("acceptedFormats")}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="coverLetter" className="flex items-center h-6">
                        {commonT("coverLetter")}
                      </Label>
                      <div className="relative">
                        <Input
                          id="coverLetter"
                          name="coverLetter"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
                        />
                        <div className="flex items-center justify-between border-b border-gray-300 py-2">
                          <span className="text-gray-500 text-sm truncate">
                            {formData.coverLetter ? formData.coverLetter.name : commonT("uploadFile")+ "..."}
                          </span>
                          <Upload className="h-4 w-4 text-gray-500" />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{commonT("acceptedFormats")}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">{commonT("portfolio")}</Label>
                    <div className="relative">
                      <Input
                        id="portfolio"
                        name="portfolio"
                        type="file"
                        accept=".pdf,.doc,.docx,.zip"
                        onChange={handleFileChange}
                        className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
                      />
                      <div className="flex items-center justify-between border-b border-gray-300 py-2">
                        <span className="text-gray-500 text-sm truncate">
                          {formData.portfolio ? formData.portfolio.name : commonT("uploadFile")+ "..."}
                        </span>
                        <Upload className="h-4 w-4 text-gray-500" />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{commonT("acceptedFormats")}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-black text-white px-10 py-6 rounded-sm text-lg  hover:bg-primary transition-colors"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span className="font-bellefair uppercase tracking-wider">{commonT("submitting")}</span>
                        </span>
                      ) : (
                        <span className="flex items-center font-bellefair uppercase tracking-wider">
                          <Send className="mr-2 h-5 w-5" />
                          {commonT("submitApplication")}
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}

export default JobApplicationForm; 