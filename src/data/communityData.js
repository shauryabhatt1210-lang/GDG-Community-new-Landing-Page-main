export const communityInfo = {
  name: "Google Developer Groups",
  chapter: "GDG On Campus",
  shortName: "GDG",
  tagline: "Learn. Connect. Grow.",
  headline: "Empowering Developers to Build the Future with Google Technologies",
  description: "A passionate community of university students, developers, designers, and tech enthusiasts. We bridge the gap between academic theory and practical developer skills through hands-on workshops, hackathons, and real-world projects.",
  stats: [
    { label: "Active Members", value: "2,500+", change: "+35% this year", color: "blue" },
    { label: "Workshops & Tech Talks", value: "48+", change: "Hands-on sessions", color: "red" },
    { label: "Hackathons & Sprints", value: "16+", change: "Over $20K prizes won", color: "yellow" },
    { label: "Open Source Projects", value: "24+", change: "Shipped & deployed", color: "green" },
  ],
  mission: "To create an inclusive, peer-to-peer learning environment that equips students with real-world industry skills, Google developer ecosystems, and collaborative leadership experience.",
  vision: "To cultivate the next generation of visionary software engineers, AI practitioners, and tech leaders who solve meaningful problems locally and globally.",
  benefits: [
    {
      id: "hands-on",
      title: "Hands-On Google Tech",
      description: "Master modern tools like Gemini AI, Flutter, Google Cloud, Android, and Firebase through guided codelabs and project sprints.",
      icon: "Code2",
      color: "blue",
      badge: "Codelabs & Labs"
    },
    {
      id: "mentorship",
      title: "Industry Mentorship",
      description: "Get direct 1-on-1 guidance and code reviews from Google Developer Experts (GDEs), Google engineers, and tech alumni.",
      icon: "Users2",
      color: "red",
      badge: "GDEs & Alumni"
    },
    {
      id: "hackathons",
      title: "Hackathons & Showcases",
      description: "Form dream teams, build prototypes in 24-48 hour hackathons, and pitch directly to venture capitalists and recruiters.",
      icon: "Trophy",
      color: "yellow",
      badge: "Global Solution Challenge"
    },
    {
      id: "swags-certs",
      title: "Badges & Certifications",
      description: "Earn official Google Cloud Skill Badges, verified event certificates, exclusive GDG swags, and early access to beta tools.",
      icon: "Award",
      color: "green",
      badge: "Verified Badges"
    }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "EcoPulse - Campus IoT & Carbon Tracker",
    category: "Cloud & DevOps",
    categoryKey: "cloud",
    description: "Real-time energy consumption and carbon footprint monitor across campus dorms using Google Cloud Run, BigQuery, and ESP32 microcontrollers.",
    longDescription: "EcoPulse aggregates telemetry data from 120+ IoT sensors installed across campus. Powered by Google Cloud Run microservices, it feeds into BigQuery for automated trend forecasting and visualizes energy anomalies on an intuitive Next.js dashboard.",
    technologies: ["Google Cloud Run", "BigQuery", "React", "Node.js", "ESP32", "TailwindCSS"],
    image: "/assets/projects/ecopulse.svg",
    github: "https://github.com/gdg-tech/ecopulse-iot",
    demo: "https://ecopulse-demo.gdg.dev",
    featured: true,
    author: "Built by Cloud Core Team",
    stars: 142
  },
  {
    id: 2,
    title: "MedGemini - Clinical Triage Assistant",
    category: "AI & Machine Learning",
    categoryKey: "ai",
    description: "Multimodal AI assistant powered by Gemini 1.5 Pro to transcribe medical encounters, highlight potential drug interactions, and summarize patient charts.",
    longDescription: "Built for our university hospital, MedGemini uses the Gemini Pro multimodal API with audio stream processing. It achieves a 94% medical entity extraction accuracy while maintaining strict HIPAA mock compliance.",
    technologies: ["Gemini 1.5 Pro", "Python", "FastAPI", "TensorFlow", "React Native", "Firebase"],
    image: "/assets/projects/medgemini.svg",
    github: "https://github.com/gdg-tech/medgemini-ai",
    demo: "https://medgemini.gdg.dev",
    featured: true,
    author: "AI/ML Study Jam 2025",
    stars: 289
  },
  {
    id: 3,
    title: "CampusConnect - Student Community SuperApp",
    category: "Mobile (Flutter/Android)",
    categoryKey: "mobile",
    description: "A cross-platform Flutter super-app uniting campus events, peer study groups, cafeteria menus, and lost-and-found with real-time Firebase sync.",
    longDescription: "Adopted by 8,000+ university students, CampusConnect leverages Flutter 3 for pixel-perfect iOS/Android performance with Cloud Firestore for instant push notifications and offline-first caching.",
    technologies: ["Flutter", "Dart", "Firebase Firestore", "Cloud Messaging", "Provider"],
    image: "/assets/projects/campusconnect.svg",
    github: "https://github.com/gdg-tech/campus-connect",
    demo: "https://campusconnect.gdg.dev",
    featured: true,
    author: "Mobile Wing Team",
    stars: 310
  },
  {
    id: 4,
    title: "AuraSign - Sign Language Interpreter",
    category: "AI & Machine Learning",
    categoryKey: "ai",
    description: "Computer vision web app translating American Sign Language (ASL) gestures to speech in real-time with TensorFlow.js and WebAssembly.",
    longDescription: "Utilizing MediaPipe hand landmark detection and a custom lightweight LSTM model in TensorFlow.js, AuraSign runs directly inside the client browser with zero cloud latency, fostering communication accessibility.",
    technologies: ["TensorFlow.js", "MediaPipe", "WebRTC", "TypeScript", "Canvas API"],
    image: "/assets/projects/aurasign.svg",
    github: "https://github.com/gdg-tech/aurasign",
    demo: "https://aurasign.gdg.dev",
    featured: false,
    author: "Accessibility Sprint",
    stars: 198
  },
  {
    id: 5,
    title: "LegoFest Companion - PWA Event Engine",
    category: "Web & Open Source",
    categoryKey: "web",
    description: "High-performance Progressive Web App providing interactive conference schedules, speaker Q&A, and digital sponsor passport badges for LegoFest 2026.",
    longDescription: "Engineered with modern Vite, Service Workers for full offline capability, and web Bluetooth to scan proximity conference booths. Powering LegoFest 2026 with 1,200 concurrent attendees.",
    technologies: ["Vite", "PWA Workbox", "TailwindCSS", "Supabase", "Web Bluetooth"],
    image: "/assets/events/legofest-hero.svg",
    github: "https://github.com/gdg-tech/legofest-pwa",
    demo: "https://legofest.gdg.dev",
    featured: false,
    author: "Web Dev Team",
    stars: 175
  },
  {
    id: 6,
    title: "KubeDeploy - GitOps CLI for Student Teams",
    category: "Cloud & DevOps",
    categoryKey: "cloud",
    description: "Lightweight CLI tool written in Go that automatically scaffolds Google Kubernetes Engine (GKE) clusters and deploys microservices with zero config.",
    longDescription: "Simplifies container orchestration for hackathon participants. Allows students to spin up ephemeral staging environments on GKE with a single command `kubedeploy up`.",
    technologies: ["Go (Golang)", "Google Kubernetes Engine", "Docker", "Cobra CLI", "Helm"],
    image: "/assets/projects/kubedeploy.svg",
    github: "https://github.com/gdg-tech/kubedeploy",
    demo: "https://kubedeploy.gdg.dev",
    featured: false,
    author: "DevOps Working Group",
    stars: 215
  }
];

export const eventsData = [
  {
    id: 1,
    title: "LegoFest 2026: Build a LEGO-Themed Website for College",
    type: "Flagship College Web Hackathon",
    badge: "College Web Buildathon",
    date: {
      day: "28",
      month: "NOV",
      year: "2026",
      fullDate: "Saturday, November 28, 2026",
      time: "9:00 AM - 6:00 PM EST"
    },
    venue: "Alan Turing Hall, MMMUT",
    locationType: "In-Person (Alan Turing Hall)",
    speakers: "Google Engineers & Web Architects",
    description: "Team up to design and develop playful, modular, LEGO-themed web platforms for our college campus. From interactive club portals and event dashboards to gamified campus maps, assemble future-ready web experiences brick-by-brick!",
    image: "/assets/events/legofest-hero.svg",
    status: "Registration Open",
    seatsRemaining: 42,
    highlights: ["Official GDG LEGO Minifigure & Swag Bag", "Hands-on Modern React & Web Sprints", "$3,500 in Cash & Collector LEGO Sets", "Midnight Pizza, Energy Sprints & Brick Pit"]
  },
  {
    id: 2,
    title: "Google Cloud Study Jam: Generative AI Sprint",
    type: "Interactive Workshop",
    badge: "Free Cloud Credits",
    date: {
      day: "14",
      month: "NOV",
      year: "2026",
      fullDate: "Friday, November 14, 2026",
      time: "4:00 PM - 7:30 PM EST"
    },
    venue: "Engineering Building Room 402 + Google Meet",
    locationType: "In-Person & Online",
    speakers: "Google Cloud Champion Innovators",
    description: "Unlock 30 days of free Google Cloud Skills Boost access. Build your first LangChain + Vertex AI vector search pipeline with step-by-step mentoring from cloud architects.",
    image: "/assets/events/cloudjam.svg",
    status: "Limited Seats",
    seatsRemaining: 18,
    highlights: ["$100+ Free Cloud Credits", "Google Cloud Skill Badge on completion", "Prompt Engineering Masterclass", "Certificate of Completion"]
  },
  {
    id: 3,
    title: "Flutter Forward: Cross-Platform Hackathon",
    type: "24-Hour Hackathon",
    badge: "$3,000 Prize Pool",
    date: {
      day: "05",
      month: "DEC",
      year: "2026",
      fullDate: "Dec 5 - Dec 6, 2026",
      time: "Starts 10:00 AM EST"
    },
    venue: "Innovation Center Hub / Discord",
    locationType: "In-Person / Virtual Track",
    speakers: "Flutter Team Mentors & Alumni",
    description: "Team up and build revolutionary multi-platform apps using Flutter 3 and Firebase. Pitch your working prototype in front of industry judges with prizes and sponsor swag.",
    image: "/assets/events/flutterhack.svg",
    status: "Team RSVP Open",
    seatsRemaining: 65,
    highlights: ["$3,000 in cash prizes", "Mentorship from senior mobile engineers", "Free food, midnight pizzas & energy drinks", "Fast-track interviews with sponsor startups"]
  },
  {
    id: 4,
    title: "Android 16 & Modern Compose Deep Dive",
    type: "Tech Talk & Codelab",
    badge: "Tech Deep Dive",
    date: {
      day: "19",
      month: "DEC",
      year: "2026",
      fullDate: "Thursday, December 19, 2026",
      time: "5:00 PM - 7:00 PM EST"
    },
    venue: "CS Lab 3B & YouTube Live",
    locationType: "Hybrid",
    speakers: "Android GDE & Open Source Authors",
    description: "Explore the newest Jetpack Compose animations, predictive back gestures, and Material You design system improvements coming to Android ecosystem.",
    image: "/assets/events/androiddeepdive.svg",
    status: "Upcoming",
    seatsRemaining: 30,
    highlights: ["Jetpack Compose Architecture Best Practices", "Live Live-Coding Demo", "Q&A with Android Experts", "Exclusive Android Plushie Giveaways"]
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Avanish Upadhyay",
    role: "Computer Science Senior",
    title: "Prossima Technologies",
    avatar: "/assets/testimonials/avanish-upadhyay.jpg",
    quote: "Joining GDG was the single best decision of my university journey. The Cloud Study Jams gave me real hands-on experience, and the community mentorship helped me land my dream role at Google!",
    tag: "Cloud Track Alumni"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Software Engineering Junior",
    title: "GDG Flutter Lead & Open Source Contributor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "I started knowing basic Java. Through GDG's weekly hack sessions, I led our team to win 1st place in the Solution Challenge with our accessibility app. The peer energy here is unmatched.",
    tag: "Hackathon Winner"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Data Science Masters Student",
    title: "Women Techmakers Ambassador",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    quote: "The culture of inclusivity at GDG is extraordinary. Whether you're writing your first line of Python or fine-tuning transformer models, everyone is here to lift each other up.",
    tag: "WTM Lead"
  }
];

export const faqData = [
  {
    question: "What is Google Developer Groups (GDG) On Campus?",
    answer: "GDG On Campus is an official university-based community group supported by Google Developers. We help university students bridge theoretical classroom computer science with practical industry software engineering, cloud architectures, and AI development."
  },
  {
    question: "Do I need to pay or have prior coding experience to join?",
    answer: "Absolutely not! GDG is 100% free and open to everyone regardless of your major, year, or skill level. We provide beginner-friendly zero-to-one workshops, intermediate study tracks, and advanced hackathons."
  },
  {
    question: "What benefits and perks do members get?",
    answer: "Members get access to complimentary Google Cloud credits, official Google Cloud Skill Badges, free entry to LegoFest conferences, hackathon mentorship, exclusive swags, and a direct network with Google Developer Experts (GDEs) and alumni."
  },
  {
    question: "How can I showcase my project or speak at an event?",
    answer: "We love member showcases! You can submit your project through our Project Showcase portal or apply to deliver a lightning talk at our monthly Tech Nights. We provide speaking coaching and slide templates."
  },
  {
    question: "Is GDG officially run by Google corporate?",
    answer: "GDG is an independent student and developer organization. While supported with resources, swags, and speaker visits through the Google Developers ecosystem, all activities and opinions expressed here are independent."
  }
];
