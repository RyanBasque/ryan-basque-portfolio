"use client";

import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar, User, Code2, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useRef } from "react";
import projectsDataJson from "@/data/projects.json";

export default function ProjectDetails() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const projectsData: Record<string, any> = projectsDataJson;

  const project = projectsData[slug as string];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-blue-400 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-black min-h-screen text-gray-200 selection:bg-blue-500/30">
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-sm bg-black/50">
        <Link 
          href="/projects" 
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </nav>

      {/* Hero Section with Parallax */}
      <section ref={containerRef} className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
                {t.projects[project.titleKey]}
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed">
                {t.projects[project.descKey]}
              </p>
            </div>

            {/* Visual Anchor / Mockup Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900/50 mt-12"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/10 font-bold text-6xl md:text-8xl tracking-widest uppercase select-none">
                  Project Preview
                </span>
              </div>
              {/* Browser Chrome UI Decoration */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-black/20 backdrop-blur-md border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-20 bg-black pb-32 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Project Info Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-zinc-800 py-12"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wider">Year</span>
              </div>
              <p className="text-xl font-semibold text-white">{project.year}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <User className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wider">Role</span>
              </div>
              <p className="text-xl font-semibold text-white">{t.projects[project.roleKey]}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 mb-1">
                <Code2 className="w-4 h-4" />
                <span className="text-sm uppercase tracking-wider">Tech Stack</span>
              </div>
              <p className="text-xl font-semibold text-white">{project.tags.join(", ")}</p>
            </div>
          </motion.div>

          {/* Showcase / Vitrine */}
          <div className="space-y-12">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white flex items-center gap-3"
            >
              <Layers className="w-8 h-8 text-blue-500" />
              Key Features
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.projects[project.featuresKey].map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: (i: number) => ({ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        delay: i * 0.1,
                        type: "spring",
                        stiffness: 50,
                        damping: 20
                      }
                    }),
                    hover: { 
                      y: -8, 
                      scale: 1.02,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }
                  }}
                  className="group relative aspect-[2.5/1] md:aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-500 transition-colors shadow-lg hover:shadow-2xl hover:shadow-blue-900/10"
                >
                  {/* Background Gradient Pulse */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0`}
                    variants={{
                      hover: { opacity: 0.15 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                    variants={{
                      initial: { x: "-150%" },
                      hover: { x: "150%" }
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 text-center z-10">
                    <p className="text-base md:text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      {feature}
                    </p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-6 justify-center pt-12">
            <Link href="#" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden">
              <span className="relative z-10">Visit Live Site</span>
              <ExternalLink className="w-5 h-5 relative z-10 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            
            <Link href="#" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 text-white border border-zinc-800 rounded-full font-bold text-lg overflow-hidden hover:border-zinc-600 transition-colors">
              <span className="relative z-10">View Source</span>
              <Github className="w-5 h-5 relative z-10" />
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
