import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Bot, Video, Image as ImageIcon, ArrowRight, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 1,
    tag: "Web Development",
    icon: <Code2 size={22} className="text-secondary-light" />,
    title: "Full-Stack Web Applications",
    description:
      "High-performance, responsive websites and web apps built with React, Node.js, and modern APIs. From SaaS dashboards to e-commerce platforms — pixel-perfect, blazing fast, and fully scalable.",
    image: "/project_webdev.png",
    highlights: ["React / Next.js", "REST & GraphQL APIs", "Tailwind CSS", "Database Design"],
    color: "from-secondary/20 to-primary/10",
    borderColor: "hover:border-secondary/40",
  },
  {
    id: 2,
    tag: "AI Agent Development",
    icon: <Bot size={22} className="text-primary-light" />,
    title: "Custom AI Agents & Automation",
    description:
      "End-to-end AI agents that automate business workflows, scrape data, respond to leads, and process documents. Built with OpenAI, LangChain, and custom Python pipelines.",
    image: "/project_ai_agent.png",
    highlights: ["OpenAI / GPT-4", "LangChain Agents", "Selenium Automation", "Custom RAG Pipelines"],
    color: "from-primary/20 to-secondary/10",
    borderColor: "hover:border-primary/40",
  },
  {
    id: 3,
    tag: "Video Editing",
    icon: <Video size={22} className="text-purple-400" />,
    title: "Cinematic Video Production",
    description:
      "Professional video editing for YouTube, ads, brand content, and short-form reels. Motion graphics, colour grading, and cinematic storytelling that captures attention and drives engagement.",
    image: "/project_video.png",
    highlights: ["Premiere Pro", "After Effects", "Colour Grading", "Motion Graphics"],
    color: "from-purple-600/20 to-primary/10",
    borderColor: "hover:border-purple-500/40",
  },
  {
    id: 4,
    tag: "Image Editing",
    icon: <ImageIcon size={22} className="text-pink-400" />,
    title: "Premium Graphic Design",
    description:
      "Creative photo manipulation, brand identity design, and digital art. From product retouching to social media visuals — every image crafted to elevate your brand's visual presence.",
    image: "/project_image_editing.png",
    highlights: ["Photoshop", "Illustrator", "Brand Identity", "Social Media Assets"],
    color: "from-pink-600/20 to-purple-600/10",
    borderColor: "hover:border-pink-500/40",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-dark transition-colors duration-300 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary-light tracking-[0.2em] uppercase mb-4"
          >
            My Work
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter"
          >
            What I <span className="text-gradient">Build & Create</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            A showcase of my expertise across web development, AI engineering, and creative production.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              className={`group glass rounded-3xl border border-gray-200 dark:border-white/5 ${project.borderColor} transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-${project.color.split(' ')[0].replace('from-', '').split('/')[0]}/20 hover:-translate-y-2`}
            >
              {/* Project Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${project.color} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="flex items-center gap-2 px-3 py-1.5 glass rounded-full text-xs font-bold text-white border border-white/10">
                    {project.icon}
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h4 className="text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight group-hover:text-primary-light transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech highlights */}
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
          >
            <Sparkles size={18} />
            Hire Me for Your Project
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
