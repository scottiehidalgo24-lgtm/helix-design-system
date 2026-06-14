import React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL; falls back to initials when absent. */
  src?: string;
  /** Full name — used for initials and alt text. */
  name?: string;
  /** Pixel diameter. @default 36 */
  size?: number;
  /** Rounded-square instead of circle (orgs / models). */
  square?: boolean;
}

/** User / org / model identity chip with initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
