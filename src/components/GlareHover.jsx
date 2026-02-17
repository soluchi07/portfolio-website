import { useState } from 'react';
import '../assets/css/GlareHover.css';

export default function GlareHover({ 
  children, 
  glareColor = '#ffffff',
  glareOpacity = 0.2,
  glareSize = 250,
  className = ''
}) {
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className={`glare-hover-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isHovering && (
        <div
          className="glare-effect"
          style={{
            background: `radial-gradient(circle ${glareSize}% at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor}, transparent)`,
            opacity: glareOpacity,
          }}
        />
      )}
    </div>
  );
}
