import React from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "small" | "medium" | "large" | "fullscreen";
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscapeKey?: boolean;
  className?: string;
}

export interface StyledModalProps {
  $isOpen: boolean;
  $size: "small" | "medium" | "large" | "fullscreen";
}

export interface ModalBackdropProps {
  $isOpen: boolean;
}
