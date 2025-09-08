"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  User,
  FileText,
  Clock
} from "lucide-react";

interface ContactFormProps {
  title: string;
  subtitle: string;
  formLabels: {
    fullName: string;
    email: string;
    phone: string;
    company: string;
    projectType: string;
    location: string;
    timeline: string;
    squareFootage: string;
    details: string;
    submitButton: string;
    submitting: string;
  };
  projectTypes: string[];
  timelines: string[];
}

export default function ContactForm({
  title,
  subtitle,
  formLabels,
  projectTypes,
  timelines,
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    location: "",
    timeline: "",
    squareFootage: "",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Handle form submission success
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bellefair text-black mb-4">{title}</h2>
            <p className="text-lg text-gray-600">{subtitle}</p>
            <div className="h-1 w-20 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 sticky top-24 shadow-2xl border border-amber-400/20">
                <h3 className="text-2xl font-bellefair mb-6">Quick Response</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-amber-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-400">Mobilization</div>
                      <div className="">48 Hours</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-amber-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-400">Emergency Hotline</div>
                      <div className="">1-800-CLEAN-NOW</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-amber-400 mr-3" />
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className=" text-sm">info@cleaningservices.com</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-amber-400/10 to-yellow-500/10 border border-amber-400/30 rounded-lg">
                  <p className="text-sm text-gray-300">
                    OSHA-compliant crews ready for immediate deployment across Texas.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <Label htmlFor="fullName" className="flex items-center mb-2">
                      <User className="w-4 h-4 mr-2" />
                      {formLabels.fullName}
                    </Label>
                    <Input
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      required
                      className="border-gray-300 focus:border-amber-400 rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="flex items-center mb-2">
                      <Building2 className="w-4 h-4 mr-2" />
                      {formLabels.company}
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      required
                      className="border-gray-300 focus:border-amber-400 rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="flex items-center mb-2">
                      <Mail className="w-4 h-4 mr-2" />
                      {formLabels.email}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="border-gray-300 focus:border-amber-400 rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="flex items-center mb-2">
                      <Phone className="w-4 h-4 mr-2" />
                      {formLabels.phone}
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="border-gray-300 focus:border-amber-400 rounded-lg"
                    />
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-6 mb-8">
                  <div>
                    <Label className="flex items-center mb-4">
                      <FileText className="w-4 h-4 mr-2" />
                      {formLabels.projectType}
                    </Label>
                    <RadioGroup 
                      value={formData.projectType}
                      onValueChange={(value) => handleChange("projectType", value)}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {projectTypes.map((type) => (
                          <div key={type} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-amber-50 hover:border-amber-300 transition-all">
                            <RadioGroupItem value={type} id={type} />
                            <Label htmlFor={type} className="cursor-pointer">{type}</Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="location" className="flex items-center mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        {formLabels.location}
                      </Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                                              placeholder="City, State"
                      required
                      className="border-gray-300 focus:border-amber-400 rounded-lg"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="squareFootage" className="flex items-center mb-2">
                        <Building2 className="w-4 h-4 mr-2" />
                        {formLabels.squareFootage}
                      </Label>
                      <Input
                        id="squareFootage"
                        value={formData.squareFootage}
                        onChange={(e) => handleChange("squareFootage", e.target.value)}
                                              placeholder="Approximate sq ft"
                      className="border-gray-300 focus:border-amber-400 rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="flex items-center mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formLabels.timeline}
                    </Label>
                    <RadioGroup 
                      value={formData.timeline}
                      onValueChange={(value) => handleChange("timeline", value)}
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {timelines.map((timeline) => (
                          <div key={timeline} className="flex items-center space-x-2 p-3 border border-gray-200 rounded-lg hover:bg-amber-50 hover:border-amber-300 transition-all">
                            <RadioGroupItem value={timeline} id={timeline} />
                            <Label htmlFor={timeline} className="cursor-pointer text-sm">{timeline}</Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="details" className="mb-2 block">
                      {formLabels.details}
                    </Label>
                    <Textarea
                      id="details"
                      value={formData.details}
                      onChange={(e) => handleChange("details", e.target.value)}
                      rows={4}
                      className="border-gray-300 focus:border-amber-400 rounded-lg"
                      placeholder="Please provide any additional information about your cleaning requirements..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-gray-900  py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                >
                  {isSubmitting ? formLabels.submitting : formLabels.submitButton}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
