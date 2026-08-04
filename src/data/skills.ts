export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Java", "Python", "C++", "C", "SQL"],
  },
  {
    title: "Backend & Frameworks",
    items: ["Spring Boot"],
  },
  {
    title: "Databases & ORM",
    items: ["MySQL", "PostgreSQL", "Hibernate / JPA"],
  },
  {
    title: "Tools & APIs",
    items: ["Git", "GitHub", "Docker", "Maven", "Gradle", "REST APIs","Postman"],
  },
];
