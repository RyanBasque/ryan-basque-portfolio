import React from "react";

export const breakDescriptionParagraph = (description: string) => {
  return description
    .split("\n")
    .map((paragraph, index) =>
      React.createElement("p", { key: index }, paragraph)
    );
};
