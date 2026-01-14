import '../assets/css/Research.css'
import researchData from '../data/research.json';


export default function Research() {
  const researchItems = researchData.items
  
  return (
    <section className="research-page dark-mode">
      <header className="research-header">
        <h2>Undergraduate Research</h2>
        <p className="lead">Selected research work exploring healthcare AI, spatial omics, and cybersecurity.</p>
      </header>

      <div className="research-list">
        {researchItems.map(item => (
          <div key={item.id} className="research-item">
            <div className="research-meta">
              <a href={item.link}>
                <h3 className="research-title">{item.title}</h3>
                <div className="research-by">{item.institution} • <span className="year">{item.year}</span></div>
                {item.technologies && (
                  <div className="research-tech">{item.technologies}</div>
                )}
              </a>
            </div>
            <p className="research-summary">{item.summary}</p>
            <span className="research-year">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}