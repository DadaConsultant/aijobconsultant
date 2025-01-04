import React from 'react';
import { Certificate } from '../../../types/resume';
import { ExternalLink } from 'lucide-react';

interface CertificationsSectionProps {
  certificates: Certificate[];
}

export function CertificationsSection({ certificates }: CertificationsSectionProps) {
  if (certificates.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Certifications</h2>
      {certificates.map((cert) => (
        <div key={cert.id} className="mb-3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">
                {cert.name}
                {cert.url && (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center ml-2 text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </h3>
              <p className="text-gray-600">{cert.issuer}</p>
            </div>
            <span className="text-sm text-gray-500">{cert.date}</span>
          </div>
        </div>
      ))}
    </section>
  );
}