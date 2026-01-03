"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { title: t.nav.home, href: "/" },
    { title: t.nav.about, href: "/about-me" },
    { title: t.nav.projects, href: "/projects" },
    { title: t.nav.contact, href: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants: Variants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-6 z-[100] p-2 text-gray-300 hover:text-blue-400 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <div className="fixed top-6 right-20 z-[100]">
        <LanguageSwitcher />
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm"
            />
            
            {/* Side Menu */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 bottom-0 z-[90] w-full md:w-[35%] bg-zinc-950 border-l border-zinc-800 flex flex-col items-center justify-center shadow-2xl"
            >
              <nav className="flex flex-col gap-8 text-center">
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    custom={i}
                    variants={linkVariants}
                  >
                    <Link
                      href={item.href}
                      onClick={toggleMenu}
                      className="text-4xl font-light text-gray-300 hover:text-blue-500 transition-colors tracking-tight"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
