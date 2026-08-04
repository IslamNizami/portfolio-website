import { site } from "@/config/site";

/**
 * Checks whether the configured resume file actually exists on the server.
 * Falls back gracefully so the UI can show an informative message instead
 * of a broken download / dead link.
 */
export async function resumeExists(): Promise<boolean> {
  try {
    const response = await fetch(site.resume.path, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Triggers a same-tab download of the resume using the `download` attribute
 * so the PDF saves to disk instead of opening inline, in browsers that
 * honor it. Returns false if the file could not be found.
 */
export function triggerResumeDownload(): void {
  const link = document.createElement("a");
  link.href = site.resume.path;
  link.download = site.resume.fileName;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
