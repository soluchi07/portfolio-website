import '../assets/css/Research.css'
import researchData from '../data/research.json';

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Research() {
  const researchItems = researchData.items
  
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.section 
      className="research-page dark-mode"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <motion.header 
        className="research-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Undergraduate Research</h2>
        <p className="lead">Selected research work exploring healthcare AI, spatial omics, and cybersecurity.</p>
      </motion.header>

      <div className="research-list">
        {researchItems.map(item => (
          <div key={item.id} className="research-item">
            <a href={item.link}>
        {researchItems.map((item, index) => (
          <motion.div 
            key={item.id} 
            className="research-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: 0.3 + (index * 0.15),
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -4,
              transition: { duration: 0.2 }
            }}
            onClick={() => toggleExpand(item.id)}
          >
            <div className="timeline-dot"></div>
            <div className="research-meta">
                <h3 className="research-title">{item.title}</h3>
                <div className="research-by">{item.institution} • <span className="year">{item.year}</span></div>
                {item.technologies && (
                  <div className="research-tech">{item.technologies}</div>
                )}
              <h3 className="research-title">{item.title}</h3>
              <div className="research-by">
                <motion.span
                  animate={{ 
                    opacity: [1, 0.7, 1] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {item.institution}
                </motion.span>
                {' • '}
                <span className="year">{item.year}</span>
              </div>
              {item.technologies && (
                <div className="research-tech-container">
                  {item.technologies.split(', ').map((tech, i) => (
                    <motion.span
                      key={i}
                      className="tech-badge"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3,
                        delay: 0.5 + (index * 0.15) + (i * 0.05),
                        ease: "backOut"
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}
              
              <AnimatePresence>
                {expandedId === item.id && (
                  <motion.p
                    className="research-summary"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {item.summary}
                  </motion.p>
                )}
              </AnimatePresence>
              
              <motion.button
                className="expand-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {expandedId === item.id ? '↑ Show less' : '↓ Read more'}
              </motion.button>
            </div>
            <p className="research-summary">{item.summary}</p>
            <span className="research-year">{item.year}</span>
              </a>
          </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}