type Props = {
  /** e.g. "about.ts", "projects.ts" — mirrors how this content is organized in the codebase */
  fileName: string;
};

export default function Eyebrow({ fileName }: Props) {
  return (
    <div
      aria-hidden="true"
      className="mb-4 inline-flex items-center gap-2 rounded-md border border-border bg-bg-card px-3 py-1.5 font-mono text-xs text-accent-blue"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
      {fileName}
    </div>
  );
}
