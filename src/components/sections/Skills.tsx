import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills"
          description="The languages, frameworks, and tools I use to design and ship backend systems."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
            >
              <Card className="h-full">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent-purple">
                  {category.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li key={item}>
                      <motion.span
                        whileHover={{
                          scale: 1.06,
                          borderColor: "#3B82F6",
                          color: "#F5F7FA",
                        }}
                        transition={{ duration: 0.15 }}
                        className="inline-block rounded-md border border-border bg-bg-elevated px-3 py-1.5 font-mono text-xs text-ink-secondary"
                      >
                        {item}
                      </motion.span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
