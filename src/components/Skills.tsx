import { useMemo } from 'react';
import type { Skill } from '../data/skills';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type SkillsProps = {
  skills: Skill[];
};

function Skills({ skills }: SkillsProps) {
  const sectionAnimation = useScrollAnimation<HTMLElement>();
  const groupedSkills = useMemo(() => {
    return skills.reduce<Record<Skill['category'], Skill[]>>(
      (groups, skill) => {
        groups[skill.category].push(skill);
        return groups;
      },
      {
        Frontend: [],
        App: [],
        Backend: [],
        'Design / Tool': [],
      },
    );
  }, [skills]);

  return (
    <section
      className={`section reveal ${sectionAnimation.isVisible ? 'is-visible' : ''}`}
      id="skills"
      ref={sectionAnimation.ref}
    >
      <div className="section-heading">
        <p>Skills</p>
        <h2>スキル</h2>
      </div>
      <div className="skills-layout">
        {Object.entries(groupedSkills).map(([category, items]) => (
          <div className="skill-group" key={category}>
            <h3>{category}</h3>
            <div className="skill-tags">
              {items.map((skill) => (
                <span className="skill-tag" key={skill.name}>
                  <strong>{skill.name}</strong>
                  <small>{skill.level}</small>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
