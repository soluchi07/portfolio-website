import { Link } from 'react-router-dom'
import StarBorder from '../components/StarBorder'
import CustomCursor from '../components/CustomCursor'
import SplashCursor from '../components/SplashCursor'
import notfound from '../assets/images/404.webp'

export default function NotFound() {
    return (
        <>
            <CustomCursor />
            <SplashCursor />
            <Link to="/" className="notfound-home-link">
                <StarBorder as="div" className="home-button" color="white" speed="6s">
                    Go back home
                </StarBorder>
            </Link>
            <div className="home-page dark-mode">
                <h2>404 — Page not found</h2>
                <p>The page you're looking for doesn't exist.</p>
                <img src={notfound} alt="robot image" />
            </div>
        </>
    )
}
