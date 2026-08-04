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
    skills: ["Java", "Spring Boot", "Data Structures", "Algorithms"]
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
  }
];