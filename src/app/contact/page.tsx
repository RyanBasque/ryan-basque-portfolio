"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Linkedin, Send, MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/ryan-basque-1688761b0/",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/wigbas/",
      color: "hover:text-pink-500",
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:ryanbasquedev@gmail.com",
      color: "hover:text-yellow-500",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-6 h-6" />,
      href: "https://wa.me/5511951083595",
      color: "hover:text-green-500",
    },
  ];

  return (
    <main className="flex-1 text-gray-200 pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <nav className="fixed top-0 left-0 w-full z-50 px-6 h-20 flex justify-between items-center backdrop-blur-sm bg-black/50">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          {t.nav.backToHome}
        </Link>
      </nav>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16"
      >
        {/* Left Column: Info & Socials */}
        <div className="space-y-12">
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
              {t.contact.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-md">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">{t.contact.connectTitle}</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className={`p-4 rounded-full bg-zinc-900 border border-zinc-800 transition-all duration-300 hover:scale-110 hover:border-gray-600 ${social.color}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-400">{t.contact.available}</span>
            </div>
            <p className="text-gray-400 text-sm">
              {t.contact.location}
            </p>
          </motion.div>
        </div>

        {/* Right Column: Contact Form */}
        <motion.div variants={itemVariants} className="relative">
            {/* Decorative background blur */}
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-3xl opacity-20 pointer-events-none" />
            
            <form
              onSubmit={handleSubmit}
              className="relative bg-zinc-950 p-8 md:p-10 rounded-2xl border border-zinc-800 shadow-2xl space-y-6"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t.contact.successTitle}</h3>
                  <p className="text-gray-400">{t.contact.successText}</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm text-blue-400 hover:text-blue-300 underline"
                  >
                    {t.contact.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      {t.contact.formName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t.contact.formNamePlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      {t.contact.formEmail}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder={t.contact.formEmailPlaceholder}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder={t.contact.formMessagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-white text-black font-bold text-lg hover:bg-gray-200 disabled:opacity-70 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      t.contact.formSending
                    ) : (
                      <>
                        {t.contact.formButton}
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-32 text-center space-y-6 max-w-2xl mx-auto"
      >
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {t.contact.thankYouTitle}
        </h2>
        <p className="text-gray-400 text-lg">
          {t.contact.thankYouText}
        </p>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-4xl pt-4"
        >
          👋
        </motion.div>
      </motion.div>
    </main>
  );
}
