import { Link } from 'react-router-dom';
import '../assets/css/Thoughts.css'
import thoughtsData from '../data/thoughts.json';


export default function Thoughts() {
  return (
    <div className="thoughts-page dark-mode">
      <div className="thoughts-container">
        <h1 className="thoughts-title">Thoughts</h1>
        <div className="thoughts-list">
          {thoughtsData.thoughts.map((t) => (
            <article key={t.id} className="thought-item">
              <Link to={`/thoughts/${t.id}`} className="thought-link">
                <div className="thought-content">
                  <h3 className="thought-head">{t.title}</h3>
                  <p className="thought-excerpt">{t.excerpt}</p>
                </div>
                <time className="thought-date">{t.date}</time>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
