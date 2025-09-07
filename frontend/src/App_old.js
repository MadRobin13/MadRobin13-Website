import './App.css';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, FileText, ChevronDown, Trophy } from 'lucide-react';

// Scroll-based Triangle Component
const ScrollTriangles = ({ scrollY }) => {
  const triangles = [
    { id: 1, section: 'about', baseY: 400, x: '10%', size: 60 },
    { id: 2, section: 'projects', baseY: 800, x: '85%', size: 80 },
    { id: 3, section: 'projects', baseY: 1200, x: '15%', size: 50 },
    { id: 4, section: 'contact', baseY: 1600, x: '75%', size: 70 },
  ];

  return (
    <div className="scroll-triangles">
      {triangles.map((triangle) => (
        <motion.div
          key={triangle.id}
          className="scroll-triangle"
          style={{
            position: 'absolute',
            left: triangle.x,
            top: `${triangle.baseY - scrollY * 0.3}px`,
            width: `${triangle.size}px`,
            height: `${triangle.size}px`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Loading Screen Component
const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: "blur(10px)"
          }}
          transition={{ 
            duration: 1.2, 
            ease: [0.4, 0, 0.2, 1],
            opacity: { duration: 0.8 },
            scale: { duration: 1.2 },
            filter: { duration: 0.6, delay: 0.4 }
          }}
        >
          <motion.div
            className="loading-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="loading-spinner"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Loading Portfolio...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading time for assets and components
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: 'symptoai',
      title: 'SymptoAI',
      description: 'AI-powered symptom analysis tool that won Hack the Ridge 2024. Helps users understand their symptoms with intelligent recommendations.',
      image: '',
      logo: '',
      github: 'https://github.com/MadRobin13/SymptoAI',
      hackathon: 'https://hacktheridge.ca/',
      tags: ['Python', 'AI/ML', 'Healthcare', 'Winner'],
      featured: true,
      award: 'Hack the Ridge 2024 Winner'
    },
    {
      id: 'muse',
      title: 'Muse',
      description: 'A revolutionary mouse you can control with your head! Built with C++ for hands-free computer interaction.',
      image: 'https://raw.githubusercontent.com/MadRobin13/Assets/cf013104932ca5b4a5696f4017aa68dd73726bf3/Muse/Muse_white_with_blackBG_wide_logo.png',
      logo: 'https://raw.githubusercontent.com/MadRobin13/Assets/cf013104932ca5b4a5696f4017aa68dd73726bf3/Muse/Muse_blue_with_blackBG_logo.png',
      github: 'https://github.com/MadRobin13/Muse',
      youtube: 'https://www.youtube.com/watch?v=gZj0zO0jsb4',
      tags: ['C++', 'Hardware', 'Accessibility', 'Innovation'],
      featured: true
    },
    {
      id: 'chattr',
      title: 'Chattr',
      description: 'A modern web-based chat application built with React.js, Go, MongoDB, and Docker.',
      image: require('./chattr_example.png'),
      logo: require('./chattr_logo_v5.png'),
      github: 'https://github.com/MadRobin13/Chattr',
      demo: 'https://go-and-react-website.vercel.app/',
      tags: ['React', 'Go', 'MongoDB', 'Docker']
    },
    {
      id: 'terminal-ai',
      title: 'TerminalAI',
      description: 'A sleek terminal-based AI chat application built with Go for seamless command-line AI interactions.',
      github: 'https://github.com/MadRobin13/TerminalAI',
      tags: ['Go', 'AI', 'Terminal', 'CLI']
    },
    {
      id: 'robotics',
      title: 'FRC Robotics - Team 1360',
      description: 'Programming lead and human player for FRC team 1360 Orbit Robotics. Developed code for 2023 and 2024 competition robots.',
      image: require('./DSC02965.JPG'),
      logo: require('./first_logo.png'),
      github: ['https://github.com/FRC1360/Offseason2024', 'https://github.com/FRC1360/Crescendo2024', 'https://github.com/FRC1360/ChargedUp2023'],
      youtube: 'https://www.youtube.com/watch?v=Jphalv-HEQo',
      tags: ['Java', 'Robotics', 'Competition', 'Team Leadership']
    },
    {
      id: 'food-abc',
      title: 'Food-ABC2XYZ',
      description: "The world's first AI-powered food thesaurus! Built using modern web technologies and OpenAI API.",
      image: require('./abc_pic.png'),
      github: ['https://github.com/ozzyDev27/FoodABC2XYZ-Frontend', 'https://github.com/Ultra-bob/FoodABC2XYZ-Backend'],
      demo: 'https://foodabc2xyz.vercel.app/',
      devpost: 'https://devpost.com/software/food-abc-2-xyz',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'OpenAI']
    },
    {
      id: 'soap',
      title: 'Soap Discord Bot',
      description: 'A Discord bot that prevents the use of profanity in servers, built with JavaScript and MongoDB.',
      logo: require('./Soap_logo_v2.png'),
      github: 'https://github.com/MadRobin13/Soap-the-Discord-Bot',
      tags: ['JavaScript', 'MongoDB', 'Discord API']
    },
    {
      id: 'dvd-pong',
      title: 'DVD Pong',
      description: 'An online pong game based on the bouncing DVD logo, built using Godot game engine.',
      logo: require('./dvd_pong_logo_v2.png'),
      github: 'https://github.com/MadRobin13/DVD-Pong',
      demo: 'https://dvd-logo-game.vercel.app/',
      tags: ['Godot', 'Game Development']
    }
  ];

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <ScrollTriangles scrollY={scrollY} />
      
      {/* Navigation */}
      <motion.nav 
        className={`nav ${scrollY > 50 ? 'nav-scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="nav-container">
          <motion.div 
            className="nav-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={require('./madrobin_logo_mrk5.png')} alt="MadRobin Logo" />
          </motion.div>
        
        <div className="nav-links desktop">
          <button onClick={() => scrollToSection('hero')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>

        <div className="nav-social desktop">
          <motion.a 
            href="https://github.com/MadRobin13" 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/abhimanyu-chaudhary-778a6b329/" 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a 
            href="mailto:madrobin1340@gmail.com" 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={20} />
          </motion.a>
          <motion.a 
            href="https://drive.google.com/file/d/1fbJkTsMaUDS1q9sAKar44hsqukhJULHD/view?usp=sharing" 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            <FileText size={20} />
          </motion.a>
          <motion.a 
            href="https://devpost.com/MadRobin13?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" 
            whileHover={{ scale: 1.1 }} 
            whileTap={{ scale: 0.9 }}
          >
            <Trophy size={20} />
          </motion.a>
        </div>

        <button 
          className="nav-toggle mobile" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      </motion.nav>
          
          <div className="nav-links desktop">
            <button onClick={() => scrollToSection('hero')}>Home</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>

          <div className="nav-social desktop">
            <motion.a 
              href="https://github.com/MadRobin13" 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/abhimanyu-chaudhary-778a6b329/" 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href="mailto:madrobin1340@gmail.com" 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={20} />
            </motion.a>
            <motion.a 
              href="https://drive.google.com/file/d/1fbJkTsMaUDS1q9sAKar44hsqukhJULHD/view?usp=sharing" 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
            >
              <FileText size={20} />
            </motion.a>
            <motion.a 
              href="https://devpost.com/MadRobin13?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
            >
              <Trophy size={20} />
            </motion.a>
          </div>

          <button 
            className="nav-toggle mobile" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="nav-mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={() => scrollToSection('hero')}>Home</button>
              <button onClick={() => scrollToSection('about')}>About</button>
              <button onClick={() => scrollToSection('projects')}>Projects</button>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
              <div className="nav-social-mobile">
                <a href="https://github.com/MadRobin13"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/abhimanyu-chaudhary-778a6b329/"><Linkedin size={20} /></a>
                <a href="mailto:madrobin1340@gmail.com"><Mail size={20} /></a>
                <a href="https://drive.google.com/file/d/1fbJkTsMaUDS1q9sAKar44hsqukhJULHD/view?usp=sharing"><FileText size={20} /></a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="hero-greeting"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hi, I'm
            </motion.h1>
            <motion.h2 
              className="hero-name"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Abhimanyu Chaudhary
            </motion.h2>
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              I'm a 16-year-old full stack developer with a love for robotics and innovative solutions!
              <br />Programming lead for <a href="https://1360.ca/"><strong>FRC team 1360</strong></a> • <a href="https://www.credly.com/badges/7dc8a2c8-3deb-4af7-b55c-ce09bcd9eb37/public_url"><strong>Certified in AI/ML</strong></a> by University of Toronto.
            </motion.p>
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <button 
                className="cta-primary" 
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="cta-secondary" 
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-shape">
              <motion.div 
                className="floating-element"
                animate={{ 
                  y: [-20, 20, -20],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>About Me</h2>
            <p>Passionate developer crafting digital experiences</p>
          </motion.div>
          
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="about-text">
              <p>
                I'm Abhimanyu, a 16-year-old full-stack developer with a passion for creating 
                innovative solutions that bridge technology and real-world problems. My journey 
                started with robotics, where I learned the importance of precision, teamwork, 
                and continuous learning as programming lead for FRC team 1360 Orbit Robotics.
              </p>
              <p>
                From building head-controlled mice to developing AI-powered chat applications, 
                I love pushing the boundaries of what's possible. I'm certified in artificial 
                intelligence and machine learning by the University of Toronto, and my dream 
                is to work at Google someday!
              </p>
            </div>
            <div className="about-skills">
              <h3>Technologies I Work With</h3>
              <div className="skills-grid">
                {['React', 'JavaScript', 'TypeScript', 'Python', 'Go', 'C++', 'Java', 'HTML/CSS', 'Node.js', 'MongoDB', 'Docker', 'Git', 'Arduino', 'Godot', 'TensorFlow', 'OpenCV', 'Discord.py', 'Framer Motion', 'Vercel', 'GitHub Actions', 'ESP32', 'Raspberry Pi', 'Linux', 'macOS', 'Windows'].map(skill => (
                  <div key={skill} className="skill-tag">{skill}</div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Featured Projects</h2>
            <p>A showcase of my recent work and contributions</p>
          </motion.div>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
                <div className="project-content">
                  <div className="project-header">
                    {project.logo && (
                      <img src={project.logo} alt={`${project.title} logo`} className="project-logo" />
                    )}
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {Array.isArray(project.github) ? (
                      project.github.map((link, i) => (
                        <motion.a 
                          key={i}
                          href={link} 
                          className="project-link"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                        </motion.a>
                      ))
                    ) : project.github && (
                      <motion.a 
                        href={project.github} 
                        className="project-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a 
                        href={project.demo} 
                        className="project-link demo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        Demo
                      </motion.a>
                    )}
                    {project.youtube && (
                      <motion.a 
                        href={project.youtube} 
                        className="project-link demo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        YouTube
                      </motion.a>
                    )}
                    {project.hackathon && (
                      <motion.a 
                        href={project.hackathon} 
                        className="project-link"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Trophy size={16} />
                        Hackathon
                      </motion.a>
                    )}
                    {project.award && (
                      <div className="project-award">
                        <Trophy size={16} />
                        {project.award}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Let's Connect</h2>
            <p>I'm always open to discussing new opportunities and interesting projects</p>
          </motion.div>
          
          <motion.div 
            className="contact-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="contact-links">
              <motion.a 
                href="mailto:madrobin1340@gmail.com" 
                className="contact-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} />
                <div>
                  <h3>Email</h3>
                  <p>madrobin1340@gmail.com</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/abhimanyu-chaudhary-778a6b329/" 
                className="contact-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} />
                <div>
                  <h3>LinkedIn</h3>
                  <p>Connect with me</p>
                </div>
              </motion.a>
              
              <motion.a 
                href="https://github.com/MadRobin13" 
                className="contact-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
                <div>
                  <h3>GitHub</h3>
                  <p>Check out my code</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Abhimanyu Chaudhary. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://www.printables.com/@mando13_1132886">Printables</a>
              <a href="https://www.youtube.com/@ton-of-fun-reviews1352">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default App;