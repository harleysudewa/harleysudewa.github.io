export const siteConfig = {
  name: "Harley Sudewa",
  title: "Harley Sudewa | Software & Hardware Enthusiast",
  description:
    "Personal portfolio of Harley Sudewa, an Electrical Engineering graduate specializing in Internet of Things (IoT). Currently exploring software development, artificial intelligence, networking, and automation.",
  url: "https://harleysudewa.github.io",
  links: {
    github: "https://github.com/harleysudewa",
    linkedin: "https://linkedin.com/in/harley-sudewa",
    email: "mailto:harley.sudewa@gmail.com",
    instagram: "https://instagram.com/harleysudewa",
    whatsapp: "https://wa.me/62895377327888",
    discord: "https://discord.com/users/harure",
  },
};

export const heroData = {
  label: "Internet of Things · Software · Hardware",
  name: "Harley Sudewa",
  headline:
    "Building technology solutions, from connected systems to intelligent applications.",
  introduction:
    "I'm an Electrical Engineering graduate, specializing in Internet of Things (IoT) from Petra Christian University with an interest in building practical technology solutions. My experience spans across IoT systems, artificial intelligence, software development, network infrastructure, and automation.",
  metadata: [
    { label: "Location", value: "Surabaya, Indonesia" },
    { label: "Education", value: "Petra Christian University" },
    { label: "Focus", value: "Electrical Engineering & IoT" },
  ],
  tags: [
    "Internet of Things (IoT)",
    "Artificial Intelligence (AI)",
    "Software Development",
    "Networking",
    "Embedded Systems",
    "Automation"
  ],
};

export const aboutData = {
  sectionNumber: "01",
  sectionLabel: "About",
  heading: "Background",
  paragraphs: [
    "I'm an Electrical Engineering graduate from Petra Christian University, specializing in Internet of Things. My journey into technology started with exploring how hardware and software can work together to solve practical problems. Throughout my academic and professional experience, I've worked with IoT systems, embedded programming, software development, networking, and artificial intelligence.",
    "I enjoy exploring new technologies, understanding how different systems communicate, and turning technical concepts into functional implementations. I believe that good engineering is not just about building something that works, but understanding the problem, designing an appropriate solution, and continuously improving it.",
  ],
  technicalFocus: [
    {
      category: "Software Development",
      skills: [
        "WordPress CMS",
        "Web Development (Node.js Express, Python Flask)",
        "Mobile App Development (Java)",
        "Database (MySQL, MongoDB, PostgreSQL)",
        "HTTP REST API"
      ],
    },
    {
      category: "IoT & Embedded Systems",
      skills: [
        "Microcontrollers (ESP32, ESP8266, Arduino)",
        "Single-Board Computers (Raspberry Pi)",
        "IoT Protocols (MQTT)",
        "Smart Home Automation (Home Assistant)"
      ],
    },
    {
      category: "Networking & Infrastructure",
      skills: [
        "Routing & Switching (IP Addressing, Subnetting, VLAN)",
        "Networking Hardware (Ruijie, Hikvision, Cisco)",
        "VoIP & IP Telephony (Yeastar)",
        "Containerization & Tunneling (Docker, Cloudflare)"
      ],
    },
    {
      category: "Industrial Automation",
      skills: [
        "PLC Hardware & Programming (Schneider, Siemens)",
        "HMI Design (Siemens)",
        "Industrial IoT (ctrlX Automation)",
        "Data Visualization (Node-RED)"
      ],
    },
    {
      category: "Artificial Intelligence",
      skills: [
        "LLM Integration",
        "AI-Assisted Automation"
      ],
    },
  ],
};

export const experienceData = {
  sectionNumber: "02",
  sectionLabel: "Experience",
  heading: "Career History",
  experiences: [
    {
      period: "August 2025 — December 2025",
      position: "Network Engineer Intern",
      company: "CV. Surya Megah Expertindo (SMX)",
      location: "Surabaya, Indonesia",
      logo: "/images/logo-smx.png",
      description:
        "Worked on network infrastructure, IP telephony systems, and integrated security solutions for various business and institutional environments.",
      responsibilities: [
        "Configured and troubleshot multi-vendor routers, switches, and wireless access points (APs) to support reliable network connectivity across factory and office environments.",
        "Configured and troubleshot IP telephony systems, including IP PBX, physical IP phones, softphones, and FXO/FXS gateways.",
        "Configured and troubleshot integrated end devices, including CCTV cameras, NVR systems, and smart access control, ensuring proper connectivity and system operation.",
      ],
      technologies: [],
      gallery: [
        {
          src: "/images/exp-smx-01.jpeg",
          caption: "Yeastar P560 IP PBX & Rack Installation at Petra Educational Institutions",
        },
        {
          src: "/images/exp-smx-02.jpeg",
          caption: "Cisco Meraki Site-to-Site VPN & Routing Configuration",
        },
        {
          src: "/images/exp-smx-03.jpeg",
          caption: "Yeastar TA3200 FXS & TA410 Gateway Implementation at Surabaya Suites",
        },
        {
          src: "/images/exp-smx-04.jpeg",
          caption: "Multi-vendor Switch & Patch Panel Cable Management",
        },
      ],
    },
    {
      period: "September 2024 - November 2024",
      position: "IoT Engineer Intern",
      company: "PT. PAL (Penataran Angkatan Laut)",
      location: "Surabaya, Indonesia",
      logo: "/images/logo-ptpal.png",
      description:
        "Developed an IoT-based real-time machine status monitoring solution for rolling machines at PT. PAL, integrating PLC data acquisition with ESP32 controllers and Node-RED dashboard visualization via MQTT.",
      responsibilities: [
        "Developed an IoT-based real-time machine status monitoring system for rolling machines.",
        "Integrated an ESP32 with the machine’s PLC to retrieve critical operational data, including power status, working status, current working time, and total working time.",
        "Transmitted collected data via MQTT to a Node-RED server for processing, visualization, and real-time monitoring through an interactive dashboard."
      ],
      technologies: [],
      gallery: [
        {
          src: "/images/exp-ptpal-01.jpeg",
          caption: "IoT Machine Status Monitoring Architecture & Dashboard",
        },
        {
          src: "/images/exp-ptpal-02.jpeg",
          caption: "PLC Integration & ESP32 Hardware Deployment",
        },
        {
          src: "/images/exp-ptpal-03.jpeg",
          caption: "Real-time Operational Telemetry & Node-RED Flow",
        },
        {
          src: "/images/exp-ptpal-04.jpeg",
          caption: "Industrial Machine Implementation & Verification",
        },
      ],
    },
  ],
};

export const projectsData = {
  sectionNumber: "03",
  sectionLabel: "Selected Work",
  heading: "Projects",
  introduction:
    "A selection of projects where I've explored the intersection of software development, embedded systems, artificial intelligence, and industrial automation.",
  projects: [
    {
      number: "01",
      title: "IoT-Based Self-Service Game Console Rental System",
      category: "IoT · System Integration",
      description:
        "Developed an IoT-based self-service game console rental platform designed to centralize rental operations across multiple locations. The platform integrates an Android application, cloud backend, web administration dashboard, payment processing, and local IoT infrastructure.",
      highlights: [
        "Android mobile application for customer developed using Java and XML.",
        "Python Flask REST API backend.",
        "Firebase Firestore database.",
        "Midtrans Core API integration for QRIS payments.",
        "MQTT communication through Mosquitto MQTT broker.",
        "Home Assistant running on Raspberry Pi at each rental location.",
        "Android TV and game console control through ADB and HDMI-CEC.",
        "Automated rental scheduling using APScheduler Python Library.",
        "Web administration dashboard using HTML, JavaScript, and Tailwind CSS.",
      ],
      technologies: [
        "Java",
        "Python",
        "Flask",
        "Firestore",
        "MQTT",
        "Home Assistant",
        "Raspberry Pi",
        "Midtrans API",
      ],
      image: "/images/project-01.png",
      gallery: [],
    },
    {
      number: "02",
      title: "AI Chess System",
      category: "Artificial Intelligence · Computer Vision",
      description:
        "Developed an AI-powered chess system combining Gemini 2.5 Flash, Lichess API, and computer vision to interpret chessboard positions and integrate intelligent chess interactions.",
      highlights: [
        "Gemini 2.5 Flash integration.",
        "Lichess API integration.",
        "CNN-based chess piece detection.",
        "Computer vision for chessboard interpretation.",
        "Integration between AI processing and chess application logic.",
      ],
      technologies: [
        "Python",
        "Gemini 2.5 Flash",
        "Lichess API",
        "Computer Vision",
      ],
      image: "/images/project-02.png",
      gallery: [],
    },
    {
      number: "03",
      title: "Sports Field Booking System",
      category: "Software Development · Mobile Application · Desktop Application",
      description:
        "Developed Sportiva, a sports field booking platform designed to simplify the reservation process, allowing users to browse available sports facilities, check schedules, and book playing sessions through a digital platform.",
      highlights: [
        "Node.js backend for RESTful APIs, authentication, and database operations.",
        "Java Swing desktop application for court management and booking administration.",
        "Java-based Android application for customer booking and transactions.",
        "REST API integration between mobile, desktop, and backend systems.",
        "MySQL database for users, bookings, schedules, and court availability.",
      ],
      technologies: [
        "Node.js",
        "Java",
        "Java Swing",
        "MySQL",
        "REST API",
      ],
      image: "/images/project-03.png",
      gallery: [],
    },
    {
      number: "04",
      title: "Industrial Rolling Machine Monitoring System",
      category: "Industrial IoT · Automation",
      description:
        "Developed an IoT-based machine monitoring solution integrating ESP32 and PLC data through MQTT to a Node-RED dashboard.",
      highlights: [
        "PLC data acquisition.",
        "ESP32 integration.",
        "MQTT communication.",
        "Machine power, operating status, and working time monitoring.",
        "Real-time Node-RED dashboard.",
      ],
      technologies: ["ESP32", "PLC", "MQTT", "Node-RED"],
      image: "/images/project-04.png",
      gallery: [],
    },
  ],
};

export const educationData = {
  sectionNumber: "05",
  sectionLabel: "Education",
  heading: "Academics",
  education: {
    degree: "Bachelor's Degree in Electrical Engineering",
    institution: "Petra Christian University",
    location: "Surabaya, Indonesia",
    logo: "/images/logo-petra.png",
    focus:
      "Internet of Things (IoT)",
    description:
      "Studied Electrical Engineering with an emphasis on IoT, embedded programming, software development, and networking. Developed practical experience through internship and academic projects.\nGPA: 3.82/4.00",
  },
  achievements: [
    {
      title: "Finalist — Network Track Huawei ICT Competition 2024-2025 National Level",
      date: "December 2024",
    },
    {
      title: "1st Place — Electrical Fiesta 20 IoT HaXathon",
      date: "August 2024",
    },
  ],
};

export const contactData = {
  sectionNumber: "05",
  sectionLabel: "Contact",
  heading: "Let's Connect",
  paragraphs: [
    "I'm always open to discussing technology, exploring new ideas, and connecting with people who enjoy building practical solutions.",
    "Whether it's a professional opportunity, an interesting project, or a technical discussion, feel free to reach out.",
  ],
};

