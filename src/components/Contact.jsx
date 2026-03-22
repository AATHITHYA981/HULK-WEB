import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Using FormSubmit.co for free hassle-free email sending
    try {
      const response = await fetch("https://formsubmit.co/ajax/aathithya6788@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset(); // clear form
        setTimeout(() => setStatus(''), 5000); // reset button after 5 seconds
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const socials = [
    { icon: <Github />, href: 'https://github.com/AATHITHYA981', name: 'GitHub' },
    { icon: <Linkedin />, href: 'https://www.linkedin.com/in/aathithya-n-8316b0390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', name: 'LinkedIn', target: '_blank', rel: 'noopener noreferrer' },
    { icon: <MessageSquare />, href: 'https://wa.me/919042846208', name: 'WhatsApp' },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary-light tracking-[0.2em] uppercase mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter"
          >
            Let's Build Something <span className="text-gradient">Epic.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass p-8 rounded-3xl border border-gray-200 dark:border-white/5 h-full">
               <h4 className="text-2xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Contact Information</h4>
               <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
               </p>

               <div className="space-y-6">
                 <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary-light group-hover:bg-primary group-hover:text-white transition-all">
                       <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email Me</p>
                      <p className="text-gray-900 dark:text-white font-medium">aathithya6788@gmail.com</p>
                    </div>
                 </div>

                 <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary-light group-hover:bg-secondary group-hover:text-white transition-all">
                       <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">WhatsApp</p>
                      <p className="text-gray-900 dark:text-white font-medium">+91-9042846208</p>
                    </div>
                 </div>
               </div>

               <div className="mt-12">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-4">Follow Me</p>
                  <div className="flex gap-4">
                    {socials.map((s, i) => (
                      <a 
                        key={i} 
                        href={s.href} 
                        className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-primary-light hover:border-primary/50 transition-all border border-transparent"
                        aria-label={s.name}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required 
                      placeholder="Jane Doe"
                      className="w-full px-6 py-4 glass rounded-2xl border border-gray-200 dark:border-white/5 focus:border-primary/50 focus:outline-none text-gray-900 dark:text-white transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      placeholder="jane@example.com"
                      className="w-full px-6 py-4 glass rounded-2xl border border-gray-200 dark:border-white/5 focus:border-primary/50 focus:outline-none text-gray-900 dark:text-white transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Subject</label>
                 <select name="subject" className="w-full px-6 py-4 glass rounded-2xl border border-gray-200 dark:border-white/5 focus:border-primary/50 focus:outline-none text-gray-900 dark:text-white transition-all">
                    <option value="Web Development" className="bg-white dark:bg-dark">Web Development</option>
                    <option value="AI Agent / Assistant" className="bg-white dark:bg-dark">AI Agent / Assistant</option>
                    <option value="Digital Marketing" className="bg-white dark:bg-dark">Digital Marketing</option>
                    <option value="Video / Image Editing" className="bg-white dark:bg-dark">Video / Image Editing</option>
                    <option value="Other Inquiry" className="bg-white dark:bg-dark">Other Inquiry</option>
                 </select>
              </div>

              <div className="space-y-2">
                 <label className="text-xs font-bold text-gray-500 uppercase tracking-widest px-1">Your Message</label>
                 <textarea 
                   name="message"
                   rows="5" 
                   required
                   placeholder="Tell me about your project..."
                   className="w-full px-6 py-4 glass rounded-2xl border border-gray-200 dark:border-white/5 focus:border-primary/50 focus:outline-none text-gray-900 dark:text-white transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
                 />
              </div>

              <button
                disabled={status === 'sending' || status === 'success'}
                className="w-full py-4 bg-primary hover:bg-primary-dark disabled:bg-gray-800 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary/20 group"
              >
                {status === 'success' ? (
                  <>Sent Successfully <CheckCircle size={20} className="text-green-400" /></>
                ) : status === 'error' ? (
                  <>Failed to Send - Try Email Directly!</>
                ) : status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
