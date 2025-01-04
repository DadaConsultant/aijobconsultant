import React, { useState, useEffect } from 'react';
import { Resume } from './types/resume';
import { PersonalInfoForm } from './components/form/PersonalInfoForm';
import { WorkExperienceForm } from './components/form/WorkExperienceForm';
import { EducationForm } from './components/form/EducationForm';
import { SkillsForm } from './components/form/SkillsForm';
import { CertificatesForm } from './components/form/CertificatesForm';
import { ProjectsForm } from './components/form/ProjectsForm';
import { AchievementsForm } from './components/form/AchievementsForm';
import { ReferencesForm } from './components/form/ReferencesForm';
import { ResumePreview } from './components/preview/ResumePreview';
import { initialResume } from './constants/initialState';

function App() {
  const [resume, setResume] = useState<Resume>(() => {
    const saved = localStorage.getItem('resume');
    return saved ? JSON.parse(saved) : initialResume;
  });
  const [activeTemplate, setActiveTemplate] = useState<'modern' | 'classic' | 'minimal' | 'compact' | 'elegant'>('modern');

  useEffect(() => {
    localStorage.setItem('resume', JSON.stringify(resume));
  }, [resume]);

  return (
    <div className="min-h-screen bg-gray-800">
      <div className="max-w-[1800px] mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Resume Builder</h1>
          <p className="text-gray-300">Create a professional resume in minutes</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Panel */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <PersonalInfoForm
                data={resume.personalInfo}
                onChange={(personalInfo) => setResume({ ...resume, personalInfo })}
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <WorkExperienceForm
                experiences={resume.workExperience}
                onChange={(workExperience) => setResume({ ...resume, workExperience })}
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <EducationForm
                education={resume.education}
                onChange={(education) => setResume({ ...resume, education })}
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <SkillsForm
                skills={resume.skills}
                onChange={(skills) => setResume({ ...resume, skills })}
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <CertificatesForm
                certificates={resume.certificates}
                onChange={(certificates) => setResume({ ...resume, certificates })}
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ProjectsForm
                projects={resume.projects}
                onChange={(projects) => setResume({ ...resume, projects })}
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <AchievementsForm
                achievements={resume.achievements}
                onChange={(achievements) => setResume({ ...resume, achievements })}
              />
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <ReferencesForm
                references={resume.references}
                onChange={(references) => setResume({ ...resume, references })}
              />
            </div>
          </div>

          {/* Preview Panel - Now sticky */}
          <div className="relative lg:h-[calc(100vh-2rem)]">
            <div className="sticky top-4 h-[calc(100vh-2rem)] overflow-hidden">
              <ResumePreview 
                resume={resume} 
                template={activeTemplate}
                onTemplateChange={setActiveTemplate} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;