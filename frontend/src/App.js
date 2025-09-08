import './App.css';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronDown, Trophy, FileText } from 'lucide-react';

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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      id: 'symptoai',
      title: 'SymptoAI',
      description: 'AI-powered symptom analysis tool that won Hack the Ridge 2024. Helps users understand their symptoms with intelligent recommendations.',
      github: 'https://github.com/MadRobin13/SymptoAI',
      demo: 'https://hacktheridge.ca/',
      tags: ['Python', 'AI/ML', 'Healthcare', 'Winner'],
      featured: true,
      award: 'Hack the Ridge 2024 Winner'
    },
    {
      id: 'muse',
      title: 'Muse',
      description: 'A wearable motion-controlled mouse for disabled creators. Uses gyroscope and accelerometer for hands-free navigation and creation.',
      image: 'https://raw.githubusercontent.com/MadRobin13/Assets/cf013104932ca5b4a5696f4017aa68dd73726bf3/Muse/Muse_white_with_blackBG_wide_logo.png',
      logo: 'https://raw.githubusercontent.com/MadRobin13/Assets/cf013104932ca5b4a5696f4017aa68dd73726bf3/Muse/Muse_blue_with_blackBG_logo.png',
      github: 'https://github.com/MadRobin13/Muse',
      demo: 'https://www.youtube.com/watch?v=gZj0zO0jsb4',
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
      demo: 'https://github.com/MadRobin13/TerminalAI',
      tags: ['Go', 'AI', 'Terminal', 'CLI']
    },
    {
      id: 'robotics',
      title: 'FRC Robotics - Team 1360',
      description: 'Programming lead and human player for FRC team 1360 Orbit Robotics. Developed code for 2023, 2024, and 2025 competition robots.',
      image: require('./DSC02965.JPG'),
      logo: require('./first_logo.png'),
      github: [
        'https://github.com/FRC1360/ChargedUp2023',
        'https://github.com/FRC1360/Crescendo2024', 
        'https://github.com/FRC1360/Offseason2024'
      ],
      demo: 'https://www.youtube.com/watch?v=Jphalv-HEQo',
      tags: ['Java', 'Robotics', 'Competition', 'Team Leadership']
    },
    {
      id: 'food-abc',
      title: 'Food-ABC2XYZ',
      description: "The world's first AI-powered food thesaurus! Built using modern web technologies and OpenAI API.",
      image: require('./abc_pic.png'),
      logo: require('./abc_pic.png'),
      github: [
        'https://github.com/ozzyDev27/FoodABC2XYZ-Frontend',
        'https://github.com/Ultra-bob/FoodABC2XYZ-Backend'
      ],
      demo: 'https://foodabc2xyz.vercel.app/',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'OpenAI']
    },
    {
      id: 'soap',
      title: 'Soap Discord Bot',
      description: 'A Discord bot that prevents the use of profanity in servers, built with JavaScript and MongoDB.',
      image: '',
      logo: require('./Soap_logo_v2.png'),
      github: 'https://github.com/MadRobin13/Soap-the-Discord-Bot',
      demo: 'https://github.com/MadRobin13/Soap-the-Discord-Bot',
      tags: ['JavaScript', 'MongoDB', 'Discord API']
    },
    {
      id: 'dvd-pong',
      title: 'DVD Pong',
      description: 'An online pong game based on the bouncing DVD logo, built using Godot game engine.',
      image: '',
      logo: require('./dvd_pong_logo_v2.png'),
      github: 'https://github.com/MadRobin13/DVD-Pong',
      demo: 'https://dvd-logo-game.vercel.app/',
      tags: ['Godot', 'Game Development']
    }
  ];

  return (
    <div className="app">
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-links">
              <button onClick={() => scrollToSection('hero')}>Home</button>
              <button onClick={() => scrollToSection('about')}>About</button>
              <button onClick={() => scrollToSection('projects')}>Projects</button>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </div>
            <div className="mobile-menu-social">
              <a href="https://github.com/MadRobin13"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/abhimanyu-chaudhary-778a6b329/"><Linkedin size={20} /></a>
              <a href="mailto:madrobin1340@gmail.com"><Mail size={20} /></a>
              <a href="https://drive.google.com/file/d/1fbJkTsMaUDS1q9sAKar44hsqukhJULHD/view?usp=sharing"><FileText size={20} /></a>
              <a href="https://devpost.com/MadRobin13?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"><Trophy size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="main-content">
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="hero-container">
            <motion.div 
              className="hero-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-greeting">Hello, I'm</div>
              <motion.h1
                className="hero-name"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Abhimanyu Chaudhary
              </motion.h1>
              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I'm a 16-year-old full stack developer with a love for robotics and innovative solutions!
                <br />Programming lead for <a href="https://1360.ca/"><strong>FRC team 1360</strong></a> • <a href="https://www.credly.com/badges/7dc8a2c8-3deb-4af7-b55c-ce09bcd9eb37/public_url"><strong>Certified in AI/ML</strong></a> by University of Toronto.
              </motion.p>
              <motion.div
                className="hero-cta"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.button
                  className="cta-primary"
                  onClick={() => scrollToSection('projects')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.button>
                <motion.button
                  className="cta-secondary"
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hero-right"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="hero-visual">
                <div className="hero-shape">
                  <motion.div
                    className="floating-element"
                    animate={{
                      rotate: 360,
                      y: [0, -20, 0],
                    }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                </div>
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
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="about-text">
                <p>
                  I'm a passionate Computer Science student with a love for building innovative 
                  solutions that bridge the gap between technology and real-world problems. 
                  My journey in programming started with curiosity and has evolved into expertise 
                  across multiple domains.
                </p>
                <p>
                  With experience in full-stack development, artificial intelligence, and robotics, 
                  I thrive on challenges that push the boundaries of what's possible. I've led teams, 
                  built scalable applications, and contributed to open-source projects while maintaining 
                  a focus on clean, efficient code.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  robotics competitions, or sharing knowledge with the developer community. 
                  I believe in the power of technology to create positive change and am always 
                  eager to collaborate on meaningful projects.
                </p>
              </div>
              <div className="about-skills">
                <h3>Some Technologies I Work With</h3>
                <div className="skills-grid">
                  {['React', 'JavaScript', 'TypeScript', 'Python', 'Go', 'C++', 'Java', 'HTML/CSS', 'Node.js', 'MongoDB', 'Docker', 'Git', 'Arduino', 'Godot', 'TensorFlow', 'OpenCV', 'Discord.py', 'Vercel', 'GitHub Actions', 'ESP32', 'Raspberry Pi', 'Linux', 'macOS', 'Windows'].map(skill => (
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
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="projects-grid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="project-card"
                  initial={{ opacity: 0, y: 30 }}
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
                      {project.logo && <img src={project.logo} alt={`${project.title} logo`} className="project-logo" />}
                      <h3>{project.title}</h3>
                    </div>
                    <p>{project.description}</p>
                    {project.award && (
                      <div className="project-award">
                        <Trophy size={16} />
                        {project.award}
                      </div>
                    )}
                    <div className="project-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {Array.isArray(project.github) ? (
                        project.github.map((githubLink, index) => (
                          <motion.a
                            key={index}
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={16} />
                            {githubLink.includes('ChargedUp2023') ? '2023 Code' :
                             githubLink.includes('Crescendo2024') ? '2024 Code' :
                             githubLink.includes('Offseason2024') ? '2025 Code' :
                             githubLink.includes('Frontend') ? 'Frontend' :
                             githubLink.includes('Backend') ? 'Backend' :
                             'GitHub'}
                          </motion.a>
                        ))
                      ) : (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                          GitHub
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-btn secondary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={16} />
                          {project.demo.includes('youtube.com') ? 'Video' : 
                           project.demo.includes('hacktheridge.ca') ? 'Hackathon' :
                           project.demo.includes('devpost.com') ? 'DevPost' :
                           'Live Demo'}
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm always open to discussing new opportunities, collaborations, or just chatting about technology.
            </motion.p>
            <motion.div 
              className="contact-links"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="mailto:madrobin1340@gmail.com"
                className="contact-link"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={32} />
                <div>
                  <h3>Email</h3>
                  <p>madrobin1340@gmail.com</p>
                </div>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abhimanyu-chaudhary-778a6b329/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin size={32} />
                <div>
                  <h3>LinkedIn</h3>
                  <p>Connect with me</p>
                </div>
              </motion.a>
              <motion.a
                href="https://github.com/MadRobin13"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github size={32} />
                <div>
                  <h3>GitHub</h3>
                  <p>Check out my code</p>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Abhimanyu Chaudhary. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://github.com/MadRobin13">GitHub</a>
              <a href="https://www.linkedin.com/in/abhimanyu-chaudhary-778a6b329/">LinkedIn</a>
              <a href="mailto:madrobin1340@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
