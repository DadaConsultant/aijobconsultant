import React from 'react';
import { Resume } from '../../../types/resume';
import { Mail, MapPin, Linkedin, Calendar, Award, ExternalLink } from 'lucide-react';

interface ModernTemplateProps {
  resume: Resume;
}

export function ModernTemplate({ resume }: ModernTemplateProps) {
  const { personalInfo, workExperience, education, skills, certificates, achievements } = resume;

  return (
    <div className="modern-resume">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="name">{personalInfo.fullName}</h1>
          <p className="title">{personalInfo.title}</p>
          <div className="contact-info">
            <span className="contact-item">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </span>
            <span className="contact-item">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </span>
            {personalInfo.linkedin && (
              <span className="contact-item">
                <Linkedin className="w-4 h-4" />
                {personalInfo.linkedin}
              </span>
            )}
          </div>
        </div>
        {personalInfo.photo && (
          <img src={personalInfo.photo} alt={personalInfo.fullName} className="header-photo" />
        )}
      </header>

      <div className="content">
        {/* Main Column */}
        <div className="main-column">
          {/* Work Experience */}
          <section className="section">
            <h2 className="section-header">Professional Experience</h2>
            {workExperience.map((exp) => (
              <div key={exp.id} className="experience-item">
                <div className="experience-header">
                  <div>
                    <h3 className="company">{exp.company}</h3>
                    <p className="position">{exp.position}</p>
                  </div>
                  <span className="date-location">
                    <Calendar className="w-4 h-4" />
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <ul className="responsibilities">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education */}
          <section className="section">
            <h2 className="section-header">Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="experience-item">
                <div className="experience-header">
                  <div>
                    <h3 className="company">{edu.institution}</h3>
                    <p className="position">{edu.degree} in {edu.field}</p>
                  </div>
                  <span className="date-location">
                    <Calendar className="w-4 h-4" />
                    {edu.graduationDate}
                  </span>
                </div>
                {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </section>
        </div>

        {/* Side Column */}
        <div className="side-column">
          {/* Professional Summary */}
          <section className="section">
            <h2 className="section-header">Summary</h2>
            <p className="text-gray-700">{personalInfo.summary}</p>
          </section>

          {/* Skills */}
          <section className="section">
            <h2 className="section-header">Skills</h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill.id} className="skill-tag">
                  {skill.name}
                </span>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="section">
            <h2 className="section-header">Key Achievements</h2>
            {achievements.map((achievement) => (
              <div key={achievement.id} className="achievement-item">
                <Award className="achievement-icon w-5 h-5" />
                <div>
                  <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section className="section">
            <h2 className="section-header">Certifications</h2>
            {certificates.map((cert) => (
              <div key={cert.id} className="certification-item">
                <div className="certification-header">
                  <h3 className="font-medium text-gray-900">
                    {cert.name}
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="ml-2">
                        <ExternalLink className="w-4 h-4 inline" />
                      </a>
                    )}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}