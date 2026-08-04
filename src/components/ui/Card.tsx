import { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hoverLift?: boolean;
};

export default function Card({
  children,
  className = "",
  hoverLift = true,
  ...rest
}: Props) {
  return (
    <div
      className={`rounded-xl border border-border bg-bg-card p-6 transition-[transform,border-color] duration-300 ease-out ${
        hoverLift ? "hover:-translate-y-1 hover:border-border-hover" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
