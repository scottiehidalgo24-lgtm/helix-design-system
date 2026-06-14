import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Primary action button for Helix — neon-green primary, neutral secondary,
 * quiet ghost, and a danger variant.
 * @startingPoint section="Core" subtitle="Buttons in every variant & size" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: ButtonVariant;
  /** @default "md" */
  size?: ButtonSize;
  /** Element rendered before the label (an icon). */
  iconLeft?: React.ReactNode;
  /** Element rendered after the label. */
  iconRight?: React.ReactNode;
  /** Shows a spinner and disables the button. */
  loading?: boolean;
  /** Stretch to fill the container width. */
  full?: boolean;
}

/**
 * Neon-green primary, neutral secondary, quiet ghost, and a danger variant.
 */
export function Button(props: ButtonProps): JSX.Element;
