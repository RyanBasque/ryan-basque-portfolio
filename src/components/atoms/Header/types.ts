export interface HeaderProps {
  showMenu?: boolean;
  user?: {
    name: string;
    avatar?: string;
    email?: string;
  } | null;
}
