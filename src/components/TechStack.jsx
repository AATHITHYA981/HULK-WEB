import React from 'react';
import { motion } from 'framer-motion';

const techGroups = [
  {
    category: "Development",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Node.js", "Python"]
  },
  {
    category: "AI & Automation",
    items: ["OpenAI API", "HuggingFace", "LangChain", "Selenium", "Pandas", "Scikit-Learn"]
  },
  {
    category: "Marketing & Tools",
    items: ["SEO", "Google Analytics", "Canva", "Photoshop", "Premiere Pro", "After Effects", "Figma"]
  }
];

const TechStack = () => {
  return (
    <section id="tech" className="py-24 bg-gray-50 dark:bg-dark relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gray-200 dark:bg-white/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary-light tracking-[0.2em] uppercase mb-4"
          >
            My Arsenal
          </motion.h2>
          <motion.h3
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter"
          >
            Tech & <span className="text-gradient">Tools</span>
          </motion.h3>
        </div>

        <div className="space-y-12">
          {techGroups.map((group, gIdx) => (
            <motion.div 
              key={gIdx} 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: gIdx * 0.2 }}
            >
              <h4 className="text-gray-500 font-bold uppercase tracking-widest text-xs mb-6 text-center md:text-left">
                {group.category}
              </h4>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {group.items.map((tech, tIdx) => (
                   <motion.div
                     key={tIdx}
                     initial={{ opacity: 0, scale: 0.5, y: 20 }}
                     whileInView={{ opacity: 1, scale: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ 
                       delay: (gIdx * 0.2) + (tIdx * 0.05),
                       type: "spring",
                       stiffness: 260,
                       damping: 20 
                     }}
                     whileHover={{ 
                       y: -5, 
                       scale: 1.05,
                       borderColor: 'rgba(124, 58, 237, 0.5)',
                       boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.2)'
                     }}
                     className="px-6 py-3 glass rounded-2xl text-gray-900 dark:text-white font-medium text-sm border border-gray-200 dark:border-white/5 transition-all cursor-default"
                   >
                     {tech}
                   </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
