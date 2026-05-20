"use client";
import ScrollArrow from "@/components/ScrollArrow";

const PROJECTS = [
    { cat: "SaaS Platform", name: "Fluxboard", tech: "React · Node.js · PostgreSQL", seed: "business" },
    { cat: "E-Commerce", name: "Arcane Shop", tech: "Next.js · Stripe · Prisma", seed: "market2" },
    { cat: "Real-time App", name: "PulseChat", tech: "WebSockets · Redis · React", seed: "abstract" },
    { cat: "Data Dashboard", name: "Metrics Hub", tech: "React · D3.js · GraphQL", seed: "data9" },
    { cat: "Mobile Web", name: "TrackWell", tech: "PWA · TypeScript · Firebase", seed: "health4" },
    { cat: "Dev Tool", name: "CodeVault", tech: "Go · SQLite · React", seed: "tech7" },
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
                        <img src={`https://picsum.photos/seed/${p.seed}/800/600`} alt={p.name} loading="lazy" />
                        <div className="port-overlay">
                            <div className="port-cat">{p.cat}</div>
                            <div className="port-name">{p.name}</div>
                            <div className="port-tech">{p.tech}</div>
                        </div>
                        <div className="port-ext">↗</div>
                    </div>
                ))}
            </div>

            <ScrollArrow index={index} sectionRefs={sectionRefs} total={totalSections} />
        </section>
    );
}

export default PortfolioSection;