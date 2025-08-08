"use client";
import React, { useEffect } from "react";

import { ModalProps } from "./types";
import * as S from "./styles";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscapeKey = true,
  className = "",
}: ModalProps): React.JSX.Element | null => {
  // Handle escape key press
  useEffect(() => {
    if (!closeOnEscapeKey || !isOpen) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [isOpen, onClose, closeOnEscapeKey]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  // Handle backdrop click
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnBackdropClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  // Don't render if not open
  if (!isOpen) return null;

  const CloseIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <S.ModalBackdrop $isOpen={isOpen} onClick={handleBackdropClick}>
      <S.ModalContainer
        $isOpen={isOpen}
        $size={size}
        className={className}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {(title || showCloseButton) && (
          <S.ModalHeader>
            {title && (
              <S.ModalTitle id="modal-title">
                {title}
              </S.ModalTitle>
            )}
            {showCloseButton && (
              <S.CloseButton
                onClick={onClose}
                aria-label="Fechar modal"
                type="button"
              >
                <CloseIcon />
              </S.CloseButton>
            )}
          </S.ModalHeader>
        )}

        <S.ModalContent>
          {children}
        </S.ModalContent>
      </S.ModalContainer>
    </S.ModalBackdrop>
  );
};

export default Modal;
