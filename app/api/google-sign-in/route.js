import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create email template for Google Sign-In
const createGoogleSignInEmailTemplate = (userDetails) => {
  const { name, email, picture, sub, signInTime } = userDetails;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Google Sign-In - NumiSpark</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .container {
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 2px solid #4285f4;
            }
            .header h1 {
                color: #4285f4;
                margin: 0;
                font-size: 28px;
            }
            .user-info {
                background: #f8f9fa;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #4285f4;
            }
            .user-info h2 {
                color: #333;
                margin-top: 0;
                margin-bottom: 15px;
            }
            .info-row {
                display: flex;
                margin: 10px 0;
                padding: 8px 0;
                border-bottom: 1px solid #e9ecef;
            }
            .info-row:last-child {
                border-bottom: none;
            }
            .info-label {
                font-weight: bold;
                color: #555;
                min-width: 120px;
            }
            .info-value {
                color: #333;
                flex: 1;
            }
            .profile-pic {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                border: 2px solid #4285f4;
                margin-right: 15px;
            }
            .user-header {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
            }
            .timestamp {
                background: #e3f2fd;
                padding: 10px;
                border-radius: 5px;
                text-align: center;
                color: #1976d2;
                font-weight: bold;
                margin-top: 20px;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e9ecef;
                color: #666;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🔐 New Google Sign-In</h1>
                <p>A user has signed in to NumiSpark using Google</p>
            </div>
            
            <div class="user-info">
                <div class="user-header">
                    ${picture ? `<img src="${picture}" alt="${name}" class="profile-pic">` : ''}
                    <div>
                        <h2>User Details</h2>
                    </div>
                </div>
                
                <div class="info-row">
                    <span class="info-label">Name:</span>
                    <span class="info-value">${name}</span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span class="info-value">${email}</span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">Google ID:</span>
                    <span class="info-value">${sub}</span>
                </div>
                
                <div class="info-row">
                    <span class="info-label">Profile Picture:</span>
                    <span class="info-value">${picture ? `<a href="${picture}" target="_blank">View Image</a>` : 'Not provided'}</span>
                </div>
            </div>
            
            <div class="timestamp">
                Sign-in Time: ${new Date(signInTime).toLocaleString()}
            </div>
            
            <div class="footer">
                <p>This is an automated notification from NumiSpark Google Sign-In system.</p>
                <p>© ${new Date().getFullYear()} NumiSpark. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Send mail function
const sendMail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
      user: "contact@numispark.com",
      pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD, // Consider using server-side env var
    },
  });

  const mailOptions = {
    from: '"NumiSpark" <contact@numispark.com>',
    to,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error(`Error sending email: ${error.message}`);
  }
};

// API route handler for POST requests
export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, picture, sub, signInTime } = body;

    // Validate required fields
    if (!name || !email || !sub) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields (name, email, sub)",
        },
        { status: 400 }
      );
    }

    const subject = `New Google Sign-In: ${name} - NumiSpark`;
    const html = createGoogleSignInEmailTemplate({
      name,
      email,
      picture,
      sub,
      signInTime,
    });

    // Send email to your notification addresses
    await sendMail(
      "numisparkk@gmail.com",
      subject,
      html
    );

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Google Sign-In notification sent successfully",
        user: {
          name,
          email,
          signInTime,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error:', error);
    
    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process Google Sign-In notification",
        error: error.message,
      },
      { status: 500 }
    );
  }
}