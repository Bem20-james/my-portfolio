import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const AboutSection = ({ isDarkMode }) => {
  return (
    <section
      className="w-full py-20 px-6 lg:px-[8%] scroll-mt-20"
      id="about"
      data-aos="fade-up"
    >
      <div className="text-center">
        <span className="text-sm font-medium text-brand uppercase tracking-widest block mb-4 font-outfit">
          Introduction
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          About <span className="text-brand">Me</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto mt-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div
            className="lg:col-span-4"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Decorative Border Frame */}
              <div className="absolute -inset-4 border-2 border-brand/20 rounded-2xl" />
              <div className="absolute -inset-2 border border-brand/10 rounded-2xl" />

              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={assets.hero_img}
                  alt="About me"
                  width={400}
                  height={700}
                  className="w-full h-auto object-cover"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand/10 to-transparent" />
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand/5 rounded-full blur-2xl" />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6" data-aos="fade-down">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center">
                <span className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                <span className="absolute w-2 h-2 bg-brand rounded-full animate-ping" />
              </div>
              <span className="text-sm font-medium text-brandDark uppercase tracking-wider">
                Software Developer
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Crafting digital experiences that{" "}
              <span className="text-brand">inspire</span> and{" "}
              <span className="text-brand">engage</span>
            </h2>

            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-outfit">
              I'm a frontend developer with about 3 years of experience creating
              responsive and engaging web and mobile apps. I love building
              smooth, beautiful interfaces and crafting experiences that users
              truly enjoy. I'm also skilled at integrating secure APIs for
              seamless functionality.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-10 h-10 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-brand"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Based in
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    Abuja, Nigeria
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-green-600 uppercase tracking-wide mb-1">
                    Status
                  </div>
                  <div className="text-sm font-semibold text-green-900">
                    Available for work
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand/25 group"
              >
                Get in Touch
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
