import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Bot, Sparkles, Megaphone, Video, Image as ImageIcon } from 'lucide-react';

const services = [
  {
    title: "Web Development",
    description: "Modern, high-performance websites built with React and Tailwind CSS for maximum impact.",
    icon: <Code2 size={40} className="text-primary-light" />,
  },
  {
    title: "AI Agent Development",
    description: "Custom autonomous agents to automate your business workflows and increase efficiency.",
    icon: <Bot size={40} className="text-secondary-light" />,
  },
  {
    title: "AI Assistant Creation",
    description: "Intelligent chatbots and virtual assistants tailored to your specific needs and data.",
    icon: <Sparkles size={40} className="text-purple-400" />,
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to grow your brand and reach global audiences effectively.",
    icon: <Megaphone size={40} className="text-blue-400" />,
  },
  {
    title: "Video Editing",
    description: "Professional video editing for short-form content, ads, and brand storytelling.",
    icon: <Video size={40} className="text-primary-light" />,
  },
  {
    title: "Image Editing",
    description: "High-quality graphic design and photo editing for a premium brand aesthetic.",
    icon: <ImageIcon size={40} className="text-secondary-light" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-dark relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary-light tracking-[0.2em] uppercase mb-4"
          >
            AATECH Solutions
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter"
          >
            Premium Freelancing <span className="text-gradient">Services</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight group-hover:text-primary-light transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
