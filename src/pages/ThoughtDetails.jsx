import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import thoughtsData from '../data/thoughts.json';
import '../assets/css/ThoughtDetails.css';

export default function ThoughtDetails() {
  const { id } = useParams();
  const thought = thoughtsData.thoughts.find(t => t.id === parseInt(id));

  if (!thought) {
    return (
      <div className="thought-details-page">
        <div className="thought-details-container">
          <header className="thought-details-header">
            <Link to="/thoughts" className="back-link">← Back to Thoughts</Link>
            <h1 className="thought-details-title">Thought not found</h1>
          </header>
          <div className="thought-details-content">
            <p>The thought entry you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="thought-details-page">
      <div className="thought-details-container">
        <header className="thought-details-header">
          <Link to="/thoughts" className="back-link">← Back to Thoughts</Link>
          <h1 className="thought-details-title">{thought.title}</h1>
          <time className="thought-details-date">{thought.date}</time>
        </header>
        <article className="thought-details-content">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {thought.content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
