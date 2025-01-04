import React from 'react';
import { Achievement } from '../../../types/resume';

interface AchievementsSectionProps {
  achievements: Achievement[];
}

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  if (achievements.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Achievements</h2>
      {achievements.map((achievement) => (
        <div key={achievement.id} className="mb-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{achievement.title}</h3>
              <p className="text-gray-700 mt-1">{achievement.description}</p>
            </div>
            <span className="text-sm text-gray-500">{achievement.date}</span>
          </div>
        </div>
      ))}
    </section>
  );
}