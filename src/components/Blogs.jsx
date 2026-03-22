import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "How Missing AI Might Kill Your Next Big Project",
    excerpt: "Integrating AI is no longer optional. Discover the 5 vital ways bringing artificial intelligence into your team's workflow can save hours of manual coding.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    category: "AI Automation",
    date: "Mar 15, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Why Minimalist Web Design Converts Better in 2026",
    excerpt: "The truth behind high bounce rates: learn how trimming the visual fat and focusing on UX performance can skyrocket your marketing metrics this year.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    category: "Web Development",
    date: "Mar 02, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Essential Video Editing Workflows for YouTube",
    excerpt: "Stop spending 10 hours on a single video. Here is my exact Premiere Pro folder structure and hotkey setup that halved my editing time.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop",
    category: "Video Editing",
    date: "Feb 18, 2026",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Mastering the Tailwind Grid for Complex Dashboard UIs",
    excerpt: "Struggling with CSS Grid? Learn how to leverage Tailwind's utility classes to build heavily responsive, data-packed admin dashboards in minutes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    category: "Web Development",
    date: "Jan 29, 2026",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "From 0 to Automate: My First Python Web Scraper",
    excerpt: "A beginner-friendly guide to extracting data from the web legally and ethically. Stop copy-pasting and let Beautiful Soup do the heavy lifting for your data projects.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    category: "Scripting",
    date: "Jan 12, 2026",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Color Theory for Developers Who Can't Design",
    excerpt: "You don't need an art degree to make your app look good. Here is a math-based approach to choosing UI colors that look premium every single time.",
    image: "https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?q=80&w=2070&auto=format&fit=crop",
    category: "Design",
    date: "Dec 05, 2025",
    readTime: "5 min read",
  }
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-24 bg-gray-50 dark:bg-dark relative transition-colors duration-300 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-primary-light tracking-[0.2em] uppercase mb-4"
            >
              Latest Insights
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter"
            >
              Thoughts & <span className="text-gradient">Articles</span>
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-primary-light transition-colors group">
              View All Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className="group glass rounded-3xl border border-gray-200 dark:border-white/5 overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full bg-white dark:bg-[#0a0a0b]"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-medium text-gray-400 mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-secondary-light" />
                    {post.date}
                  </div>
                  <div className="w-1 h-1 rounded-full bg-gray-600"></div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    {post.readTime}
                  </div>
                </div>

                <a href="#" className="block mb-4 group-hover:text-primary-light transition-colors">
                  <h4 className="text-xl font-black text-gray-900 dark:text-white leading-snug tracking-tight line-clamp-2">
                    {post.title}
                  </h4>
                </a>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center text-gray-500">
                      <User size={14} />
                    </div>
                    <span className="text-xs font-bold text-gray-900 dark:text-white">By Aathithya</span>
                  </div>
                  <a href="#" className="text-secondary-light hover:text-secondary group-hover:translate-x-1 transition-all">
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-primary-light transition-colors">
              View All Articles <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
