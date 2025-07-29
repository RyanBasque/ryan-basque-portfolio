"use client";
import { usePathname } from "next/navigation";

export const useCurrentRoute = () => {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";
  const isProfilePage = pathname === "/perfil";
  const isHomePage = pathname === "/";

  const hideLoginRoutes = ["/login"];
  const shouldShowLogin = pathname ? !hideLoginRoutes.includes(pathname) : true;

  return {
    pathname,
    isLoginPage,
    isProfilePage,
    isHomePage,
    shouldShowLogin,
  };
};
