'use client';

import { useMemo, useState } from 'react';

type TechnicalSkillsProps = {
  skills: string[];
  initiallyVisible?: number;
  moreLabel: string;
  lessLabel: string;
};

export default function TechnicalSkills({
  skills,
  initiallyVisible = 8,
  moreLabel,
  lessLabel
}: TechnicalSkillsProps) {
  const [expanded, setExpanded] = useState(false);

  const visibleSkills = useMemo(() => {
    if (expanded) {
      return skills;
    }

    return skills.slice(0, initiallyVisible);
  }, [expanded, skills, initiallyVisible]);

  const canToggle = skills.length > initiallyVisible;

  return (
    <div className="skills-cloud-wrap">
      <div className="skill-cloud">
        {visibleSkills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      {canToggle ? (
        <button
          type="button"
          className="skills-toggle"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
          aria-label={expanded ? lessLabel : moreLabel}
        >
          {expanded ? lessLabel : moreLabel}
        </button>
      ) : null}
    </div>
  );
}