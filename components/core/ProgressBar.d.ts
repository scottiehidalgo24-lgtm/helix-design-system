import React from "react";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current value. @default 0 */
  value?: number;
  /** @default 100 */
  max?: number;
  /** @default "green" */
  tone?: "green" | "warning" | "danger" | "neutral";
  /** Track/fill height in px. @default 8 */
  height?: number;
  /** Neon glow on the green fill. @default true */
  showGlow?: boolean;
}

/** Horizontal usage meter — token balance, GPU utilization, quotas. */
export function ProgressBar(props: ProgressBarProps): JSX.Element;
