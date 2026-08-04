import { Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";
import { site } from "@/config/site";

const socials = [
  { label: "GitHub", href: site.github, icon: Github },
  { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
  { label: "Resume", href: site.resume.path, icon: FileText },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 lg:flex-row lg:justify-between lg:px-8">
        <p className="font-mono text-xs text-ink-muted">
          Copyright © {year} {site.name}.
        </p>

        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink-secondary transition-colors duration-200 hover:border-accent-blue/60 hover:text-ink"
              >
                <Icon size={17} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-ink-secondary transition-colors duration-200 hover:border-accent-blue/60 hover:text-ink"
        >
          Back to top
          <ArrowUp size={15} aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
