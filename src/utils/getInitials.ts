export const getInitials = (name?: string) => {
  if (!name) return "N.D";
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .substring(0, 2)
    .toUpperCase();
};
