import { Link } from 'react-router-dom'
import notfound from '../assets/images/404.webp'

export default function NotFound() {
    return (
        <div className="home-page dark-mode">
            <h2>404 — Page not found</h2>
            <p>The page you're looking for doesn't exist.</p>
            <Link to="/" className='page-button'>Go back home</Link>
            <img src={notfound} alt="robot image" />
        </div>
    )
}
