
import { SocialButtons } from "@/components/SocialButtons";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="neo-brutalist-accent inline-block px-4 py-2 mb-4 -rotate-2 fade-in">
          <h1 className="text-2xl md:text-3xl font-bold">Get In Touch</h1>
        </div>
        
        <p className="text-lg mt-6 max-w-3xl fade-in delay-100">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="fade-in delay-200">
            <div className="neo-brutalist p-6 bg-background">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <MessageSquare className="mr-2" />
                Send Me a Message
              </h2>
              
              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="neo-brutalist-sm"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="neo-brutalist-sm"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    className="neo-brutalist-sm"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="neo-brutalist-sm"
                  />
                </div>
                <Button
                  className="w-full rounded-none neo-brutalist-purple text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="fade-in delay-300">
            <div className="neo-brutalist p-6 bg-background h-full flex flex-col">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Mail className="mr-2" />
                Contact Information
              </h2>
              
              <p className="text-muted-foreground mb-8">
                You can also reach out to me through my social media accounts or via email.
              </p>
              
              <div className="mt-auto">
                <SocialButtons className="flex-col items-start" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
