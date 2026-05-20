"use client";
import CVButton from "@/components/CVButton";
import ScrollArrow from "@/components/ScrollArrow";

function HomeSection({ sRef, index, sectionRefs, totalSections }) {
	return (
		<section ref={sRef} id="home" className="hero" style={{ borderBottom: "1px solid var(--border)" }}>
			{/* Decorative left panel */}
			<div className="hero-visual">
				<div className="hero-visual-bg">
					<div className="hero-orb-1" />
					<div className="hero-orb-2" />
					<div className="hero-grid-lines" />
				</div>
				<div className="hero-code">
					<div><span className="kw">const</span> developer = {"{"}</div>
					<div>&nbsp;&nbsp;name: <span className="str">"JagritiRanglani"</span>,</div>
					<div>&nbsp;&nbsp;role: <span className="str">"Full Stack Dev"</span>,</div>
					<div>&nbsp;&nbsp;<span className="fn">stack</span>: [<span className="str">"React"</span>, <span className="str">"Laravel"</span>, <span className="str">"MySql"</span>],</div>
					<div>&nbsp;&nbsp;yearsExp: <span className="kw">4</span>,</div>
					<div>&nbsp;&nbsp;<span className="fn">available</span>: <span className="kw">true</span></div>
					<div>{"}"}</div>
					<div style={{ marginTop: 8 }}><span className="cmt">// open to remote &amp; hybrid</span></div>
				</div>
				<div className="hero-status">
					<span className="status-dot" />
					Available for hire
				</div>
			</div>

			{/* Right content */}
			<div className="hero-content">
				<div className="hero-greeting">Full Stack Developer</div>
				<h1 className="hero-name">
					Jagriti
					<span className="hero-name-accent">Ranglani.</span>
				</h1>
				<p className="hero-role">Laravel · React · MySql · Python · Php</p>
				<p className="hero-desc">
					I build web apps, SaaS platforms, and business software that actually get used — from e-commerce storefronts to enterprise-grade HRMS systems.
				</p>
				<div className="hero-stats">
					<div className="stat">
						<span className="stat-n">4<em>+</em></span>
						<span className="stat-l">Years Exp.</span>
					</div>
					<div className="stat">
						<span className="stat-n">20<em>+</em></span>
						<span className="stat-l">Projects</span>
					</div>
					<div className="stat">
						<span className="stat-n">10<em>+</em></span>
						<span className="stat-l">Clients</span>
					</div>
				</div>
				<CVButton />
				<div className="hero-arrow-wrap">
					<ScrollArrow index={index} sectionRefs={sectionRefs} total={totalSections} />
				</div>
			</div>
		</section>
	);
}

export default HomeSection;