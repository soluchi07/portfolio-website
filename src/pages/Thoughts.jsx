import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/css/Thoughts.css'
import thoughtsData from '../data/thoughts.json';

// Calculate reading time based on content length
const calculateReadingTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export default function Thoughts() {
  return (
    <motion.div 
      className="thoughts-page dark-mode"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <div className="thoughts-container">
        <motion.h1 
          className="thoughts-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Thoughts
        </motion.h1>
        <div className="thoughts-list">
          {thoughtsData.thoughts.map((t, index) => (
            <motion.article 
              key={t.id} 
              className="thought-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + (index * 0.08),
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <Link to={`/thoughts/${t.id}`} className="thought-link">
                <div className="thought-content">
                  <h3 className="thought-head">{t.title}</h3>
                  <p className="thought-excerpt">{t.excerpt}</p>
                  <motion.div 
                    className="thought-meta"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4,
                      delay: 0.5 + (index * 0.08)
                    }}
                  >
                    <span className="reading-time">
                      {calculateReadingTime(t.content)} min read
                    </span>
                  </motion.div>
                </div>
                <motion.time 
                  className="thought-date"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.4,
                    delay: 0.4 + (index * 0.08)
                  }}
                >
                  {t.date}
                </motion.time>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
