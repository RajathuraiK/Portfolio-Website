import { motion, useScroll, useSpring } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Download, 
  ChevronDown, 
  ArrowRight, 
  Shield, 
  Layers, 
  Terminal, 
  Cpu, 
  Monitor 
} from "lucide-react";
import { useState, useEffect } from "react";
import cyberCircuitry from "./assets/cyber_circuitry_new.png";
import cyberNetwork from "./assets/cyber_network_new.png";
import cyberInterface from "./assets/cyber_interface_new.png";
import profilePic from "./assets/profile.png";

// --- Components ---

const BackgroundImages = () => {
  return (
    <div className="bg-cyber-container">
      <img 
        src={cyberCircuitry} 
        alt="" 
        className="bg-image floating-1" 
        style={{ opacity: 0.6 }}
      />
      <img 
        src={cyberNetwork} 
        alt="" 
        className="bg-image floating-2" 
        style={{ opacity: 0.5 }}
      />
      <img 
        src={cyberInterface} 
        alt="" 
        className="bg-image floating-3" 
        style={{ opacity: 0.4 }}
      />
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-black/60 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-serif text-2xl font-bold tracking-tighter"
        >
          RK<span className="text-zinc-600">.</span>
        </motion.div>
        
        <div className="hidden md:flex space-x-12 items-center text-[10px] uppercase tracking-[0.3em] font-semibold">
          {["About", "Skills", "Education", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2, color: "#fff" }}
              className="text-zinc-400 transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-white/20 rounded-full text-[10px] tracking-[0.2em] font-bold"
          >
            RESUME
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

const SectionHeader = ({ number, title, subtitle }: { number: string, title: string, subtitle?: string }) => (
  <div className="mb-20">
    <div className="flex items-baseline space-x-4 mb-4">
      <span className="font-mono text-sm text-zinc-600 font-medium">{number}</span>
      <div className="h-[1px] w-12 bg-white/10"></div>
    </div>
    <h2 className="text-5xl md:text-8xl font-serif mb-6 leading-tight text-white">{title}</h2>
    {subtitle && <p className="text-zinc-500 max-w-xl font-light leading-relaxed text-lg uppercase tracking-wider">{subtitle}</p>}
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 text-center"
      >
        
        <h1 className="text-5xl md:text-[8rem] font-serif tracking-tighter leading-tight mb-12 text-center text-white">
          <motion.span 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            RAJATHURAI <span className="italic text-zinc-800">K</span>
          </motion.span>
        </h1>

        <div className="relative group mx-auto w-64 h-64 md:w-80 md:h-80 mb-12">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="w-full h-full rounded-full border border-white/5 p-4 flex items-center justify-center relative z-10"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 border border-white/10 group-hover:border-white/30 transition-all duration-1000 shadow-[0_0_50px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <img 
                src={profilePic} 
                alt="Rajathurai K" 
                className="w-full h-full object-cover scale-[2.0] translate-y-[-12%] group-hover:scale-[2.1] transition-transform duration-1000 brightness-[1.05] contrast-[1.05]"
              />
            </div>
            <div className="absolute -bottom-2 right-8 bg-white text-black px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-xl">
              ACTIVE
            </div>
          </motion.div>
          <div className="absolute inset-0 border border-white/5 rounded-full -z-0 scale-110"></div>
        </div>

        <p className="text-xl md:text-2xl font-serif italic text-zinc-400 mb-12 max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
          “An Aspiring Cyber Security Novice building AI products & <span className="text-white">modern digital experiences</span>”
        </p>

        <div className="flex justify-center space-x-12 text-zinc-600">
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/rajathurai-k-49a412380/" },
            { Icon: Github, href: "https://github.com/RajathuraiK" },
            { Icon: Mail, href: "mailto:rajathuraik117@gmail.com" }
          ].map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, color: "#101010" }}
              className="transition-colors"
            >
              <Icon size={20} strokeWidth={1.5} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 flex flex-col items-center space-y-2 opacity-30"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown size={14} />
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader 
        number="01 / Perspective" 
        title="Philosophy." 
        subtitle="Extracting logic from chaos to build resilient systems."
      />
      
      <div className="grid md:grid-cols-2 gap-20">
        <div className="space-y-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-serif italic leading-relaxed text-zinc-100"
          >
            I am an enthusiastic engineering student with an optimistic vision and dedication towards achieving <span className="text-zinc-600">core technical knowledge</span>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6 text-zinc-500 font-light leading-relaxed"
          >
            <p className="text-lg">
              Currently focused on the intersection of cybersecurity, web development, and 3D design. My journey is driven by a curiosity for how systems work and how they can be protected.
            </p>
            <div className="p-10 bg-zinc-900 shadow-2xl rounded-3xl border-l border-white/10 italic text-zinc-300">
              "Goal: To get employed in a top tech company with a 6-figure CTC, contributing to the next generation of safe digital infrastructure."
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "01 / Focus", value: "Cybersecurity & Networking" },
            { label: "02 / Interests", value: "3D Design, Shell Scripting, Unreal Engine" },
            { label: "03 / Year", value: "1st Year BE CSE" },
            { label: "04 / Location", value: "Chennai, India" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-zinc-900/20 border border-white/5 rounded-3xl hover:bg-white hover:text-black transition-all duration-700 cursor-default group"
            >
              <span className="block font-mono text-[9px] uppercase tracking-[0.3em] mb-4 text-zinc-600 group-hover:text-zinc-400 font-bold">{item.label}</span>
              <span className="text-sm font-medium tracking-tight leading-snug">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  name: string;
  progress: number;
  i: number;
  key?: string | number;
}

const SkillCard = ({ name, progress, i }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1 }}
    className="group p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] hover:border-white/20 transition-all duration-700 flex flex-col justify-between aspect-square"
  >
    <div className="flex justify-between items-start">
      <h3 className="text-2xl font-serif font-medium text-white">{name}</h3>
      <span className="font-mono text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{String(i + 1).padStart(2, '0')}</span>
    </div>
    
    <div className="relative pt-10">
      <div className="flex justify-between items-end mb-4">
        <span className="text-4xl font-serif font-bold italic text-white">{progress}%</span>
      </div>
      <div className="h-[2px] w-full bg-zinc-800 overflow-hidden rounded-full">
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="h-full bg-white rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const skills = [
    { name: "Django", progress: 30 },
    { name: "Python", progress: 60 },
    { name: "C", progress: 50 },
    { name: "Linux", progress: 30 },
    { name: "Blender", progress: 10 }
  ];

  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader 
        number="02" 
        title="Toolkit." 
        subtitle="A technical landscape featuring core programming languages and digital design tools."
      />
      
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
        {skills.map((skill, i) => (
          <SkillCard key={skill.name} i={i} name={skill.name} progress={skill.progress} />
        ))}
      </div>
    </section>
  );
};

const ExperienceEducation = () => {
  return (
    <section id="education" className="py-32 px-6 bg-[#080808] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <div>
          <SectionHeader number="03 / Foundation" title="Scholarly." />
          <div className="relative pl-12 border-l border-white/10 space-y-20">
            {[
              {
                title: "Saveetha Engineering College",
                degree: "B.E CSE (Cybersecurity)",
                period: "2025 - Present",
                current: "1st Year Student",
                details: "Focused on core technical knowledge and cybersecurity fundamentals. Current CGPA: 8.5"
              }
            ].map((edu, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[49px] top-0 w-3 h-3 rounded-full bg-white ring-8 ring-[#080808]" />
                <span className="block font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-600 mb-4 font-bold">{edu.period}</span>
                <h3 className="text-3xl font-serif font-medium mb-3 text-white">{edu.title}</h3>
                <p className="text-xl text-zinc-500 font-light mb-6 leading-relaxed italic">{edu.degree}</p>
                <div className="space-y-4">
                   <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg">
                      <Layers size={14} className="text-zinc-500" />
                      <span className="text-zinc-300">CGPA: 8.5</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-20">
          <div>
            <SectionHeader number="04 / Leadership" title="Orchestration." />
            <div className="space-y-8">
              {[
                {
                  role: "English Literary Event Organiser",
                  context: "Saveetha Engineering College",
                  desc: "Curating and managing literary events to foster creative expression and debate."
                },
                {
                  role: "Master of Ceremonies (MC)",
                  context: "Technical/Non-Technical Events",
                  desc: "Hosting and orchestrating large-scale events, managing stage presence and audience engagement."
                }
              ].map((exp, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-10 bg-zinc-900/30 border border-white/5 rounded-[3rem] transition-all duration-1000 hover:bg-zinc-900"
                >
                  <h3 className="text-2xl font-serif font-medium mb-2 text-white">{exp.role}</h3>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 font-bold mb-6">{exp.context}</p>
                  <p className="text-zinc-500 font-light italic leading-relaxed">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  const stats = [
    { label: "Year Experience", value: "01", suffix: "+" },
    { label: "Certifications", value: "03", suffix: "" },
    { label: "Passion Projects", value: "05", suffix: "+" },
  ];

  const certifications = [
    { name: "Cisco Junior Cybersecurity", link: "https://www.credly.com/badges/7e575a87-df68-4aab-9419-0104e81a9763/whatsapp" },
    { name: "Networking Fundamentals", link: "https://www.credly.com/badges/80474181-9b27-4c85-9df7-beb8a72aa843/whatsapp" },
    { name: "Security Operations", link: "https://www.credly.com/badges/db670219-adde-4d3c-af1e-738b1225cfb4/whatsapp" }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader number="05 / Impact" title="Momentum." />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center group p-12 bg-zinc-900/30 border border-white/5 rounded-[4rem] hover:bg-white hover:text-black transition-all duration-1000 relative overflow-hidden"
          >
            <div className="relative z-10">
              <span className="block text-9xl font-serif font-bold group-hover:scale-110 transition-transform duration-1000">
                {stat.value}<span className="text-zinc-800 group-hover:text-zinc-300 tracking-tighter">{stat.suffix}</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.5em] font-black opacity-40 block mt-4">{stat.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {certifications.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.link}
            target="_blank"
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            className="flex items-center space-x-6 px-10 py-6 border border-white/10 rounded-full text-[10px] font-mono uppercase tracking-[0.3em] font-black transition-all duration-700 shadow-xl"
          >
            <Shield size={18} />
            <span>{cert.name}</span>
            <ArrowRight size={14} className="opacity-30 group-hover:opacity-100 transition-all" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-ink text-white rounded-t-[5rem] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 mb-32">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-8 block font-semibold">Ready to Engage?</span>
            <h2 className="text-6xl md:text-[6.5rem] font-serif mb-12 leading-[0.9] tracking-tighter">Let's craft the secure <span className="italic text-gray-400">digital future</span>.</h2>
            
            <div className="space-y-10">
              <a href="mailto:rajathuraik117@gmail.com" className="group flex items-center space-x-8 text-2xl md:text-4xl font-light hover:translate-x-4 transition-transform duration-500">
                <span className="p-5 rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-ink transition-all duration-500">
                  <Mail size={32} strokeWidth={1} />
                </span>
                <span className="border-b border-white/10 group-hover:border-white transition-colors pb-2">rajathuraik117@gmail.com</span>
              </a>
              
              <a href="tel:6366042904" className="group flex items-center space-x-8 text-2xl md:text-4xl font-light hover:translate-x-4 transition-transform duration-500">
                <span className="p-5 rounded-full bg-white/5 border border-white/10 group-hover:bg-white group-hover:text-ink transition-all duration-500">
                  <Phone size={32} strokeWidth={1} />
                </span>
                <span className="border-b border-white/10 group-hover:border-white transition-colors pb-2">6366042904</span>
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 backdrop-blur-sm">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/5 py-4 focus:border-white outline-none transition-all placeholder:text-gray-700" placeholder="Your Name" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/5 py-4 focus:border-white outline-none transition-all placeholder:text-gray-700" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Inquiry</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/5 py-4 focus:border-white outline-none transition-all resize-none placeholder:text-gray-700" placeholder="Describe your project or vision..." />
              </div>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#fff", color: "#000" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-7 bg-white/10 border border-white/10 text-white rounded-full font-serif text-2xl italic transition-all duration-500"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          <div className="font-serif text-3xl font-bold tracking-tighter">RK<span className="text-gray-600">.</span></div>
          
          <div className="flex space-x-12 text-[10px] uppercase tracking-widest font-bold text-gray-500">
            <a href="https://www.linkedin.com/in/rajathurai-k-49a412380/" className="hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="https://github.com/RajathuraiK" className="hover:text-white transition-colors duration-300">GitHub</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
          </div>

          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] font-medium">
            © 2026 RAJATHURAI K. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-white z-[100] origin-left"
      style={{ scaleX }}
    />
  );
};

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 1 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[1000] bg-black flex items-center justify-center flex-col px-6"
    >
      <div className="overflow-hidden mb-4">
        <motion.h2 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-4xl md:text-6xl font-serif italic"
        >
          RAJATHURAI K.
        </motion.h2>
      </div>
      <div className="w-48 h-[1px] bg-white/20 relative overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 bg-white"
        />
      </div>
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1 }}
        className="text-white/50 text-[10px] uppercase tracking-[0.5em] font-medium mt-8"
      >
        CYBERSECURITY ENGR.
      </motion.span>
    </motion.div>
  );
};

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <main className="font-sans antialiased selection:bg-white selection:text-black cursor-none bg-paper relative">
        <BackgroundImages />
        <motion.div 
          className="custom-cursor hidden lg:flex items-center justify-center overflow-hidden"
          animate={{ 
            x: mousePos.x - 10, 
            y: mousePos.y - 10,
          }}
          transition={{ type: "spring", damping: 35, stiffness: 450, mass: 0.4 }}
        />
        
        <ScrollProgress />
        <Navbar />
        
        <motion.div
          className="relative z-10"
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 1 }}
        >
          <Hero />
          <AboutSection />
          <SkillsSection />
          <ExperienceEducation />
          <Achievements />
          <ContactSection />
        </motion.div>
      </main>
    </>
  );
}
