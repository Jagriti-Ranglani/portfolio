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
			<div className="section-label">06 — Let&apos;s Talk</div>
			<h2 className="section-title">Contact</h2>
			<div className="section-line" />
			<div className="contact-grid">
				<div>
					{[
						{ 
							icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>, 
							label: "Location", 
							val: "Raipur, Chhattisgarh, India (Remote OK)" 
						},
						{ 
							icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, 
							label: "Email", 
							val: "ranglanijagriti8@gmail.com" 
						},
						{ 
							icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, 
							label: "Phone", 
							val: "+91 98765 43210" 
						},
						{ 
							icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>, 
							label: "Website", 
							val: "jagriti.dev" 
						},
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