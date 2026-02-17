import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedList from '../components/AnimatedList';
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
        <AnimatedList
          items={thoughtsData.thoughts}
          showGradients={false}
          enableArrowNavigation={false}
          displayScrollbar={false}
          renderItem={(thought, index, isSelected) => (
            <div className={`thought-item ${isSelected ? 'selected' : ''}`}>
              <Link to={`/thoughts/${thought.id}`} className="thought-link">
                <div className="thought-content">
                  <h3 className="thought-head">{thought.title}</h3>
                  <p className="thought-excerpt">{thought.excerpt}</p>
                  <div className="thought-meta">
                    <span className="reading-time">
                      {calculateReadingTime(thought.content)} min read
                    </span>
                  </div>
                </div>
                <time className="thought-date">
                  {thought.date}
                </time>
              </Link>
            </div>
          )}
        />
      </div>
    </motion.div>
  )
}
