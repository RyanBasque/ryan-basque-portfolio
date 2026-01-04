"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import projectsDataJson from "@/data/projects.json";

export default function Projects() {
  const { t } = useLanguage();

  const projects = Object.entries(projectsDataJson).map(([slug, project]: [string, any]) => ({
    slug,
    title: t.projects[project.titleKey],
    description: t.projects[project.descKey],
    tags: project.tags,
    link: "#",
    github: "#",
    gradient: project.gradient
  }));

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <main className="flex-1 bg-black text-gray-200 selection:bg-blue-500/30">
      <nav className="fixed top-0 left-0 w-full z-50 px-6 h-20 flex justify-between items-center backdrop-blur-sm bg-black/50">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          {t.nav.backToHome}
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-20"
        >
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              {t.projects.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative grid md:grid-cols-2 gap-8 items-center bg-zinc-900/30 rounded-3xl p-6 md:p-10 border border-zinc-800/50 hover:border-zinc-700 transition-colors"
              >
                {/* Project Preview (Placeholder for Image) */}
                <Link href={`/projects/${project.slug}`} className="block w-full">
                  <div className={`aspect-video w-full rounded-2xl bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity shadow-2xl flex items-center justify-center cursor-pointer`}>
                      <span className="text-white/20 font-bold text-4xl tracking-widest uppercase">{t.projects.preview}</span>
                  </div>
                </Link>

                {/* Project Info */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Link href={`/projects/${project.slug}`}>
                      <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer">
                        {project.title}
                      </h3>
                    </Link>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag: string) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-gray-300 border border-zinc-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-4 pt-2">
                    <Link href={`/projects/${project.slug}`} className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </Link>
                    <Link href={project.github} className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 hover:border-white hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                      {t.projects.code}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.section 
            variants={item}
            className="mt-32 py-24 text-center space-y-8 border-t border-zinc-900"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              {t.projects.ctaTitle}
            </h2>
            <p className="text-xl text-gray-400 max-w-xl mx-auto">
              {t.projects.ctaText}
            </p>
            
            <div className="flex justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg tracking-wide overflow-hidden hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20"
                  >
                    <span className="relative z-10">{t.projects.ctaButton}</span>
                    <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </motion.button>
                </Link>
            </div>
          </motion.section>

        </motion.div>
      </div>
    </main>
  );
}
