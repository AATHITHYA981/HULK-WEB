import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Zap } from 'lucide-react';
import videoBg from '../assets/11.mp4';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black transition-colors duration-300">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 dark:from-black/80 dark:via-black/40 dark:to-black/90" />
      </div>

      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 dark:bg-secondary/20 rounded-full blur-[120px]" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[100px]" />



      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 glass rounded-full text-sm font-semibold text-primary-light mb-6 border-primary/20">
            Available for freelance projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter"
        >
          Hi, I'm <span className="text-gradient">Aathithya</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Web Developer <span className="mx-2 text-primary">•</span> AI Agent Dev <span className="mx-2 text-primary">•</span> Freelancer
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="group px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-bold transition-all border border-white/20"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 text-white"
        >
          <div className="flex items-center gap-2">
            <Code size={18} />
            <span className="text-sm font-medium">Modern Web</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain size={18} />
            <span className="text-sm font-medium">Smart AI</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={18} />
            <span className="text-sm font-medium">Fast Performance</span>
          </div>
        </motion.div>
      </div>

      {/* Hero Animation Element */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-900/30 dark:text-white/30"
      >
        <div className="w-6 h-10 border-2 border-gray-900/20 dark:border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-gray-900/40 dark:bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
