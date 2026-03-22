import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-4 group">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden relative">
                <img 
                  src="https://thumbs.dreamstime.com/b/young-man-anime-style-character-vector-illustration-design-manga-boy-black-hair-faces-cartoon-face-male-isolated-281620889.jpg" 
                  alt="Aathithya" 
                  className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-3xl font-black text-white tracking-tighter">AATHITHYA</span>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-primary-light tracking-[0.2em] uppercase mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight">
              Crafting <br /> <span className="text-gradient">Digital Experiences</span> <br /> with Precision.
            </h3>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                I'm Aathithya, a BSc Computer Science student with a deep passion for building high-performance web applications and AI-driven solutions. My journey is fueled by a desire to solve real-world problems through automation and elegant code.
              </p>
              <p>
                At <span className="text-gray-900 dark:text-white font-bold">AATECH</span>, I focus on bridging the gap between complex AI technology and user-centric digital products. Whether it's a high-converting website or a custom AI agent, I deliver solutions that scale.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-black text-gray-900 dark:text-white mb-1">50+</h4>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-gray-900 dark:text-white mb-1">20+</h4>
                <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Happy Clients</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
