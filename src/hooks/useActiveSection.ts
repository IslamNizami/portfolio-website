import { useEffect, useState } from "react";

/** Tracks which section id is currently active based on scroll position. */
export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const handleScroll = () => {
      
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (isAtBottom) {
        setActive(sectionIds[sectionIds.length - 1]);
        return;
      }

      
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element) {
          if (scrollPosition >= element.offsetTop) {
            setActive(sectionIds[i]);
            break;
          }
        }
      }
    };

    
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  return active;
}