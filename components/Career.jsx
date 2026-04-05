"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { educationData, professionalData } from "@/assets/assets";

gsap.registerPlugin(ScrollTrigger);

const CareerSection = () => {
  const [activeTab, setActiveTab] = useState("professional");
  const scrollContainerRef = useRef(null);
  const stickyWrapperRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentData =
    activeTab === "professional" ? professionalData : educationData;

  useEffect(() => {
    const panels = gsap.utils.toArray(".career-panel");
    const N = panels.length;

    // Kill existing ScrollTriggers
    ScrollTrigger.getAll().forEach((t) => t.kill());

    if (!N || N === 0) return;

    // Reset all panels to initial state
    gsap.set(panels, { clearProps: "all" });

    // All panels except the first start below the viewport
    gsap.set(panels.slice(1), { yPercent: 100 });

    // Create the scroll-triggered stacking animation
    ScrollTrigger.create({
      trigger: scrollContainerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.8,
      onUpdate(self) {
        const prog = self.progress;
        const segSize = 1 / (N - 1);

        for (let i = 1; i < N; i++) {
          const segStart = (i - 1) * segSize;
          const segProg = gsap.utils.clamp(0, 1, (prog - segStart) / segSize);

          // Slide panel i up from below
          gsap.set(panels[i], {
            yPercent: (1 - segProg) * 100,
          });

          // Scale + push back every already-visible panel beneath
          for (let j = 0; j < i; j++) {
            let totalScale = 1;
            let totalY = 0;
            let totalOpacity = 1;

            for (let k = j + 1; k <= i; k++) {
              const kSegStart = (k - 1) * segSize;
              const kProg = gsap.utils.clamp(
                0,
                1,
                (prog - kSegStart) / segSize,
              );
              totalScale -= kProg * 0.05;
              totalY -= kProg * 40;
              totalOpacity = Math.max(0.4, totalOpacity - kProg * 0.15);
            }

            gsap.set(panels[j], {
              scale: Math.max(0.7, totalScale),
              y: totalY,
              opacity: totalOpacity,
            });
          }
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [currentData]);

  const handleTabChange = (tab) => {
    if (tab === activeTab || isAnimating) return;

    setIsAnimating(true);

    // Fade out current content
    gsap.to(".career-panel", {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      onComplete: () => {
        setActiveTab(tab);

        // Fade in new content after a brief delay
        setTimeout(() => {
          gsap.fromTo(
            ".career-panel",
            { opacity: 0, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.4,
              stagger: 0.08,
              onComplete: () => setIsAnimating(false),
            },
          );
        }, 50);
      },
    });
  };

  return (
    <section
      className="w-full py-20 px-6 lg:px-[8%] bg-gradient-to-b from-slate-50 via-white to-slate-50"
      id="experience"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="inline-block text-[10px] font-bold text-brand uppercase tracking-[0.3em] mb-4 font-outfit">
            Background
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-serif">
            Journey & <span className="text-brand">Growth</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Scroll to explore each milestone
          </p>
        </div>

        {/* Tabs */}
        <div
          className="flex justify-center gap-6 mb-20"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <button
            onClick={() => handleTabChange("professional")}
            disabled={isAnimating}
            className={`group relative px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
              activeTab === "professional"
                ? "text-brand"
                : "text-slate-400 hover:text-slate-700"
            } ${isAnimating ? "pointer-events-none opacity-50" : ""}`}
          >
            <span className="relative z-10">Professional</span>
            {activeTab === "professional" && (
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-brand" />
            )}
            <div className="absolute inset-0 bg-brand/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded" />
          </button>

          <button
            onClick={() => handleTabChange("education")}
            disabled={isAnimating}
            className={`group relative px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
              activeTab === "education"
                ? "text-brand"
                : "text-slate-400 hover:text-slate-700"
            } ${isAnimating ? "pointer-events-none opacity-50" : ""}`}
          >
            <span className="relative z-10">Education</span>
            {activeTab === "education" && (
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-brand" />
            )}
            <div className="absolute inset-0 bg-brand/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded" />
          </button>
        </div>

        {/* Stacked Scroll Container */}
        <div
          ref={scrollContainerRef}
          style={{
            position: "relative",
            height: `${currentData.length * 100}vh`,
          }}
        >
          <div
            ref={stickyWrapperRef}
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem 0",
            }}
          >
            {currentData.map((item, index) => (
              <div
                key={`${activeTab}-${index}`}
                className="career-panel"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  transform: "translateY(-50%)",
                  zIndex: index + 1,
                  transformOrigin: "50% 50%",
                  willChange: "transform",
                  padding: "0 1rem",
                  maxWidth: "1200px",
                  margin: "0 auto",
                }}
              >
                <ExperienceCard
                  item={item}
                  index={index}
                  total={currentData.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ item, index, total }) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200/60 overflow-hidden backdrop-blur-sm">
      {/* Card header with gradient accent */}
      <div className="h-2 bg-gradient-to-r from-brand via-brand/60 to-transparent" />

      <div className="p-10 lg:p-14">
        {/* Progress indicator */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-r from-slate-300 to-transparent" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-400">
            {index + 1} of {total}
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left sidebar: Meta info */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="text-[9px] text-slate-400 uppercase tracking-[0.25em] font-bold mb-3">
                Duration
              </div>
              <div className="text-base font-semibold text-slate-900 font-serif">
                {item.duration}
              </div>
            </div>

            <div>
              <div className="text-[9px] text-slate-400 uppercase tracking-[0.25em] font-bold mb-3">
                Location
              </div>
              <div className="text-base font-semibold text-slate-900 font-serif">
                {item.location}
              </div>
            </div>

            {/* Decorative element */}
            <div className="hidden lg:block pt-6">
              <div className="w-16 h-[2px] bg-gradient-to-r from-brand to-brand/20" />
            </div>
          </div>

          {/* Right content: Details */}
          <div className="lg:col-span-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3 font-serif leading-tight">
              {item.organization}
            </h3>

            <div className="inline-block px-4 py-2 bg-brand/10 border border-brand/20 rounded-full mb-8">
              <span className="text-brand font-bold uppercase tracking-[0.15em] text-xs">
                {item.role}
              </span>
            </div>

            <ul className="space-y-4 mb-8">
              {item.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-slate-600 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2.5 flex-shrink-0" />
                  <span className="text-[15px]">{achievement}</span>
                </li>
              ))}
            </ul>

            {/* Tools/Focus section */}
            <div className="pt-6 border-t border-slate-200">
              <div className="flex items-start gap-4">
                <span className="text-[9px] text-slate-400 uppercase tracking-[0.25em] font-bold pt-1 whitespace-nowrap">
                  {item.type === "education" ? "Focus" : "Tools"}
                </span>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {item.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-slate-600 font-medium tracking-wide"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerSection;
