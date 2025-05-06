
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <Layout>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-monument font-bold mb-8 neo-brutalist-purple p-4 inline-block -rotate-2"
          >
            {project.title}
          </motion.h1>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full h-[400px] object-cover rounded-lg neo-brutalist mb-8"
            src={project.imageUrl}
            alt={project.title}
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <section>
              <h2 className="text-2xl font-monument font-bold mb-4 neo-brutalist-accent p-2 inline-block">Project Overview</h2>
              <p className="text-lg leading-relaxed">{project.description}</p>
            </section>

            <section>
              <h2 className="text-2xl font-monument font-bold mb-4 neo-brutalist-red p-2 inline-block">Features</h2>
              <ul className="list-disc list-inside space-y-2">
                {project.features?.map((feature, index) => (
                  <li key={index} className="text-lg">{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-monument font-bold mb-4 neo-brutalist-sm p-2 inline-block">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-accent/10 rounded-md neo-brutalist-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <div className="flex gap-4 mt-8">
              {project.demoUrl && (
                <Button 
                  className="neo-brutalist-purple flex gap-2"
                  asChild
                >
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button 
                  variant="outline" 
                  className="neo-brutalist-sm flex gap-2"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    View Source
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
}
