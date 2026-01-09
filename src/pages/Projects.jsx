import '../assets/css/Projects.css';
import projectData from '../data/projects.json';

export default function Projects() {

    const projects = projectData.projects

    return (
        <div className="projects-page dark-mode">
            <div className="projects-container">
                <h1 className="projects-title">Projects</h1>
                <div className="projects-list">
                    {projects.map((project, index) => (
                            <div key={index} className="project-item">
                                    <div className="project-info">
                                        <a href={project.link} target="_blank">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-description">{project.description}</p>
                                        </a>
                                    </div>
                                    <span className="project-date">{project.date}</span>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
}