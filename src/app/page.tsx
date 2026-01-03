"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import TiltImage from "@/components/TiltImage";

export default function Home() {
  const { t } = useLanguage();
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-8 pt-32 pb-12 md:p-24 bg-black text-gray-200">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed left-0 top-0 flex w-full justify-start pl-6 pr-36 border-b border-gray-800 bg-gradient-to-b from-zinc-900 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:justify-center lg:pl-4 lg:pr-4 lg:rounded-xl lg:border lg:bg-gray-900/30 lg:p-4"
        >
          {t.home.role}
        </motion.p>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-blue-600 before:to-transparent before:opacity-10 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-to-t after:from-blue-900 after:via-blue-800 after:opacity-20 after:blur-2xl after:content-['']">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center z-10"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-6"
          >
            {t.home.title}
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            {t.home.subtitle}
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-12 flex gap-6 justify-center"
          >
             <Link href="/projects" className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                {t.home.viewWork}
             </Link>
             <Link href="/contact" className="px-8 py-3 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors">
                {t.home.contactMe}
             </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="pb-12 md:mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mt-32 gap-8  border-b border-zinc-900"
      >
        <Link href="/projects" className="block">
        <motion.div 
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-700 hover:bg-gray-900/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {t.home.projectsTitle}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowRight className="inline w-6 h-6" />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {t.home.projectsDesc}
          </p>
        </motion.div>
        </Link>

        <Link href="/about-me" className="block">
        <motion.div 
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-700 hover:bg-gray-900/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {t.home.aboutTitle}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowRight className="inline w-6 h-6" />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {t.home.aboutDesc}
          </p>
        </motion.div>
        </Link>

        <Link href="/contact" className="block">
        <motion.div 
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-700 hover:bg-gray-900/30 "
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {t.home.contactTitle}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowRight className="inline w-6 h-6" />
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {t.home.contactDesc}
          </p>
        </motion.div>
        </Link>
      </motion.div>

      <section id="about" className="w-full max-w-5xl mt-12 md:mt-26 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <TiltImage />
          
          <div className="space-y-6 text-left ">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              {t.home.aboutSectionTitle}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              {t.home.aboutSectionText1}
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              {t.home.aboutSectionText2}
            </p>
            
            <div className="pt-4">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">{t.home.techStack}</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm rounded-full bg-zinc-900 border border-zinc-800 text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
