import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
	try {
		const { name, email, subject, message } = await req.json();

		if (!name || !email || !message) {
			return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
		}

		// Configure Nodemailer transporter using environment variables
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST || "smtp.gmail.com",
			port: process.env.SMTP_PORT || 587,
			secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		const mailOptions = {
			from: process.env.SMTP_USER, // Sender address (must match auth user in most SMTPs)
			to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Receiver address
			replyTo: email,
			subject: `Portfolio Contact: ${subject || "No Subject"} - from ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
			html: `
				<h3>New Contact Message from Portfolio</h3>
				<p><strong>Name:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Subject:</strong> ${subject || "No Subject"}</p>
				<p><strong>Message:</strong></p>
				<p>${message.replace(/\n/g, '<br>')}</p>
			`,
		};

		await transporter.sendMail(mailOptions);

		return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
	}
}
