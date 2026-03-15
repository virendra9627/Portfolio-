/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  BarChart3, 
  Layout, 
  Cpu, 
  Briefcase, 
  ChevronRight, 
  Download,
  Menu,
  X,
  User,
  Terminal,
  Layers,
  Rocket,
  MessageSquare,
  Globe,
  Zap,
  Shield,
  Activity
} from 'lucide-react';
import { Section, Card } from './components/Layout';
import { ChatBot } from './components/ChatBot';

const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-bg-dark flex flex-col items-center justify-center"
    >
      <div className="relative w-24 h-24 mb-8">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-primary/20 border-t-primary rounded-full"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 border-4 border-secondary/20 border-t-secondary rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center font-display font-black text-2xl text-primary tracking-tighter neon-glow-primary">VS</div>
      </div>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: 200 }}
        transition={{ duration: 1.5 }}
        className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
      />
      <p className="mt-4 font-mono text-xs tracking-[0.3em] text-slate-500 uppercase">Initializing Interface</p>
    </motion.div>
  );
};

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-dark py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-display font-black tracking-tighter flex items-center gap-4"
        >
          <div className="relative w-10 h-10 flex items-center justify-center group">
            <div className="absolute inset-0 bg-primary/20 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
            <div className="relative w-8 h-8 bg-bg-dark border border-primary/50 rounded-lg flex items-center justify-center text-primary font-display font-black text-xs neon-glow-primary">
              VS
            </div>
          </div>
          <span className="hidden sm:inline bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Virendra Singh</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <motion.a 
              key={link.name} 
              href={link.href} 
              whileHover={{ y: -2 }}
              className="text-sm font-mono tracking-widest text-slate-400 hover:text-primary transition-colors uppercase"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-all neon-glow-primary"
          >
            Connect
          </motion.a>
        </div>

        <button className="md:hidden text-slate-200" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 md:hidden glass-dark flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-3xl font-display font-bold text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 text-white">
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img 
          src="https://picsum.photos/seed/programming-code/1920/1080?blur=8" 
          alt="Coding Background" 
          className="w-full h-full object-cover opacity-20 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/50 via-bg-dark to-bg-dark"></div>
      </div>

      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-digital-grid opacity-10"></div>
        
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 50 + "px"],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-primary rounded-full"
          />
        ))}

        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] animate-pulse-slow"
        ></motion.div>
        <motion.div 
          style={{ y: y1, opacity }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px] animate-pulse-slow"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8 neon-glow-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Online: Portfolio v2.0
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black mb-8 leading-[0.9] tracking-tighter">
            VIRENDRA <br />
            <span className="text-gradient">SINGH</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-medium tracking-tight max-w-lg leading-relaxed">
            Computer Science Enthusiast <span className="text-primary">|</span> Data & Business Analyst
          </p>
          
          <div className="flex flex-wrap gap-6">
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-primary text-bg-dark rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center gap-3"
            >
              Explore Projects <ChevronRight size={18} />
            </motion.a>
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass-dark rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center gap-3 border border-white/10"
            >
              Resume <Download size={18} />
            </motion.a>
          </div>

          <div className="mt-16 flex items-center gap-8">
            {[
              { icon: <Github size={24} />, href: "https://github.com/virendra9627" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/virendra-singh-8a3423351" },
              { icon: <MessageSquare size={24} />, href: "https://wa.me/917906871194" },
              { icon: <Mail size={24} />, href: "mailto:developer.tech@Zohomail.in" }
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.href} 
                target="_blank" 
                whileHover={{ y: -5, color: "var(--color-primary)" }}
                className="text-slate-500 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl p-2 bg-white/5 backdrop-blur-sm">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1000" 
              alt="Virendra Singh" 
              className="w-full h-auto rounded-[2rem] object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Grid */}
            <div className="absolute inset-0 bg-digital-grid opacity-20 pointer-events-none"></div>
          </div>
          
          {/* Floating Tech Icons */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -right-8 top-1/4 glass-dark p-5 rounded-3xl neon-glow-primary border border-primary/30"
          >
            <Terminal className="text-primary" size={32} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -left-8 bottom-1/4 glass-dark p-5 rounded-3xl neon-glow-secondary border border-secondary/30"
          >
            <BarChart3 className="text-secondary" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <Section id="about" title="Core Profile">
      {/* About Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img 
          src="https://picsum.photos/seed/computer-motherboard/1920/1080?blur=10" 
          alt="Workspace Background" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl text-slate-200 font-display font-bold leading-tight"
          >
            Bridging the gap between <span className="text-primary">Technical Architecture</span> and <span className="text-secondary">Business Objectives</span>.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Computer Science Engineer with a strong aptitude for developing full-stack AI-powered applications and optimizing network infrastructure. Adept at transforming complex user requirements into scalable software solutions.
          </motion.p>
          
          <div className="grid grid-cols-2 gap-6 pt-6">
            {[
              { label: "Engineering", value: "CS", color: "primary" },
              { label: "Analysis", value: "BA", color: "secondary" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl glass-dark border border-white/5 relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-${stat.color}`}></div>
                <div className={`text-${stat.color} font-display font-black text-4xl mb-2`}>{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase font-mono tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: <Cpu />, title: "Systems", desc: "Architecture", color: "primary" },
            { icon: <Activity />, title: "Analysis", desc: "Data Driven", color: "secondary" },
            { icon: <Shield />, title: "Security", desc: "Network", color: "primary" },
            { icon: <Zap />, title: "Automation", desc: "Workflow", color: "secondary" }
          ].map((item, i) => (
            <Card key={i} className="flex flex-col items-center justify-center text-center py-10">
              <div className={`text-${item.color} mb-4 p-4 rounded-2xl bg-${item.color}/10`}>
                {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
              </div>
              <h4 className="font-display font-bold text-lg">{item.title}</h4>
              <p className="text-xs text-slate-500 mt-2 font-mono uppercase tracking-widest">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Skills = () => {
  const skillGroups = [
    {
      title: "Engineering",
      skills: [
        { name: "Python", level: 90 },
        { name: "React.js", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "Networking", level: 75 }
      ]
    },
    {
      title: "Analysis",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Tableau", level: 80 },
        { name: "MS Excel", level: 95 },
        { name: "SDLC", level: 85 }
      ]
    },
    {
      title: "Infrastructure",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Linux", level: 85 },
        { name: "MySQL", level: 90 },
        { name: "Firebase", level: 80 }
      ]
    }
  ];

  return (
    <Section id="skills" title="Technical Matrix" dark>
      {/* Skills Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img 
          src="https://picsum.photos/seed/data-science-code/1920/1080?blur=10" 
          alt="Analysis Background" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="space-y-8">
            <h3 className="text-xl font-display font-bold flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              {group.title}
            </h3>
            <div className="space-y-6">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <div className="flex justify-between text-sm font-mono uppercase tracking-widest">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Gen AI Chat System",
      desc: "High-performance chat architecture using React/TypeScript and Python FastAPI with Pydantic validation.",
      tags: ["AI", "FastAPI", "React"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=1000"
    },
    {
      title: "Network Cluster",
      desc: "Orchestrated 10-node clusters using Docker Compose. Deep-packet inspection and VLAN security mitigation.",
      tags: ["Docker", "Security", "Network"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=1000"
    },
    {
      title: "Academic Portal",
      desc: "A modern, responsive university platform featuring student dashboards, course management, and real-time campus updates.",
      tags: ["React", "UI/UX", "Education"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=1000"
    }
  ];

  return (
    <Section id="projects" title="Projects">
      {/* Projects Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img 
          src="https://picsum.photos/seed/data-center/1920/1080?blur=10" 
          alt="Data Center Background" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -15 }}
            className="group relative"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 glass-dark group-hover:border-primary/50 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                <div className="flex gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-primary border border-primary/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-display font-black text-white">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.desc}
                </p>
                <div className="pt-4 flex items-center justify-between">
                  <a href="#" className="text-primary font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    View Specs <ChevronRight size={14} />
                  </a>
                  <div className="flex gap-4">
                    <Github size={18} className="text-slate-500 hover:text-white cursor-pointer" />
                    <ExternalLink size={18} className="text-slate-500 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Services = () => {
  const services = [
    { title: "Full-Stack Dev", icon: <Code2 />, desc: "Building scalable AI-powered web architectures." },
    { title: "Data Analysis", icon: <BarChart3 />, desc: "Transforming raw data into actionable business intelligence." },
    { title: "Network Security", icon: <Shield />, desc: "Optimizing infrastructure and mitigating digital risks." },
    { title: "Process Automation", icon: <Zap />, desc: "Streamlining workflows through intelligent software solutions." },
    { title: "Cloud Ops", icon: <Globe />, desc: "Deploying and scaling containerized applications." },
    { title: "Tech Consulting", icon: <MessageSquare />, desc: "Bridging technical needs with strategic business goals." }
  ];

  return (
    <Section id="services" title="Capabilities" dark>
      {/* Services Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img 
          src="https://picsum.photos/seed/cyber-security-code/1920/1080?blur=10" 
          alt="Cloud Background" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <Card key={idx} className="group hover:bg-primary/5 transition-colors">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:neon-glow-primary transition-all">
              {React.cloneElement(service.icon as React.ReactElement, { size: 28 })}
            </div>
            <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {service.desc}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
};

const Journey = () => {
  const events = [
    { date: "2023 - 2026", title: "CS Engineering", org: "Polytechnic Almora", type: "Education" },
    { date: "2025", title: "Database Systems", org: "University of Oxford", type: "Certification" },
    { date: "2025", title: "Full-Stack Dev", org: "Invedant Education", type: "Training" }
  ];

  return (
    <Section id="journey" title="Timeline">
      {/* Journey Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img 
          src="https://picsum.photos/seed/terminal-programming/1920/1080?blur=10" 
          alt="Path Background" 
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="space-y-8">
        {events.map((event, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col md:flex-row gap-6 md:items-center p-8 rounded-[2rem] glass-dark border border-white/5 hover:border-primary/30 transition-all group"
          >
            <div className="md:w-48 font-mono text-primary font-bold tracking-widest">{event.date}</div>
            <div className="flex-grow">
              <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">{event.title}</h3>
              <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mt-1">{event.org}</p>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-400">
              {event.type}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Contact = () => {
  return (
    <Section id="contact" title="Transmission" dark>
      {/* Contact Background Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <img 
          src="https://picsum.photos/seed/network-cables-computer/1920/1080?blur=8" 
          alt="Network Background" 
          className="w-full h-full object-cover opacity-15 grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-10">
          <h3 className="text-3xl font-display font-black leading-tight">
            Ready to initiate <br />
            <span className="text-gradient">collaboration?</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-md">
            I'm currently available for professional opportunities and innovative projects. Send a transmission to start the dialogue.
          </p>
          
          <div className="space-y-6">
            {[
              { icon: <Phone />, label: "Voice", value: "+91 8287643838", href: "tel:+918287643838" },
              { icon: <MessageSquare />, label: "WhatsApp", value: "+91 7906871194", href: "https://wa.me/917906871194" },
              { icon: <Mail />, label: "Email", value: "developer.tech@Zohomail.in", href: "mailto:developer.tech@Zohomail.in" },
              { icon: <Linkedin />, label: "LinkedIn", value: "Virendra Singh", href: "https://www.linkedin.com/in/virendra-singh-8a3423351" },
              { icon: <Globe />, label: "Location", value: "Uttarakhand, India", href: "#" }
            ].map((item, i) => (
              <motion.a 
                key={i} 
                href={item.href}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl glass-dark flex items-center justify-center text-primary group-hover:neon-glow-primary group-hover:bg-primary/10 transition-all duration-300">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">{item.label}</div>
                  <div className="text-lg font-display font-bold text-white group-hover:text-primary transition-colors">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <Card className="p-10">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Identity</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all font-mono text-sm" placeholder="Full Name" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Frequency</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all font-mono text-sm" placeholder="Email Address" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Subject</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all font-mono text-sm" placeholder="Project Protocol" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Data Payload</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all font-mono text-sm resize-none" placeholder="Transmission details..."></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(6,182,212,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-primary text-bg-dark rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all"
            >
              Send Transmission
            </motion.button>
          </form>
        </Card>
      </div>
    </Section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-digital-grid opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center relative z-10">
        <div className="space-y-4">
          <a href="#" className="text-3xl font-display font-black tracking-tighter flex items-center gap-4">
            <div className="relative w-10 h-10 flex items-center justify-center group">
              <div className="absolute inset-0 bg-primary/20 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
              <div className="relative w-8 h-8 bg-bg-dark border border-primary/50 rounded-lg flex items-center justify-center text-primary font-display font-black text-xs neon-glow-primary">
                VS
              </div>
            </div>
            <span>Virendra Singh</span>
          </a>
          <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">Digital Architect & Analyst</p>
        </div>
        
        <div className="flex justify-center gap-10">
          {[
            { icon: <Github size={22} />, href: "https://github.com/virendra9627" },
            { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/virendra-singh-8a3423351" },
            { icon: <MessageSquare size={22} />, href: "https://wa.me/917906871194" },
            { icon: <Mail size={22} />, href: "mailto:developer.tech@Zohomail.in" }
          ].map((social, i) => (
            <motion.a 
              key={i}
              href={social.href} 
              target="_blank"
              whileHover={{ scale: 1.2, color: "var(--color-primary)" }}
              className="text-slate-400 transition-colors"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        
        <div className="text-slate-500 text-sm font-mono uppercase tracking-widest md:text-right">
          © 2026 <span className="text-primary">Virendra Singh</span>. <br />
          All Systems Operational.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark selection:bg-primary/30 selection:text-white">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>
      
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Nav />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Journey />
          <Contact />
          <Footer />
          <ChatBot />
          
          {/* Global Background Decoration */}
          <div className="fixed inset-0 -z-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-digital-grid opacity-[0.03]"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px] animate-pulse-slow"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
