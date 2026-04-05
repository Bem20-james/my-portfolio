import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative  text-white">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-brand/8 blur-[100px]" />
      </div>
      <div className="h-1 bg-gradient-to-r from-transparent via-brand to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Image
              src={assets.logo_main}
              alt="Logo"
              width={180}
              height={60}
              className="mb-6 brightness-0 invert"
            />
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Frontend developer crafting beautiful, performant web experiences.
              Transforming ideas into digital reality with clean code and modern
              design.
            </p>

            <a
              href="mailto:bemjames02@gmail.com"
              className="inline-flex items-center gap-3 px-4 py-3 dark:bg-white/5 bg-green-50 hover:bg-white/10 rounded-lg border border-white/10 hover:border-brand transition-all group"
            >
              <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400">Email me at</div>
                <div className="text-sm font-semibold text-black/40 dark:text-white">
                  bemjames02@gmail.com
                </div>
              </div>
              <svg
                className="w-4 h-4 text-slate-400 ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
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

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#work" },
                { label: "Experience", href: "#experience" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-brand transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-brand group-hover:w-4 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Connect</h3>
            <div className="space-y-4">
              {[
                {
                  name: "GitHub",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  name: "LinkedIn",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  name: "Twitter",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  ),
                  href: "#",
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-brand transition-colors group"
                >
                  <div className="w-10 h-10 bg-white/5 group-hover:bg-brand/20 rounded-lg flex items-center justify-center transition-colors">
                    {social.icon}
                  </div>
                  <span className="font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear}{" "}
            <span className="text-white font-semibold">James Aondoakura</span>.
            All rights reserved.
          </p>

          <a
            href="#"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand transition-colors group"
          >
            <span>Back to top</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute top-20 right-10 w-64 h-64 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
};

export default Footer;
