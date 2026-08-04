import { motion } from "framer-motion";
import { Github, ExternalLink, Star} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
        align = "center"
          title="A small selection of Projects"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-bg-card transition-colors duration-300 hover:border-accent-blue/50"
            >
              <div className="relative h-56 overflow-hidden border-b border-border bg-bg-elevated">
  <img
    src={project.image}
    alt={project.title}
    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    loading="lazy"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

  {project.featured && (
    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md border border-accent-purple/40 bg-bg-card/90 px-2.5 py-1 font-mono text-[11px] text-accent-purple backdrop-blur-sm">
      <Star size={11} aria-hidden="true" />
      Featured
    </span>
  )}
</div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-ink-secondary">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-bg-elevated px-2 py-1 font-mono text-[11px] text-ink-secondary"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border py-2.5 text-sm text-ink transition-colors duration-200 hover:border-accent-blue/60"
                  >
                    <Github size={15} aria-hidden="true" />
                    Code
                  </a>
                 {project.demoUrl && (
  <a
    href={project.demoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent-blue py-2.5 text-sm text-white transition-colors duration-200 hover:bg-blue-500"
  >
    <ExternalLink size={15} aria-hidden="true" />
    Live Demo
  </a>
)}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
