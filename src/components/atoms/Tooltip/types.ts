import { ReactNode } from "react";

export interface TooltipProps {
  children: ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
}

export interface TooltipContentProps {
  isVisible: boolean;
  position: "top" | "bottom" | "left" | "right";
}

export interface TooltipArrowProps {
  position: "top" | "bottom" | "left" | "right";
}
