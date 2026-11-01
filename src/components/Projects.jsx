import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, ExternalLink, Github, Star, Filter, 
  Sparkles, Layers, ArrowUpRight, X, Info
} from 'lucide-react';
import { projectsData } from '../data/communityData';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'mobile', label: 'Mobile (Flutter/Android)' },
    { id: 'web', label: 'Web & Open Source' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categoryKey === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
              <FolderGit2 size={14} />
              <span>Built by GDG Community</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our Projects &amp; Open Source Lab
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Explore real-world software shipped by GDG student teams—powered by Gemini AI, Flutter, Google Cloud, and Kubernetes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm self-start md:self-auto"
          >
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span>Over 1,200+ GitHub Stars across projects</span>
          </motion.div>
        </div>

        {/* Animated Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <Filter size={16} className="text-slate-400 flex-shrink-0 mr-1" />
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap focus:outline-none ${
                  isSelected
                    ? 'text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {/* Framer motion active indicator pill */}
                {isSelected && (
                  <motion.div
                    layoutId="categoryActivePill"
                    className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-md shadow-blue-500/25"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                {cat.label}
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid with AnimatePresence and Layout Morphing */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* 16:9 Thumbnail Image Container */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Category Pill Tag Overlay */}
                    <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-slate-700">
                      {project.category}
                    </div>

                    {/* Stars Badge Overlay */}
                    <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-md text-amber-400 text-xs font-semibold px-2 py-1 rounded-full border border-slate-700 flex items-center gap-1">
                      <Star size={12} className="fill-amber-400" />
                      <span>{project.stars}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Subtitle / Author */}
                    <div className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-1">
                      {project.author}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1 focus:outline-none"
                  >
                    <Info size={14} />
                    <span>Learn Details</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                      title="View GitHub Repository"
                    >
                      <Github size={17} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 text-xs font-semibold"
                      aria-label={`Open live demo of ${project.title}`}
                      title="Open Live Preview"
                    >
                      <span>Demo</span>
                      <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal with Framer Motion Animation */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProject(null)}
                className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 z-10"
              >
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={activeModalProject.image}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    {activeModalProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                    {activeModalProject.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-3 leading-relaxed">
                    {activeModalProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    Architecture &amp; Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github size={16} />
                    <span>View GitHub</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={activeModalProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-colors"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
