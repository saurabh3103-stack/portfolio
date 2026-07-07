"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 z-[20]"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {PROJECTS.slice(0, visibleCount).map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      
      {visibleCount < PROJECTS.length && (
        <button
          onClick={handleLoadMore}
          className="mt-12 py-3 px-8 rounded-full border border-purple-500 text-white font-semibold hover:bg-purple-500/20 transition-colors shadow-lg hover:shadow-purple-500/30"
        >
          View More Projects
        </button>
      )}
    </section>
  );
};
