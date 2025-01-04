import React from 'react';
import { WorkExperience } from '../../../types/resume';

interface WorkExperienceSectionProps {
  workExperience: WorkExperience[];
}

export function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {
  if (workExperience.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
      {workExperience.map((exp) => (
        <div key={exp.id} className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{exp.position}</h3>
              <p className="text-gray-600">{exp.company}</p>
            </div>
            <span className="text-sm text-gray-500">
              {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
            </span>
          </div>
          <ul className="mt-2 text-gray-700 list-disc pl-5">
            {exp.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}