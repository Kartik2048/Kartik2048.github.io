import { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  Cpu, 
  Award, 
  GraduationCap, 
  ChevronRight,
  Terminal,
  Layers,
  BrainCircuit,
  Globe,
  User,
  ArrowRight,
  Sun,
  Moon,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const projects = [
  {
    title: "Library Management System",
    subtitle: "Backend Development",
    date: "February 2026",
    link: "https://github.com/Kartik2048",
    description: [
      "Developed a robust RESTful API using Spring Boot to manage core library operations, including book inventory, member registration, and borrowing life-cycles.",
      "Implemented complex Entity-Relationship mappings using JPA/Hibernate to link members with borrowed books and track availability status in real-time.",
      "Engineered global exception handling and strict data validation protocols to ensure database integrity."
    ],
    tech: ["Java", "Spring Boot", "REST API", "Spring Data JPA", "H2 Database"],
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "AI-Powered English Assessment Platform",
    subtitle: "Multi-modal Evaluation System",
    date: "December 2025",
    link: "https://github.com/Kartik2048",
    description: [
      "Architected a multi-modal evaluation pipeline orchestrating Gemini API, Faster Whisper, and Azure Speech to assess Writing, Speaking, and Listening skills.",
      "Engineered a high-performance frontend by migrating from Streamlit to custom HTML5/CSS/JavaScript, reducing page load latency by ~40%.",
      "Implemented a robust Python backend using MongoDB to handle asynchronous API requests."
    ],
    tech: ["Python", "Gemini API", "Faster Whisper", "Azure Speech", "MongoDB", "Flask"],
    icon: <BrainCircuit className="w-6 h-6" />
  },
  {
    title: "Early Lifestyle Disease Prediction System",
    subtitle: "Unified Health Dashboard",
    date: "May 2025",
    link: "https://github.com/Kartik2048",
    description: [
      "Developed a consolidated health dashboard, unifying disparate ML risk models (Asthma, Sleep Disorders) into a single assessment interface.",
      "Optimized Information Architecture by restructuring data input flows, enabling multi-disease risk percentage generation.",
      "Implemented an embedded AI Chatbot assistant, enhancing user engagement and simplifying interpretation."
    ],
    tech: ["Machine Learning", "Python", "AI Chatbot", "Data Analytics"],
    icon: <Cpu className="w-6 h-6" />
  }
];

const skills = {
  languages: ["C", "C++", "Java", "Python"],
  frameworks: ["HTML5", "CSS", "JavaScript", "Streamlit", "Flask", "React", "Spring Boot"],
  tools: ["MySQL", "MongoDB", "Gemini API", "Azure Speech"],
  softSkills: ["Analytical Thinking", "Problem-Solving", "Optimization-focused", "Hands-on Approach"]
};

const certificates = [
  { name: "Java Programming", issuer: "iamneo & Lovely Professional University", date: "May 2025", link: "https://linkedin.com/in/kartik-juneja-665096297" },
  { name: "Cloud Computing (Elite Certificate)", issuer: "NPTEL - IIT Kharagpur", date: "April 2025", link: "https://linkedin.com/in/kartik-juneja-665096297" },
  { name: "Data Structures and Algorithms", issuer: "iamneo & Lovely Professional University", date: "Dec 2024", link: "https://linkedin.com/in/kartik-juneja-665096297" },
  { name: "Object Oriented Programming", issuer: "iamneo & Lovely Professional University", date: "Dec 2024", link: "https://linkedin.com/in/kartik-juneja-665096297" },
  { name: "Crash Course on Python", issuer: "Google (via Coursera)", date: "Feb 2024", link: "https://linkedin.com/in/kartik-juneja-665096297" }
];

const education = [
  {
    school: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    stats: "CGPA: 8.3",
    period: "Since August 2023"
  },
  {
    school: "Cambridge International School",
    location: "Jalandhar, Punjab",
    degree: "Intermediate",
    stats: "Percentage: 82%",
    period: "April 2021 - March 2023"
  },
  {
    school: "Cambridge International School",
    location: "Jalandhar, Punjab",
    degree: "Matriculation",
    stats: "Percentage: 91.17%",
    period: "April 2019 - March 2021"
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'skills', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-900 dark:selection:text-indigo-200 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => scrollTo('hero')}
            className="font-mono font-bold text-indigo-600 dark:text-indigo-400 text-xl tracking-tighter"
          >
            KJ.DEV
          </button>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {['projects', 'skills', 'education'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`capitalize transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 relative py-2 ${activeSection === section ? 'text-indigo-600 dark:text-indigo-400' : ''}`}
              >
                {section}
                {activeSection === section && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-500 rounded-full"
                  />
                )}
              </button>
            ))}
            <div className="w-px h-4 bg-zinc-300 dark:bg-zinc-700" />
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className="p-2 -ml-4 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-600 dark:text-zinc-400"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {['projects', 'skills', 'education'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollTo(section)}
                    className={`capitalize text-left text-lg font-medium transition-colors ${activeSection === section ? 'text-indigo-600 dark:text-indigo-400' : 'text-zinc-600 dark:text-zinc-400'}`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-5xl mx-auto px-6">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col justify-center py-24 md:py-20">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative shrink-0"
            >
              <div className="w-40 h-40 md:w-64 md:h-64 rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden group transition-colors">
                <User className="w-20 h-20 md:w-24 md:h-24 text-zinc-400 dark:text-zinc-700 group-hover:text-indigo-500 transition-colors" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-indigo-500/10 rounded-full blur-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-full text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for Opportunities
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 transition-colors">
                Kartik Juneja
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8 transition-colors">
                I'm a <span className="text-indigo-600 dark:text-indigo-400 font-medium">Full-Stack Developer</span> and <span className="text-indigo-600 dark:text-indigo-400 font-medium">AI Enthusiast</span> currently pursuing my B.Tech at LPU. 
                I specialize in architecting scalable backend systems with Spring Boot and Python, while integrating cutting-edge Generative AI models to solve real-world problems.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4">
                <a href="https://github.com/Kartik2048" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all text-sm font-bold rounded-xl w-full sm:w-auto">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a href="https://linkedin.com/in/kartik-juneja-665096297" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 dark:hover:bg-indigo-500 transition-all text-sm font-bold shadow-lg shadow-indigo-500/20 w-full sm:w-auto">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <div className="flex gap-2 w-full sm:w-auto">
                  <a href="mailto:kartikjuneja2626@gmail.com" className="flex-1 sm:flex-none flex justify-center p-3 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="tel:+919530549951" className="flex-1 sm:flex-none flex justify-center p-3 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-900 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 md:mb-12">
            <div className="flex items-center gap-3">
              <Layers className="w-7 h-7 md:w-8 md:h-8 text-indigo-600 dark:text-indigo-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white transition-colors">Featured Projects</h2>
            </div>
            <a href="https://github.com/Kartik2048" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm font-medium flex items-center gap-2 w-fit">
              View all on GitHub <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="grid gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-8 hover:border-indigo-500/30 dark:hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:bg-zinc-900 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start md:items-center gap-4 mb-4">
                      <div className="p-3 bg-zinc-100 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 rounded-2xl group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white transition-all shrink-0">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight mb-1">{project.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-500 font-medium text-sm md:text-base">{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-zinc-500 dark:text-zinc-600 text-sm mb-6 font-mono">{project.date}</p>
                    <ul className="space-y-3 mb-8">
                      {project.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                          <ChevronRight className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-lg text-xs font-bold border border-zinc-200 dark:border-zinc-700/50 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-bold text-sm w-fit"
                      >
                        View Code <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills & Certificates Section */}
        <section id="skills" className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-900 transition-colors">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-10 md:space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Terminal className="w-7 h-7 text-indigo-600 dark:text-indigo-500" />
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white transition-colors">Technical Arsenal</h2>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Core Languages</h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {skills.languages.map(s => (
                        <span key={s} className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-700 dark:text-zinc-300 font-medium hover:border-indigo-500/30 transition-colors shadow-sm dark:shadow-none text-sm md:text-base">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Frameworks & Web</h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {skills.frameworks.map(s => (
                        <span key={s} className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-700 dark:text-zinc-300 font-medium hover:border-indigo-500/30 transition-colors shadow-sm dark:shadow-none text-sm md:text-base">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Tools & Cloud</h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {skills.tools.map(s => (
                        <span key={s} className="px-3 py-1.5 md:px-4 md:py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-700 dark:text-zinc-300 font-medium hover:border-indigo-500/30 transition-colors shadow-sm dark:shadow-none text-sm md:text-base">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-10 md:space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Award className="w-7 h-7 text-indigo-600 dark:text-indigo-500" />
                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white transition-colors">Certifications</h2>
                </div>
                <div className="grid gap-4">
                  {certificates.map((cert, idx) => (
                    <a 
                      key={idx} 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white dark:bg-zinc-900/50 p-4 md:p-5 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-indigo-500/30 dark:hover:border-indigo-500/50 hover:shadow-md dark:hover:bg-zinc-900 transition-all flex items-center justify-between shadow-sm dark:shadow-none"
                    >
                      <div className="pr-4">
                        <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm md:text-base">{cert.name}</h4>
                        <p className="text-zinc-500 text-xs md:text-sm mt-1">{cert.issuer} • {cert.date}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-zinc-400 dark:text-zinc-700 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 md:py-24 border-t border-zinc-200 dark:border-zinc-900 transition-colors">
          <div className="flex items-center gap-3 mb-10 md:mb-12">
            <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-indigo-600 dark:text-indigo-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white transition-colors">Academic Journey</h2>
          </div>
          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 md:ml-4 pl-6 md:pl-8 space-y-10 md:space-y-12 transition-colors">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 bg-indigo-600 dark:bg-indigo-500 rounded-full border-4 border-white dark:border-zinc-950 shadow-[0_0_15px_rgba(99,102,241,0.3)] dark:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-colors" />
                <div className="bg-white dark:bg-zinc-900/50 p-6 md:p-8 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm dark:shadow-none transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white transition-colors">{edu.school}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm md:text-base mt-1">{edu.degree}</p>
                    </div>
                    <span className="px-3 py-1 md:px-4 md:py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 font-mono text-xs font-bold rounded-full w-fit transition-colors">
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6 text-sm">
                    <p className="text-zinc-500 flex items-center gap-2">
                      <Globe className="w-4 h-4 shrink-0" /> {edu.location}
                    </p>
                    <div className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg font-bold border border-indigo-100 dark:border-indigo-500/20 w-fit transition-colors">
                      {edu.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-900 py-12 md:py-16 bg-zinc-50 dark:bg-zinc-950 transition-colors">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="font-mono font-bold text-indigo-600 dark:text-indigo-400 text-2xl mb-8">KJ.DEV</div>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/Kartik2048" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/kartik-juneja-665096297" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:kartikjuneja2626@gmail.com" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-zinc-600 text-sm">
            Designed and developed by Kartik Juneja. © 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
