export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  image: string;
};


export const projects: Project[] = [
  {
    id: "project-one",
    title: "SmartPantry",
    description:
  "A full-stack inventory management system built with Spring Boot, React, and PostgreSQL. It helps users track food inventory, monitor expiration dates, and receive smart recipe recommendations based on your fridge.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/IslamNizami/smartpantry",
    featured: true,
    image: "/images/smartpantry.jpg",

    },
    
    {
    id: "lock-focus-bot",
    title: "LockFocusBot",
    description:
      "A strict productivity Telegram bot built with Spring Boot and PostgreSQL. Unlike standard timers, it enforces discipline through random check-ins and penalizes failures by directly modifying the OS hosts file to block distracting websites.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Telegram API"],
    githubUrl: "https://github.com/IslamNizami/focuslock-telegram-bot",
    featured: true,
    image: "/images/lockfocusbot.jpg", 
  },
];
