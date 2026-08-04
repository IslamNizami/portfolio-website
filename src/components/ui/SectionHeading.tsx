import { motion } from "framer-motion";
import { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

type Props = {
  fileName?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeading({
  fileName,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {/*  */}
      {fileName && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={align === "center" ? "flex justify-center" : ""}
        >
          <Eyebrow fileName={fileName} />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
        className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className={`mt-4 max-w-2xl text-ink-secondary ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}