"use client";
import { useState } from "react";
import ScrollArrow from "@/components/ScrollArrow";

function ContactSection({ sRef, index, sectionRefs, totalSections }) {
	const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
	const [sent, setSent] = useState(false);

	const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
	const submit = (e) => {
		e.preventDefault();
		setSent(true);
		setForm({ name: "", email: "", subject: "", message: "" });
		setTimeout(() => setSent(false), 4000);
	};

	return (
		<section ref={sRef} id="contact" className="section">
			<div className="section-label">06 — Let's Talk</div>
			<h2 className="section-title">Contact</h2>
			<div className="section-line" />
			<div className="contact-grid">
				<div>
					{[
						{ icon: "📍", label: "Location", val: "Raipur, Chhattisgarh, India (Remote OK)" },
						{ icon: "✉️", label: "Email", val: "ranglanijagriti8@gmail.com" },
						{ icon: "📱", label: "Phone", val: "+91 98765 43210" },
						{ icon: "🌐", label: "Website", val: "jagriti.dev" },
					].map((c) => (
						<div key={c.label} className="contact-info-item">
							<div className="c-icon">{c.icon}</div>
							<div>
								<div className="c-lbl">{c.label}</div>
								<div className="c-val">{c.val}</div>
							</div>
						</div>
					))}
				</div>
				<form onSubmit={submit}>
					<div className="form-row">
						<input className="f-input" name="name" placeholder="Your Name" value={form.name} onChange={handle} required />
						<input className="f-input" name="email" type="email" placeholder="Email Address" value={form.email} onChange={handle} required />
					</div>
					<input className="f-input" name="subject" placeholder="Subject" value={form.subject} onChange={handle} style={{ display: "block" }} />
					<textarea className="f-input" name="message" placeholder="Your message..." value={form.message} onChange={handle} rows={5} required />
					<button className="f-submit" type="submit">
						{sent ? "✓ Message Sent!" : "Send Message"}
					</button>
				</form>
			</div>
			<ScrollArrow index={index} sectionRefs={sectionRefs} total={totalSections} />
		</section>
	);
}

export default ContactSection