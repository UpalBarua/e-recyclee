import { cn } from "@/lib/cn";
import * as React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "font-meidum px-2 pb-6 text-3xl capitalize md:pb-10 md:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}
