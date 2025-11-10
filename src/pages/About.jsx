
import '../assets/css/About.css';
import profile from "../assets/images/profile.JPG";

export default function About() {
  return (
    <section className="about-page dark-mode">
      <header className="about-header">
        <img src={profile} alt="Profile" className="about-avatar" />
        <div>
          <h2 className="about-title">Soluchi Kristen Fidel-Ibeabuchi</h2>
          <p className="about-role">CS Student @ Howard University</p>
        </div>
      </header>
      <article className="about-main">
        <p>
          Passionate about building innovative web applications and researching technology for machine learning and data science. Studied at the University of Warwick, deepening knowledge in data structures, security, and Linux systems.
        </p>
        <ul className="about-list">
          <li><b>Current Focus:</b> Full-stack development, AI integration, data visualization</li>
          <li><b>Research:</b> HuBMAP Fusion Researcher (NIH-affiliated) - spatial omics & autoimmune disease detection; 
          Undergraduate Researcher @ Howard University -  adverse drug event detection from clinical notes using NLP and pharmacovigilance datasets</li>
          <li><b>Skills:</b> JavaScript, React, Python, C++, Supabase, Node.js, Git/GitHub</li>
          <li><b>Fun Fact:</b> 1st place at Microsoft AI Policython (CBC Week 2025); built first React app in a 24-hour hackathon</li>
        </ul>
      </article>
      <footer className="about-extra">
        <h4>What drives me?</h4>
        <p>
          I love building things that actually work and solve real problems—whether it's a social platform for fandom nerds like me or an AI trivia bot I threw together at a hackathon. When I'm not coding, you'll find me diving into new TV shows, playing D&D with friends, or contributing to open-source projects. I'm all about learning by doing, sharing what I know, and making tech feel less intimidating for everyone.
        </p>
      </footer>
    </section>
  );
}