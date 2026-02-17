import '../assets/css/Home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ColorBends from './ColorBends';
import StarBorder from '../components/StarBorder';
import TextType from '../components/TextType';
import ShinyText from '../components/ShinyText';
import '../assets/css/TextType.css';

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
        <ShinyText
          text="// Soluchi_Fidel_Ibeabuchi //"
          speed={3}
          delay={1}
          color="#ffffff"
          shineColor="#000000"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
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
        <TextType 
          text="CURIOSITY. CODE. CLARITY"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="▎"
          deletingSpeed={50}
          variableSpeedEnabled={false}
          variableSpeedMin={60}
          variableSpeedMax={120}
          cursorBlinkDuration={0.5}
        />
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
              <StarBorder as="div" className="home-button" color="white" speed="6s">
                  {button.label}
              </StarBorder>
            </Link>
          </motion.div>
        ))}
      </div>
      
    </motion.div>
    </>
  )
}
