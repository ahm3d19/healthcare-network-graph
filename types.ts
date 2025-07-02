export interface Publication {
  id: string;
  title: string;
  year: number;
  journal?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: number;
}

export interface WorkExperience {
  position: string;
  institution: string;
  startYear: number;
  endYear?: number;
}

export interface HCP {
  id: string;
  name: string;
  type: "physician" | "researcher" | "administrator";
  specialty?: string;
  education: Education[];
  workExperience: WorkExperience[];
  publications: Publication[];
  avatar?: string; // Add avatar property
}

export interface Connection {
  source: string;
  target: string;
  sourceName: string;
  targetName: string;
  type: "co-author" | "colleague" | "education";
  publications?: Publication[];
  organization?: string;
  institution?: string;
  year?: number;
  startYear?: number;
  endYear?: number;
}

export interface MockData {
  hcps: HCP[];
  connections: Connection[];
}
