"use client";
import ScrollArrow from "@/components/ScrollArrow";

const JOBS = [
    { period: "2025 — Present", role: "Full Stack Developer", company: "Fixing Dots — Raipur, Chhattisgarh", desc: "Working on an enterprise HRMS platform — building and maintaining modules for employee management, attendance tracking, and TA&DA (travel allowance & daily allowance) with complex rule-based logic and reporting.", tags: ["Laravel", "PHP", "Livewire", "MySQL", "AWS"] },
    { period: "2024 — 2025", role: "Full Stack Developer", company: "Jiten Softwares — Raipur, Chhattisgarh", desc: "delivered 8+ projects across industries: Billing & logistics management system for bulk material businesses * Loan management platform for group-based microfinance * Dance class scheduling and fee management software * RTO renewal and insurance tracking system Website + PWA for a bathroom products manufacturer (includes a staff sales management app) * Dynamic website for a multispecialty eye hospital Website for a cleaning services & products company * Advanced version of the logistics billing system with expanded features", tags: ["Laravel", "PHP", "Tailwind", "MySQL", "Hostinger"] },
    { period: "2022 — 2024", role: "Full Stack Developer", company: "Trinity Solutions — Raipur, Chhattisgarh", desc: "Delivered 12+ client projects ranging from SaaS MVPs to e-commerce platforms. Took ownership of backend development across several client projects — designing databases, building server-side logic, and integrating frontends. * Built a full e-commerce website with product catalog and order management flow * Developed billing software for a local business * Engineered a farm discovery & booking platform — search, filter, and book farm houses by location and type", tags: ["Laravel", "PHP", "Razorpay", "MySQL", "Hostinger"] },
    { period: "2022 — 2022", role: "Junior Developer", company: "Trinity Solutions — Raipur, Chhattisgarh", desc: "First exposure to production web development — assisted in building dynamic, client-facing websites and got hands-on with real project workflows, debugging, and deployment. * Contributed to multiple dynamic websites for local businesses * Learned backend fundamentals in a live project environment", tags: ["HTML/CSS", "JavaScript", "PHP"] },
];

function ExperienceSection({ sRef, index, sectionRefs, totalSections }) {
    return (
        <section ref={sRef} id="experience" className="section">
            <div className="section-label">04 — Career History</div>
            <h2 className="section-title">Experience</h2>
            <div className="section-line" />
            <div className="exp-layout">
                <div>
                    <div className="exp-aside-label">Years of Experience</div>
                    <div className="exp-big">4<span>+</span></div>
                    <div className="exp-aside-label" style={{ marginTop: 20 }}>Projects Delivered</div>
                    <div className="exp-big" style={{ fontSize: 60 }}>20<span>+</span></div>
                    <p className="exp-aside-desc" style={{ marginTop: 10 }}>
                        From early-stage startups to enterprise scale.
                        Always learning, always shipping.
                    </p>
                </div>
                <div className="timeline">
                    {JOBS.map((j) => (
                        <div key={`${j.company}-${j.period}`} className="tl-item">
                            <div className="tl-dot" />
                            <div className="tl-period">{j.period}</div>
                            <div className="tl-role">{j.role}</div>
                            <div className="tl-company">{j.company}</div>
                            <p className="tl-desc">{j.desc}</p>
                            <div className="tl-tags">{j.tags.map((t) => <span key={t} className="tl-tag">{t}</span>)}</div>
                        </div>
                    ))}
                </div>
            </div>
            <ScrollArrow index={index} sectionRefs={sectionRefs} total={totalSections} />
        </section>
    );
}

export default ExperienceSection