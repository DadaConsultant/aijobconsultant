import React from 'react';
import { Skill } from '../../../types/resume';

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (skills.length === 0) return null;

  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');
  const languageSkills = skills.filter(skill => skill.category === 'language');

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-2 gap-6">
        {technicalSkills.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-2">Technical Skills</h3>
            {technicalSkills.map(skill => (
              <div key={skill.id} className="flex justify-between mb-1">
                <span className="text-gray-700">{skill.name}</span>
                <span className="text-gray-600">{skill.level}</span>
              </div>
            ))}
          </div>
        )}
        {softSkills.length > 0 && (
          <div>
            <h3 className="text-lg font-medium mb-2">Soft Skills</h3>
            {softSkills.map(skill => (
              <div key={skill.id} className="flex justify-between mb-1">
                <span className="text-gray-700">{skill.name}</span>
                <span className="text-gray-600">{skill.level}</span>
              </div>
            ))}
          </div>
        )}
        {languageSkills.length > 0 && (
          <div className="col-span-2">
            <h3 className="text-lg font-medium mb-2">Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              {languageSkills.map(skill => (
                <div key={skill.id} className="flex justify-between mb-1">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}