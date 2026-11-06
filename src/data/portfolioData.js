// src/data/portfolioData.js

export const personalInfo = {
  name: "Timothy Josef Reyes",
  role: "Computer Science Student & Developer",
  location: "Santa Rosa, Laguna, Philippines",
  email: "reyestimothyjosefa@gmail.com",
  linkedin: "https://www.linkedin.com/in/timothy-josef-reyes-661735317/",
  github: "https://github.com/Timotanium",
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
    description: "A local, offline desktop application built for Institute of Plant Breeding (IPB) laboratory personnel. Developed through close collaboration with plant pathology researchers — gathering requirements, discussing workflows, and iterating on features directly with the scientists who would use it daily — simulating a real client-provider engagement. Uses a custom-trained YOLO26n neural network to automatically detect stomata in 10x leaf microscope images.",
    highlights: [
      "Built for full offline laboratory operation with zero cloud dependency.",
      "Interactive ROI tools: pan, zoom, add, select, resize, and delete bounding boxes.",
      "Calculates live stomata density, average size, and surface area metrics dynamically."
    ],
    githubUrl: "https://github.com/TimothyJosef-Reyes",
    featured: true,
    images: [
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793431021/BAT2_1a_Ctl_10X_1.jpg', title: 'MATA - Sample Input' },
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793960612/Screenshot_2026-11-06_182215.png', title: 'MATA - Landing Menu'},
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793960613/Screenshot_2026-11-06_182253.png', title: 'MATA - Dashboard' },
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793960613/Screenshot_2026-11-06_182309.png', title: 'MATA - Output Annotations' }
    ]
  },
  // {
  //   id: "mais",
  //   title: "MAIS — Spoilage Detection System",
  //   tagline: "Multimodal AI Hackathon Finalist Project",
  //   date: "2023",
  //   category: "Machine Learning",
  //   techStack: ["Python", "TensorFlow", "CNN", "MLP"],
  //   description: "Combines Convolutional Neural Networks (CNN) for crop visual analysis with Multilayer Perceptrons (MLP) for environmental sensor data (temperature, humidity, soil conditions) to detect corn spoilage early.",
  //   highlights: [
  //     "Hackathon Finalist Project.",
  //     "Multimodal pipeline integrating both visual imagery and IoT environmental telemetry.",
  //     "Generates actionable mitigation strategies like storage optimization and pest warnings."
  //   ],
  //   githubUrl: "https://github.com/TimothyJosef-Reyes",
  //   featured: true,
  //   images: [
  //     { image: '../badge.png', title: 'MAIS - Interface' },
  //     { image: '../badge.png', title: 'MAIS - Telemetry' },
  //     { image: '../badge.png', title: 'MAIS - Analysis' }
  //   ]
  // },
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
    featured: true,
    images: [
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793959081/homepage.png', title: 'Homepage' },
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793959080/login.png', title: 'Login Page' },
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793959079/admin.png', title: 'Admin Page' },
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793959079/userproducts.png', title: 'Product Catalog' }
    ]
  },
  {
    id: "grace-period",
    title: "Grace Period — Multiplayer Game with cross-device support",
    tagline: "Real-time Multiplayer Maze Game with Cross-Device Networking",
    date: "2026",
    category: "Game Development / Networking",
    techStack: ["Java", "JavaFX", "Socket Programming", "Multithreading"],
    description: "A real-time multiplayer maze game where players navigate through a dynamically generated maze, competing to reach the exit first. Features cross-computer networking and synchronized game state across devices.",
    highlights: [
      "Real-time multiplayer gameplay with synchronized state across devices.",
      "Dynamic maze generation algorithm ensuring unique gameplay each session.",
      "Implemented socket programming and multithreading for efficient network communication."
    ],
    githubUrl: "https://github.com/TimothyJosef-Reyes",
    featured: true,
    images: [
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793961471/594404525-b56607db-4870-4ef8-ad1e-0fa71a347c3e.png', title: 'Menu' },
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793961470/594405528-a0d5fb1a-5c20-4000-aabe-914e6a9ee6b2.png', title: 'Character Selection' },
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793961469/594406770-cba749ce-6959-4568-9f0f-c5b081a57178.png', title: 'Gameplay' }
    ]
  },
    {
    id: "diet-planner",
    title: "Diet Planner — Budget-Optimized Nutrition Tool",
    tagline: "Simplex Method–Powered Food Quantity Optimizer built with R Shiny",
    date: "2024",
    category: "Operations Research / R Programming",
    techStack: ["R", "R Shiny", "Simplex Method", "Linear Programming"],
    description: "An R Shiny application that computes the optimal quantity of each user-selected food item to satisfy daily nutritional requirements while staying within a set budget — powered by the Simplex Method for linear optimization.",
    highlights: [
      "Applies the Simplex Method to solve a linear programming problem across all selected food items, minimizing cost while meeting nutritional constraints.",
      "Hover-over nutrition fact popups for each food card give users instant macro and micronutrient details before committing to their selection.",
      "Gracefully notifies users when their food combination is nutritionally infeasible — no valid solution exists within the given constraints."
    ],
    githubUrl: "https://github.com/TimothyJosef-Reyes",
    featured: true,
    images: [
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793959708/Screenshot_2026-11-06_180724.png', title: 'Food Selection' },
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793959707/Screenshot_2026-11-06_180737.png', title: 'Nutrition Breakdown' },
      { image: 'https://res.cloudinary.com/jlichquy/image/upload/v1793959707/Screenshot_2026-11-06_180750.png', title: 'Optimization Result' }
    ]
  },
];

export const hobbies = [
  {
    id: "analog-active",
    title: "Analog & Active",
    badge: "Co-op Mode",
    description: "I boulder, bike, and play table tennis — not because it's healthy, but because sitting all day makes me feel like a potato. Working out is in there too, mostly to justify eating more.",
    tags: ["Bouldering", "Biking", "Table Tennis", "Home workouts"]
  },
  {
    id: "digital-worlds",
    title: "Digital Worlds",
    badge: null,
    description: "R6 Siege for the stress, Pokémon for the nostalgia, Minecraft when I need to feel productive without actually being productive. It's a balanced diet.",
    tags: ["Rainbow Six Siege", "Pokémon", "Minecraft"]
  },
  {
    id: "fuel-recovery",
    title: "Fuel & Recovery",
    badge: null,
    description: "There's a specific kind of joy in finding a really good pandesal and sweet pastries near the dorm. I take it seriously...",
    tags: ["Pastry Hunting", "Local Bakeries"]
  }
];

export const skills = {
  programming: ["Python", "JavaScript", "C", "Java", "SQL", "R", "Dart", "x86-64 Assembly"],
  frameworks: ["ReactJS", "NodeJS", "Flutter", "PyQt6", "TensorFlow"],
  databases: ["MongoDB", "MariaDB / SQL"],
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