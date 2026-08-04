import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Props = {
  words: string[];
  className?: string;
  typingSpeedMs?: number;
  pauseMs?: number;
};

export default function TypingText({
  words,
  className = "",
  typingSpeedMs = 55,
  pauseMs = 1800,
}: Props) {
  const reducedMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setText(words[0] ?? "");
      return;
    }

    const currentWord = words[wordIndex % words.length];
    let timeout: number;

    if (!deleting && text.length < currentWord.length) {
      timeout = window.setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeedMs);
    } else if (!deleting && text.length === currentWord.length) {
      timeout = window.setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text.length > 0) {
      timeout = window.setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, typingSpeedMs / 1.6);
    } else {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    }

    return () => window.clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeedMs, pauseMs, reducedMotion]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-blink bg-accent-blue align-middle" style={{ height: "1em" }} />
    </span>
  );
}
