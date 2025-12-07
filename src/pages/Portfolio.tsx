
import { ProjectCard } from "@/components/ProjectCard";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";

const technologies = [
  { name: "HTML", icon: "📄" },
  { name: "CSS3", icon: "🎨" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "🔷" },
  { name: "JavaScript", icon: "📜" },
  { name: "Redux", icon: "🌀" },
  { name: "Zod", icon: "🛡️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Express.JS", icon: "🚂" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Bootstrap", icon: "🎀" },
  { name: "Shadcn UI", icon: "🎨" },
  { name: "Vite", icon: "⚡" },
];

const Portfolio = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="neo-brutalist-purple inline-block px-4 py-2 mb-4 -rotate-1 fade-in">
          <h1 className="text-2xl md:text-3xl font-bold">My Portfolio</h1>
        </div>
        
        <p className="text-lg mt-6 max-w-3xl fade-in delay-100">
          Here's a collection of my recent projects. Each one represents a unique challenge and learning opportunity.
        </p>
        
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6 neo-brutalist-accent inline-block px-4 py-1 fade-in delay-200">
            Technologies I Work With
          </h2>
          
          <div className="flex flex-wrap gap-4 mt-4 mb-12">
            {technologies.map((tech, index) => (
              <div 
                key={tech.name}
                className="px-4 py-2 neo-brutalist-sm bg-background fade-in"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <span className="mr-2">{tech.icon}</span>
                <span className="font-bold">{tech.name}</span>
              </div>
            ))}
          </div>
          
          <h2 className="text-xl font-bold mb-6 neo-brutalist-red inline-block px-4 py-1 fade-in delay-200">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
