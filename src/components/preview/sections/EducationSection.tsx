import React from 'react';
import { Education } from '../../../types/resume';

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  if (education.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Education</h2>
      {education.map((edu) => (
        <div key={edu.id} className="mb-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{edu.degree} in {edu.field}</h3>
              <p className="text-gray-600">{edu.institution}</p>
            </div>
            <span className="text-sm text-gray-500">{edu.graduationDate}</span>
          </div>
          {edu.gpa && <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>}
        </div>
      ))}
    </section>
  );
}