import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent-blue text-white hover:bg-blue-500 shadow-[0_0_0_1px_rgba(59,130,246,0.4)]",
  secondary:
    "bg-bg-card text-ink border border-border hover:border-accent-purple/60 hover:bg-bg-elevated",
  outline:
    "bg-transparent text-ink border border-border hover:border-accent-blue/70 hover:text-white",
  ghost: "bg-transparent text-ink-secondary hover:text-ink",
};

type CommonProps = {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

type Props = ButtonAsButton | ButtonAsAnchor;

// Plain elements (not framer-motion components) here on purpose: spreading
// native HTML attributes onto motion.button/motion.a can collide with
// Framer Motion's own event-handler types. A CSS transform transition gives
// the same premium hover/press feel without that risk.
const interactionClasses =
  "transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98]";

export default function Button(props: Props) {
  const { variant = "primary", icon, children, className = "", as, ...rest } =
    props;

  const base = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium font-body transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent-blue ${interactionClasses}`;

  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if (as === "a") {
    const anchorRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...anchorRest}>
        {icon}
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {icon}
      {children}
    </button>
  );
}
