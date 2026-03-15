import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", dark = false }) => {
  return (
    <section id={id} className={`relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden ${dark ? 'bg-black/40' : ''} ${className}`}>
      {/* Background Grid for Sections */}
      <div className="absolute inset-0 bg-digital-grid opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {title && (
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px w-12 bg-primary"></div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase">Section</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {title}<span className="text-primary">.</span>
            </h2>
            {subtitle && <p className="text-slate-400 max-w-2xl text-lg">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  tilt?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "", hover = true, tilt = false }) => {
  return (
    <motion.div 
      whileHover={hover ? { 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" } 
      } : {}}
      className={`glass-dark rounded-2xl p-8 transition-all duration-500 neon-border ${className}`}
    >
      {children}
    </motion.div>
  );
};
