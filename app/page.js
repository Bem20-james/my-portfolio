"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/About";
import ServicesSection from "@/components/Services";
import ProjectsSection from "@/components/Projects";
import ContactSection from "@/components/Contact";
import TechStackSection from "@/components/Stack";
import CareerSection from "@/components/Career";
import Footer from "@/components/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroSection isDarkMode={isDarkMode} />
      <AboutSection isDarkMode={isDarkMode} />
      <TechStackSection isDarkMode={isDarkMode} />
      <CareerSection isDarkMode={isDarkMode} />
      <ServicesSection isDarkMode={isDarkMode} />
      <ProjectsSection isDarkMode={isDarkMode} />
      <ContactSection isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
