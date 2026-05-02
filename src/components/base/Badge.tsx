import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "gold" | "earth" | "forest" | "neutral";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  gold:    "bg-brand-100 text-brand-800",
  earth:   "bg-earth-100 text-earth-800",
  forest:  "bg-forest-100 text-forest-800",
  neutral: "bg-gray-100 text-gray-700",
};

export function Badge({ variant = "gold", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
