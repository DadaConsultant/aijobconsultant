import React from 'react';
import { Minus, Plus, Download, MoreHorizontal } from 'lucide-react';
import { TemplateSelector } from '../preview/TemplateSelector';

interface ToolbarProps {
  onDownloadPDF: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  currentTemplate: string;
  onTemplateSelect: (template: string) => void;
}

export function Toolbar({ 
  onDownloadPDF, 
  onZoomIn, 
  onZoomOut, 
  currentTemplate,
  onTemplateSelect 
}: ToolbarProps) {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-t-lg flex items-center justify-between">
      <TemplateSelector 
        currentTemplate={currentTemplate}
        onSelect={onTemplateSelect}
      />

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={onZoomOut}
            className="hover:bg-gray-600 p-1.5 rounded-md"
          >
            <Minus className="h-5 w-5" />
          </button>
          <span className="text-lg">Aa</span>
          <button
            onClick={onZoomIn}
            className="hover:bg-gray-600 p-1.5 rounded-md"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>

        <button
          onClick={onDownloadPDF}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-1.5 rounded-md flex items-center space-x-2"
        >
          <Download className="h-5 w-5" />
          <span>Download PDF</span>
        </button>

        <button className="hover:bg-gray-600 p-1.5 rounded-md">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}