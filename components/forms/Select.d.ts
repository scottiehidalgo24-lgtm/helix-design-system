import React from "react";

export interface SelectOption {
  value: string;
  label: React.ReactNode;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** Array of `{value,label}` or plain strings. */
  options?: (SelectOption | string)[];
  /** @default "md" */
  size?: "sm" | "md" | "lg";
}

/** Styled native dropdown with a green focus ring. */
export function Select(props: SelectProps): JSX.Element;
