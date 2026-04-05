import { serviceData } from "@/assets/assets";
import React from "react";

const ServicesSection = () => {
  return (
    <section
      className="w-full py-20 px-6 lg:px-[8%]"
      id="services"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-brand uppercase tracking-widest block mb-4 font-outfit">
            What I Offer
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Services I <span className="text-brand">Provide</span>
          </h2>

          <p className="text-xs sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            I design and build fast, responsive web and mobile experiences that
            feel as good as they look. From sleek interfaces to seamless API
            integrations, I focus on performance, scalability, and smooth user
            interactions that bring ideas to life.
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="flip-down"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
        >
          {serviceData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  return (
    <div
      className="group relative bg-white dark:bg-transparent rounded-2xl p-8 border-2 dark:border border-slate-200 hover:border-brand-hover transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 "
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Number Badge */}
      <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
        <span className="text-brand font-bold text-lg">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Icon */}
      <div className="w-16 h-16 mb-6 bg-brand/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <div className="text-3xl">{service.icon}</div>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold  text-slate-900 mb-4 group-hover:text-brand transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed mb-6 font-outfit text-sm dark:group-hover:text-white/80">
        {service.description}
      </p>

      {/* Features List */}
      {service.features && (
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm text-slate-600 dark:group-hover:text-white/70"
            >
              <svg
                className="w-5 h-5 text-brand flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Bottom Accent Line */}
      <div className="h-1 w-0 bg-gradient-to-r from-brand-hover to-brand/50 group-hover:w-full transition-all duration-500 rounded-full" />
    </div>
  );
};

export default ServicesSection;
