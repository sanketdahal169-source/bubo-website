import * as React from "react";
import { cn } from "@/lib/utils";
import { containerX, sectionY } from "@/lib/theme";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  container?: boolean;
  dark?: boolean;
  cream?: boolean;
}

export function Section({
  as: Tag = "section",
  container = true,
  dark = false,
  cream = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(
        sectionY,
        dark && "bg-gradient-to-br from-earth-950 to-earth-900 text-cream",
        cream && "bg-section-gradient",
        !dark && !cream && "bg-white",
        className
      )}
      {...props}
    >
      {container ? (
        <div className={containerX}>{children}</div>
      ) : (
        children
      )}
    </Tag>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", center && "text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-2 text-sm font-semibold uppercase tracking-widest",
            light ? "text-brand-300" : "text-brand-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl",
          light ? "text-cream" : "text-earth-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg max-w-2xl leading-relaxed",
            center && "mx-auto",
            light ? "text-brand-200" : "text-earth-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
