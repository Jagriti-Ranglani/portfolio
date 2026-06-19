"use client";
import { useState } from "react";
import ScrollArrow from "@/components/ScrollArrow";

function ContactSection({ sRef, index, sectionRefs, totalSections }) {
	const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
	const [status, setStatus] = useState("idle"); // idle, submitting, success, error
	const [popupMsg, setPopupMsg] = useState(null);

	const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
	const submit = async (e) => {
		e.preventDefault();
		setStatus("submitting");
		setPopupMsg(null);
		
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form)
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.error || "Failed to send message");
			}

			setStatus("success");
			setPopupMsg({ type: "success", text: data.message || "Message sent successfully!" });
			setForm({ name: "", email: "", subject: "", message: "" });
		} catch (error) {
			console.error("Error submitting form:", error);
			setStatus("error");
			setPopupMsg({ type: "error", text: error.message || "Failed to send message." });
		} finally {
			setTimeout(() => {
				setStatus("idle");
				setPopupMsg(null);
			}, 5000);
		}
	};

	return (
		<section ref={sRef} id="contact" className="section">
			{popupMsg && (
				<div style={{
					position: "fixed",
					bottom: "20px",
					right: "20px",
					padding: "15px 25px",
					borderRadius: "8px",
					backgroundColor: popupMsg.type === "success" ? "#10b981" : "#ef4444",
					color: "#fff",
					boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
					zIndex: 1000,
					transition: "all 0.3s ease",
					display: "flex",
					alignItems: "center",
					gap: "10px"
				}}>
					<span style={{ fontSize: "1.2rem" }}>{popupMsg.type === "success" ? "✓" : "✕"}</span>
					{popupMsg.text}
				</div>
			)}
			<div className="section-label">06 — Let&apos;s Talk</div>
			<h2 className="section-title">Contact</h2>
			<div className="section-line" />
			<div className="contact-grid">
				<div>
					{[
						{
							icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
							label: "Location",
							val: "Raipur, Chhattisgarh, India (Remote OK)"
						},
						{
							icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>,
							label: "LinkedIn",
							val: "linkedin.com/in/jagriti-ranglani"
						},
						{
							icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
							label: "Email",
							val: "ranglanijagriti8@gmail.com"
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
						<input className="f-input" name="name" placeholder="Your Name" value={form.name} onChange={handle} required disabled={status === "submitting"} />
						<input className="f-input" name="email" type="email" placeholder="Email Address" value={form.email} onChange={handle} required disabled={status === "submitting"} />
					</div>
					<input className="f-input" name="subject" placeholder="Subject" value={form.subject} onChange={handle} style={{ display: "block" }} disabled={status === "submitting"} />
					<textarea className="f-input" name="message" placeholder="Your message..." value={form.message} onChange={handle} rows={5} required disabled={status === "submitting"} />
					<button className="f-submit" type="submit" disabled={status === "submitting"}>
						{status === "submitting" ? "Sending..." : status === "success" ? "✓ Message Sent!" : status === "error" ? "✕ Failed to Send" : "Send Message"}
					</button>
				</form>
			</div>
			<ScrollArrow index={index} sectionRefs={sectionRefs} total={totalSections} />
		</section>
	);
}

export default ContactSection