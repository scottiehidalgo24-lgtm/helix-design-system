import React from "react";

/**
 * Text input with label, adornments, and validation.
 * @startingPoint section="Forms" subtitle="Inputs with label, prefix & error" viewport="700x180"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "size"> {
  label?: React.ReactNode;
  /** Helper text below the field. */
  hint?: React.ReactNode;
  /** Error message — turns the field red and replaces the hint. */
  error?: React.ReactNode;
  /** Leading adornment (icon or short text). */
  prefix?: React.ReactNode;
  /** Trailing adornment (icon, unit, button). */
  suffix?: React.ReactNode;
  /** Monospace value styling for keys / IDs / code. */
  mono?: boolean;
  /** @default "md" */
  size?: "sm" | "md" | "lg";
}

/**
 * Text input with label, adornments, and validation.
 */
export function Input(props: InputProps): JSX.Element;
