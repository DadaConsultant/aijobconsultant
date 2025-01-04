import React from 'react';
import { Reference } from '../../../types/resume';
import { Mail, Phone } from 'lucide-react';

interface ReferencesSectionProps {
  references?: Reference[];
}

export function ReferencesSection({ references = [] }: ReferencesSectionProps) {
  if (!references || references.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">References</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {references.map((reference) => (
          <div key={reference.id} className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium text-gray-900">{reference.name}</h3>
            <p className="text-gray-600">{reference.position}</p>
            <p className="text-gray-600 text-sm">{reference.company}</p>
            <p className="text-gray-600 text-sm mt-1">{reference.relationship}</p>
            <div className="mt-2 space-y-1">
              <a
                href={`mailto:${reference.email}`}
                className="flex items-center text-sm text-gray-600 hover:text-blue-600"
              >
                <Mail className="h-4 w-4 mr-2" />
                {reference.email}
              </a>
              <a
                href={`tel:${reference.phone}`}
                className="flex items-center text-sm text-gray-600 hover:text-blue-600"
              >
                <Phone className="h-4 w-4 mr-2" />
                {reference.phone}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}