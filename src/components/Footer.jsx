import React from 'react';
import { Github, Linkedin, MessageSquare, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/AATHITHYA981' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/aathithya-n-8316b0390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { name: 'WhatsApp', icon: <MessageSquare size={20} />, href: 'https://wa.me/919042846208' },
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:aathithya6788@gmail.com' },
  ];

  return (
    <footer className="bg-white dark:bg-dark text-gray-600 dark:text-gray-400 py-12 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gradient mb-2 tracking-tighter">AATECH</h2>
            <p className="text-sm max-w-xs opacity-70">
              Empowering businesses with AI-driven web solutions and digital excellence.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary-light transition-colors p-2 glass rounded-full"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm font-medium">© {new Date().getFullYear()} AATECH by Aathithya.</p>
            <p className="text-xs mt-1 opacity-50">All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
