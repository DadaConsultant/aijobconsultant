import React from 'react';
import { WorkExperience } from '../../types/resume';
import { Plus, Trash2, GripVertical } from 'lucide-react';

interface WorkExperienceFormProps {
  experiences: WorkExperience[];
  onChange: (experiences: WorkExperience[]) => void;
}

export function WorkExperienceForm({ experiences, onChange }: WorkExperienceFormProps) {
  const addExperience = () => {
    const newExperience: WorkExperience = {
      id: crypto.randomUUID(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      responsibilities: ['']
    };
    onChange([...experiences, newExperience]);
  };

  const updateExperience = (index: number, field: keyof WorkExperience, value: any) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: value };
    onChange(updatedExperiences);
  };

  const removeExperience = (index: number) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    onChange(updatedExperiences);
  };

  const addResponsibility = (experienceIndex: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[experienceIndex].responsibilities.push('');
    onChange(updatedExperiences);
  };

  const updateResponsibility = (experienceIndex: number, responsibilityIndex: number, value: string) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[experienceIndex].responsibilities[responsibilityIndex] = value;
    onChange(updatedExperiences);
  };

  const removeResponsibility = (experienceIndex: number, responsibilityIndex: number) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[experienceIndex].responsibilities = updatedExperiences[experienceIndex].responsibilities.filter(
      (_, i) => i !== responsibilityIndex
    );
    onChange(updatedExperiences);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
        <button
          type="button"
          onClick={addExperience}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </button>
      </div>

      {experiences.map((experience, index) => (
        <div key={experience.id} className="p-4 bg-gray-50 rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <GripVertical className="h-5 w-5 text-gray-400 cursor-move" />
              <h3 className="text-lg font-medium text-gray-900 ml-2">Position {index + 1}</h3>
            </div>
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => updateExperience(index, 'company', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                value={experience.position}
                onChange={(e) => updateExperience(index, 'position', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="month"
                value={experience.startDate}
                onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <div className="flex items-center space-x-4">
                <input
                  type="month"
                  value={experience.endDate}
                  onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                  disabled={experience.current}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={experience.current}
                    onChange={(e) => updateExperience(index, 'current', e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Current</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">Responsibilities</label>
              <button
                type="button"
                onClick={() => addResponsibility(index)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            {experience.responsibilities.map((responsibility, respIndex) => (
              <div key={respIndex} className="flex items-center space-x-2 mb-2">
                <input
                  type="text"
                  value={responsibility}
                  onChange={(e) => updateResponsibility(index, respIndex, e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Add a responsibility..."
                />
                <button
                  type="button"
                  onClick={() => removeResponsibility(index, respIndex)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}