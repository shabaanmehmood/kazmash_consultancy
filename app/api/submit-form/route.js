import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      fullName,
      email,
      phone,
      studyLevel,
      areaOfInterest,
      questionNotes,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `"Website Contact" ${process.env.EMAIL}`,
      to: process.env.EMAIL,
      subject: "New Consultation Form Submission",
      html: `
        <h2>New Message from Website</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Study Level:</strong> ${studyLevel}</p>
        <p><strong>Area of Interest:</strong> ${areaOfInterest}</p>
        <p><strong>Questions/Notes:</strong> ${questionNotes}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("SMTP Debug:", {
      errorCode: error.code,
      command: error.command,
      stack: error.stack,
    });

    let userMessage = "Message submission failed. Please try again later.";

    if (error.code === "ETIMEDOUT") {
      userMessage =
        "Our email server is currently unreachable. Please contact support if this persists.";
    }

    return new Response(
      JSON.stringify({
        message: userMessage,
        reference: `ERR-${Date.now()}`,
      }),
      { status: 500 }
    );
  }
}
