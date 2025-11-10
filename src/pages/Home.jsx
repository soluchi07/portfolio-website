import '../assets/css/Home.css'
import { Link } from 'react-router-dom'
import ColorBends from './ColorBends';

export default function Home() {
  return (
    <>
    <div className="home-page dark-mode">
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
        // style={{ position: 'absolute', inset: 0, zIndex: 10 }}
      />
      <h3>// Soluchi_Fidel_Ibeabuchi //</h3>
      <h4>CURIOSITY. CODE. CLARITY</h4>

      <div className="button-container">
        <Link to="/projects" className="page-button">Projects</Link>
        <Link to="/research" className="page-button">Research</Link>
        <Link to="/thoughts" className="page-button">Thoughts</Link>
        <Link to="/about" className="page-button">About</Link>
      </div>
      
    </div>
    </>
  )
}
