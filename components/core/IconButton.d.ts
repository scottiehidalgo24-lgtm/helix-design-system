import React from "react";

export type IconButtonVariant = "ghost" | "solid" | "accent";
export type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default "ghost" */
  variant?: IconButtonVariant;
  /** @default "md" */
  size?: IconButtonSize;
  /** Highlights the button (e.g. active nav item). */
  active?: boolean;
  /** Accessible label (also used as tooltip title). */
  label?: string;
}

/** Square single-icon button — toolbars, nav rails, table row actions. */
export function IconButton(props: IconButtonProps): JSX.Element;
