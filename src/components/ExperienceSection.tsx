
import { ChevronsRight, Award, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const educationItems = [
    {
      title: "Bachelor of Informatics",
      subtitle: "University Amikom Yogyakarta",
      date: "2022 - Present",
      description: "Currently pursuing a degree in Informatics with a focus on front-end development and user experience design."
    },
    {
      title: "MSIB Internship Program",
      subtitle: "PT Kinematik Systrans Multimedia (Infinite Learning)",
      date: "6 September 2024 – 31 Desember 2024",
      description: "Built web applications using the MERN stack, efficiently created and integrated APIs, and implemented UI/UX designs into responsive website interfaces."
    },
    {
      title: "Bootcamp MERN",
      subtitle: "Devscale Indonesia",
      date: "4 Juli 2024 – 14 Oktober 2024",
      description: "Developed interactive web interfaces with React.js and TypeScript, integrated and managed data using MongoDB, built backend servers with Express.js and RESTful APIs, and implemented authentication and authorization using JWT."
    },
    {
      title: "Vocational High School (SMK)",
      subtitle: "SMK YOSONEGORO – Magetan",
      date: "2021",
      description: "Graduated with a concentration in Computer and Network Engineering (Teknik Jaringan dan Komputer)."
    },

  ];
  
  const experienceItems = [
    {
      title: "Teaching Assistant (Database Systems)",
      subtitle: "University  Amikom Yogyakarta",
      date: "November 2025 – Desember 2025",
      description: "Guided students through lab modules on SQL and database fundamentals by providing additional explanations, assisting in troubleshooting code errors during practice sessions, and evaluating student lab reports"
    },
    {
      title: "Teaching Assistant (Basic Web Programming)",
      subtitle: "University  Amikom Yogyakarta",
      date: "Februari 2024 – Juli 2024",
      description: "Guided students through lab modules with additional explanations, helped troubleshoot code errors during practice sessions, assessed and evaluated student lab reports, and provided tips for using code editors effectively."
    },
    {
      title: "Internship (Praktek Kerja Lapangan)",
      subtitle: "HaiTEK Computer",
      date: "Juli 2019 – November 2019",
      description: "Handled customer service directly, performed laptop servicing, operating system installation, and laptop assembly."
    }
  ];
  
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
