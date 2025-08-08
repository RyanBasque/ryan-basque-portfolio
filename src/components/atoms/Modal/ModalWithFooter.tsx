"use client";
import React, { useEffect } from "react";

import { ModalWithFooterProps } from "./ModalWithFooter.types";
import * as S from "./styles";

const ModalWithFooter = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "medium",
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscapeKey = true,
  className = "",
}: ModalWithFooterProps): React.JSX.Element | null => {
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
  if (!isOpen) return null;

  return (
    <S.ModalBackdrop
      $isOpen={isOpen}
      onClick={
        closeOnBackdropClick
          ? (e) => {
              if (e.target === e.currentTarget) onClose();
            }
          : undefined
      }
    >
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
            {title && <S.ModalTitle id="modal-title">{title}</S.ModalTitle>}
            {showCloseButton && (
              <S.CloseButton
                onClick={onClose}
                aria-label="Fechar modal"
                type="button"
              >
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
              </S.CloseButton>
            )}
          </S.ModalHeader>
        )}

        <S.ModalContent>{children}</S.ModalContent>

        {footer && <S.ModalFooter>{footer}</S.ModalFooter>}
      </S.ModalContainer>
    </S.ModalBackdrop>
  );
};

export default ModalWithFooter;
