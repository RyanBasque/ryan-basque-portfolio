export interface HeaderProps {
  showMenu?: boolean;
  showLogin?: boolean;
  user?: {
    name: string;
    avatar?: string;
    email?: string;
  } | null;
}
