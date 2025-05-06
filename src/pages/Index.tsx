
import { SocialButtons } from "@/components/SocialButtons";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Layout } from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="neo-brutalist-accent inline-block px-4 py-2 mb-4 -rotate-2 fade-in">
            <h1 className="text-2xl md:text-3xl font-bold">Hey There, I'm Arie 🚀</h1>
          </div>
          
          <p className="text-lg md:text-xl mt-6 fade-in delay-100">
            I'm an <span className="font-bold">Informatics student</span> who loves programming, 
            especially <span className="font-bold text-neoAccent dark:text-accent">Front-End Development</span>. 
            I'm committed to improving my skills and knowledge to keep up with the latest technology.
          </p>
          
          <p className="text-lg md:text-xl mt-4 mb-6 fade-in delay-200">
            <a
              href="/portfolio"
              className="inline-block underline underline-offset-4 decoration-neoAccent dark:decoration-accent decoration-2 font-bold hover:text-neoAccent dark:hover:text-accent transition-colors"
            >
              Visit my portfolio
            </a> to see what I've been working on.
          </p>
          
          <div className="mt-8 fade-in delay-300">
            <SocialButtons />
          </div>
        </div>
      </section>
      
      <ExperienceSection />
    </Layout>
  );
};

export default Index;
