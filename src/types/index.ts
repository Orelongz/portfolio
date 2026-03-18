export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Job {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface EarlierJob {
  company: string;
  role: string;
  period: string;
  bullets?: string[];
}

export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  grade?: string;
  achievement?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
