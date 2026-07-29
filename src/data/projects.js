import brainwaveCover from "../assets/Brainwave/Brainwave_cover.png";
import BrPay from "../assets/Brainwave/BrPay.png";
import Br2 from "../assets/Brainwave/Br2.png";
import Br3 from "../assets/Brainwave/Br3.png";
import CL1 from "../assets/Cl1/CL1.png";
import CL2 from "../assets/Cl1/CL2.png";
import CL3 from "../assets/Cl1/CL3.png";
import CL4 from "../assets/Cl1/CL4.png";
import CLC from "../assets/Cl1/CLC.png";
import ES_Cov from "../assets/Estate/ES_Cov.png";
import Es2 from "../assets/Estate/Es2.png";
import Es3 from "../assets/Estate/Es3.png";
import Es4 from "../assets/Estate/Es4.png";
import Es5 from "../assets/Estate/Es5.png";

const projects = [
  {
    id: 1,
    title: "Cab Booking App",
    shortDescription:
      "Full-stack ride-hailing application featuring real-time driver matching, live GPS tracking, and secure OTP verification.",
    detailedDescription:
      "A comprehensive, full-stack ride-hailing platform built to connect passengers with drivers in real-time. The application features dual user roles (Users and Captains/Drivers) with JWT-based protected workflows. It integrates location services for route distance calculations, fare estimation across multiple vehicle tiers, real-time WebSocket communication for live ride dispatching, and OTP-secured trip completion.",
    coverImage: null,
    screenshots: [],
    videoUrl: null,
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
      "Google Maps API",
    ],
    tags: ["Full Stack", "Real-time", "Geolocation", "WebSockets"],
    features: [
      "Dual-authentication portal with protected routes for Users and Drivers (Captains)",
      "Real-time location search, autocomplete suggestions, and route distance/fare estimation",
      "Instant WebSocket dispatching system matching ride requests to nearby active drivers",
      "Secure OTP-based ride confirmation for trip start and completion workflows",
      "Live GPS tracking interface for real-time driver movement updates",
      "Secure token blacklisting mechanism for stateless JWT logout functionality",
    ],
    challenges: [
      "Synchronizing bidirectional Socket.io state across user and driver clients during ride lifecycle events",
      "Integrating location-based geospatial querying in MongoDB to discover nearby drivers efficiently",
      "Implementing robust auth middleware with token blacklisting to handle dual user roles securely",
    ],
    githubUrl: "https://github.com/ViditMalyan/Cab_booking",
    liveUrl: "",
    docsUrl: "",
    featured: true,
  },
  // {
  //   id: 2,
  //   title: "E-Commerce Platform",
  //   shortDescription: "Full-featured online store with payment integration, inventory management, and analytics.",
  //   detailedDescription: "A comprehensive e-commerce solution built from the ground up, featuring secure payment processing, real-time inventory tracking, and detailed sales analytics. The platform supports multiple vendors, customizable storefronts, and an admin dashboard for complete business management.",
  //   coverImage: null,
  //   screenshots: [],
  //   videoUrl: null,
  //   techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis", "Docker"],
  //   tags: ["Full Stack", "E-Commerce", "Payment"],
  //   features: [
  //     "Secure payment processing with Stripe",
  //     "Real-time inventory management",
  //     "Multi-vendor support",
  //     "Advanced search with filters",
  //     "Order tracking and notifications",
  //     "Sales analytics dashboard",
  //   ],
  //   challenges: [
  //     "Handling concurrent transactions safely",
  //     "Building a scalable search system",
  //     "Implementing secure payment workflows",
  //   ],
  //   githubUrl: "https://github.com/",
  //   liveUrl: "https://example.com/",
  //   docsUrl: "",
  //   featured: true,
  // },
  // {
  //   id: 3,
  //   title: "Real-time Chat Application",
  //   shortDescription: "Feature-rich messaging platform with video calls, file sharing, and end-to-end encryption.",
  //   detailedDescription: "A modern real-time messaging platform that supports text, voice, and video communication. Built with WebSocket technology for instant message delivery, it includes features like message reactions, file sharing, thread conversations, and end-to-end encryption for security.",
  //   coverImage: null,
  //   screenshots: [],
  //   videoUrl: null,
  //   techStack: ["React", "Socket.io", "Express", "MongoDB", "WebRTC", "AWS S3"],
  //   tags: ["Full Stack", "Real-time", "WebRTC"],
  //   features: [
  //     "Real-time messaging with typing indicators",
  //     "Video and voice calling via WebRTC",
  //     "File and media sharing",
  //     "Message reactions and threading",
  //     "User presence and status",
  //     "End-to-end encryption",
  //   ],
  //   challenges: [
  //     "Managing WebRTC peer connections at scale",
  //     "Implementing reliable message delivery",
  //     "Building efficient file upload pipeline",
  //   ],
  //   githubUrl: "https://github.com/",
  //   liveUrl: "",
  //   docsUrl: "",
  //   featured: true,
  // },
  {
    id: 4,
    title: "Brainwave",
    shortDescription:
      "Modern AI landing page showcasing futuristic design systems, subtle micro-interactions, and complex layout structures.",
    detailedDescription:
      "Brainwave is a sleek, next-generation landing page built with React and Tailwind CSS. It features a futuristic dark-mode aesthetic with custom visual effects, dynamic gradient layers, interactive pricing cards, and smooth scroll animations. The project serves as an exploration into production-grade UI design systems, custom component architecture, and responsive layouts.",
    coverImage: brainwaveCover,
    screenshots: [brainwaveCover, Br2, BrPay, Br3],
    videoUrl: null,
    techStack: ["React", "Tailwind CSS", "Vite", "JavaScript (ES6+)"],
    tags: ["Frontend", "UI/UX", "Design Systems"],
    features: [
      "Futuristic dark-mode UI with custom SVG paths, glowing borders, and backdrop blurs",
      "Responsive hero section with complex floating card overlays and parallax effects",
      "Interactive collaboration wheel and dynamic benefit card showcases",
      "Flexible pricing tier cards with feature checklists and toggle interactions",
      "Fully responsive navigation bar with mobile drawer state management",
      "Bento-grid feature highlights with integrated video preview placeholders",
    ],
    challenges: [
      "Implementing pixel-perfect, responsive SVG geometric backgrounds and grid overlays across viewports",
      "Managing fluid animations and hover states while maintaining 60fps rendering performance",
      "Structuring modular, reusable Tailwind UI components to keep codebase clean and maintainable",
    ],
    githubUrl: "https://github.com/ViditMalyan/Brainwave",
    liveUrl: "https://viditmalyan.github.io/Brainwave/",
    docsUrl: "",
    featured: false,
  },
  {
    id: 5,
    title: "Real Estate Full Stack Application",
    shortDescription:
      "Full-stack real estate application featuring seamless property browsing, interactive contact forms, and dynamic UI filtering.",
    detailedDescription:
      "A modern real estate marketplace platform built with React and Node.js that enables users to browse property listings, filter homes based on specific preferences, and connect directly with agents. Designed with a clean aesthetic and intuitive UX, it provides responsive property showcases, smooth view transitions, and robust server-side routing.",
    coverImage: ES_Cov,
    screenshots: [ES_Cov, Es2, Es3, Es4, Es5],
    videoUrl: null,
    techStack: ["React", "Node.js", "Express.js", "CSS3", "Vite", "Vercel"],
    tags: ["Full Stack", "Web Development", "UI/UX"],
    features: [
      "Dynamic property listing cards with image carousels and price tags",
      "Responsive hero section with customized call-to-action triggers",
      "Interactive contact/inquiry forms connected to backend handlers",
      "Interactive filtering system for property locations, types, and price ranges",
      "Fully responsive UI design optimized across desktop and mobile viewports",
      "Integrated brand partner showcase and feature highlights",
    ],
    challenges: [
      "Building responsive and seamless media assets loading across varied screen sizes",
      "Structuring clean client-side state management for real-time listing updates",
      "Ensuring smooth cross-origin API integration between deployed client and server environments",
    ],
    githubUrl: "https://github.com/ViditMalyan/FS_Real_Estate",
    liveUrl: "https://fs-real-estate-ruddy.vercel.app/",
    docsUrl: "",
    featured: false,
  },
  {
    id: 6,
    title: "AW Website",
    shortDescription:
      "Interactive, award-winning website replica featuring high-performance smooth scrolling and complex GSAP scroll-triggered animations.",
    detailedDescription:
      "A meticulous reconstruction of the award-winning Significo website, built to master advanced frontend animation architectures, kinetic typography, and fluid user interactions. The project focuses on translating complex design motion into production-ready web interfaces, utilizing smooth scrolling engines and custom scroll-driven timelines to deliver an immersive digital experience.",
    coverImage: CLC,
    screenshots: [CLC, CL1, CL2, CL3, CL4],
    videoUrl: null,
    techStack: [
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "GSAP",
      "ScrollTrigger",
      "Locomotive Scroll",
    ],
    tags: ["Frontend", "Creative Dev", "UI/UX", "Animation"],
    features: [
      "Fluid page momentum and smooth inertia scrolling via Locomotive Scroll",
      "Pinning, scrubbing, and scroll-linked timeline sequences using GSAP ScrollTrigger",
      "Responsive kinetic typography and canvas/element transform animations",
      "Custom interactive cursor dynamics and hover-state motion feedback",
      "Cross-browser motion synchronization and responsive layout adaptations",
    ],
    challenges: [
      "Synchronizing Locomotive Scroll smooth-scroll proxies with GSAP's layout triggers",
      "Optimizing layout shifts and repaint loops during continuous high-frequency scroll events",
      "Maintaining consistent 60fps animation performance across varied device viewports and GPUs",
    ],
    githubUrl: "https://github.com/ViditMalyan/Frontend_CL1",
    liveUrl: "https://viditmalyan.github.io/Frontend_CL1/",
    docsUrl: "",
    featured: false,
  },
];

export default projects;
