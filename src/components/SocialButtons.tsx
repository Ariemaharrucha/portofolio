
import { Github, Mail, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SocialButtonProps = {
  className?: string;
};

export function SocialButtons({ className }: SocialButtonProps) {
  const buttons = [
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/Ariemaharrucha",
      className: "neo-brutalist-purple"
    },
    {
      label: "Gmail",
      icon: Mail,
      href: "mailto:example@gmail.com",
      className: "neo-brutalist-red"
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/arie-maharrucha-zakka-4a4b29303/",
      className: "neo-brutalist"
    },
    {
      label: "Download CV",
      icon: Download,
      href: "/CV_ARIE-MAHARRUCHA_ZAKKA.pdf",
      className: "neo-brutalist-accent"
    }
  ];
  
  return (
    <div className={cn("flex gap-3 flex-wrap", className)}>
      {buttons.map((button, index) => (
        <Button 
          key={button.label}
          asChild
          variant="outline"
          className={cn(
            "rounded-none text-sm font-bold hover:-translate-y-1 transition-transform",
            button.className,
            "fade-in"
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <a href={button.href} target="_blank" rel="noopener noreferrer">
            <button.icon className="mr-2 h-4 w-4" />
            {button.label}
          </a>
        </Button>
      ))}
    </div>
  );
}
