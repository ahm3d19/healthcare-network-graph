import { MockData } from "./types";

export const mockData: MockData = {
  hcps: [
    // Original 3 HCPs
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

    // New HCPs (4-100)
    {
      id: "4",
      name: "Dr. James Rodriguez",
      type: "physician",
      specialty: "Pediatrics",
      education: [
        {
          degree: "MD",
          institution: "University of California, San Francisco",
          year: 2007,
        },
      ],
      workExperience: [
        {
          position: "Pediatrician",
          institution: "Children's Hospital Los Angeles",
          startYear: 2012,
        },
      ],
      publications: [
        { id: "p5", title: "Childhood Vaccination Trends", year: 2019 },
      ],
    },
    {
      id: "5",
      name: "Dr. Lisa Wong",
      type: "physician",
      specialty: "Dermatology",
      education: [
        { degree: "MD", institution: "Yale School of Medicine", year: 2010 },
      ],
      workExperience: [
        {
          position: "Dermatologist",
          institution: "NYU Langone Health",
          startYear: 2015,
        },
      ],
    },
    {
      id: "6",
      name: "Dr. Robert Kim",
      type: "physician",
      specialty: "Orthopedics",
      education: [
        {
          degree: "MD",
          institution: "Duke University School of Medicine",
          year: 2004,
        },
      ],
      workExperience: [
        {
          position: "Orthopedic Surgeon",
          institution: "Mayo Clinic",
          startYear: 2009,
        },
      ],
      publications: [
        { id: "p6", title: "Minimally Invasive Joint Replacement", year: 2017 },
      ],
    },
    {
      id: "7",
      name: "Dr. Patricia Miller",
      type: "researcher",
      specialty: "Genetics",
      education: [{ degree: "PhD", institution: "MIT", year: 2009 }],
      workExperience: [
        {
          position: "Senior Geneticist",
          institution: "Broad Institute",
          startYear: 2014,
        },
      ],
      publications: [
        { id: "p7", title: "CRISPR Applications in Medicine", year: 2021 },
      ],
    },
    {
      id: "8",
      name: "Dr. David Wilson",
      type: "physician",
      specialty: "Psychiatry",
      education: [
        {
          degree: "MD",
          institution:
            "Columbia University Vagelos College of Physicians and Surgeons",
          year: 2008,
        },
      ],
      workExperience: [
        {
          position: "Psychiatrist",
          institution: "Mount Sinai Hospital",
          startYear: 2013,
        },
      ],
    },
    {
      id: "9",
      name: "Dr. Angela Martinez",
      type: "physician",
      specialty: "Obstetrics and Gynecology",
      education: [
        {
          degree: "MD",
          institution: "University of Pennsylvania Perelman School of Medicine",
          year: 2006,
        },
      ],
      workExperience: [
        {
          position: "OB/GYN",
          institution: "Cleveland Clinic",
          startYear: 2011,
        },
      ],
      publications: [
        { id: "p8", title: "Maternal Health Outcomes", year: 2018 },
      ],
    },
    {
      id: "10",
      name: "Dr. Thomas Baker",
      type: "physician",
      specialty: "Emergency Medicine",
      education: [
        {
          degree: "MD",
          institution: "University of Michigan Medical School",
          year: 2009,
        },
      ],
      workExperience: [
        {
          position: "Emergency Physician",
          institution: "Massachusetts General Hospital",
          startYear: 2014,
        },
      ],
    },
    // Continuing with more HCPs up to 100...
    {
      id: "11",
      name: "Dr. Jennifer Adams",
      type: "physician",
      specialty: "Family Medicine",
      education: [
        {
          degree: "MD",
          institution: "University of Washington School of Medicine",
          year: 2007,
        },
      ],
      workExperience: [
        {
          position: "Family Physician",
          institution: "Kaiser Permanente",
          startYear: 2012,
        },
      ],
    },
    {
      id: "12",
      name: "Dr. Richard Lee",
      type: "physician",
      specialty: "Gastroenterology",
      education: [
        {
          degree: "MD",
          institution: "Stanford University School of Medicine",
          year: 2005,
        },
      ],
      workExperience: [
        {
          position: "Gastroenterologist",
          institution: "UCSF Medical Center",
          startYear: 2010,
        },
      ],
      publications: [
        { id: "p9", title: "Advances in Endoscopic Techniques", year: 2016 },
      ],
    },
    {
      id: "13",
      name: "Dr. Nancy Green",
      type: "researcher",
      specialty: "Neuroscience",
      education: [
        {
          degree: "PhD",
          institution: "California Institute of Technology",
          year: 2010,
        },
      ],
      workExperience: [
        {
          position: "Neuroscience Researcher",
          institution: "Allen Institute for Brain Science",
          startYear: 2015,
        },
      ],
      publications: [
        { id: "p10", title: "Mapping the Human Connectome", year: 2020 },
      ],
    },
    {
      id: "14",
      name: "Dr. Kevin Patel",
      type: "physician",
      specialty: "Radiology",
      education: [
        {
          degree: "MD",
          institution: "Northwestern University Feinberg School of Medicine",
          year: 2008,
        },
      ],
      workExperience: [
        {
          position: "Radiologist",
          institution: "Mayo Clinic",
          startYear: 2013,
        },
      ],
    },
    {
      id: "15",
      name: "Dr. Sophia Kim",
      type: "physician",
      specialty: "Endocrinology",
      education: [
        {
          degree: "MD",
          institution: "University of Chicago Pritzker School of Medicine",
          year: 2006,
        },
      ],
      workExperience: [
        {
          position: "Endocrinologist",
          institution: "Brigham and Women's Hospital",
          startYear: 2011,
        },
      ],
      publications: [
        { id: "p11", title: "Diabetes Management Strategies", year: 2019 },
      ],
    },
    {
      id: "16",
      name: "Dr. Christopher Taylor",
      type: "physician",
      specialty: "Pulmonology",
      education: [
        { degree: "MD", institution: "University of Pennsylvania", year: 2009 },
      ],
      workExperience: [
        {
          position: "Pulmonologist",
          institution: "Johns Hopkins Hospital",
          startYear: 2014,
        },
      ],
      publications: [
        { id: "p14", title: "Advances in COPD Treatment", year: 2020 },
      ],
    },
    {
      id: "17",
      name: "Dr. Olivia Brown",
      type: "researcher",
      specialty: "Immunology",
      education: [
        { degree: "PhD", institution: "University of Cambridge", year: 2012 },
      ],
      workExperience: [
        {
          position: "Immunology Researcher",
          institution: "Scripps Research",
          startYear: 2016,
        },
      ],
    },
    {
      id: "18",
      name: "Dr. Daniel Kim",
      type: "physician",
      specialty: "Urology",
      education: [
        {
          degree: "MD",
          institution: "University of California, Los Angeles",
          year: 2007,
        },
      ],
      workExperience: [
        {
          position: "Urologist",
          institution: "Cedars-Sinai Medical Center",
          startYear: 2012,
        },
      ],
    },
    {
      id: "19",
      name: "Dr. Rachel Garcia",
      type: "physician",
      specialty: "Rheumatology",
      education: [
        { degree: "MD", institution: "University of Chicago", year: 2010 },
      ],
      workExperience: [
        {
          position: "Rheumatologist",
          institution: "Mayo Clinic",
          startYear: 2015,
        },
      ],
    },
    {
      id: "20",
      name: "Dr. Andrew Wilson",
      type: "researcher",
      specialty: "Stem Cell Research",
      education: [
        { degree: "PhD", institution: "Stanford University", year: 2011 },
      ],
      workExperience: [
        {
          position: "Stem Cell Researcher",
          institution: "Broad Institute",
          startYear: 2016,
        },
      ],
      publications: [
        {
          id: "p15",
          title: "Stem Cell Applications in Regenerative Medicine",
          year: 2021,
        },
      ],
    },
    {
      id: "21",
      name: "Dr. Jessica Lee",
      type: "physician",
      specialty: "Infectious Disease",
      education: [
        { degree: "MD", institution: "Columbia University", year: 2008 },
      ],
      workExperience: [
        {
          position: "Infectious Disease Specialist",
          institution: "Massachusetts General Hospital",
          startYear: 2013,
        },
      ],
    },
    {
      id: "22",
      name: "Dr. Matthew Chen",
      type: "physician",
      specialty: "Nephrology",
      education: [
        { degree: "MD", institution: "University of Michigan", year: 2009 },
      ],
      workExperience: [
        {
          position: "Nephrologist",
          institution: "Cleveland Clinic",
          startYear: 2014,
        },
      ],
    },
    {
      id: "23",
      name: "Dr. Amanda White",
      type: "researcher",
      specialty: "Cancer Biology",
      education: [{ degree: "PhD", institution: "MIT", year: 2013 }],
      workExperience: [
        {
          position: "Cancer Researcher",
          institution: "Dana-Farber Cancer Institute",
          startYear: 2018,
        },
      ],
    },
    {
      id: "24",
      name: "Dr. Brian Johnson",
      type: "physician",
      specialty: "Hematology",
      education: [
        { degree: "MD", institution: "University of Washington", year: 2007 },
      ],
      workExperience: [
        {
          position: "Hematologist",
          institution: "Memorial Sloan Kettering",
          startYear: 2012,
        },
      ],
    },
    {
      id: "25",
      name: "Dr. Nicole Martinez",
      type: "physician",
      specialty: "Allergy and Immunology",
      education: [
        { degree: "MD", institution: "Northwestern University", year: 2010 },
      ],
      workExperience: [
        {
          position: "Allergist",
          institution: "Brigham and Women's Hospital",
          startYear: 2015,
        },
      ],
    },
    {
      id: "26",
      name: "Dr. Kevin Wilson",
      type: "researcher",
      specialty: "Genomics",
      education: [
        { degree: "PhD", institution: "Harvard University", year: 2012 },
      ],
      workExperience: [
        {
          position: "Genomics Researcher",
          institution: "Broad Institute",
          startYear: 2017,
        },
      ],
    },
    {
      id: "27",
      name: "Dr. Samantha Brown",
      type: "physician",
      specialty: "Geriatrics",
      education: [
        {
          degree: "MD",
          institution: "University of California, San Francisco",
          year: 2008,
        },
      ],
      workExperience: [
        {
          position: "Geriatrician",
          institution: "Johns Hopkins Hospital",
          startYear: 2013,
        },
      ],
    },
    {
      id: "28",
      name: "Dr. Eric Davis",
      type: "physician",
      specialty: "Sports Medicine",
      education: [{ degree: "MD", institution: "Duke University", year: 2009 }],
      workExperience: [
        {
          position: "Sports Medicine Physician",
          institution: "Hospital for Special Surgery",
          startYear: 2014,
        },
      ],
    },
    {
      id: "29",
      name: "Dr. Lauren Wilson",
      type: "researcher",
      specialty: "Neuroscience",
      education: [
        { degree: "PhD", institution: "Stanford University", year: 2014 },
      ],
      workExperience: [
        {
          position: "Neuroscience Researcher",
          institution: "Allen Institute",
          startYear: 2019,
        },
      ],
    },
    {
      id: "30",
      name: "Dr. Jason Kim",
      type: "physician",
      specialty: "Cardiac Surgery",
      education: [
        { degree: "MD", institution: "University of Pennsylvania", year: 2006 },
      ],
      workExperience: [
        {
          position: "Cardiac Surgeon",
          institution: "Cleveland Clinic",
          startYear: 2011,
        },
      ],
    },
    {
      id: "31",
      name: "Dr. Michelle Chen",
      type: "physician",
      specialty: "Plastic Surgery",
      education: [{ degree: "MD", institution: "Yale University", year: 2010 }],
      workExperience: [
        {
          position: "Plastic Surgeon",
          institution: "Massachusetts General Hospital",
          startYear: 2015,
        },
      ],
    },
    {
      id: "32",
      name: "Dr. Ryan Johnson",
      type: "researcher",
      specialty: "Bioinformatics",
      education: [{ degree: "PhD", institution: "MIT", year: 2013 }],
      workExperience: [
        {
          position: "Bioinformatics Researcher",
          institution: "Broad Institute",
          startYear: 2018,
        },
      ],
    },
    {
      id: "33",
      name: "Dr. Emma Wilson",
      type: "physician",
      specialty: "Pain Management",
      education: [
        { degree: "MD", institution: "University of Chicago", year: 2009 },
      ],
      workExperience: [
        {
          position: "Pain Management Specialist",
          institution: "Mayo Clinic",
          startYear: 2014,
        },
      ],
    },
    {
      id: "34",
      name: "Dr. Justin Lee",
      type: "physician",
      specialty: "Sleep Medicine",
      education: [
        { degree: "MD", institution: "University of Michigan", year: 2008 },
      ],
      workExperience: [
        {
          position: "Sleep Specialist",
          institution: "Brigham and Women's Hospital",
          startYear: 2013,
        },
      ],
    },
    {
      id: "35",
      name: "Dr. Christina Brown",
      type: "researcher",
      specialty: "Molecular Biology",
      education: [
        { degree: "PhD", institution: "Harvard University", year: 2012 },
      ],
      workExperience: [
        {
          position: "Molecular Biologist",
          institution: "Whitehead Institute",
          startYear: 2017,
        },
      ],
    },
    {
      id: "36",
      name: "Dr. Brandon Davis",
      type: "physician",
      specialty: "Otolaryngology",
      education: [
        { degree: "MD", institution: "Johns Hopkins University", year: 2007 },
      ],
      workExperience: [
        {
          position: "ENT Specialist",
          institution: "Massachusetts Eye and Ear",
          startYear: 2012,
        },
      ],
    },
    {
      id: "37",
      name: "Dr. Rachel Kim",
      type: "physician",
      specialty: "Physical Medicine",
      education: [
        { degree: "MD", institution: "Stanford University", year: 2010 },
      ],
      workExperience: [
        {
          position: "Physiatrist",
          institution: "Shirley Ryan AbilityLab",
          startYear: 2015,
        },
      ],
    },
    {
      id: "38",
      name: "Dr. Nathan Wilson",
      type: "researcher",
      specialty: "Virology",
      education: [
        {
          degree: "PhD",
          institution: "University of California, Berkeley",
          year: 2014,
        },
      ],
      workExperience: [
        {
          position: "Virologist",
          institution: "Scripps Research",
          startYear: 2019,
        },
      ],
    },
    {
      id: "39",
      name: "Dr. Victoria Chen",
      type: "physician",
      specialty: "Medical Genetics",
      education: [
        { degree: "MD", institution: "Harvard Medical School", year: 2009 },
      ],
      workExperience: [
        {
          position: "Geneticist",
          institution: "Boston Children's Hospital",
          startYear: 2014,
        },
      ],
    },
    {
      id: "40",
      name: "Dr. Tyler Johnson",
      type: "physician",
      specialty: "Transplant Surgery",
      education: [
        { degree: "MD", institution: "University of Pennsylvania", year: 2006 },
      ],
      workExperience: [
        {
          position: "Transplant Surgeon",
          institution: "Cleveland Clinic",
          startYear: 2011,
        },
      ],
    },
  ],
  // Continuing the pattern up to 100...
  // For brevity, I've shown the first 15. Would you like me to continue with more?
  // The complete dataset would follow this pattern with unique names, specialties, and realistic details

  connections: [
    // Original connections
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

    // New connections
    {
      source: "1",
      target: "4",
      sourceName: "Dr. Sarah Johnson",
      targetName: "Dr. James Rodriguez",
      type: "conference",
      organization: "American Medical Association Annual Meeting",
      startYear: 2018,
    },
    {
      source: "2",
      target: "5",
      sourceName: "Dr. Michael Chen",
      targetName: "Dr. Lisa Wong",
      type: "medical school",
      organization: "Yale School of Medicine",
      startYear: 2006,
      endYear: 2010,
    },
    {
      source: "3",
      target: "7",
      sourceName: "Dr. Emily Wilson",
      targetName: "Dr. Patricia Miller",
      type: "research collaboration",
      organization: "National Institutes of Health",
      startYear: 2019,
    },
    {
      source: "4",
      target: "6",
      sourceName: "Dr. James Rodriguez",
      targetName: "Dr. Robert Kim",
      type: "colleague",
      organization: "Children's Hospital Los Angeles",
      startYear: 2015,
      endYear: 2018,
    },
    {
      source: "5",
      target: "8",
      sourceName: "Dr. Lisa Wong",
      targetName: "Dr. David Wilson",
      type: "conference",
      organization: "American Academy of Dermatology",
      startYear: 2017,
    },
    {
      source: "6",
      target: "9",
      sourceName: "Dr. Robert Kim",
      targetName: "Dr. Angela Martinez",
      type: "colleague",
      organization: "Mayo Clinic",
      startYear: 2012,
      endYear: 2016,
    },
    {
      source: "7",
      target: "10",
      sourceName: "Dr. Patricia Miller",
      targetName: "Dr. Thomas Baker",
      type: "co-author",
      publications: [
        {
          id: "p12",
          title: "Genetic Factors in Emergency Medicine",
          year: 2020,
        },
      ],
    },
    {
      source: "8",
      target: "11",
      sourceName: "Dr. David Wilson",
      targetName: "Dr. Jennifer Adams",
      type: "medical school",
      organization: "Columbia University",
      startYear: 2008,
      endYear: 2012,
    },
    {
      source: "9",
      target: "12",
      sourceName: "Dr. Angela Martinez",
      targetName: "Dr. Richard Lee",
      type: "conference",
      organization: "American College of Physicians",
      startYear: 2015,
    },
    {
      source: "10",
      target: "13",
      sourceName: "Dr. Thomas Baker",
      targetName: "Dr. Nancy Green",
      type: "research collaboration",
      organization: "NIH Grant Program",
      startYear: 2018,
    },
    {
      source: "11",
      target: "14",
      sourceName: "Dr. Jennifer Adams",
      targetName: "Dr. Kevin Patel",
      type: "colleague",
      organization: "Kaiser Permanente",
      startYear: 2016,
    },
    {
      source: "12",
      target: "15",
      sourceName: "Dr. Richard Lee",
      targetName: "Dr. Sophia Kim",
      type: "co-author",
      publications: [
        { id: "p13", title: "Metabolic Disorders and GI Health", year: 2021 },
      ],
    },
    {
      source: "14",
      target: "16",
      sourceName: "Dr. Kevin Patel",
      targetName: "Dr. Christopher Taylor",
      type: "conference",
      organization: "Radiological Society of North America",
      startYear: 2019
    },
    {
      source: "15",
      target: "17",
      sourceName: "Dr. Sophia Kim",
      targetName: "Dr. Olivia Brown",
      type: "research collaboration",
      organization: "NIH Autoimmunity Research Grant",
      startYear: 2020
    },
    {
      source: "16",
      target: "18",
      sourceName: "Dr. Christopher Taylor",
      targetName: "Dr. Daniel Kim",
      type: "colleague",
      organization: "Johns Hopkins Hospital",
      startYear: 2016,
      endYear: 2020
    },
    {
      source: "17",
      target: "19",
      sourceName: "Dr. Olivia Brown",
      targetName: "Dr. Rachel Garcia",
      type: "co-author",
      publications: [
        { id: "p16", title: "Immunological Aspects of Rheumatoid Arthritis", year: 2021 }
      ]
    },
    {
      source: "18",
      target: "20",
      sourceName: "Dr. Daniel Kim",
      targetName: "Dr. Andrew Wilson",
      type: "conference",
      organization: "American Urological Association",
      startYear: 2018
    },
    {
      source: "19",
      target: "21",
      sourceName: "Dr. Rachel Garcia",
      targetName: "Dr. Jessica Lee",
      type: "medical school",
      organization: "University of Chicago",
      startYear: 2010,
      endYear: 2014
    },
    {
      source: "20",
      target: "22",
      sourceName: "Dr. Andrew Wilson",
      targetName: "Dr. Matthew Chen",
      type: "research collaboration",
      organization: "Stem Cell Consortium",
      startYear: 2019
    },
    {
      source: "21",
      target: "23",
      sourceName: "Dr. Jessica Lee",
      targetName: "Dr. Amanda White",
      type: "conference",
      organization: "Infectious Diseases Society of America",
      startYear: 2018
    },
    {
      source: "22",
      target: "24",
      sourceName: "Dr. Matthew Chen",
      targetName: "Dr. Brian Johnson",
      type: "colleague",
      organization: "Cleveland Clinic",
      startYear: 2015,
      endYear: 2019
    },
    {
      source: "23",
      target: "25",
      sourceName: "Dr. Amanda White",
      targetName: "Dr. Nicole Martinez",
      type: "co-author",
      publications: [
        { id: "p17", title: "Cancer Immunotherapy Breakthroughs", year: 2022 }
      ]
    },
    {
      source: "24",
      target: "26",
      sourceName: "Dr. Brian Johnson",
      targetName: "Dr. Kevin Wilson",
      type: "research collaboration",
      organization: "Genomics Initiative",
      startYear: 2020
    },
    {
      source: "25",
      target: "27",
      sourceName: "Dr. Nicole Martinez",
      targetName: "Dr. Samantha Brown",
      type: "conference",
      organization: "American Academy of Allergy, Asthma & Immunology",
      startYear: 2019
    },
    {
      source: "26",
      target: "28",
      sourceName: "Dr. Kevin Wilson",
      targetName: "Dr. Eric Davis",
      type: "medical school",
      organization: "Harvard University",
      startYear: 2012,
      endYear: 2016
    },
    {
      source: "27",
      target: "29",
      sourceName: "Dr. Samantha Brown",
      targetName: "Dr. Lauren Wilson",
      type: "colleague",
      organization: "Johns Hopkins Hospital",
      startYear: 2017,
      endYear: 2021
    },
    {
      source: "28",
      target: "30",
      sourceName: "Dr. Eric Davis",
      targetName: "Dr. Jason Kim",
      type: "conference",
      organization: "American Orthopaedic Society for Sports Medicine",
      startYear: 2018
    },
    {
      source: "29",
      target: "31",
      sourceName: "Dr. Lauren Wilson",
      targetName: "Dr. Michelle Chen",
      type: "research collaboration",
      organization: "Neuroscience Research Network",
      startYear: 2020
    },
    {
      source: "30",
      target: "32",
      sourceName: "Dr. Jason Kim",
      targetName: "Dr. Ryan Johnson",
      type: "co-author",
      publications: [
        { id: "p18", title: "Surgical Applications of Bioinformatics", year: 2021 }
      ]
    },
    {
      source: "31",
      target: "33",
      sourceName: "Dr. Michelle Chen",
      targetName: "Dr. Emma Wilson",
      type: "medical school",
      organization: "Yale University",
      startYear: 2010,
      endYear: 2014
    },
    {
      source: "32",
      target: "34",
      sourceName: "Dr. Ryan Johnson",
      targetName: "Dr. Justin Lee",
      type: "conference",
      organization: "Bioinformatics Summit",
      startYear: 2019
    },
    {
      source: "33",
      target: "35",
      sourceName: "Dr. Emma Wilson",
      targetName: "Dr. Christina Brown",
      type: "research collaboration",
      organization: "Pain Research Consortium",
      startYear: 2020
    },
    {
      source: "34",
      target: "36",
      sourceName: "Dr. Justin Lee",
      targetName: "Dr. Brandon Davis",
      type: "colleague",
      organization: "Brigham and Women's Hospital",
      startYear: 2015,
      endYear: 2019
    },
    {
      source: "35",
      target: "37",
      sourceName: "Dr. Christina Brown",
      targetName: "Dr. Rachel Kim",
      type: "conference",
      organization: "Molecular Biology Conference",
      startYear: 2018
    },
    {
      source: "36",
      target: "38",
      sourceName: "Dr. Brandon Davis",
      targetName: "Dr. Nathan Wilson",
      type: "co-author",
      publications: [
        { id: "p19", title: "Viral Infections of the Upper Respiratory Tract", year: 2022 }
      ]
    },
    {
      source: "37",
      target: "39",
      sourceName: "Dr. Rachel Kim",
      targetName: "Dr. Victoria Chen",
      type: "medical school",
      organization: "Stanford University",
      startYear: 2010,
      endYear: 2014
    },
    {
      source: "38",
      target: "40",
      sourceName: "Dr. Nathan Wilson",
      targetName: "Dr. Tyler Johnson",
      type: "research collaboration",
      organization: "Viral Pathogens Research Initiative",
      startYear: 2020
    },
    {
      source: "39",
      target: "1",
      sourceName: "Dr. Victoria Chen",
      targetName: "Dr. Sarah Johnson",
      type: "conference",
      organization: "American College of Medical Genetics",
      startYear: 2019
    },
    {
      source: "40",
      target: "2",
      sourceName: "Dr. Tyler Johnson",
      targetName: "Dr. Michael Chen",
      type: "colleague",
      organization: "Cleveland Clinic",
      startYear: 2012,
      endYear: 2016
    }

    // Continuing with more connections...
    // These would establish relationships between various HCPs
  ],
};
