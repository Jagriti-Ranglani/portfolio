"use client";
import ScrollArrow from "@/components/ScrollArrow";

function BiographySection({ sRef, index, sectionRefs, totalSections }) {
	return (
		<section ref={sRef} id="biography" className="section">
			<div className="section-label">01 — About Me</div>
			<h2 className="section-title">Biography</h2>
			<div className="section-line" />

			<div className="bio-grid">
				<div>
					<p className="bio-text">
						Full Stack Developer with 4+ years of experience building production-grade web applications across logistics, healthcare, retail, and HR. Skilled in end-to-end development — database design, REST APIs, and responsive frontends.
					</p>
					<p className="bio-text">
						Delivered billing systems, ERP modules, booking platforms, and enterprise HRMS solutions, both independently and within a team.
					</p>

					<div className="info-grid">
						{[
							["Name", "Jagriti Ranglani"],
							["Location", "Raipur, Chhattisgarh, India"],
							["Experience", "4+ Years"],
							["Availability", "Open to Work"],
							["Email", "ranglanijagriti8@gmail.com"],
							["Freelance", "Available"],
						].map(([l, v]) => (
							<div key={l} className="info-cell">
								<div className="info-lbl">{l}</div>
								<div className="info-val">{v}</div>
							</div>
						))}
					</div>

					<div className="skills-title">Core Technologies</div>
					<div className="skill-tags">
						{["Laravel", "PHP", "JavaScript", "HTML", "CSS", "MySQL", "Bootstrap", "Tailwind", "Hostinger"].map((s, i) => (
							<span key={s} className={`skill-tag${i < 4 ? " skill-tag--hi" : ""}`}>{s}</span>
						))}
					</div>
				</div>

				<div>
					<h3 className="bio-right-title">My Tech Stack</h3>
					<div className="stack-grid">
						{[
							{ 
								icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/></svg>, 
								name: "Frontend", 
								desc: "React, Tailwind CSS, Bootstrap",
								color: "var(--accent)"
							},
							{ 
								icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>, 
								name: "Backend", 
								desc: "Laravel, PHP",
								color: "var(--kw)"
							},
							{ 
								icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>, 
								name: "Database", 
								desc: "MySql ORM",
								color: "var(--fn)"
							},
							{ 
								icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>, 
								name: "DevOps", 
								desc: "Hostinger, Namecheap, GitHub",
								color: "var(--cmt)"
							},
						].map((s) => (
							<div key={s.name} className="stack-item">
								<div className="stack-icon" style={{ color: s.color }}>{s.icon}</div>
								<div className="stack-name" style={{ color: s.color }}>{s.name}</div>
								<div className="stack-desc">{s.desc}</div>
							</div>
						))}
					</div>
					<div className="skills-title">Also Familiar With</div>
					<div className="skill-tags">
						{["Python", "Livewire", "Django"].map((s) => (
							<span key={s} className="skill-tag">{s}</span>
						))}
					</div>
				</div>
			</div>

			<ScrollArrow index={index} sectionRefs={sectionRefs} total={totalSections} />
		</section>
	);
}

export default BiographySection;