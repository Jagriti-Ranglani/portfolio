"use client";
import ScrollArrow from "@/components/ScrollArrow";

const SERVICES = [
    { num: "01", name: "Frontend Development", desc: "Building responsive, fast, and accessible UIs — from landing pages to complex dashboards. Dynamic websites, PWAs, and component-driven interfaces.", tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"] },
    { num: "02", name: "Backend Engineering", desc: "REST APIs, business logic, database design, and integrations. Experienced with auth systems, multi-role access, and complex data flows.", tags: ["Laravel", "PHP"] },
    { num: "03", name: "Database & Architecture", desc: "Schema design, query optimization, and caching strategies. From MySQL relational models to Redis caching layers — built for performance.", tags: ["MySQL"] },
    { num: "04", name: "Business Software & SaaS", desc: "Custom billing systems, ERP modules, management platforms, and internal tools tailored to how your business actually operates.", tags: ["Billing Systems", "ERP", "HRMS", "CRM", "SaaS", "Multi-role Access", "Custom Solutions"] },
];

function ServicesSection({ sRef, index, sectionRefs, totalSections }) {
    return (
        <section ref={sRef} id="services" className="section">
            <div className="section-label">03 — What I Offer</div>
            <h2 className="section-title">Services</h2>
            <div className="section-line" />
            <div className="services-grid">
                {SERVICES.map((s) => (
                    <div key={s.num} className="svc-card">
                        <div className="svc-num">{s.num}</div>
                        <div className="svc-name">{s.name}</div>
                        <div className="svc-desc">{s.desc}</div>
                        <div className="svc-tags">{s.tags.map((t) => <span key={t} className="svc-tag">{t}</span>)}</div>
                    </div>
                ))}
            </div>
            <ScrollArrow index={index} sectionRefs={sectionRefs} total={totalSections} />
        </section>
    );
}

export default ServicesSection;