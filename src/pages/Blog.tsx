
import { Layout } from "@/components/Layout";

const Blog = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="neo-brutalist-red inline-block px-4 py-2 mb-4 -rotate-1 fade-in">
          <h1 className="text-2xl md:text-3xl font-bold">My Blog</h1>
        </div>
        
        <p className="text-lg mt-6 max-w-3xl fade-in delay-100">
          Coming soon! I'll be sharing my thoughts and experiences on programming, design, and technology.
        </p>
        
        <div className="mt-12 p-8 neo-brutalist bg-background fade-in delay-200">
          <h2 className="text-xl font-bold mb-4">Stay Tuned!</h2>
          <p>I'm currently working on some interesting content for this section. Check back soon!</p>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
