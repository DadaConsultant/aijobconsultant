import React from 'react';
import { Certificate } from '../../types/resume';
import { Plus, Trash2 } from 'lucide-react';

interface CertificatesFormProps {
  certificates: Certificate[];
  onChange: (certificates: Certificate[]) => void;
}

export function CertificatesForm({ certificates, onChange }: CertificatesFormProps) {
  const addCertificate = () => {
    const newCertificate: Certificate = {
      id: crypto.randomUUID(),
      name: '',
      issuer: '',
      date: '',
      url: ''
    };
    onChange([...certificates, newCertificate]);
  };

  const updateCertificate = (index: number, field: keyof Certificate, value: string) => {
    const updatedCertificates = [...certificates];
    updatedCertificates[index] = { ...updatedCertificates[index], [field]: value };
    onChange(updatedCertificates);
  };

  const removeCertificate = (index: number) => {
    onChange(certificates.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Certifications</h2>
        <button
          type="button"
          onClick={addCertificate}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Certificate
        </button>
      </div>

      {certificates.map((cert, index) => (
        <div key={cert.id} className="p-4 bg-gray-50 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Certificate {index + 1}</h3>
            <button
              type="button"
              onClick={() => removeCertificate(index)}
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
                value={cert.name}
                onChange={(e) => updateCertificate(index, 'name', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Issuer</label>
              <input
                type="text"
                value={cert.issuer}
                onChange={(e) => updateCertificate(index, 'issuer', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="month"
                value={cert.date}
                onChange={(e) => updateCertificate(index, 'date', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">URL (Optional)</label>
              <input
                type="url"
                value={cert.url}
                onChange={(e) => updateCertificate(index, 'url', e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}