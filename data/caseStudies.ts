import { CaseStudy } from '@/types/caseStudy';

export const caseStudies: CaseStudy[] = [
  {
    id: "nova-tech",
    name: "NOVA TECH",
    client: "Nova Technologies Inc.",
    category: "Technology",
    type: "SaaS Platform",
    year: "2023",
    duration: "4 months",
    role: "Full-service digital agency",
    overview: "A cutting-edge cloud computing platform offering scalable solutions for enterprise businesses. The project involved comprehensive UX research, brand identity design, and full-stack development of the platform.",
    tagline: "The Future of Cloud Computing",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080",
    challenge: "Nova Technologies needed to differentiate their cloud computing platform in a saturated market. They required a user experience that would simplify complex technical processes while maintaining the robust functionality demanded by enterprise clients.",
    approach: "We took a user-centered approach, conducting extensive interviews with potential users across different roles within enterprise organizations. This research informed our design decisions, focusing on creating intuitive workflows for complex operations.",
    colorPalette: [
      { name: "Primary", hex: "#2A4DD0", rgb: "42, 77, 208" },
      { name: "Secondary", hex: "#06BEE1", rgb: "6, 190, 225" },
      { name: "Accent", hex: "#F62DAB", rgb: "246, 45, 171" },
      { name: "Dark", hex: "#1A1A2E", rgb: "26, 26, 46" },
      { name: "Light", hex: "#F7F7FF", rgb: "247, 247, 255" }
    ],
    typography: {
      primary: "Manrope",
      secondary: "Inter",
      weights: ["400", "500", "600", "700"]
    },
    projectImages: [
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fHww",
        alt: "Nova Tech dashboard interface",
        caption: "Main dashboard providing real-time analytics and resource management"
      },
      {
        src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fHww",
        alt: "Nova Tech user flow diagram",
        caption: "User flow optimization for enterprise workflows"
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fHww",
        alt: "Nova Tech mobile interface",
        caption: "Responsive design for monitoring on the go"
      },{
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNsb3VkJTIwY29tcHV0aW5nfGVufDB8fDB8fHww",
        alt: "Nova Tech mobile interface",
        caption: "Responsive design for monitoring on the go"
      }
    ],
    outcomes: [
      "30% increase in user onboarding completion",
      "45% reduction in support tickets for common tasks",
      "25% improvement in platform performance",
      "Successfully launched to enterprise clients with 100% retention"
    ],
    testimonial: {
      quote: "Hestia Labs transformed our complex system into an intuitive platform that our clients love. Their attention to detail and focus on user experience has given us a significant competitive advantage.",
      author: "Sarah Chen",
      position: "CTO, Nova Technologies Inc."
    },
    nextProject: "artis"
  },
  {
    id: "artis",
    name: "ARTIS",
    client: "Artis Fashion House",
    category: "Fashion",
    type: "Branding",
    year: "2023",
    duration: "3 months",
    role: "Brand strategy and digital design",
    overview: "Complete brand identity redesign for a luxury fashion house, including digital presence and e-commerce integration. We reimagined Artis's visual language while preserving their heritage.",
    tagline: "Redefining Modern Fashion Identity",
    heroImage: "https://images.unsplash.com/photo-1525328437458-0c4d4db7cab4?q=80&w=2070",
    challenge: "Artis needed to maintain its legacy of luxury craftsmanship while appealing to a younger, digital-native audience. The challenge was to evolve their brand without alienating their established customer base.",
    approach: "We conducted an immersive brand workshop with stakeholders to understand the essence of Artis. This guided our development of a refined visual identity that honored their heritage while introducing contemporary elements for digital engagement.",
    colorPalette: [
      { name: "Primary", hex: "#D0A98F", rgb: "208, 169, 143" },
      { name: "Secondary", hex: "#2C3639", rgb: "44, 54, 57" },
      { name: "Accent", hex: "#A27B5C", rgb: "162, 123, 92" },
      { name: "Dark", hex: "#1A1A1A", rgb: "26, 26, 26" },
      { name: "Light", hex: "#F6F6F6", rgb: "246, 246, 246" }
    ],
    typography: {
      primary: "Cormorant Garamond",
      secondary: "Montserrat",
      weights: ["300", "400", "500", "600"]
    },
    projectImages: [
      {
        src: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGJyYW5kaW5nfGVufDB8fDB8fHww",
        alt: "Artis brand guidelines",
        caption: "Core brand elements and usage guidelines"
      },
      {
        src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb24lMjBicmFuZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "Artis website on multiple devices",
        caption: "Responsive e-commerce experience"
      },
      {
        src: "https://images.unsplash.com/photo-1508872558182-ffc7f1b387f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGV0dGVycHJlc3N8ZW58MHx8MHx8fDA%3D",
        alt: "Artis packaging design",
        caption: "Sustainable luxury packaging system"
      },{
        src: "https://images.unsplash.com/photo-1508872558182-ffc7f1b387f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGV0dGVycHJlc3N8ZW58MHx8MHx8fDA%3D",
        alt: "Artis packaging design",
        caption: "Sustainable luxury packaging system"
      }
    ],
    outcomes: [
      "200% increase in online engagement from target demographic",
      "35% growth in e-commerce sales",
      "Featured in Vogue and Design Week",
      "Successful launch of digital-first capsule collection"
    ],
    testimonial: {
      quote: "Hestia Labs deeply understood our heritage and transformed it into a contemporary vision that resonates with both our established clients and a new generation of fashion enthusiasts.",
      author: "Isabella Moretti",
      position: "Creative Director, Artis Fashion House"
    },
    nextProject: "lumina"
  },
  {
    id: "lumina",
    name: "LUMINA",
    client: "Lumina Collective",
    category: "Art & Design",
    type: "Portfolio",
    year: "2022",
    duration: "2 months",
    role: "Interactive design and development",
    overview: "An interactive digital portfolio for a collective of new media artists, featuring WebGL animations and immersive experiences that showcase their cutting-edge digital artworks.",
    tagline: "Showcasing Digital Art Innovation",
    heroImage: "https://images.unsplash.com/photo-1511546395756-590dffdcdbd1?q=80&w=1080",
    challenge: "Lumina Collective needed a digital platform that could properly showcase their interactive art pieces while maintaining performance across devices. Traditional portfolio sites couldn't capture the dynamic nature of their work.",
    approach: "We created a custom WebGL-based platform that allows visitors to experience digital artworks in an immersive environment. Each artist has a unique presentation style while maintaining cohesion with the collective identity.",
    colorPalette: [
      { name: "Primary", hex: "#7400B8", rgb: "116, 0, 184" },
      { name: "Secondary", hex: "#5E60CE", rgb: "94, 96, 206" },
      { name: "Accent", hex: "#4EA8DE", rgb: "78, 168, 222" },
      { name: "Dark", hex: "#03071E", rgb: "3, 7, 30" },
      { name: "Light", hex: "#F0F2F5", rgb: "240, 242, 245" }
    ],
    typography: {
      primary: "Space Grotesk",
      secondary: "Inter",
      weights: ["300", "400", "500", "700"]
    },
    projectImages: [
      {
        src: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpZ2l0YWwlMjBhcnR8ZW58MHx8MHx8fDA%3D",
        alt: "Lumina interactive gallery",
        caption: "Interactive 3D gallery space"
      },
      {
        src: "https://images.unsplash.com/photo-1618005198920-f0cb6201c48d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjBhcnR8ZW58MHx8MHx8fDA%3D",
        alt: "Lumina artist profile",
        caption: "Artist profile with interactive elements"
      },
      {
        src: "https://images.unsplash.com/photo-1633412753168-3e9b27d49dd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRpZ2l0YWwlMjBhcnR8ZW58MHx8MHx8fDA%3D",
        alt: "Lumina mobile experience",
        caption: "Optimized mobile art viewing experience"
      },{
        src: "https://images.unsplash.com/photo-1508872558182-ffc7f1b387f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGV0dGVycHJlc3N8ZW58MHx8MHx8fDA%3D",
        alt: "Artis packaging design",
        caption: "Sustainable luxury packaging system"
      }
    ],
    outcomes: [
      "Average session duration increased to 4.5 minutes",
      "Featured in Creative Review and Awwwards",
      "Enabled 6 new artist collaborations",
      "Drove a 70% increase in commission inquiries"
    ],
    testimonial: {
      quote: "Our work exists at the intersection of technology and art, and Hestia Labs created a platform that not only showcases our pieces but enhances them. The interactive experience they built has become part of our artistic expression.",
      author: "Alex Zhang",
      position: "Founder, Lumina Collective"
    },
    nextProject: "finesse"
  },
  {
    id: "finesse",
    name: "FINESSE",
    client: "Finesse Financial",
    category: "Finance",
    type: "Web Application",
    year: "2022",
    duration: "6 months",
    role: "UX design and full-stack development",
    overview: "A financial analytics dashboard with real-time data visualization and AI-powered insights for investment professionals. The platform processes complex financial data and presents actionable intelligence.",
    tagline: "Intuitive Financial Intelligence",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
    challenge: "Finesse Financial needed to transform overwhelming amounts of financial data into clear, actionable insights for their clients. The challenge was balancing sophisticated functionality with accessibility for users with varying levels of technical expertise.",
    approach: "We conducted extensive user research with financial professionals to understand their workflows and pain points. This informed our development of a modular dashboard system with customizable views and AI-powered data analysis that delivers insights in plain language.",
    colorPalette: [
      { name: "Primary", hex: "#216869", rgb: "33, 104, 105" },
      { name: "Secondary", hex: "#49A078", rgb: "73, 160, 120" },
      { name: "Accent", hex: "#9CC5A1", rgb: "156, 197, 161" },
      { name: "Dark", hex: "#1F2421", rgb: "31, 36, 33" },
      { name: "Light", hex: "#DCE1DE", rgb: "220, 225, 222" }
    ],
    typography: {
      primary: "IBM Plex Sans",
      secondary: "IBM Plex Mono",
      weights: ["400", "500", "600"]
    },
    projectImages: [
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZpbmFuY2lhbCUyMGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Finesse dashboard overview",
        caption: "Main analytics dashboard with customizable modules"
      },
      {
        src: "https://images.unsplash.com/photo-1638913662252-70efce1e60a7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGZpbmFuY2lhbCUyMGNoYXJ0fGVufDB8fDB8fHww",
        alt: "Finesse data visualization",
        caption: "Interactive data visualization tools"
      },
      {
        src: "https://images.unsplash.com/photo-1616514197671-15d99ce7253f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmluYW5jaWFsJTIwYXBwfGVufDB8fDB8fHww",
        alt: "Finesse mobile app",
        caption: "Mobile companion app for on-the-go insights"
      },
      {
        src: "https://images.unsplash.com/photo-1508872558182-ffc7f1b387f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGV0dGVycHJlc3N8ZW58MHx8MHx8fDA%3D",
        alt: "Artis packaging design",
        caption: "Sustainable luxury packaging system"
      }
    ],
    outcomes: [
      "Reduced analysis time by 65% for financial advisors",
      "Increased client satisfaction scores by 40%",
      "Platform adopted by 3 major financial institutions",
      "Won FinTech Innovation Award 2022"
    ],
    testimonial: {
      quote: "Hestia Labs delivered a platform that has fundamentally changed how we analyze and present financial data. The system's ability to distill complex information into clear insights has given our advisors a significant edge.",
      author: "Michael Thornton",
      position: "CEO, Finesse Financial"
    },
    nextProject: "terraform"
  },
  {
    id: "terraform",
    name: "TERRAFORM",
    client: "EcoSystems Foundation",
    category: "Environment",
    type: "Mobile App",
    year: "2021",
    duration: "5 months",
    role: "Product design and development",
    overview: "A sustainability-focused mobile application helping users reduce their carbon footprint through daily challenges and community engagement. The app gamifies sustainable living while providing educational resources.",
    tagline: "Building a Greener Tomorrow",
    heroImage: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=2070",
    challenge: "EcoSystems Foundation wanted to motivate sustainable behavior change among everyday consumers. The challenge was creating an engaging experience that would encourage consistent participation while accurately tracking environmental impact.",
    approach: "We designed a gamified experience with personalized challenges, community features, and integration with smart home devices. The app uses behavioral psychology principles to encourage sustainable habits while making the experience rewarding and social.",
    colorPalette: [
      { name: "Primary", hex: "#2D6A4F", rgb: "45, 106, 79" },
      { name: "Secondary", hex: "#40916C", rgb: "64, 145, 108" },
      { name: "Accent", hex: "#74C69D", rgb: "116, 198, 157" },
      { name: "Dark", hex: "#081C15", rgb: "8, 28, 21" },
      { name: "Light", hex: "#D8F3DC", rgb: "216, 243, 220" }
    ],
    typography: {
      primary: "Poppins",
      secondary: "Open Sans",
      weights: ["400", "500", "600", "700"]
    },
    projectImages: [
      {
        src: "https://images.unsplash.com/photo-1592839983096-68f407ee24f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVudmlyb25tZW50JTIwYXBwfGVufDB8fDB8fHww",
        alt: "Terraform challenge screen",
        caption: "Daily sustainability challenges with impact tracking"
      },
      {
        src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbW11bml0eSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Terraform community feed",
        caption: "Community engagement and achievement sharing"
      },
      {
        src: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGVjbyUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Terraform impact dashboard",
        caption: "Personal environmental impact metrics"
      },{
        src: "https://images.unsplash.com/photo-1508872558182-ffc7f1b387f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGV0dGVycHJlc3N8ZW58MHx8MHx8fDA%3D",
        alt: "Artis packaging design",
        caption: "Sustainable luxury packaging system"
      }
    ],
    outcomes: [
      "100,000+ active users within 3 months of launch",
      "Average carbon footprint reduction of 15% among active users",
      "Featured in National Geographic's climate initiative",
      "Partnership with 5 major sustainable brands"
    ],
    testimonial: {
      quote: "Terraform has transformed how we engage people in environmental action. Hestia Labs created not just an app, but a movement that makes sustainable living accessible, engaging, and measurable.",
      author: "Emma Rodriguez",
      position: "Director, EcoSystems Foundation"
    },
    nextProject: "nova-tech"
  }
]; 