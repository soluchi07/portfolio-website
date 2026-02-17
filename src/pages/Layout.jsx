import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/css/Layout.css';    
import LogoLoop from './LogoLoop';
import CustomCursor from '../components/CustomCursor';
import SplashCursor from '../components/SplashCursor';
import linkedin from '../assets/images/linkedin.jpg';
import github from '../assets/images/github.png';
import email from '../assets/images/email.jpg';

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation();

    // show back button on every page except home
    const showBack = location.pathname !== '/';
    // show home button on every page except home
    const showHome = location.pathname !== '/';

    const handleBack = () => {
        // go back to previous page in history
        navigate(-1);
    };

    const techLogos = [
        { href: "https://linkedin.com/in/soluchi", alt: "Linkedin", src: linkedin },
        { href: "https://github.com/soluchi07", alt: "Github", src: github },
        { href: "mailto:fidelibeabuchi.soluchi@gmail.com", alt: "Email", src: email },
    ];

    return (
        <>
            <CustomCursor />
            <SplashCursor />
            <div className="layout-container">
                {showBack && (
                    <motion.button 
                        className="back-button" 
                        onClick={handleBack} 
                        aria-label="Go back to previous page"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, x: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ← Back
                    </motion.button>
                )}
                {showHome && (
                    <Link to="/" className="home-button-link">
                        <motion.button 
                            className="home-button" 
                            aria-label="Go to home page"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Home 
                        </motion.button>
                    </Link>
                )}
                <div className="layout-content">
                    <Outlet/>
                </div>
                <footer className="layout-footer dark-mode">
                    <LogoLoop
                        logos={techLogos}
                        speed={60}
                        direction="left"
                        logoHeight={40}
                        gap={350}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#000"
                        ariaLabel="Contacts"
                    />
                    made by <Link to="https://www.linkedin.com/in/soluchi" target="_blank" className="footer-link"> soluchi </Link>
                </footer>
            </div>
        </>
    );
}