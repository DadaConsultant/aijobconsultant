import React, { useRef, useState } from 'react';
import { Resume } from '../../types/resume';
import { generatePDF } from '../../utils/pdf';
import { ModernTemplate } from './templates/ModernTemplate';
import { Toolbar } from '../layout/Toolbar';

interface ResumePreviewProps {
  resume: Resume;
  template: 'modern' | 'classic' | 'minimal' | 'compact' | 'elegant';
  onTemplateChange: (template: string) => void;
}

export function ResumePreview({ resume, template, onTemplateChange }: ResumePreviewProps) {
  const resumeRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(100);

  const handleDownload = async () => {
    if (resumeRef.current) {
      await generatePDF(resumeRef.current);
    }
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 10, 50));
  };

  const renderTemplate = () => {
    switch (template) {
      case 'modern':
        return <ModernTemplate resume={resume} />;
      // Add other template components here
      default:
        return <ModernTemplate resume={resume} />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-700 rounded-lg overflow-hidden">
      <Toolbar
        onDownloadPDF={handleDownload}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        currentTemplate={template}
        onTemplateSelect={onTemplateChange}
      />
      
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <div 
          ref={resumeRef}
          style={{ 
            transform: `scale(${zoom / 100})`, 
            transformOrigin: 'top center',
            minHeight: '29.7cm'
          }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
}