import React from 'react';
import { Achievement } from '../../types/resume';
import { Plus, Trash2 } from 'lucide-react';

interface AchievementsFormProps {
  achievements: Achievement[];
  onChange: (achievements: Achievement[]) => void;
}

export function AchievementsForm({ achievements, onChange }: AchievementsFormProps) {
  const addAchievement = () => {
    const newAchievement: Achievement = {
      id: crypto.randomUUID(),
      title: '',
      date: '',
      description: ''
    };
    onChange([...achievements, newAchievement]);
  };

  const updateAchievement = (index: number, field: keyof Achievement, value: string) => {
    const updatedAchievements = [...achievements];
    updatedAchievements[index] = { ...updatedAchievements[index], [field]: value };
    onChange(updatedAchievements);
  };

  const removeAchievement = (index: number) => {
    onChange(achievements.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Achievements</h2>
        <button
          type="button"
          onClick={addAchievement}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Achievement
        </button>
      </div>

      {achievements.map((achievement, index) => (
        <div key={achievement.id} className="p-4 bg-gray-50 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Achievement {index + 1}</h3>
            <button
              type="button"
              onClick={() => removeAchievement(index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={achievement.title}
              onChange={(e) => updateAchievement(index, 'title', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="month"
              value={achievement.date}
              onChange={(e) => updateAchievement(index, 'date', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={achievement.description}
              onChange={(e) => updateAchievement(index, 'description', e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
}