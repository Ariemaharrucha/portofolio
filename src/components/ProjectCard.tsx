import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  index: number;
};

export function ProjectCard({ 
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  index
}: ProjectCardProps) {
  return (
    <div
      className={cn(
        "neo-brutalist rounded-none overflow-hidden bg-background transition-transform hover:-translate-y-1 fade-in"
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="h-48 overflow-hidden border-b-2 border-black dark:border-white/20">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs font-medium neo-brutalist-sm bg-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <Button
          asChild
          className="mt-4 rounded-none neo-brutalist-sm w-full bg-neoAccent dark:bg-accent text-white hover:translate-x-1 transition-transform"
        >
          <a href={projectUrl} className="text-white">
            About Project <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
