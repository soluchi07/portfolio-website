
import '../assets/css/About.css';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import profile from "../assets/images/profile.JPG";

export default function About() {
  const mainRef = useRef(null);
  const extraRef = useRef(null);
  const skillsRef = useRef(null);
  const mainInView = useInView(mainRef, { once: true, amount: 0.2 });
  const extraInView = useInView(extraRef, { once: true, amount: 0.2 });
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 });

  return (
    <motion.section 
      className="about-page dark-mode"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="about-layout">
        {/* Left Column - Profile Photo */}
        <div className="about-left">
          <motion.div
            className="about-photo-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              ease: "backOut"
            }}
          >
            <motion.img 
              src={profile} 
              alt="Profile" 
              className="about-avatar"
              whileHover={{ 
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </div>

        {/* Right Column - Content */}
        <div className="about-right">
          <motion.header 
            className="about-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2 
              className="about-title"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Soluchi Kristen Fidel-Ibeabuchi
            </motion.h2>
            <motion.p 
              className="about-role"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              CS Student @ Howard University
            </motion.p>
          </motion.header>
          
          <motion.article 
            ref={mainRef}
            className="about-main"
            initial={{ opacity: 0, y: 30 }}
            animate={mainInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={mainInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Passionate about building innovative web applications and researching technology for machine learning and data science. Studied at the University of Warwick, deepening knowledge in data structures, security, and Linux systems.
            </motion.p>
            <ul className="about-list">
              <motion.li
                initial={{ opacity: 0, x: -30 }}
                animate={mainInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <b>Current Focus:</b> Full-stack development, AI integration, data visualization
              </motion.li>
              <motion.li
                ref={skillsRef}
                initial={{ opacity: 0, x: -30 }}
                animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <b>Skills:</b> JavaScript, React, Python, C++, Supabase, Node.js, Git/GitHub
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -30 }}
                animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <b>Fun Fact:</b> 1st place at Microsoft AI Policython (CBC Week 2025); built first React app in a 24-hour hackathon
              </motion.li>
            </ul>
          </motion.article>
          
          <motion.footer 
            ref={extraRef}
            className="about-extra"
            initial={{ opacity: 0, y: 30 }}
            animate={extraInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h4
              initial={{ opacity: 0, scale: 0.9 }}
              animate={extraInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              What drives me?
            </motion.h4>
            <motion.p
              initial={{ opacity: 0 }}
              animate={extraInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I love building things that actually work and solve real problems—whether it's a social platform for fandom nerds like me or an AI trivia bot I threw together at a hackathon. When I'm not coding, you'll find me diving into new TV shows, playing video games with friends, or contributing to open-source projects. I'm all about learning by doing, sharing what I know, and making tech feel less intimidating for everyone.
            </motion.p>
          </motion.footer>
        </div>
      </div>
    </motion.section>
  );
}