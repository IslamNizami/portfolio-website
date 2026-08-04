import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { site } from "@/config/site";

const contactLinks = [
  { label: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "GitHub", href: site.github, icon: Github },
  { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const response = await fetch(
      "https://formspree.io/f/xqerrnvp",
      {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok){
      setSubmitted(true);
      form.reset();
    }
  }

  return (
    <section id="contact" className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        <SectionHeading
        align = "center"
          title="Let's Build Something Great Together"
          description="Have a role, project, or idea in mind? I'd love to hear from you."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 rounded-xl border border-border bg-bg-card p-4 transition-colors duration-200 hover:border-accent-blue/50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent-blue">
                  <Icon size={17} aria-hidden="true" />
                </span>
                <span className="text-sm text-ink">{label}</span>
              </a>
            ))}

            <div className="flex items-center gap-4 rounded-xl border border-border bg-bg-card p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-elevated text-accent-purple">
                <MapPin size={17} aria-hidden="true" />
              </span>
              <span className="text-sm text-ink">{site.location}</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-xl border border-border bg-bg-card p-6 sm:p-8"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm text-ink-secondary"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-muted focus:border-accent-blue"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm text-ink-secondary"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-muted focus:border-accent-blue"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm text-ink-secondary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm text-ink outline-none transition-colors duration-200 placeholder:text-ink-muted focus:border-accent-blue"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              icon={
                submitted ? (
                  <Check size={16} aria-hidden="true" />
                ) : (
                  <Send size={16} aria-hidden="true" />
                )
              }
            >
              {submitted ? "Message noted" : "Send Message"}
            </Button>

            {submitted && (
              <p role="status" className="text-center text-sm text-ink-secondary">
                Thanks for reaching out
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
