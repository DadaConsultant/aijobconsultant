import React from 'react';
import { PersonalInfo } from '../../types/resume';

interface ResumeHeaderProps {
  personalInfo: PersonalInfo;
}

export function ResumeHeader({ personalInfo }: ResumeHeaderProps) {
  return (
    <header className="text-center mb-8">
      {personalInfo.photo && (
        <img
          src={personalInfo.photo}
          alt={personalInfo.fullName}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
      )}
      <h1 className="text-3xl font-bold text-gray-900">{personalInfo.fullName}</h1>
      <p className="text-xl text-gray-600">{personalInfo.title}</p>
      <div className="mt-2 text-gray-600">
        <p>{personalInfo.email} • {personalInfo.phone}</p>
        <p>{personalInfo.location}</p>
      </div>
    </header>
  );
}