"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Coffee, Music, Globe, Book, Code, Heart, ArrowRight } from "lucide-react";
import TiltImage from "@/components/TiltImage";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutMe() {
  const { t } = useLanguage();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex-1 bg-black text-gray-200 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-sm bg-black/50">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          {t.nav.backToHome}
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-24"
        >
          {/* Hero Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={item} className="order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-6">
                {t.about.heroTitle}
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                {t.about.heroText1}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-6">
                {t.about.heroText2}
              </p>
              <div className="flex gap-4 text-sm text-gray-500 font-mono">
                <span>📍 São Paulo, BR</span>
                <span>•</span>
                <span>🚀 {t.contact.available}</span>
              </div>
            </motion.div>
            <motion.div variants={item} className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="w-full max-w-xs">
                <TiltImage />
              </div>
            </motion.div>
          </section>

          {/* The Story */}
          <section className="space-y-8">
            <motion.div variants={item} className="border-l-2 border-zinc-800 pl-8 py-2 space-y-12">
              <div className="relative">
                <span className="absolute -left-[41px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 ring-4 ring-black"></span>
                <h3 className="text-xl font-bold text-white mb-2">{t.about.timeline1Year}</h3>
                <h4 className="text-lg font-semibold text-gray-300">{t.about.timeline1Title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {t.about.timeline1Desc}
                </p>
              </div>
              
              <div className="relative">
                <span className="absolute -left-[41px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 ring-4 ring-black"></span>
                <h3 className="text-xl font-bold text-white mb-2">{t.about.timeline2Year}</h3>
                <h4 className="text-lg font-semibold text-gray-300">{t.about.timeline2Title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {t.about.timeline2Desc}
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[41px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-800 ring-4 ring-black"></span>
                <h3 className="text-xl font-bold text-white mb-2">{t.about.timeline3Year}</h3>
                <h4 className="text-lg font-semibold text-gray-300">{t.about.timeline3Title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {t.about.timeline3Desc}
                </p>
              </div>
            </motion.div>
          </section>

          {/* Beyond Code */}
          <motion.section variants={item} className="bg-zinc-900/30 rounded-3xl p-8 md:p-12 border border-zinc-800/50">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.about.interestsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-zinc-900 rounded-full text-blue-400">
                  <Coffee className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-white">{t.about.coffee}</h3>
                <p className="text-sm text-gray-500">
                  {t.about.coffeeDesc}
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-zinc-900 rounded-full text-purple-400">
                  <Music className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-white">{t.about.music}</h3>
                <p className="text-sm text-gray-500">
                  {t.about.musicDesc}
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-zinc-900 rounded-full text-green-400">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-white">{t.about.travel}</h3>
                <p className="text-sm text-gray-500">
                  {t.about.travelDesc}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Philosophy */}
          <motion.section variants={item} className="text-center space-y-6 max-w-2xl mx-auto">
            <Heart className="w-8 h-8 text-red-500 mx-auto" />
            <h2 className="text-2xl font-bold">{t.about.philosophyTitle}</h2>
            <blockquote className="text-xl italic text-gray-400">
              {t.about.philosophyQuote}
            </blockquote>
          </motion.section>

          {/* CTA Button */}
          <motion.div variants={item} className="flex justify-center pt-8">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg tracking-wide overflow-hidden"
              >
                <span className="relative z-10">{t.about.viewProjects}</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.button>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}
