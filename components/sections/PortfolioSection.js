"use client";
import ScrollArrow from "@/components/ScrollArrow";

const PROJECTS = [
    { cat: "Farm House Search Platform", name: "Family Farms", tech: "Php · JavaScript · MySQL", img: "/project-1.png" },
    { cat: "Eye Hospital", name: "AB Eye Hospital", tech: "Php · JavaScript · MySQL", img: "/project-2.png" },
    { cat: "Dentist Website", name: "Dental Art", tech: "Php · JavaScript · MySQL", img: "/project-3.png" },
    { cat: "Learning Platform", name: "The Safal", tech: "Php · JavaScript · MySQL", img: "/project-4.png" },
    { cat: "E-Commerce", name: "Bookley", tech: "Php · JavaScript · MySQL", img: "/project-5.png" },
    { cat: "HRMS", name: "FixHr", tech: "Laravel · React · MySQL", img: "/project-6.png" },
];

function PortfolioSection({ sRef, index, sectionRefs, totalSections }) {
    return (
        <section ref={sRef} id="portfolio" className="section">
            <div className="portfolio-header">
                <div>
                    <div className="section-label">02 — Selected Work</div>
                    <h2 className="section-title">Portfolio</h2>
                    <div className="section-line" />
                </div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: "2px", color: "var(--muted)", textTransform: "uppercase", paddingBottom: 48 }}>
                    {PROJECTS.length} Projects
                </div>
            </div>

            <div className="portfolio-grid">
                {PROJECTS.map((p) => (
                    <div key={p.name} className="port-card">
                        <img src={p.img} alt={p.name} loading="lazy" />
                        <div className="port-overlay">
                            <div className="port-cat">{p.cat}</div>
                            <div className="port-name">{p.name}</div>
                            <div className="port-tech">{p.tech}</div>
                        </div>
                        <div className="port-ext">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                        </div>
                    </div>
                ))}
            </div>

            <ScrollArrow index={index} sectionRefs={sectionRefs} total={totalSections} />
        </section>
    );
}

export default PortfolioSection;