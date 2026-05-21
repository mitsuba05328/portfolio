import { hobbies } from '../data/hobbies';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ImageSlider from './ImageSlider';

function Hobbies() {
  const sectionAnimation = useScrollAnimation<HTMLElement>();

  return (
    <section
      className={`section reveal ${sectionAnimation.isVisible ? 'is-visible' : ''}`}
      id="hobbies"
      ref={sectionAnimation.ref}
    >
      <div className="section-heading">
        <p>Hobbies</p>
        <h2>趣味</h2>
      </div>
      <div className="hobby-grid">
        {hobbies.map((hobby) => (
          <article className="hobby-card" key={hobby.title}>
            <ImageSlider images={hobby.images} label={hobby.title} />
            <div className="card-body">
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Hobbies;
