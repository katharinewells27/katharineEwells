const CONFIG = {
  name: "Katharine Wells",
  tagline: "Sociology · Data Science · GIS",
  location: "Providence, Rhode Island",
  email: "katharine.wells@richmond.edu",
  github: "",
  linkedin: "https://www.linkedin.com/in/katharinewells2027/",
  website: "",
  headshot: "",

  shortBio: `I am a sociology student at the University of Richmond
             with a minor in Data Science & Statistics, focused on
             spatial analysis, policy, and practical research.`,

  longBio: `I am pursuing a B.A. in Sociology with a minor in Data
            Science & Statistics at the University of Richmond.

            My work combines spatial data, sociological questions,
            and policy-facing communication. I have developed GIS
            and statistical analyses on housing, education, and
            metropolitan opportunity, and I enjoy making complex
            evidence clear and usable.

            I also tutor, lead student organizations, mentor
            students, and work across higher education and hospitality.
            I expect to graduate in May 2027.`,

  education: [
    {
      school: "University of Richmond",
      degree: "B.A. in Sociology; Minor in Data Science & Statistics",
      year: "Expected May 2027",
      note: "GPA: 3.8 · Dean's List 2023–2026 · Phi Eta Sigma 2024–2026"
    }
  ],

  experience: [
    {
      role: "Live and Learn Research Fellow",
      org: "University of Richmond",
      years: "May 2026–Present",
      blurb: "Build policy-facing GIS, statistical analyses, maps, and presentations on housing, school boundaries, and educational opportunity."
    },
    {
      role: "Content Tutor, Student Manager, and Italian Language Tutor",
      org: "Weinstein Learning Center, University of Richmond",
      years: "Spring 2026–Present",
      blurb: "Support tutoring operations, mentor peer tutors, and teach Italian language learners."
    },
    {
      role: "President and Panelist",
      org: "Richmond College Diabetes Network",
      years: "January 2024–Present",
      blurb: "Organize events, fundraising, peer support, and Type 1 diabetes advocacy."
    },
    {
      role: "Manager, Bartender, Server, and Busser",
      org: "Sakonnet Golf Club",
      years: "May 2021–August 2025",
      blurb: "Directed opening and closing procedures, inventory operations, and front-of-house staff."
    }
  ],

  skillGroups: [
    {
      label: "GIS & spatial analysis",
      skills: ["ArcGIS Pro", "Spatial joins", "Geocoding", "Areal interpolation"]
    },
    {
      label: "Data science",
      skills: ["R / RStudio", "Python", "Microsoft Excel", "Data visualization"]
    },
    {
      label: "Communication",
      skills: ["Research presentations", "Poster design", "Tutoring", "Team coordination"]
    },
    {
      label: "Policy interests",
      skills: ["Urban planning", "Education policy", "Public policy", "Housing affordability"]
    }
  ],

  projects: [
    {
      slug: "opportunity-index",
      title: "Live and Learn Opportunity Index",
      year: "2026",
      type: "GIS & policy research",
      thumbnail: "research-assets/white-paper-figures/lloi-high-school-map.png",
      blurb: "A collaborative framework for examining housing, educational, and socioeconomic opportunity across metropolitan Richmond.",
      tags: ["ArcGIS Pro", "R", "Composite index"],
      detailPage: "project-opportunity-index.html",
      featured: true
    },
    {
      slug: "mls-accuracy",
      title: "MLS School-Assignment Accuracy",
      year: "2026",
      type: "Spatial data validation",
      thumbnail: "research-assets/previews/mls-poster.png",
      blurb: "A collaborative study evaluating whether residential listing records accurately match verified school attendance boundaries.",
      tags: ["R", "Geocoding", "Spatial joins"],
      detailPage: "project-mls-accuracy.html",
      featured: true
    },
    {
      slug: "soc379-medical-racism",
      title: "Institutional Racism & Medical Media",
      year: "SOC 379",
      type: "Class video",
      thumbnail: "assets/img/soc379-medical-racism-thumbnail.jpg",
      blurb: "A SOC 379 class video on medical racism, linked directly to its YouTube page.",
      tags: ["Sociology", "Medical racism"],
      detailPage: "project-soc379-medical-racism.html",
      featured: true
    },
    {
      slug: "gis-storymap",
      title: "Geography StoryMap",
      year: "2026",
      type: "Spatial storytelling",
      thumbnail: "research-assets/maps/DC-Business-Sustainability-Median-Gross-Rent-Katharine-Wells.png",
      blurb: "A public ArcGIS StoryMap presenting original maps and geographic analysis.",
      tags: ["ArcGIS StoryMaps", "Cartography"],
      detailPage: "project-gis-storymap.html",
      featured: false
    }
  ],

  contactLead: "I am open to conversations about GIS, research, policy, tutoring, and professional opportunities.",
  siteTitle: "Portfolio",
  footerYear: "auto"
};
