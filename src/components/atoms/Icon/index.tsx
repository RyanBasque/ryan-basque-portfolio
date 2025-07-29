import React from "react";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon = ({ name, size = 20, color = "currentColor" }: IconProps) => {
  const getIcon = () => {
    switch (name) {
      case "feed":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      case "project":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
          </svg>
        );
      case "user":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        );
      case "login":
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
            <path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v12z" />
          </svg>
        );
      default:
        return (
          <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
            <circle cx="12" cy="12" r="3" />
          </svg>
        );
    }
  };

  return <>{getIcon()}</>;
};

export default Icon;
