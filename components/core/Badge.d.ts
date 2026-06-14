import React from "react";

export type BadgeTone = "neutral" | "green" | "success" | "warning" | "danger" | "info";
export type BadgeVariant = "soft" | "solid" | "outline";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  tone?: BadgeTone;
  /** @default "soft" */
  variant?: BadgeVariant;
  /** Show a leading status dot (glows for green/success). */
  dot?: boolean;
  /** @default "md" */
  size?: "sm" | "md";
}

/** Compact pill for status, categories, and counts. Mono type. */
export function Badge(props: BadgeProps): JSX.Element;
