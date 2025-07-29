import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import StyledComponentsRegistry from "@/lib/registry";

import Header from "@/components/atoms/Header";
import Footer from "@/components/atoms/Footer";
import AuthProvider from "@/components/providers/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Portal",
  description:
    "Plataforma moderna para desenvolvedores showcasearem seus projetos do GitHub",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        <AuthProvider>
          <StyledComponentsRegistry>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
          </StyledComponentsRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
