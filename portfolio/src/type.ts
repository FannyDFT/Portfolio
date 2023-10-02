// Interface pour une compétence
export interface TechnicalSkill {
  id: number;
  name: string;
}

// Interface pour un projet
export interface Project {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  technologiestitle?: string;
  technologies?: string[];
  imageGallery?: string[];
}

// Interface pour les détails d'un projet
export interface ProjectDetail extends Project {
  description: string;
  technologiestitle: string;
  technologies: string[];
  imageGallery: string[];
}
