import React from "react";

export interface TextProps {
  children: React.ReactNode;
  variant?: "body" | "caption" | "subtitle";
  color?: "primary" | "secondary" | "muted";
  weight?: "normal" | "medium" | "bold";
  align?: "left" | "center" | "right";
  className?: string;
}
