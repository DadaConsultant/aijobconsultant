// Add to existing types
export interface Reference {
  id: string;
  name: string;
  position: string;
  company: string;
  email: string;
  phone: string;
  relationship: string;
}

// Update Resume interface
export interface Resume {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  certificates: Certificate[];
  projects: Project[];
  achievements: Achievement[];
  references: Reference[];
}