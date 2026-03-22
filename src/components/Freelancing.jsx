import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Quote } from 'lucide-react';

const reasons = [
  {
    title: "Fast Delivery",
    description: "I value your time. My streamlined process ensures your project is delivered on schedule without compromising quality.",
  },
  {
    title: "Smart AI Solutions",
    description: "Integrating the latest AI technology to give your business a competitive edge and automate complex tasks.",
  },
  {
    title: "Affordable Pricing",
    description: "Premium quality shouldn't break the bank. I offer flexible pricing models suited for startups and established brands.",
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechFlow",
    content: "Aathithya delivered an exceptional AI-driven platform that exceeded our expectations. Highly professional and skilled.",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Miller",
    role: "Marketing Director",
    content: "The website designed by AATECH is not only beautiful but also converts users like crazy. Amazing work!",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
];

const Freelancing = () => {
  return (
    <section id="freelancing" className="py-24 bg-white dark:bg-dark relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-primary-light tracking-[0.2em] uppercase mb-4">Why AATECH?</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tighter leading-tight">
              Modern Solutions for <br /> <span className="text-gradient">Modern Businesses.</span>
            </h3>
            
            <div className="space-y-8 mt-12">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <CheckCircle2 size={16} className="text-primary-light group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight group-hover:text-primary-light transition-colors">{reason.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="space-y-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/5 relative"
                >
                  <Quote className="absolute top-6 right-8 text-primary/10" size={48} />
                  <div className="flex items-center gap-1 mb-4 text-yellow-500">
                    {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed relative z-10">"{t.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-primary/20" />
                    <div>
                      <h5 className="text-gray-900 dark:text-white font-bold">{t.name}</h5>
                      <p className="text-xs text-primary-light uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[100px]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Freelancing;
