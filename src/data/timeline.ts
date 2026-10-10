export type TimelineItem = {
  id: string;
  category: "Education" | "Experience";
  date: string;
  title: string;
  subtitle: string;
  bullets?: string[];
  skills?: string[];
};

export const timeline: TimelineItem[] = [
  {
    id: "edu-1",
    category: "Education",
    date: "2024 — PRESENT",
    title: "B.Sc. in Computer Engineering",
    subtitle: "Budapest University of Technology and Economics",
    bullets: [
      "Focusing on Software Engineering, Data Structures, Algorithms, and Distributed Systems.",
      "Active Tech Team Member at Google Developer Group (GDG) On Campus BME."
    ],
    skills: ["Java", "Spring Boot", "Data Structures", "Algorithms","Software Engineering"]
  },
  {
    id: "exp-1",
    category: "Experience",
    date: "JUNE 2024 — AUGUST 2024",
    title: "Software Engineer Intern",
    subtitle: "Emerson",
    bullets: [
      "Developed a desktop application in Python to support internal workflows and improve process efficiency.",
      "Designed and implemented a functional user interface to improve overall usability."
    ],
    skills: ["Python", "Desktop App Dev", "UI/UX"]
  },
  {
id: "exp-2",
category: "Experience",
date: "SEPTEMBER 2026 — PRESENT",
title: "Programming 3 Lab Instructor",
subtitle: "Budapest University of Technology and Economics (BME)",
bullets: [
"Assist students with Java programming, object-oriented programming, and software development concepts during laboratory sessions.",
"Support students in understanding programming assignments, debugging code, and applying software engineering principles."
],
skills: ["Java", "OOP", "Software Engineering", "Teaching","Swing"]
},
{
id: "exp-3",
category: "Experience",
date: "SEPTEMBER 2026 - PRESENT",
title: "Backend Developer Intern",
subtitle: "DevLab",
bullets: [
"Developing backend applications using Java and Spring Boot, implementing REST APIs and secure application features.",
"Worked with PostgreSQL, Spring Security, JWT authentication, database migrations, and role-based access control, caching systems"
],
skills: ["Java", "Spring Boot", "REST API", "PostgreSQL", "Spring Security", "JWT","Redis","Flyway"]
}

];