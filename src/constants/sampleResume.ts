import { Resume } from '../types/resume';

export const sampleResume: Resume = {
  personalInfo: {
    fullName: "John Doe",
    title: "Senior Software Engineer",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    summary: "Experienced software engineer with 8+ years of expertise in full-stack development, cloud architecture, and team leadership. Passionate about creating scalable solutions and mentoring junior developers.",
  },
  workExperience: [
    {
      id: "exp1",
      company: "Tech Solutions Inc.",
      position: "Senior Software Engineer",
      startDate: "2020-01",
      endDate: "",
      current: true,
      responsibilities: [
        "Led a team of 5 developers in rebuilding the core product platform",
        "Reduced system latency by 40% through architecture optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      id: "exp2",
      company: "Digital Innovations Corp",
      position: "Software Engineer",
      startDate: "2017-03",
      endDate: "2019-12",
      current: false,
      responsibilities: [
        "Developed and maintained multiple microservices using Node.js",
        "Implemented real-time analytics dashboard using React",
        "Mentored 3 junior developers"
      ]
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "University of California, Berkeley",
      degree: "Master of Science",
      field: "Computer Science",
      graduationDate: "2017",
      gpa: "3.8"
    },
    {
      id: "edu2",
      institution: "Stanford University",
      degree: "Bachelor of Science",
      field: "Software Engineering",
      graduationDate: "2015",
      gpa: "3.9"
    }
  ],
  skills: [
    {
      id: "skill1",
      name: "JavaScript/TypeScript",
      level: "Expert",
      category: "technical"
    },
    {
      id: "skill2",
      name: "React/Node.js",
      level: "Expert",
      category: "technical"
    },
    {
      id: "skill3",
      name: "Team Leadership",
      level: "Advanced",
      category: "soft"
    },
    {
      id: "skill4",
      name: "Problem Solving",
      level: "Expert",
      category: "soft"
    },
    {
      id: "skill5",
      name: "English",
      level: "Native",
      category: "language"
    },
    {
      id: "skill6",
      name: "Spanish",
      level: "Intermediate",
      category: "language"
    }
  ],
  certificates: [
    {
      id: "cert1",
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022-06",
      url: "https://aws.amazon.com/certification"
    },
    {
      id: "cert2",
      name: "Google Cloud Professional",
      issuer: "Google",
      date: "2021-08",
      url: "https://cloud.google.com/certification"
    }
  ],
  projects: [
    {
      id: "proj1",
      name: "E-commerce Platform",
      description: "Built a scalable e-commerce platform handling 100K+ daily users",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      url: "https://github.com/johndoe/ecommerce"
    },
    {
      id: "proj2",
      name: "AI-Powered Analytics",
      description: "Developed machine learning models for predictive analytics",
      technologies: ["Python", "TensorFlow", "AWS SageMaker"],
      url: "https://github.com/johndoe/ai-analytics"
    }
  ],
  achievements: [
    {
      id: "ach1",
      title: "Technology Innovation Award",
      date: "2022",
      description: "Received company-wide recognition for implementing ML-based recommendation system"
    },
    {
      id: "ach2",
      title: "Best Team Lead",
      date: "2021",
      description: "Awarded for exceptional leadership and team performance"
    }
  ],
  references: [
    {
      id: "ref1",
      name: "Sarah Johnson",
      position: "Engineering Director",
      company: "Tech Solutions Inc.",
      email: "sarah.johnson@example.com",
      phone: "(555) 234-5678",
      relationship: "Current Manager"
    },
    {
      id: "ref2",
      name: "Michael Chen",
      position: "CTO",
      company: "Digital Innovations Corp",
      email: "michael.chen@example.com",
      phone: "(555) 345-6789",
      relationship: "Former Manager"
    }
  ]
};