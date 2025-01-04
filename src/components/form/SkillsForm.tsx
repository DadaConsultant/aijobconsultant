import React from 'react';
import { Skill } from '../../types/resume';
import { Plus, Trash2 } from 'lucide-react';

interface SkillsFormProps {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

export function SkillsForm({ skills, onChange }: SkillsFormProps) {
  const addSkill = (category: Skill['category']) => {
    const newSkill: Skill = {
      id: crypto.randomUUID(),
      name: '',
      level: 'Beginner',
      category
    };
    onChange([...skills, newSkill]);
  };

  const updateSkill = (id: string, field: keyof Skill, value: string) => {
    const updatedSkills = skills.map(skill =>
      skill.id === id ? { ...skill, [field]: value } : skill
    );
    onChange(updatedSkills);
  };

  const removeSkill = (id: string) => {
    const updatedSkills = skills.filter(skill => skill.id !== id);
    onChange(updatedSkills);
  };

  const skillsByCategory = {
    technical: skills.filter(skill => skill.category === 'technical'),
    soft: skills.filter(skill => skill.category === 'soft'),
    language: skills.filter(skill => skill.category === 'language')
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Skills</h2>

      {/* Technical Skills */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Technical Skills</h3>
          <button
            type="button"
            onClick={() => addSkill('technical')}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Technical Skill
          </button>
        </div>
        {skillsByCategory.technical.map(skill => (
          <SkillInput
            key={skill.id}
            skill={skill}
            onUpdate={(field, value) => updateSkill(skill.id, field, value)}
            onRemove={() => removeSkill(skill.id)}
          />
        ))}
      </div>

      {/* Soft Skills */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Soft Skills</h3>
          <button
            type="button"
            onClick={() => addSkill('soft')}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Soft Skill
          </button>
        </div>
        {skillsByCategory.soft.map(skill => (
          <SkillInput
            key={skill.id}
            skill={skill}
            onUpdate={(field, value) => updateSkill(skill.id, field, value)}
            onRemove={() => removeSkill(skill.id)}
          />
        ))}
      </div>

      {/* Languages */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">Languages</h3>
          <button
            type="button"
            onClick={() => addSkill('language')}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Language
          </button>
        </div>
        {skillsByCategory.language.map(skill => (
          <SkillInput
            key={skill.id}
            skill={skill}
            onUpdate={(field, value) => updateSkill(skill.id, field, value)}
            onRemove={() => removeSkill(skill.id)}
          />
        ))}
      </div>
    </div>
  );
}

interface SkillInputProps {
  skill: Skill;
  onUpdate: (field: keyof Skill, value: string) => void;
  onRemove: () => void;
}

function SkillInput({ skill, onUpdate, onRemove }: SkillInputProps) {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        value={skill.name}
        onChange={(e) => onUpdate('name', e.target.value)}
        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder={`Enter ${skill.category} skill...`}
      />
      <select
        value={skill.level}
        onChange={(e) => onUpdate('level', e.target.value)}
        className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
        <option value="Expert">Expert</option>
      </select>
      <button
        type="button"
        onClick={onRemove}
        className="text-red-600 hover:text-red-800"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}