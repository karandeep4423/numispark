import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const createEmailTemplate = (data) => {
  const { name, email, phone, message, city, serviceType, budget } = data;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Inquiry</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f6f9fc; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
        <table cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; margin: 0 auto; padding: 20px;">
          <tr>
            <td>
              <div style="background-color: #ffffff; border-radius: 16px; padding: 40px; margin: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <!-- Header -->
                <div style="text-align: center; margin-bottom: 30px;">
                  <h1 style="color: #2563eb; font-size: 24px; margin: 0;">New Contact Inquiry</h1>
                  <p style="color: #64748b; margin-top: 8px;">From Punjabi Lesson Website</p>
                </div>

                <!-- Contact Information -->
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                  <tr>
                    <td style="padding: 12px; background-color: #f8fafc; border-radius: 8px;">
                      <table style="width: 100%;">
                        <tr>
                          <td style="padding: 8px;">
                            <p style="margin: 0; color: #94a3b8; font-size: 14px;">Name</p>
                            <p style="margin: 4px 0 0; color: #1e293b; font-size: 16px;">${name}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px;">
                            <p style="margin: 0; color: #94a3b8; font-size: 14px;">Email</p>
                            <p style="margin: 4px 0 0; color: #1e293b; font-size: 16px;">${email}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px;">
                            <p style="margin: 0; color: #94a3b8; font-size: 14px;">Phone</p>
                            <p style="margin: 4px 0 0; color: #1e293b; font-size: 16px;">${phone}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px;">
                            <p style="margin: 0; color: #94a3b8; font-size: 14px;">City</p>
                            <p style="margin: 4px 0 0; color: #1e293b; font-size: 16px;">${city}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Project Details -->
                <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
                  <h2 style="color: #2563eb; font-size: 18px; margin: 0 0 16px;">Project Details</h2>
                  <table style="width: 100%;">
                    <tr>
                      <td style="padding: 8px 0;">
                        <p style="margin: 0; color: #94a3b8; font-size: 14px;">Service Type</p>
                        <p style="margin: 4px 0 0; color: #1e293b; font-size: 16px;">${serviceType}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0;">
                        <p style="margin: 0; color: #94a3b8; font-size: 14px;">Budget Range</p>
                        <p style="margin: 4px 0 0; color: #1e293b; font-size: 16px;">${budget}</p>
                      </td>
                    </tr>
                  </table>
                </div>

                <!-- Message -->
                <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px;">
                  <h2 style="color: #2563eb; font-size: 18px; margin: 0 0 16px;">Message</h2>
                  <p style="margin: 0; color: #1e293b; font-size: 16px; line-height: 1.5;">${message}</p>
                </div>

                <!-- Footer -->
                <div style="margin-top: 30px; text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                  <p style="margin: 0; color: #64748b; font-size: 14px;">Best regards,</p>
                  <p style="margin: 4px 0 0; color: #2563eb; font-size: 16px; font-weight: bold;">Punjabi Lesson Team</p>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};

// Send mail function
const sendMail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "lessonpunjabi@gmail.com",
      pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: '"Punjabi Lesson" <lessonpunjabi@gmail.com>',
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error("Email sending error:", err);
    throw new Error("Error sending email");
  }
};

// API route handler for POST requests
export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { email, name, phone, message, city, serviceType, budget } = body;

    // Validate required fields
    if (
      !email ||
      !name ||
      !phone ||
      !message ||
      !city ||
      !serviceType ||
      !budget
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
        },
        { status: 400 }
      );
    }

    const subject = "New Contact Inquiry - Punjabi Lesson";
    const html = createEmailTemplate({
      name,
      email,
      phone,
      message,
      city,
      serviceType,
      budget,
    });

    // Send email
    await sendMail([email, "karanhanju9696@gmail.com"], subject, html);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Mail sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
