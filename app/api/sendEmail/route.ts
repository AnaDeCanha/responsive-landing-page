import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  // Simulate email sending process
  console.log("Simulating email sending...");
  console.log("Email details:", {
    from: "simulated@domain.com",
    to: "recipient@domain.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  try {
    // Add delay to simulate loading state
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3-second delay

    // Simulate successful email sending
    console.log("Email sent successfully (simulation).\n");
    return NextResponse.json(
      { message: "Email sent successfully (simulation)" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Simulated email sending failed:", error);
    return NextResponse.json(
      {
        error: "Simulated email sending failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
