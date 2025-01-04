import React from 'react';
import { Reference } from '../../types/resume';
import { Plus, Trash2 } from 'lucide-react';

interface ReferencesFormProps {
  references?: Reference[];
  onChange: (references: Reference[]) => void;
}

export function ReferencesForm({ references = [], onChange }: ReferencesFormProps) {
  const addReference = () => {
    const newReference: Reference = {
      id: crypto.randomUUID(),
      name: '',
      position: '',
      company: '',
      email: '',
      phone: '',
      relationship: ''
    };
    onChange([...references, newReference]);
  };

  const updateReference = (index: number, field: keyof Reference, value: string) => {
    const updatedReferences = [...references];
    updatedReferences[index] = { ...updatedReferences[index], [field]: value };
    onChange(updatedReferences);
  };

  const removeReference = (index: number) => {
    onChange(references.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">References</h2>
        <button
          type="button"
          onClick={addReference}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Reference
        </button>
      </div>

      {references.map((reference, index) => (
        <div key={reference.id} className="p-4 bg-gray-50 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Reference {index + 1}</h3>
            <button
              type="button"
              onClick={() => removeReference(index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={reference.name}
                onChange={(e) => updateReference(index, 'name', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <input
                type="text"
                value={reference.position}
                onChange={(e) => updateReference(index, 'position', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              value={reference.company}
              onChange={(e) => updateReference(index, 'company', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={reference.email}
                onChange={(e) => updateReference(index, 'email', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                value={reference.phone}
                onChange={(e) => updateReference(index, 'phone', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Relationship</label>
            <input
              type="text"
              value={reference.relationship}
              onChange={(e) => updateReference(index, 'relationship', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g., Former Manager, Project Lead"
            />
          </div>
        </div>
      ))}
    </div>
  );
}