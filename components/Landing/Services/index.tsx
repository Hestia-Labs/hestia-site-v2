import React from "react";
import ServiceItem from "./ServiceItem";

const servicesData = [
  {
    title: "UX/UI DESIGN",
    content:
      "Our UX/UI Design service focuses on creating intuitive and engaging user experiences. We ensure that your digital products are not only visually appealing but also user-friendly, enhancing customer satisfaction and loyalty.",
  },
  {
    title: "SOFTWARE DEVELOPMENT",
    content:
      "Our Software Development service offers end-to-end solutions tailored to your business needs. We leverage the latest technologies to build scalable and robust applications that drive efficiency and innovation.",
  },
  {
    title: "BRAND CREATION",
    content:
      "Our Brand Creation service helps you establish a strong and memorable brand identity. We work with you to develop a brand strategy that resonates with your target audience and sets you apart from the competition.",
  },
];

export default function Services() {
  return (
    <div className="px-6 py-8 mx-auto flex flex-col gap-8">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bellefair text-foreground">
          OUR SERVICES
        </h2>
        <p className="mt-2 text-lg text-gray-600 font-avenirNext">
          We craft digital experiences that connect your brand with your audience.
        </p>
      </div>

      {/* Services List */}
      <div className="flex flex-col gap-4">
        {servicesData.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            content={service.content}
          />
        ))}
      </div>
    </div>
  );
}
