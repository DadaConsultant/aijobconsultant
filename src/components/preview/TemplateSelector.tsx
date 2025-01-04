import React, { useState } from 'react';
import { LayoutGrid } from 'lucide-react';

interface TemplateSelectorProps {
  currentTemplate: string;
  onSelect: (template: string) => void;
}

export function TemplateSelector({ currentTemplate, onSelect }: TemplateSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const templates = [
    { id: 'modern', name: 'Modern' },
    { id: 'classic', name: 'Classic' },
    { id: 'minimal', name: 'Minimal' },
    { id: 'compact', name: 'Compact' },
    { id: 'elegant', name: 'Elegant' }
  ];

  const handleSelect = (templateId: string) => {
    onSelect(templateId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        className="flex items-center space-x-2 hover:bg-gray-600 px-3 py-1.5 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <LayoutGrid className="h-5 w-5" />
        <span>Select template</span>
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleSelect(template.id)}
                className={`block px-4 py-2 text-sm w-full text-left ${
                  currentTemplate === template.id
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {template.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}