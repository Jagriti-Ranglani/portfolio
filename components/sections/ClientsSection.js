"use client";
import ScrollArrow from "@/components/ScrollArrow";

const CLIENTS = ["Stripe", "N26 Bank", "Shopify", "Contentful", "Vercel", "Linear", "Notion", "Figma"];

function ClientsSection({ sRef, index, sectionRefs, totalSections }) {
    return (
        <section ref={sRef} id="clients" className="section">
            <div className="section-label">05 — Who I've Worked With</div>
            <h2 className="section-title">Clients</h2>
            <div className="section-line" />
            <div className="clients-grid">
                {CLIENTS.map((c) => <div key={c} className="client-item">{c}</div>)}
            </div>
            <div className="testimonial">
                <p className="t-text">
                    Alex rewrote our entire checkout flow in 3 weeks and reduced cart abandonment by 22%.
                    The code was so clean our whole team was complimenting it during review.
                    He operates in a different league.
                </p>
                <div className="t-author">— Mira Haupt, <span>CTO at Arcane Commerce</span></div>
            </div>
            <ScrollArrow index={index} sectionRefs={sectionRefs} total={totalSections} />
        </section>
    );
}

export default ClientsSection;