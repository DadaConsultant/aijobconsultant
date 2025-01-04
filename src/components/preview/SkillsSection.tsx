import React from 'react';
import { Skill } from '../../types/resume';

interface SkillsSectionProps {
  skills: Skill[];
}

function SkillCategory({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <div className="space-y-2">
        {skills.map(skill => (
          <div key={skill.id} className="flex justify-between">
            <span className="text-gray-700">{skill.name}</span>
            <span className="text-gray-600">{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');
  const languageSkills = skills.filter(skill => skill.category === 'language');

  if (skills.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
      <div className="grid grid-cols-2 gap-6">
        {technicalSkills.length > 0 && (
          <SkillCategory title="Technical Skills" skills={technicalSkills} />
        )}
        {softSkills.length > 0 && (
          <SkillCategory title="Soft Skills" skills={softSkills} />
        )}
        {languageSkills.length > 0 && (
          <SkillCategory title="Languages" skills={languageSkills} />
        )}
      </div>
    </section>
  );
}