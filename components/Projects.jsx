import React from "react";
import Image from "next/image";
import { projectsData } from "@/assets/assets";

const ProjectsSection = () => {
  return (
    <section
      className="w-full py-20 px-6 lg:px-[8%]"
      id="work"
      data-aos="zoom-out-up"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-brand uppercase tracking-widest mb-4 block font-outfit">
            Portfolio
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="">Featured </span>
            <span className="text-brand">Projects</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
            A selection of high-impact digital solutions, built with focus on
            scalability, performance, and exceptional user experience.
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          data-aos="zoom-out-down"
        >
          {projectsData.slice(0, 3).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand/25 group"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-700 hover:border-brand transition-all duration-300 hover:shadow-2xl hover:shadow-brand/10">
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-black group-hover:text-brand transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-brand/10 text-brand rounded border border-brand/30 rounded-full border hover:border-brand hover:text-brand transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-4">
          <a
            href={project.liveUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 text-black rounded-lg border border-slate-600 hover:border-brand transition-all group/btn"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span className="text-sm font-medium">LIVE DEMO</span>
          </a>

          <a
            href={project.sourceUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 text-black rounded-lg border border-slate-600 hover:border-brand transition-all group/btn"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span className="text-sm font-medium">SOURCE</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
