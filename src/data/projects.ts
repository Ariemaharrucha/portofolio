export type Project = {
  id: string;
  title: string;
  description: string;
  features?: string[];
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "unggasku-id",
    title: "Unggasku ID",
    description: "A platform designed to help poultry farmers manage operations efficiently with tools for consultations, educational articles, and role-based access.",
    features: [
      "Consultation system with veterinary professionals",
      "Educational articles on poultry farming",
      "Role-based access for admin, farmers, and vets",
      "Interactive admin dashboard",
      "Real-time chat between users and veterinarians"
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "Express.js", "Node.js", "MySQL"],
    imageUrl: "https://res.cloudinary.com/dehyfhrwi/image/upload/v1746502278/uggasku-id-1_bvwmic.png",
    projectUrl: "/portfolio/unggasku-id",
    githubUrl: "https://github.com/Ariemaharrucha/unggasku-id",
    demoUrl: "https://unggasku-dummy.vercel.app/"
  },
  {
    id: "alquran-web-app",
    title: "Web Application Al-Qur'an",
    description: "A web app that allows users to read, search, and listen to Quranic verses online using public APIs and responsive design.",
    features: [
      "Full list of Surahs",
      "Display of verses in each Surah",
      "Audio playback for each verse",
      "Responsive and user-friendly UI"
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Public API"],
    imageUrl: "https://res.cloudinary.com/dehyfhrwi/image/upload/v1746502278/al-quran_te6ow8.png",
    projectUrl: "/portfolio/alquran-web-app",
    githubUrl: "https://github.com/Ariemaharrucha/Al-quran_apps", 
    demoUrl: "https://al-quran-gilt.vercel.app/" 
  },
  {
    id: "itinerary-ai",
    title: "Itinerary",
    description: "A smart app that helps users plan their trips effortlessly by creating personalized travel itineraries using intergation artificial intelligence.",
    features: [
      "Personalized recommendations based on user preferences",
      "AI-powered travel planning with suggested attractions and activities",
      "Support for multi-destination trips covering multiple cities in Indonesia"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Gemini-AI"],
    imageUrl: "https://res.cloudinary.com/dehyfhrwi/image/upload/v1746502277/itinerary_q4s3d5.jpg",
    projectUrl: "/portfolio/itinerary-ai",
    githubUrl: "https://github.com/Ariemaharrucha/Itinerary-ai",
    demoUrl: "https://itinerary-one.vercel.app/"
  },
  {
    id: "recipe-notes-app",
    title: "Aplikasi Mencatat Resep Makanan",
    description: "An application for users to manage, record, and search food recipes, built using HTML, CSS, and TypeScript.",
    features: [
      "Add recipes with ingredients and cooking steps",
      "Delete unnecessary recipes",
      "Search for recipes by name or ingredient",
      "Data storage in backend through API"
    ],
    technologies: ["HTML", "CSS", "TypeScript"],
    imageUrl: "https://res.cloudinary.com/dehyfhrwi/image/upload/v1746502277/recipe_cc9frh.png",   
    projectUrl: "/portfolio/recipe-notes-app",
    githubUrl: "https://github.com/Ariemaharrucha/daftar-resep-makanan",
    demoUrl: "https://resep-makanan-five.vercel.app/"
  }
];
