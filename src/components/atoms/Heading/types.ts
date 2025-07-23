import React from "react";

export interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  color?: "primary" | "secondary" | "accent";
  weight?: "normal" | "medium" | "bold";
  align?: "left" | "center" | "right";
  className?: string;
}

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
