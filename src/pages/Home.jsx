import '../assets/css/Home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ColorBends from './ColorBends';

export default function Home() {
  const buttons = [
    { to: "/projects", label: "Projects" },
    { to: "/research", label: "Research" },
    { to: "/thoughts", label: "Thoughts" },
    { to: "/about", label: "About" }
  ];

  return (
    <>
    <motion.div 
      className="home-page dark-mode"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <ColorBends
        colors={["#e12a2aff", "#f3ef17ff", "#28c655ff","#111bd9ff"]}
        rotation={30}
        speed={0.3}
        scale={1}
        frequency={1.5}
        warpStrength={1.2}
        mouseInfluence={0.8}
        parallax={0.6}
        noise={0.08}
        transparent={false}
      />
      
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.2,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        // Soluchi_Fidel_Ibeabuchi //
      </motion.h3>
      
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.7, 
          delay: 0.4,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      >
        CURIOSITY. CODE. CLARITY
      </motion.h4>

      <div className="button-container">
        {buttons.map((button, index) => (
          <motion.div
            key={button.to}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6 + (index * 0.1),
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
          >
            <Link to={button.to} className="page-button-link">
              <motion.button
                className="page-button"
                whileHover={{ 
                  scale: 1.05, 
                  x: 10,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                {button.label}
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
      
    </motion.div>
    </>
  )
}
