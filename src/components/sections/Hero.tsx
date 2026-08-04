import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import TypingText from "@/components/ui/TypingText";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";
import { triggerResumeDownload } from "@/lib/resume";

const services = [
  { name: "api-gateway", latency: "42ms" },
  { name: "auth-service", latency: "18ms" },
  { name: "payments-service", latency: "65ms" },
  { name: "postgres-primary", latency: "3ms" },
];

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-24"
    >
      {/* Background grid + fade */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent-blue/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-60 h-96 w-96 rounded-full bg-accent-purple/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-1.5 font-mono text-xs text-ink-secondary"
          >
            <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-status-healthy" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Islam Nizami
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-mono text-lg text-accent-blue sm:text-xl"
          >
            <TypingText
              words={[
                "Backend Software Developer",
                "Java & Spring Boot Engineer",
                "Building Scalable Systems",
              ]}
            />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-ink-secondary sm:text-lg"
          >
            I build scalable backend applications using Java and Spring Boot
            while continuously expanding my expertise in advanced technologies
            and software architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
              variant="primary"
              onClick={() => scrollTo("projects")}
              icon={<ArrowRight size={16} aria-hidden="true" />}
            >
              View Projects
            </Button>
            <Button variant="secondary" onClick={() => scrollTo("contact")} icon={<Mail size={16} aria-hidden="true" />}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4"
          >
            <Button
              variant="outline"
              onClick={triggerResumeDownload}
              icon={<Download size={16} aria-hidden="true" />}
              aria-label={`Download resume, ${site.resume.fileName}`}
            >
              Download Resume
            </Button>
          </motion.div>
        </div>

        {/* Right column — signature status console */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-xl border border-border bg-bg-card shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-border bg-bg-elevated px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-ink-muted">
                status.sh
              </span>
            </div>

            <div className="space-y-3 p-6 font-mono text-sm">
              <p className="text-ink-secondary">
                <span className="text-accent-purple">$</span> status --services
              </p>

              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.12 }}
                  className="flex items-center justify-between"
                >
                  <span className="flex items-center gap-2 text-ink">
                    <span className="h-2 w-2 animate-pulseDot rounded-full bg-status-healthy" />
                    {service.name}
                  </span>
                  <span className="text-ink-muted">
                    healthy · {service.latency}
                  </span>
                </motion.div>
              ))}

              <div className="!mt-5 border-t border-border pt-4">
                <div className="flex items-center justify-between text-xs text-ink-muted">
                  <span>uptime 99.98%</span>
                  <span>requests/sec 1.2k</span>
                </div>
              </div>

              <p className="!mt-4 text-ink-secondary">
                <span className="text-accent-purple">$</span>{" "}
                <span className="text-ink-muted">
                  all systems operational
                </span>
                <span className="ml-1 inline-block h-4 w-[7px] animate-blink translate-y-0.5 bg-accent-blue align-middle" />
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
