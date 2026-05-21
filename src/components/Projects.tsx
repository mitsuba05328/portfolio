import type { Project } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ImageSlider from './ImageSlider';

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
            {project.images && (
              <ImageSlider
                className="project-image-slider"
                images={project.images}
                interval={3200}
                label={project.title}
              />
            )}
            <div className="project-card-body">
              <div className="project-card-header">
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {project.link && (
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  View project
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
