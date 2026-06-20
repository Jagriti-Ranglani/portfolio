"use client";
import ScrollArrow from "@/components/ScrollArrow";

const JOBS = [
    {
        period: "2025 — Present",
        role: "Full Stack Developer",
        company: "Fixing Dots — Raipur, Chhattisgarh",
        desc: [
            "Working across two HRMS products — FixHR (500+ users) and a customized enterprise build for a major manufacturing client (200+ users)",
            "Built and maintained 10+ modules including attendance, leave, gate pass, missed punch, employee management, reports, TADA, and approval workflows",
            "Developed multi-level dynamic approval systems with hierarchy-based routing, conditional flows, and status tracking",
            "Integrated DigiLocker KYC for employee onboarding and GST validation + company autofill via Sandbox's paid API",
            "Built REST APIs consumed by mobile apps alongside full web frontend development",
            "Managed Git-based deployment workflows, Vite builds, and production server configuration for the enterprise client"
        ],
        tags: ["Laravel", "PHP", "Livewire", "MySQL", "AWS", "REST APIs", "Vite"]
    },
    {
        period: "2023 — 2025",
        role: "Full Stack Developer",
        company: "Jiten Softwares — Raipur, Chhattisgarh",
        desc: [
            "Delivered 8+ projects across industries:",
            "Billing & logistics management system for bulk material businesses",
            "Loan management platform for group-based microfinance",
            "Dance class scheduling and fee management software",
            "RTO renewal and insurance tracking system",
            "Website + PWA for a bathroom products manufacturer (includes a staff sales management app)",
            "Dynamic website for a multispecialty eye hospital",
            "Website for a cleaning services & products company",
            "An advanced version of the logistics billing system with expanded features"
        ],
        tags: ["Laravel", "PHP", "Tailwind", "MySQL", "Hostinger"]
    },
    {
        period: "2022 — 2023",
        role: "Junior Full Stack Developer",
        company: "Trinity Solutions — Raipur, Chhattisgarh",
        desc: [
            "Built a full e-commerce platform with 200+ products, inventory management, and Razorpay payment integration",
            "Developed a farm discovery & booking platform with an availability calendar and online payments",
            "Delivered 5+ business software products: billing system, multi-level marketing software, gym management (attendance & subscriptions), and a client & quotation management tool for a professional photographer",
            "Built 6-8 dynamic, responsive client websites across various industries"
        ],
        tags: ["Laravel", "PHP", "Razorpay", "MySQL", "Hostinger", "HTML/CSS", "JavaScript"]
    }
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
                            <div className="tl-desc" style={{ marginTop: "0.5rem" }}>
                                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    {j.desc.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tl-tags" style={{ marginTop: "1rem" }}>{j.tags.map((t) => <span key={t} className="tl-tag">{t}</span>)}</div>
                        </div>
                    ))}
                </div>
            </div>
            <ScrollArrow index={index} sectionRefs={sectionRefs} total={totalSections} />
        </section>
    );
}

export default ExperienceSection