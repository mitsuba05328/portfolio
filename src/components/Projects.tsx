import type { Project } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type ProjectsProps = {
  projects: Project[];
};

function Projects({ projects }: ProjectsProps) {
  const sectionAnimation = useScrollAnimation<HTMLElement>();

  return (
    <section
      className={`section reveal ${sectionAnimation.isVisible ? 'is-visible' : ''}`}
      id="projects"
      ref={sectionAnimation.ref}
    >
      <div className="section-heading">
        <p>Projects</p>
        <h2>プロジェクト</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-header">
              <h3>{project.title}</h3>
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer">
                  View
                </a>
              )}
            </div>
            <p>{project.description}</p>
            <ul>
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="tag-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
