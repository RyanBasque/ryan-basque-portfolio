export interface User {
  name?: string;
  email?: string;
  image?: string;
  sessionExpires?: string;
}

export interface UserProfileProps {
  user: User;
  onLogout?: () => void;
  showLogoutButton?: boolean;
  variant?: "default" | "menu";
  size?: "medium" | "large";
}
