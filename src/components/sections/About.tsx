import { SiSpringboot, SiPostgresql } from "react-icons/si";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { Server } from "lucide-react";
import { FaJava } from "react-icons/fa";

const focusAreas = [
  {
    icon: Server,
    iconClass: "text-accent-blue", 
    title: "Backend Development",
    description:
      "Designing and building scalable server-side applications and REST APIs.",
  },
  {
    icon: FaJava,
    iconClass: "text-[#f89820]", 
    title: "Java",
    description:
      "Building robust, object-oriented backend applications with Java.",
  },
  {
    icon: SiSpringboot,
    iconClass: "text-[#6DB33F]", 
    title: "Spring Boot",
    description:
      "Developing production-ready REST APIs and enterprise applications.",
  },
  {
    icon: SiPostgresql,
    iconClass: "text-[#336791]",  
    title: "PostgreSQL",
    description:
      "Designing relational databases and writing efficient SQL queries.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[280px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative h-56 w-56 overflow-hidden rounded-2xl border border-border bg-bg-card">
              <img
                src="/images/profile.png"
                alt="Islam Nizami"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <div>
            <SectionHeading
              title="About Me"
              description={
                <>
                  I'm a Computer Engineering student based in Budapest,
                  Hungary and a Backend Developer with a strong foundation in
                  Java, Spring Boot, REST APIs, and SQL.
                </>
              }
            />

            <p className="mt-4 max-w-2xl text-ink-secondary">
              I enjoy building scalable backend systems, designing clean APIs,
              and continuously learning modern software engineering
              technologies.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;

                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                  >
                    <Card className="h-full">
                      <Icon
                        // DEĞİŞİKLİK BURADA: Sabit sınıf yerine area.iconClass kullanılıyor
                        className={`h-7 w-7 ${area.iconClass}`}
                        aria-hidden="true"
                      />

                      <h3 className="mt-4 font-display text-base font-semibold text-ink">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-sm text-ink-secondary">
                        {area.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}