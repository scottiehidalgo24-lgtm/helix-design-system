import React from "react";

export interface TabItem {
  value: string;
  label: React.ReactNode;
  /** Optional trailing count/badge. */
  badge?: React.ReactNode;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: TabItem[];
  /** Active tab value. */
  value: string;
  onChange?: (value: string) => void;
}

/** Underline segmented navigation for in-page sections. */
export function Tabs(props: TabsProps): JSX.Element;
