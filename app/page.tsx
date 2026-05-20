"use client";

import { useState, useEffect, useRef } from "react";
import Sidebar from "@/components/Sidebar";
import HomeSection from "@/components/sections/HomeSection";
import BiographySection from "@/components/sections/BiographySection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ContactSection from "@/components/sections/ContactSection";

const SECTIONS = [
  { id: "home", label: "HOME" },
  { id: "biography", label: "BIOGRAPHY" },
  { id: "portfolio", label: "PORTFOLIO" },
  { id: "services", label: "SERVICES" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "clients", label: "CLIENTS" },
  { id: "contact", label: "CONTACT" },
];

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef([]);

  const scrollTo = (i) => {
    sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(SECTIONS[i]);
        },
        { threshold: 0.3 }
      );

      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const setRef = (i) => (el) => (sectionRefs.current[i] = el);

  return (
    <div>
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        active={activeSection}
        scrollTo={scrollTo}
        sections={SECTIONS}
      />

      <main className={`main${sidebarOpen ? "" : " main--wide"}`}>
        <HomeSection
          sRef={setRef(0)}
          index={0}
          sectionRefs={sectionRefs}
          totalSections={SECTIONS.length}
        />
        <BiographySection sRef={setRef(1)} index={1} sectionRefs={sectionRefs} totalSections={SECTIONS.length} />
        <PortfolioSection sRef={setRef(2)} index={2} sectionRefs={sectionRefs} totalSections={SECTIONS.length} />
        <ServicesSection sRef={setRef(3)} index={3} sectionRefs={sectionRefs} totalSections={SECTIONS.length} />
        <ExperienceSection sRef={setRef(4)} index={4} sectionRefs={sectionRefs} totalSections={SECTIONS.length} />
        <ClientsSection sRef={setRef(5)} index={5} sectionRefs={sectionRefs} totalSections={SECTIONS.length} />
        <ContactSection sRef={setRef(6)} index={6} sectionRefs={sectionRefs} totalSections={SECTIONS.length} />

        <footer className="footer">
          <span>
            © 2026 <span className="footer-accent">Your Name</span>
          </span>
          <span>Full Stack Developer</span>
        </footer>
      </main>
    </div>
  );
}