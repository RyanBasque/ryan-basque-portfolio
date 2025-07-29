export const getInitials = (name?: string) => {
  if (!name) return "Não Definido";
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .substring(0, 2)
    .toUpperCase();
};
