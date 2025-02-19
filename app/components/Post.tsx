
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconCode,
  IconServer,
  IconShoppingCart,
  IconMessageCircle,
  IconDatabase,
  IconCloud,
  IconSettings,
} from "@tabler/icons-react";

export default  function Post() {
  return (
  
    <BentoGrid className="max-w-full mx-auto">
      {projects.map((project, i) => (
        <BentoGridItem
          key={i}
          title={project.title}
          description={project.description}
          header={project.header}
          icon={project.icon}
          className={i === 1 || i === 4 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
   
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce website with payment integration.",
    header: <Skeleton />, 
    icon: <IconShoppingCart className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Chat Application",
    description: "Real-time messaging app with WebSocket support.",
    header: <Skeleton />, 
    icon: <IconMessageCircle className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Portfolio Website",
    description: "A sleek and modern personal portfolio.",
    header: <Skeleton />, 
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "API Backend",
    description: "Scalable RESTful API built with Node.js and Express.",
    header: <Skeleton />, 
    icon: <IconServer className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Database Management System",
    description: "A custom DBMS with advanced query capabilities.",
    header: <Skeleton />, 
    icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cloud File Storage",
    description: "A secure cloud-based file storage system.",
    header: <Skeleton />, 
    icon: <IconCloud className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "DevOps Automation",
    description: "Automated deployment pipeline with CI/CD.",
    header: <Skeleton />, 
    icon: <IconSettings className="h-4 w-4 text-neutral-500" />,
  },
];
