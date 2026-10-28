// src/data/portfolioData.js

export const personalInfo = {
  name: "Timothy Josef Reyes",
  role: "Computer Science Student & Developer",
  location: "Santa Rosa, Laguna, Philippines",
  email: "reyestimothyjosefa@gmail.com",
  linkedin: "https://www.linkedin.com/in/timothy-josef-reyes-661735317/",
  github: "https://github.com/TimothyJosef-Reyes", // Note: Fixed space in URL format
  bio: "BS Computer Science student at UPLB and DOST Scholar. Experienced in computer vision, machine learning algorithms, and full-stack web applications.",
  education: {
    institution: "University of the Philippines Los Baños",
    degree: "BS in Computer Science",
    status: "DOST Scholar | Consistent College & University Scholar"
  }
};

export const projects = [
  {
    id: "mata",
    title: "MATA — Microscopic Analysis & Tagging Assistant",
    tagline: "Offline Computer Vision Desktop Tool for Plant Pathology",
    date: "2026",
    category: "Computer Vision / AI",
    techStack: ["Python", "PyQt6", "YOLO26n", "OpenCV"],
    description: "A local, offline desktop application built for Institute of Plant Breeding (IPB) laboratory personnel. Uses a custom-trained YOLO26n neural network to automatically detect stomata in 10x leaf microscope images.",
    highlights: [
      "Built for full offline laboratory operation with zero cloud dependency.",
      "Interactive ROI tools: pan, zoom, add, select, resize, and delete bounding boxes.",
      "Calculates live stomata density, average size, and surface area metrics dynamically."
    ],
    githubUrl: "https://github.com/TimothyJosef-Reyes",
    featured: true
  },
  {
    id: "mais",
    title: "MAIS — Spoilage Detection System",
    tagline: "Multimodal AI Hackathon Finalist Project",
    date: "2023",
    category: "Machine Learning",
    techStack: ["Python", "TensorFlow", "CNN", "MLP"],
    description: "Combines Convolutional Neural Networks (CNN) for crop visual analysis with Multilayer Perceptrons (MLP) for environmental sensor data (temperature, humidity, soil conditions) to detect corn spoilage early.",
    highlights: [
      "Hackathon Finalist Project.",
      "Multimodal pipeline integrating both visual imagery and IoT environmental telemetry.",
      "Generates actionable mitigation strategies like storage optimization and pest warnings."
    ],
    githubUrl: "https://github.com/TimothyJosef-Reyes",
    featured: true
  },
  {
    id: "farm-to-table",
    title: "Farm-to-Table Marketplace",
    tagline: "Direct-to-Consumer E-Commerce Platform",
    date: "2025",
    category: "Web Development",
    techStack: ["Node.js", "MongoDB", "JavaScript", "CSS3"],
    description: "Full-stack web application simulating a direct marketplace for local farmers and buyers, featuring real-time browsing, user authentication, and order lifecycle management.",
    highlights: [
      "User account registration and secure order tracking.",
      "Dynamic catalog browsing and cart state management.",
      "NoSQL database schema design in MongoDB for products and transactions."
    ],
    githubUrl: "https://github.com/TimothyJosef-Reyes",
    featured: true
  }
];

export const skills = {
  programming: ["Python", "JavaScript", "C", "Java", "SQL", "R", "Dart", "x86-64 Assembly"],
  frameworks: ["ReactJS", "NodeJS", "Flutter", "PyQt6", "TensorFlow"],
  databases: ["MongoDB", "PostgreSQL / SQL"],
  tools: ["Git", "Hardware Maintenance", "System Diagnostics"],
  softSkills: ["Problem Solving", "Adaptive Learning", "Technical Communication", "Critical Thinking", "Time Management"]
};

export const experience = [
  {
    role: "Developer Intern",
    organization: "Institute of Plant Breeding (IPB)",
    duration: "240 Hours",
    bullets: [
      "Led project management and end-to-end software application development.",
      "Designed and pitched specialized computer vision tools for agricultural research personnel."
    ]
  },
  {
    role: "Hardware & Tech Support Immersion",
    organization: "Santa Rosa City Hall",
    duration: "Work Immersion",
    bullets: [
      "Maintained network connections, workstation computer systems, and local printer hardware.",
      "Provided software troubleshooting and technical support across city offices."
    ]
  }
];