import { Service } from '@/types/service';

export const services: Service[] = [
  {
    id: "software-development",
    title: "Software Development",
    heading: "Custom Software Solutions", 
    description: "Custom software solutions built with modern technologies for web, mobile, and desktop.",
    fullDescription: `We create bespoke software solutions tailored to your specific business needs. Our development team excels in building scalable, robust applications using cutting-edge technologies and best practices.

Our approach combines technical excellence with a deep understanding of your business goals, resulting in software that not only functions flawlessly but also delivers measurable value.`,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070",
    technologies: ["React", "Next.js", "Node.js", "Python", "Cloud Infrastructure", "DevOps"],
    benefits: [
      "Tailored solutions that address your specific business challenges",
      "Scalable architecture that grows with your business", 
      "Modern, intuitive user interfaces",
      "Robust backend systems with high performance",
      "Comprehensive testing and quality assurance"
    ],
    processSteps: [
      { name: "Discovery", description: "We analyze your requirements and business goals" },
      { name: "Planning", description: "Detailed roadmap with architecture and technology decisions" },
      { name: "Design", description: "User experience and interface design aligned with your brand" },
      { name: "Development", description: "Agile implementation with regular reviews and feedback" },
      { name: "Testing", description: "Comprehensive quality assurance and performance testing" },
      { name: "Deployment", description: "Smooth transition to production with minimal disruption" },
      { name: "Support", description: "Ongoing maintenance and optimization" }
    ],
    featuredCaseStudy: {
      title: "CR VINOS",
      description: "A premium e-commerce platform with a focus on user experience and seamless checkout process.",
      image: "/img/crvinos_homepage.png", 
      link: "/work/crvinos"
    }
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    heading: "Human-Centered Design Solutions",
    description: "User-centered design to create intuitive and engaging experiences.",
    fullDescription: `We craft exceptional user experiences that delight your customers and achieve your business goals. Our design process places real users at the center, ensuring that every touchpoint in your digital product is intuitive, accessible, and engaging.

By combining research, strategy, and creative design, we create digital experiences that not only look beautiful but also function seamlessly, driving user satisfaction and business success.`,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000",
    technologies: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "UI Design", "Interaction Design"],
    benefits: [
      "Improved user satisfaction and engagement",
      "Reduced development costs through early problem identification",
      "Higher conversion rates and customer retention", 
      "Differentiation from competitors through exceptional experiences",
      "Accessible design that reaches all potential users"
    ],
    processSteps: [
      { name: "Research", description: "In-depth understanding of your users and their needs" },
      { name: "Strategy", description: "Experience planning aligned with business objectives" },
      { name: "Information Architecture", description: "Logical structure and user flows" },
      { name: "Wireframing", description: "Low-fidelity layouts to establish core functionality" },
      { name: "Prototyping", description: "Interactive models to validate concepts" },
      { name: "Visual Design", description: "High-fidelity designs with your brand identity" },
      { name: "Testing", description: "Usability testing with real users" }
    ],
    featuredCaseStudy: {
      title: "HORIZON",
      description: "An intuitive real estate platform offering seamless property search and viewing experiences.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070",
      link: "/work/horizon"
    }
  },
  {
    id: "brand-creation",
    title: "Brand Creation",
    heading: "Strategic Brand Development",
    description: "Strategic branding to establish a strong and memorable identity for your business.",
    fullDescription: `We help businesses build powerful brand identities that resonate with their target audience and stand out in crowded markets. Our comprehensive branding process encompasses everything from visual identity to brand voice and positioning.

Through strategic thinking and creative excellence, we create brands that tell compelling stories, build emotional connections, and drive business growth.`,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    technologies: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Marketing Collateral", "Digital Assets", "Brand Voice"],
    benefits: [
      "Distinctive brand identity that sets you apart",
      "Consistent brand experience across all touchpoints",
      "Stronger market positioning and recognition",
      "Enhanced customer trust and loyalty",
      "Clear brand guidelines for future growth"
    ],
    processSteps: [
      { name: "Discovery", description: "Understanding your vision, values, and market position" },
      { name: "Research", description: "Market analysis and target audience insights" },
      { name: "Strategy", description: "Brand positioning and messaging framework" },
      { name: "Identity Design", description: "Visual elements and brand voice development" },
      { name: "Guidelines", description: "Comprehensive brand usage documentation" },
      { name: "Implementation", description: "Brand rollout across all touchpoints" },
      { name: "Evolution", description: "Ongoing brand management and refinement" }
    ],
    featuredCaseStudy: {
      title: "ARTIS",
      description: "Complete brand identity redesign for a luxury fashion house, including digital presence and e-commerce integration.",
      image: "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?q=80&w=2070",
      link: "/work/artis"
    }
  }
]; 