"use client";

import { data } from "autoprefixer";
import React, { useState } from "react";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "40877e3d-1a14-43b5-81f9-da8c31960962");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Message sent successfully");
        setLoading(false);
        event.target.reset();
      } else {
        console.log("Error", data);
        setMessage(data.message);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessage(data.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-20 px-6 lg:px-[8%]" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-brand uppercase tracking-widest block mb-4 font-outfit">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s Work <span className="text-brand">Together</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Drop me a message and
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div
          className="grid lg:grid-cols-2 gap-12 items-start"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="bg-white dark:bg-transparent rounded-xl p-8 border border-slate-200 shadow-lg">
            <h3 className="text-lg font-bold mb-6">Send a Message</h3>
            {message && (
              <p className="text-base text-center text-red-600 bg-red-300 p-3 rounded-sm">
                {message}
              </p>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-brand focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-brand focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="write your message here..."
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:border-brand focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand text-white rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-brand/25 group"
              >
                {loading ? "Sending Message..." : "Send Message"}
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
              </button>
            </form>
          </div>

          <div
            className="space-y-8"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="bg-white dark:bg-black/70 rounded-2xl p-5 shadow-lg">
              <h3 className="text-lg font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <ContactInfoItem
                  icon={
                    <svg
                      className="w-6 h-6"
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
                  }
                  label="Email"
                  value="bemjames02@gmail.com"
                  link="mailto:bemjames02@gmail.com"
                />

                <ContactInfoItem
                  icon={
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  }
                  label="Phone"
                  value="+234 901 187 9815"
                  link="tel:+2349011879815"
                />

                <ContactInfoItem
                  icon={
                    <svg
                      className="w-6 h-6"
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
                  }
                  label="Location"
                  value="Abuja, Nigeria"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-black/70  rounded-2xl p-5 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>

              <div className="grid grid-cols-2 gap-4">
                <SocialLink name="LinkedIn" icon="💼" href="#" />
                <SocialLink name="GitHub" icon="💻" href="#" />
                <SocialLink name="Twitter" icon="🐦" href="#" />
                <SocialLink name="Instagram" icon="📸" href="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({ icon, label, value, link }) => {
  const content = (
    <>
      <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center text-brand flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs text-slate-500 mb-1">{label}</div>
        <div className="text-sm font-semibold text-slate-900 dark:text-white">
          {value}
        </div>
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        className="flex items-center gap-4 hover:bg-slate-50 dark:hover:bg-brand/20 p-3 rounded-lg transition-colors group"
      >
        {content}
        <svg
          className="w-5 h-5 text-slate-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
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
    );
  }

  return <div className="flex items-center gap-4 p-3">{content}</div>;
};

const SocialLink = ({ name, icon, href }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-transparent hover:bg-brand/10 rounded-lg border border-slate-100 hover:border-brand transition-all group"
    >
      <span className="text-2xl">{icon}</span>
      <span className="font-semibold text-slate-700 dark:text-white group-hover:text-brand transition-colors">
        {name}
      </span>
    </a>
  );
};

export default ContactSection;
