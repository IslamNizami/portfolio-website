import { AnimatePresence, motion } from "framer-motion";

type Props = {
  visible: boolean;
};

export default function Loader({ visible }: Props) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="font-mono text-lg text-ink-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-accent-blue">const</span> portfolio{" "}
              <span className="text-ink-muted">=</span>{" "}
              <span className="text-accent-purple">await</span> build
              <span className="animate-blink text-accent-blue">_</span>
            </motion.div>
            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
