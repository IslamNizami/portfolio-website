import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  FileText,
  Download,
  ExternalLink,
  AlertTriangle,
  Calendar,
  HardDrive,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { timeline } from "@/data/timeline";
import { site } from "@/config/site";
import { resumeExists, triggerResumeDownload } from "@/lib/resume";

type TimelineItem = (typeof timeline)[number];

/* Hər iki bölmədə istifadə olunan ortaq kart */
function EntryCard({
  item,
  index,
  compact = false,
}: {
  item: TimelineItem;
  index: number;
  compact?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card
        className={`flex h-full flex-col justify-between text-left ${
          compact ? "p-5 pb-6" : "p-6 pb-8"
        }`}
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-accent-purple">
            {item.date}
          </span>
          <h4 className="mt-2 font-display text-lg font-semibold text-ink">
            {item.title}
          </h4>
          <p className="mt-0.5 text-sm font-medium text-accent-blue">
            {item.subtitle}
          </p>

          {item.bullets && item.bullets.length > 0 && (
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-ink-secondary">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="leading-relaxed">
                  <span className="-ml-1">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {item.skills && item.skills.length > 0 && (
          <div className="mt-6 flex flex-wrap justify-start gap-2 pt-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-border bg-bg/50 px-2.5 py-1 font-mono text-xs text-ink-secondary"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </Card>
    </motion.div>
  );
}

function GroupHeading({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-bg-card">
        {icon}
      </span>
      <h3 className="font-display text-xl font-semibold text-ink">
        {children}
      </h3>
    </div>
  );
}

export default function Resume() {
  const [available, setAvailable] = useState<boolean | null>(null);

  const educationItems = timeline.filter((item) => item.category === "Education");
  const experienceItems = timeline.filter((item) => item.category === "Experience");

  useEffect(() => {
    let cancelled = false;
    resumeExists().then((exists) => {
      if (!cancelled) setAvailable(exists);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="resume" className="border-t border-border py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          align="center"
          title="Education & Experience"
          description="How my path has taken shape so far, and where it's headed next."
        />

        {/* Education — yığcam kart */}
        <div className="mx-auto mt-14 max-w-3xl space-y-6">
          <GroupHeading
            icon={<GraduationCap size={18} className="text-accent-blue" />}
          >
            Education
          </GroupHeading>

          <div className="space-y-4">
            {educationItems.map((item, index) => (
              <EntryCard key={item.id} item={item} index={index} compact />
            ))}
          </div>
        </div>

        {/* Experience — əsas timeline */}
        <div className="mx-auto mt-16 max-w-3xl space-y-8">
          <GroupHeading
            icon={<Briefcase size={18} className="text-accent-blue" />}
          >
            Professional Experience
          </GroupHeading>

          <ol className="relative space-y-6 border-l border-border pl-8 sm:ml-3">
            {experienceItems.map((item, index) => (
              <li key={item.id} className="relative">
                {/* Timeline nöqtəsi */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[37px] top-8 h-2.5 w-2.5 rounded-full border-2 border-accent-blue bg-bg"
                />
                <EntryCard item={item} index={index} />
              </li>
            ))}
          </ol>
        </div>

        {/* CV İndirme Kartı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center gap-8 rounded-xl border border-border bg-bg-card p-8 sm:flex-row sm:items-start"
        >
          <div className="flex h-40 w-32 shrink-0 items-center justify-center rounded-lg border border-border bg-bg-elevated">
            <FileText size={40} className="text-accent-blue" aria-hidden="true" />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-display text-xl font-semibold text-ink">
              {site.resume.fileName}
            </h3>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs text-ink-muted sm:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={13} aria-hidden="true" />
                Last updated {site.resume.lastUpdated}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <HardDrive size={13} aria-hidden="true" />
                {site.resume.fileSize}
              </span>
            </div>

            {available === false && (
              <p
                role="alert"
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-400"
              >
                <AlertTriangle size={15} aria-hidden="true" />
                The resume file isn't available right now. Please check back
                soon or reach out directly.
              </p>
            )}

            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
              <Button
                variant="primary"
                onClick={triggerResumeDownload}
                disabled={available === false}
                icon={<Download size={16} aria-hidden="true" />}
                className={available === false ? "cursor-not-allowed opacity-50" : ""}
                aria-label={`Download resume, ${site.resume.fileName}`}
              >
                Download Resume
              </Button>
              <Button
                as="a"
                variant="outline"
                href={site.resume.path}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLink size={16} aria-hidden="true" />}
                aria-label="View resume in a new tab"
              >
                View Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}