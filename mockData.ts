import { MockData } from "./types";

export const mockData: MockData = {
  hcps: [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      type: "physician",
      specialty: "Cardiology",
      education: [
        { degree: "MD", institution: "Harvard Medical School", year: 2005 },
      ],
      workExperience: [
        {
          position: "Cardiologist",
          institution: "Boston Medical Center",
          startYear: 2010,
        },
      ],
      publications: [
        { id: "p1", title: "Advances in Cardiac Care", year: 2018 },
      ],
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      type: "physician",
      specialty: "Neurology",
      education: [{ degree: "MD", institution: "Johns Hopkins", year: 2006 }],
      workExperience: [
        {
          position: "Neurologist",
          institution: "Boston Medical Center",
          startYear: 2011,
        },
      ],
      publications: [{ id: "p2", title: "Neurological Advances", year: 2019 }],
    },
    {
      id: "3",
      name: "Dr. Emily Wilson",
      type: "researcher",
      specialty: "Oncology",
      education: [
        { degree: "PhD", institution: "Stanford University", year: 2008 },
      ],
      workExperience: [
        {
          position: "Lead Researcher",
          institution: "Mass General Cancer Center",
          startYear: 2012,
        },
      ],
      publications: [
        { id: "p3", title: "Immunotherapy Breakthroughs", year: 2020 },
      ],
    },
  ],
  connections: [
    {
      source: "1",
      target: "2",
      sourceName: "Dr. Sarah Johnson",
      targetName: "Dr. Michael Chen",
      type: "colleague",
      organization: "Boston Medical Center",
      startYear: 2011,
      endYear: 2015,
    },
    {
      source: "1",
      target: "3",
      sourceName: "Dr. Sarah Johnson",
      targetName: "Dr. Emily Wilson",
      type: "co-author",
      publications: [
        { id: "p4", title: "Cardio-Oncology Collaboration", year: 2017 },
      ],
    },
  ],
};
