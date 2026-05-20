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
                        I'm a full-stack developer with 4+ years of hands-on experience building real-world software — billing systems, booking platforms, management dashboards, and progressive web apps across industries like logistics, healthcare, finance, and retail.
                    </p>
                    <p className="bio-text">
                        I care about writing clean, maintainable code and shipping products that solve actual problems. Whether it's a farmer searching for a plot to book or an HR manager tracking attendance across departments, I build systems that fit the workflow, not the other way around.
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
                            { icon: "⚛️", name: "Frontend", desc: "React, Tailwind CSS, Bootstrap" },
                            { icon: "🟢", name: "Backend", desc: "Laravel, PHP" },
                            { icon: "🗄️", name: "Database", desc: "MySql ORM" },
                            { icon: "☁️", name: "DevOps", desc: "Hostinger, Namecheap, GitHub" },
                        ].map((s) => (
                            <div key={s.name} className="stack-item">
                                <div className="stack-icon">{s.icon}</div>
                                <div className="stack-name">{s.name}</div>
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