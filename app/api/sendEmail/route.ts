import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  // Create a Nodemailer transporter using Namecheap SMTP settings
  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com", // or 'mail.yourdomain.com'
    port: 587,
    secure: false,
    auth: {
      user: process.env.NC_EMAIL_USER,
      pass: process.env.NC_EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.NC_EMAIL_USER, // Sender address
    to: process.env.RECIPIENT_EMAIL, // Recipient address
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error); // Improved logging
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
