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
        "font-meidum pb-10 text-center text-3xl capitalize leading-[2.5ch] md:pb-14 md:text-4xl md:leading-[2.5ch]",
        className,
      )}
    >
      {children}
    </h2>
  );
}
