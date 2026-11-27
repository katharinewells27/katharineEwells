const CONFIG = {
  name: "Katharine Wells",
  tagline: "Sociology · Data Science & Statistics · Public Service",
  location: "Richmond, Virginia",
  email: "katharine.wells@richmond.edu",
  github: "",
  linkedin: "https://www.linkedin.com/in/katharinewells2027/",
  website: "",
  headshot: "assets/img/katharine-wells-headshot.jpg",

  shortBio: `My name is Katharine Wells, I am currently pursuing a B.S. in Sociology at the University of Richmond, with a minor in Data Science and Statistics. I am passionate about social communities, philanthropy, and public service. I study how history, institutions, and the built and social environment shape everyday communities. I am especially interested in pursuing further education in urban planning and in turning research into practical policy and action that communities, local municipalities, and active decision-makers can use to address an increasingly complex, international developing world.`,

  longBio: `I am completing a B.S. in Sociology at the University of Richmond, with a minor in Data Science and Statistics, and expect to graduate in May 2027. My studies have led me to ask how institutions, history, and the built environment shape people's access to housing, education, and public resources.

  Through the Live and Learn project, I contribute to collaborative spatial research on housing and educational opportunity in metropolitan Richmond. I work with census, school-boundary, housing, and listing data using R and ArcGIS Pro, and help communicate findings through maps, presentations, and policy-oriented materials. The experience has made clear to me that research can help communities and public decision-makers assess practical responses, not only describe disparities.

  I am interested in urban planning, inclusive housing and education policy, and public-service work that links evidence to implementation. My community engagement includes mentoring Tanzanian students with Unite the World with Africa Foundation and leading First Aid and CPR training. These experiences shape my interest in working across local and global contexts and in approaches to urban development that expand opportunity.`,

  education: [
    {
      school: "University of Richmond",
      degree: "B.S. in Sociology · Minor in Data Science & Statistics",
      year: "Expected May 2027",
      note: "GPA: 3.80 · Dean's List (2023–2026) · Phi Eta Sigma National Honor Society (2024–2026)"
    },
    {
      school: "Umbra Institute",
      degree: "Study abroad",
      year: "2025",
      note: "Perugia, Italy"
    }
  ],

  experience: [
    {
      role: "Live and Learn Research Fellow",
      org: "University of Richmond",
      years: "May 2026 – present",
      blurb: "Contribute to collaborative spatial research on housing, school attendance boundaries, and educational opportunity in metropolitan Richmond."
    },
    {
      role: "Content Tutor and Italian Language Tutor",
      org: "Weinstein Learning Center · University of Richmond",
      years: "Spring 2026 – present",
      blurb: "Tutor students in Italian and academic content, adapting explanations to individual learning needs."
    },
    {
      role: "President and Panelist",
      org: "Richmond College Diabetes Network",
      years: "January 2024 – present",
      blurb: "Organize student events and peer-support activities, and connect students and families with university and community resources."
    },
    {
      role: "Youth Ambassador",
      org: "Breakthrough T1D",
      years: "September 2018 – present",
      blurb: "Participate in outreach, fundraising, and community education supporting people affected by Type 1 diabetes."
    },
    {
      role: "Field Intern and Volunteer",
      org: "Unite the World with Africa Foundation",
      years: "June 2022 – present",
      blurb: "Mentor students and support community education and sustainability initiatives."
    },
    {
      role: "Manager, Bartender, Server, and Busser",
      org: "Sakonnet Golf Club",
      years: "May 2021 – August 2025",
      blurb: "Supported hospitality operations, staff coordination, and inventory management."
    },
    {
      role: "Hospitality and Hotel Management Intern",
      org: "The Westin · Marriott Hotels",
      years: "May – July 2025",
      blurb: "Supported scheduling, inventory monitoring, quality control, and customer service."
    },
    {
      role: "Teacher's Assistant",
      org: "LeafSpring School at Three Chopt",
      years: "January – June 2024",
      blurb: "Supported early-childhood instruction and care across five classrooms."
    }
  ],

  skillGroups: [
    {
      label: "Data & GIS",
      skills: ["ArcGIS Pro", "R / RStudio", "Python", "Microsoft Excel"]
    },
    {
      label: "Methods",
      skills: ["Spatial analysis", "Areal interpolation", "Data visualization", "Qualitative coding"]
    },
    {
      label: "Communication",
      skills: ["Research writing", "Poster presentations", "Tutoring", "Mentorship"]
    }
  ],

  projects: [
    {
      slug: "opportunity-index",
      title: "Housing and Educational Opportunity",
      year: "2026–ongoing",
      type: "Collaborative Research",
      thumbnail: "images/projects/lloi-poster-cover.svg",
      blurb: "A regional research project examining how housing, socioeconomic conditions, and school attendance boundaries overlap across metropolitan Richmond.",
      tags: ["R", "ArcGIS Pro", "Education"],
      detailPage: "project-opportunity.html",
      featured: true
    },
    {
      slug: "school-assignment-audit",
      title: "School Assignments in Home Listings",
      year: "2026",
      type: "Spatial Data Audit",
      thumbnail: "images/projects/mls-poster-cover.svg",
      blurb: "Collaborative research comparing school assignment information in multiple-listing data with spatially verified boundaries.",
      tags: ["GIS", "Housing", "Data quality"],
      detailPage: "project-mls.html",
      featured: false
    },
    {
      slug: "medical-racism-video",
      title: "Medical Racism",
      year: "Coursework",
      type: "SOC 379 · Video",
      thumbnail: "images/projects/medical-racism.svg",
      blurb: "A public-sociology video examining Virginia's history of medical racism and eugenics through archival sources and objects.",
      tags: ["Sociology", "Coursework", "Video"],
      detailPage: "project-medical-racism.html",
      featured: true
    },
    {
      slug: "school-rezoning",
      title: "Whose Voices Shape School Rezoning?",
      year: "2026–27 · in progress",
      type: "Sociology Capstone",
      thumbnail: "images/projects/school-rezoning.svg",
      blurb: "A qualitative study design examining parental participation and institutional decision-making in Richmond's 2019 school rezoning process.",
      tags: ["Sociology", "Education", "Public policy"],
      detailPage: "project-rezoning.html",
      featured: false
    },
    {
      slug: "metro-systems-corpus",
      title: "How Wikipedia Documents Metro Systems",
      year: "2026 · in progress",
      type: "Data Science Coursework",
      thumbnail: "images/projects/metro-systems.svg",
      blurb: "A computational project assembling a documented corpus of English Wikipedia articles about metro systems, revision records, and readership.",
      tags: ["Python", "Data collection", "Urban transit"],
      detailPage: "project-metro.html",
      featured: false
    },
    {
      slug: "gis-coursework-maps",
      title: "Mapping Environmental and Economic Patterns",
      year: "2026",
      type: "Geography Coursework",
      thumbnail: "research-assets/maps/RVA-Waste-Dumping-Sites-Katharine-Wells.png",
      blurb: "Selected geography coursework maps exploring waste-dumping sites, population, business sustainability, and rent.",
      tags: ["ArcGIS Pro", "Cartography", "Coursework"],
      detailPage: "project-maps.html",
      featured: false
    }
  ],

  contactLead: "I welcome conversations about my academic work, experience, or possible collaboration.",
  siteTitle: "Sociology · Data · Public Policy",
  footerYear: "auto"
};
