import React from "react";
import { techStack } from "@/assets/assets";

const TechStackSection = () => {
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <section
      className="w-full py-20 overflow-hidden"
      data-aos="fade-up"
      id="stack"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-brand/8 blur-[100px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-brand uppercase tracking-widest block mb-4 font-outfit">
            Inventory
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Tech <span className="text-brand">Stack</span>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-infinite-scroll">
            {duplicatedTechStack.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-3 bg-white dark:bg-transparent rounded-xl border-1 border-slate-200 hover:border-brand/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group shadow-sm"
              >
                <div className="flex items-center justify-left gap-5 group">
                  <div
                    className="w-10 h-10 mb-5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${tech.color}15` }}
                  >
                    <div
                      style={{
                        color: tech.color,
                      }}
                    >
                      {tech.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-center font-ovo text-lg font-medium text-dark">
                      {tech.name}
                    </h3>
                    <div className="space-y-2 ">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-600 text-xs font-outfit">
                          Proficiency
                        </span>
                        <span className="text-brand font-bold ml-2 font-ovo">
                          {tech.level}%
                        </span>
                      </div>

                      <div className="w-full h-2.5 bg-slate-300 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-brand to-brand-hover/70 rounded-full transition-all duration-1000 ease-out transform origin-left"
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 2));
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          width: fit-content;
        }

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;
