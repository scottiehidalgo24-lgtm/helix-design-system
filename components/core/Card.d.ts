import React from "react";

/**
 * Surface card with optional header — hairline border on near-black fill.
 * @startingPoint section="Core" subtitle="Surface card with header" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Green border + neon glow for featured / active cards. */
  glow?: boolean;
  /** Hover lift + raised surface (use for clickable cards). */
  interactive?: boolean;
  /** Inner padding in px. @default 20 */
  padding?: number;
}

export interface CardHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Right-aligned actions (buttons, menu). */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Base surface container for Helix — hairline border on near-black fill.
 */
export function Card(props: CardProps): JSX.Element;
export function CardHeader(props: CardHeaderProps): JSX.Element;
