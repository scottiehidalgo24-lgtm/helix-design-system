import React from "react";

export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  /** @default "md" */
  size?: "sm" | "md";
  /** Optional inline label rendered to the right. */
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

/** On/off toggle — neon green and glowing when on. */
export function Switch(props: SwitchProps): JSX.Element;
