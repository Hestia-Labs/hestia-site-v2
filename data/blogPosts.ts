import { BlogPost } from '@/types/blog';

// Single data source for blog posts
export const blogPosts: BlogPost[] = [
  { 
    id: 1, 
    name: 'The Evolution of Digital Design', 
    category: 'Design', 
    type: 'Article', 
    tagline: 'From skeuomorphism to minimalism and beyond', 
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1920', 
    href: '/blog/evolution-of-digital-design',
    slug: 'evolution-of-digital-design',
    author: 'Sarah Parker',
    publishedAt: 'June 15, 2023',
    readTime: '8 min read',
    tags: ['Design', 'UX/UI', 'Minimalism', 'Web Design'],
    content: {
      excerpt: 'Explore how digital design has transformed over the past two decades, from skeuomorphic designs that mimicked real-world objects to today\'s clean and functional minimalism.',
      sections: [
        {
          title: 'The Skeuomorphic Era',
          content: 'Digital design has undergone a remarkable evolution over the past two decades. In the early 2000s, skeuomorphism dominated interfaces, with designs that meticulously mimicked real-world objects and textures. Apple was perhaps the most notable champion of this style, with iOS interfaces featuring realistic leather textures, paper-like notes, and buttons that appeared three-dimensional and pressable.\n\nThe rationale behind skeuomorphism was clear: by recreating familiar physical objects digitally, users would intuitively understand how to interact with new technology. This approach made perfect sense during the transition from analog to digital, especially as touchscreens became mainstream and required new interaction paradigms.',
          imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1920'
        },
        {
          title: 'The Rise of Flat Design',
          content: 'Around 2012-2013, we witnessed a dramatic shift towards flat design. Microsoft\'s Metro UI and later Google\'s Material Design championed this approach, eliminating shadows, gradients, and textures in favor of bold colors and simple shapes. This shift wasn\'t merely aesthetic—it was pragmatic. As users became more digitally literate, the need for visual hand-holding diminished. Additionally, flat design rendered more efficiently on various screen sizes and resolutions, which was crucial as mobile devices proliferated.\n\nFlat design also reflected changing cultural values. As digital technology became ubiquitous, there was less need to disguise it as something else. The minimalist approach acknowledged that digital interfaces could develop their own visual language, independent of physical world limitations.',
          imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1920'
        },
        {
          title: 'The Minimalist Movement',
          content: 'Today\'s digital design landscape is dominated by minimalism—an evolution of flat design that embraces white space, functional layouts, and subtle use of depth and motion. This approach balances aesthetic simplicity with usability, creating interfaces that are both beautiful and intuitive.\n\nMinimalism in digital design isn\'t just about removing elements; it\'s about strategic reduction. Every component on the screen should serve a purpose, whether functional or emotional. By eliminating the superfluous, designers create experiences that allow content to breathe and users to focus on what truly matters.',
          imageUrl: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1920'
        },
        {
          title: 'Looking to the Future',
          content: 'As we look ahead, we\'re seeing the emergence of more organic, adaptive designs. Neumorphism—a style that creates soft, extruded plastic-like interfaces—had a brief moment in the spotlight. While it hasn\'t been widely adopted, it demonstrates how designers continue to explore new visual languages.\n\nThe future of digital design will likely be increasingly personalized and contextual. Interfaces will adapt to individual users\' preferences, behaviors, and needs. They\'ll respond not just to explicit inputs but to environmental factors, time of day, and perhaps even emotional states.\n\nUltimately, the evolution of digital design reflects our maturing relationship with technology. As digital experiences become more integrated into our lives, design becomes less about dazzling users with novelty and more about creating seamless, intuitive interactions that feel natural and enhance our capabilities.',
        }
      ]
    }
  },
  { 
    id: 2, 
    name: 'Sustainable Practices in Modern Web Development', 
    category: 'Development', 
    type: 'Guide', 
    tagline: 'Creating eco-friendly digital experiences', 
    image: 'https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?q=80&w=1920', 
    href: '/blog/sustainable-web-development',
    slug: 'sustainable-web-development',
    author: 'Marcus Johnson',
    publishedAt: 'August 23, 2023',
    readTime: '10 min read',
    tags: ['Sustainability', 'Web Development', 'Performance', 'Green Computing'],
    content: {
      excerpt: 'Discover how web developers can contribute to environmental sustainability by optimizing performance, reducing data usage, and making conscientious technology choices.',
      sections: [
        {
          title: 'Digital Sustainability: A Growing Concern',
          content: 'The environmental impact of our digital infrastructure is becoming increasingly apparent. Data centers now account for approximately 1% of global electricity use, with that figure projected to rise as our digital dependence grows. As web developers and designers, we have a responsibility to consider the ecological footprint of our creations.\n\nSustainable web development isn\'t just an ethical choice—it\'s often aligned with best practices that benefit users through faster loading times, improved accessibility, and better overall experiences.',
          imageUrl: 'https://images.unsplash.com/photo-1581092921461-21d4c6b10db3?q=80&w=1920'
        },
        {
          title: 'Performance Optimization as an Environmental Strategy',
          content: 'Every byte transmitted across the internet has an associated carbon cost. By optimizing our websites and applications for performance, we\'re not just improving user experience—we\'re reducing energy consumption.\n\nPractical steps include compressing images appropriately, implementing efficient caching strategies, minimizing HTTP requests, and removing unused code. These optimizations reduce server load and data transmission, directly translating to energy savings.\n\nTools like Google Lighthouse and WebPageTest not only help identify performance issues but can now be viewed through a sustainability lens. The less work a browser needs to do to render a page, the less energy is consumed on the user\'s device.',
          imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920'
        },
        {
          title: 'Conscientious Hosting Choices',
          content: 'Where and how we host our websites has significant environmental implications. Selecting hosting providers that use renewable energy can dramatically reduce a website\'s carbon footprint. Companies like Google Cloud, Microsoft Azure, and Amazon Web Services have made commitments to renewable energy, though their progress varies.\n\nSmaller, specialized green hosting providers are also available, often powered entirely by renewable sources. When selecting a host, consider asking about their Power Usage Effectiveness (PUE), renewable energy usage, and carbon offset programs.',
          imageUrl: 'https://images.unsplash.com/photo-1539193143244-c83d9436d633?q=80&w=1920'
        },
        {
          title: 'Designing with Sustainability in Mind',
          content: 'Sustainable web development begins at the design stage. A minimalist design approach naturally leads to lighter websites. By prioritizing content and functionality over decorative elements, we create experiences that not only load faster but consume less energy.\n\nConsider implementing "dark mode" options, which can reduce energy consumption on OLED screens. Be thoughtful about autoplay videos and animations, which can be both bandwidth-heavy and processor-intensive.\n\nUltimately, sustainable web development requires a holistic approach, considering every aspect from design to deployment. By making conscientious choices throughout the development process, we can create digital experiences that respect both our users and our planet. As our industry continues to grow, embedding these principles into our standard practices becomes not just desirable, but essential for a sustainable digital future.',
        }
      ]
    }
  },
  { 
    id: 3, 
    name: 'The Art of Typography in Web Design', 
    category: 'Design', 
    type: 'Tutorial', 
    tagline: 'Creating visual harmony through fonts', 
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1920', 
    href: '/blog/typography-in-web-design',
    slug: 'typography-in-web-design',
    author: 'Elena Rodriguez',
    publishedAt: 'September 10, 2023',
    readTime: '7 min read',
    tags: ['Typography', 'Design', 'Fonts', 'Visual Hierarchy'],
    content: {
      excerpt: 'Learn how thoughtful typography choices can transform your web designs, enhance readability, and create memorable brand experiences.',
      sections: [
        {
          title: 'Typography as Design Foundation',
          content: 'Typography is much more than selecting attractive fonts—it\'s a fundamental design element that can make or break a website\'s effectiveness. Well-crafted typography establishes tone, reinforces brand identity, creates visual hierarchy, and guides users through content. In web design, where communication is paramount, typography serves as both a functional necessity and an aesthetic opportunity.\n\nAccording to studies, users form impressions about a website within 50 milliseconds of viewing it. Typography plays a crucial role in these snap judgments, communicating professionalism, creativity, trustworthiness, or whatever attributes align with your brand.',
          imageUrl: 'https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=1920'
        },
        {
          title: 'Selecting and Pairing Fonts',
          content: 'Choosing the right typefaces requires consideration of brand personality, readability, and technical constraints. A general rule of thumb is to limit a design to 2-3 typefaces to maintain coherence.\n\nWhen pairing fonts, look for complementary characteristics while ensuring sufficient contrast. A common approach is pairing a serif font for headings with a sans-serif for body text, or vice versa. The contrast between font styles creates visual interest while serving different functional purposes.\n\nConsider the emotional qualities that different typefaces evoke. Serif fonts often convey tradition, reliability, and formality, while sans-serifs typically feel modern, clean, and approachable. Display fonts can add personality but should be used sparingly and purposefully.',
          imageUrl: 'https://images.unsplash.com/photo-1633354089807-21c2132b7b88?q=80&w=1920'
        },
        {
          title: 'Creating Typographic Hierarchy',
          content: 'Effective typographic hierarchy guides readers through content, highlighting what\'s most important and creating a logical reading order. This hierarchy is achieved through variations in size, weight, spacing, and color.\n\nHeadings should be substantially larger than body text, with subheadings sized proportionally between the two. Font weight can emphasize important elements, with bolder weights naturally drawing more attention.\n\nLine height (leading) and letter spacing (tracking) significantly impact readability. Body text typically benefits from line height between 1.4 and 1.6 times the font size, while headings often work better with tighter line height. Proper spacing ensures that text is neither cramped nor disconnected.',
          imageUrl: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1920'
        },
        {
          title: 'Responsive Typography',
          content: 'With users accessing websites on devices of varying sizes, responsive typography is essential. This involves more than simply scaling font sizes—it means reconsidering the entire typographic system at different breakpoints.\n\nUse relative units like em or rem rather than fixed pixels, allowing text to scale based on user preferences and device characteristics. Consider implementing different font sizes, line heights, and even typefaces at various screen sizes to optimize the reading experience.\n\nAs we continue to recognize typography\'s crucial role in web design, it\'s worth investing time in creating thoughtful typographic systems. The right typography choices create harmony between aesthetics and function, resulting in designs that not only look beautiful but effectively communicate and engage users across all devices and contexts.',
        }
      ]
    }
  },
  { id: 4, name: 'FINESSE', category: 'Finance', type: 'Web App', tagline: 'Intuitive Financial Intelligence', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080', href: '/blog/finesse' },
  { id: 5, name: 'TERRAFORM', category: 'Environment', type: 'Mobile App', tagline: 'Building a Greener Tomorrow', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=1080', href: '/blog/terraform' },
  { id: 6, name: 'ZENITH', category: 'Healthcare', type: 'Platform', tagline: 'Revolutionizing Patient Care', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1080', href: '/blog/zenith' },
  { id: 7, name: 'NOVA', category: 'Development', type: 'SaaS', tagline: 'The Future of Cloud Computing', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080', href: '/blog/nova' },
  { id: 8, name: 'ECHO', category: 'UX/UI', type: 'Mobile App', tagline: 'Connecting Artists with Audiences', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1080', href: '/blog/echo' },
  { id: 9, name: 'ATLAS', category: 'UX/UI', type: 'Platform', tagline: 'Discover the World Your Way', image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1080', href: '/blog/atlas' },
  { id: 10, name: 'QUANTUM', category: 'Education', type: 'Web App', tagline: 'Reimagining Online Learning', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1080', href: '/blog/quantum' },
  { id: 11, name: 'PRISM', category: 'Branding', type: 'Tool', tagline: 'Creative Tools for Modern Designers', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1080', href: '/blog/prism' },
  { id: 12, name: 'ORBITAL', category: 'Development', type: 'Platform', tagline: 'Making Space Data Accessible', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080', href: '/blog/orbital' },
  { id: 13, name: 'AZURE', category: 'Branding', type: 'Booking', tagline: 'Redefining Luxury Travel', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1080', href: '/blog/azure' },
  { id: 14, name: 'HORIZON', category: 'UX/UI', type: 'Platform', tagline: 'Your Next Home is Waiting', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1080', href: '/blog/horizon' },
  { id: 15, name: 'PULSE', category: 'Development', type: 'Wearable', tagline: 'Health Monitoring Reinvented', image: 'https://images.unsplash.com/photo-1511546395756-590dffdcdbd1?q=80&w=1080', href: '/blog/pulse' }
]; 