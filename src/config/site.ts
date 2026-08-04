
const RESUME_FILE_NAME = "Islam_Nizami_Resume.pdf";

export const site = {
  name: "Islam Nizami",
  role: "Software Developer",
  location: "Budapest, Hungary",
  email: "islamnizami0046@gmail.com",
  github: "https://github.com/islamnizami",  
  linkedin: "https://www.linkedin.com/in/islam-nizami/",
  domain: "islamnizami.com",

  resume: {
    path: `/resume/${RESUME_FILE_NAME}`,
    fileName: RESUME_FILE_NAME,
    lastUpdated: "August 2026",
    fileSize: "86 KB",
  },
};

export type Site = typeof site;
