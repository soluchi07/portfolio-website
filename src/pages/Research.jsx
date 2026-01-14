import '../assets/css/Research.css'

const researchItems = [
  {
    id: 1,
    title: 'Adverse Drug Event Detection from Clinical Notes',
    institution: 'Howard University',
    year: '2025 - Present',
    summary:
      'Improving adverse drug event detection accuracy by integrating structured drug-side effect knowledge from the SIDER database with unstructured clinical notes from the n2c2 dataset. Implementing context engineering techniques that cross-reference drug mentions with documented pharmacological outcomes to reduce false positives and enhance clinical relevance.',
    technologies: 'Python, NLP, Clinical Text Mining, Pharmacovigilance',
    link: '#'
  },
  {
    id: 2,
    title: 'HuBMAP Fusion — Spatial Omics & Autoimmune Disease Detection',
    institution: 'University of Florida',
    year: 'May - June 2025',
    summary:
      'Processed hundreds of high-dimensional spatial omics datasets by implementing Python-based pipelines with optimized data handling protocols for enhanced scalability and reliability. Authored and registered a formal research proposal on OSF focused on advanced data visualization techniques for autoimmune disease detection.',
    technologies: 'Python, Fusion, Jupyter, Spatial Omics, Data Visualization',
    link: 'https://osf.io/qnbf5'
  },
]

export default function Research() {
  return (
    <section className="research-page dark-mode">
      <header className="research-header">
        <h2>Undergraduate Research</h2>
        <p className="lead">Selected research work exploring healthcare AI, spatial omics, and cybersecurity.</p>
      </header>

      <div className="research-list">
        {researchItems.map(item => (
          <div key={item.id} className="research-item">
            <a href={item.link} target="_blank">
            <div className="research-meta">
              <h3 className="research-title">{item.title}</h3>
              <div className="research-by">{item.institution} • <span className="year">{item.year}</span></div>
              {item.technologies && (
                <div className="research-tech">{item.technologies}</div>
              )}
              </a>
            <span className="research-year">{item.year}</span>
           </div>
          </div>
        ))}
      </div>
    </section>
  )
}