import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/css/Layout.css';    
import LogoLoop from './LogoLoop';
import linkedin from '../assets/images/linkedin.jpg';
import github from '../assets/images/github.png';
import email from '../assets/images/email.jpg';

export default function Layout() {
    const navigate = useNavigate();
    const location = useLocation();

    // show back button on every page except home and thought details
    const showBack = location.pathname !== '/' && !location.pathname.startsWith('/thoughts/');

    const handleBack = () => {
        // if there's a previous entry in the history stack, go back
        // otherwise, fall back to the home page
        navigate('/');
    };

    const techLogos = [
        { href: "https://linkedin.com/in/soluchi", alt: "Linkedin", src: linkedin },
        { href: "https://github.com/soluchi07", alt: "Github", src: github },
        { href: "mailto:fidelibeabuchi.soluchi@gmail.com", alt: "Email", src: email },
    ];

    return (
        <div className="layout-container">
            {showBack && (
                <motion.button 
                    className="home-button" 
                    onClick={handleBack} 
                    aria-label="Go back to previous page"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    ← Go Home
                </motion.button>
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
    );
}