import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-brand/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center mt-25">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white/5 backdrop-blur-sm mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
          </span>
          <span className="text-xs font-medium tracking-widest uppercase">
            Available for work
          </span>
        </div>

        <h1 className="font-black leading-none tracking-tight mb-4">
          <span
            className="block dark:text-white/30 text-dark/30 text-base font-normal tracking-[0.3em] uppercase mb-3"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Hello, I&apos;m
          </span>
          <span
            className="block text-5xl sm:text-7xl lg:text-8xl dark:text-white text-black/80"
            style={{ letterSpacing: "-0.03em" }}
          >
            James <br /> Aondoakura
          </span>
        </h1>

        {/* Role line with decorative bars */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-brand/40" />
          <p
            className="text-slate-400 text-base sm:text-lg font-light tracking-widest uppercase"
            style={{ fontFamily: "'Courier New', monospace" }}
          >
            Frontend Developer
          </p>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-brand/40" />
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-500 mb-6">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm tracking-wide">Abuja, Nigeria</span>
        </div>

        <p className="text-slate-400 text-base leading-relaxed max-w-lg mx-auto mb-8">
          I craft beautiful, performant digital experiences that engage and
          delight users. 4 years turning ideas into polished products.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {[
            { value: "4+", label: "Years Experience" },
            { value: "50+", label: "Projects Built" },
            { value: "30+", label: "Happy Clients" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-black text-brand">{value}</div>
              <div className="text-xs text-slate-500 tracking-widest uppercase mt-1">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="#contact"
            className="group relative px-9 py-4 bg-brand dark:bg-transparent border border-brand text-white rounded-xl font-semibold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let&apos;s Talk
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="/jimie-portfolio.pdf"
            download
            className="group px-5 py-4 border dark:border-white/10 dark:text-white dark:bg-brand rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:border-brand/50 hover:text-brand flex items-center gap-2 border-brand/50 text-brand "
          >
            Download CV
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-xs text-slate-600 tracking-widest uppercase">
            Find me on
          </span>
          <div className="flex gap-3">
            {[
              {
                name: "GitHub",
                link: "https://github.com/Bem20-james",
                path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
              },
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/james-bemshima-585a64260/",
                path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              },
              {
                name: "Twitter",
                link: "https://www.linkedin.com/in/james-bemshima-585a64260/",
                path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
              },
            ].map(({ name, path, link }) => (
              <a
                key={name}
                target="_"
                href={`${link.toLowerCase()}`}
                className="w-9 h-9 rounded-full border dark:border-white/10 flex items-center justify-center dark:text-white/40 transition-all duration-300 hover:border-brand/50 hover:text-brand hover:scale-110 text-black/40 border-black/10"
              >
                <span className="sr-only">{name}</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}

      <style jsx>{`
        @keyframes scroll {
          0% {
            opacity: 0;
            transform: translateY(0);
          }
          40% {
            opacity: 1;
          }
          80%,
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
