import '../assets/css/Projects.css';
import projectData from '../data/projects.json';
import { motion } from 'framer-motion';

export default function Projects() {
    const {projects} = projectData

    return (
        <motion.div 
            className="projects-page dark-mode"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
            <div className="projects-container">
                <motion.h1 
                    className="projects-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Projects
                </motion.h1>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            className="project-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: 0.3 + (index * 0.1),
                                ease: "easeOut"
                            }}
                            whileHover={{ 
                                x: 8, 
                                scale: 1.01,
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <div className="project-info">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <h3 className="project-title">
                                        {project.title}
                                        <motion.svg 
                                            className="project-icon"
                                            width="16" 
                                            height="16" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2"
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                            initial={{ opacity: 0.5 }}
                                            whileHover={{ 
                                                opacity: 1, 
                                                scale: 1.2,
                                                rotate: -15,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </motion.svg>
                                    </h3>
                                    <p className="project-description">{project.description}</p>
                                </a>
                            </div>
                            <span className="project-date">{project.date}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}