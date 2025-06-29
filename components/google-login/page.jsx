"use client";

import Script from "next/script";

export default function Google() {

  // Send user details via email
  const sendUserDetailsEmail = async (userInfo) => {
    try {
      const response = await fetch("https://numispark.com/api/google-sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userInfo.name,
          email: userInfo.email,
          picture: userInfo.picture,
          sub: userInfo.sub, // Google user ID
          signInTime: new Date().toISOString(),
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Failed to send user details");
      }
    } catch (error) {
      throw new Error(`Failed to send user details email: ${error.message}`);
    }
  };

  // This runs once, right when the GSI script is loaded
  const handleGsiLoad = () => {
    if (!window.google?.accounts?.id) {
      return;
    }

    // Don't initialize if user is already signed in
    if (localStorage.getItem("google_signed_in") === "true") {
      return;
    }

    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: async (response) => {
        try {
          const userInfo = JSON.parse(atob(response.credential.split(".")[1]));

          // Send user details via email
          await sendUserDetailsEmail(userInfo);

          // Mark user as signed in
          localStorage.setItem("google_signed_in", "true");
          localStorage.setItem("user_info", JSON.stringify(userInfo));

        } catch (error) {
          throw new Error(`Failed to process Google sign-in: ${error.message}`);
        }
      },
      ux_mode: "popup",
      auto_select: true, // Changed to false to prevent auto-selection for better UX
    });

    // Show the popup only if user hasn't signed in before
    window.google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
      }
    });
  };

  return (
    <div>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={handleGsiLoad}
      />
    </div>
  );
}
