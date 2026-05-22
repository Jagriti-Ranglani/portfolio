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
	const [showBackToTop, setShowBackToTop] = useState(false);
	const sectionRefs = useRef([]);

	const scrollTo = (i) => {
		sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
	};

	const handleNavClick = (i) => {
		scrollTo(i);
		if (typeof window !== "undefined" && window.innerWidth < 1024) {
			setSidebarOpen(false);
		}
	};

	useEffect(() => {
		// Responsive sidebar handling
		const handleResize = () => {
			if (window.innerWidth < 1024) {
				setSidebarOpen(false);
			} else {
				setSidebarOpen(true);
			}
		};

		// Run once on mount
		handleResize();

		const handleScroll = () => {
			if (window.scrollY > 400) {
				setShowBackToTop(true);
			} else {
				setShowBackToTop(false);
			}
		};

		window.addEventListener("resize", handleResize);
		window.addEventListener("scroll", handleScroll);

		// Scroll Spy / Intersection Observer
		const observerOptions = {
			root: null,
			rootMargin: "-40% 0px -40% 0px", // Trigger when section is roughly in the middle
			threshold: 0,
		};

		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
					if (index !== -1) {
						setActiveSection(SECTIONS[index].id);
					}
				}
			});
		};

		const observer = new IntersectionObserver(observerCallback, observerOptions);
		sectionRefs.current.forEach((ref) => {
			if (ref) observer.observe(ref);
		});

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
			observer.disconnect();
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div>
			{/* Mobile Sticky Header */}
			<header className="mobile-header">
				<button
					className="mobile-menu-btn"
					onClick={() => setSidebarOpen(!sidebarOpen)}
					aria-label="Toggle Menu"
				>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path
							d="M3 5H17M3 10H17M3 15H17"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
				<div className="mobile-brand">
					Jagriti<em>.</em>DEV
				</div>
				<div style={{ width: 36 }} /> {/* Spacer to balance flex spacing */}
			</header>

			{/* Dim backdrop overlay for mobile view when sidebar drawer is active */}
			{sidebarOpen && (
				<div
					className="sidebar-backdrop"
					onClick={() => setSidebarOpen(false)}
				/>
			)}

			<Sidebar
				open={sidebarOpen}
				setOpen={setSidebarOpen}
				active={activeSection}
				scrollTo={handleNavClick}
				sections={SECTIONS}
			/>

			<main className={`main${sidebarOpen ? "" : " main--wide"}`}>
				<HomeSection
					sRef={(el) => (sectionRefs.current[0] = el)}
					index={0}
					sectionRefs={sectionRefs}
					totalSections={SECTIONS.length}
				/>
				<BiographySection sRef={(el) => (sectionRefs.current[1] = el)} index={1} sectionRefs={sectionRefs} totalSections={SECTIONS.length} />
				<PortfolioSection sRef={(el) => (sectionRefs.current[2] = el)} index={2} sectionRefs={sectionRefs} totalSections={SECTIONS.length} />
				<ServicesSection sRef={(el) => (sectionRefs.current[3] = el)} index={3} sectionRefs={sectionRefs} totalSections={SECTIONS.length} />
				<ExperienceSection sRef={(el) => (sectionRefs.current[4] = el)} index={4} sectionRefs={sectionRefs} totalSections={SECTIONS.length} />
				<ClientsSection sRef={(el) => (sectionRefs.current[5] = el)} index={5} sectionRefs={sectionRefs} totalSections={SECTIONS.length} />
				<ContactSection sRef={(el) => (sectionRefs.current[6] = el)} index={6} sectionRefs={sectionRefs} totalSections={SECTIONS.length} />

				<footer className="footer">
					<span>
						&copy; 2026 <span className="footer-accent">Jagriti Ranglani</span>
					</span>
					<span>Full Stack Developer</span>
				</footer>
			</main>

			{/* Back to Top Button */}
			<button
				className={`back-to-top${showBackToTop ? " back-to-top--visible" : ""}`}
				onClick={scrollToTop}
				aria-label="Back to Top"
			>
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
					<path
						d="M7 11V3M7 3L3 7M7 3L11 7"
						stroke="currentColor"
						strokeWidth="1.8"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</div>
	);
}