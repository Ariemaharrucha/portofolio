
import { ChevronsRight, Award, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { educationItems } from "@/data/education";
import { experienceItems } from "@/data/experience";

type TimelineItemProps = {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  isEducation?: boolean;
  index: number;
};

const TimelineItem = ({ title, subtitle, date, description, isEducation, index }: TimelineItemProps) => {
  const Icon = isEducation ? GraduationCap : Award;
  
  return (
    <div className={cn(
      "pl-8 relative mb-10 fade-in",
    )}
    style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="absolute left-0 top-0 w-6 h-6 bg-neoAccent dark:bg-accent flex items-center justify-center neo-brutalist-sm">
        <Icon size={16} />
      </div>
      <div className="absolute left-3 top-6 bottom-0 border-l-2 border-black dark:border-white/20" />
      <div className="neo-brutalist-sm p-4 mt-2 bg-background">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm font-medium text-muted-foreground">{subtitle}</p>
        <p className="text-xs text-muted-foreground mt-1">{date}</p>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export function ExperienceSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      <div>
        <h2 className="text-2xl font-bold flex items-center mb-6 neo-brutalist-accent inline-block px-4 py-1 -rotate-1">
          <GraduationCap className="mr-2" />
          Education
        </h2>
        <div className="mt-6">
          {educationItems.map((item, index) => (
            <TimelineItem
              key={item.title}
              {...item}
              isEducation
              index={index}
            />
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold flex items-center mb-6 neo-brutalist-purple inline-block px-4 py-1 rotate-1">
          <Award className="mr-2" />
          Experience
        </h2>
        <div className="mt-6">
          {experienceItems.map((item, index) => (
            <TimelineItem
              key={item.title}
              {...item}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
