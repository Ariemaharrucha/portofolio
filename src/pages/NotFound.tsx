import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center neo-brutalist p-8 bg-background max-w-md mx-auto fade-in">
          <h1 className="text-8xl font-bold mb-4 text-neoRed">404</h1>
          <p className="text-xl mb-6">Oops! Page not found</p>
          <Button 
            asChild 
            className="rounded-none neo-brutalist-accent text-white"
          >
            <a href="/">
              <Home className="mr-2" />
              Return to Home
            </a>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
