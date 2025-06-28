"use client";

import Script from "next/script";

export default function Google() {
  // This runs once, right when the GSI script is loaded
  const handleGsiLoad = () => {
    if (!window.google?.accounts?.id) {
      console.error("GSI SDK not available");
      return;
    }

    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID, // Replace with your Google Client ID
      callback: (response) => {
        const userInfo = JSON.parse(atob(response.credential.split(".")[1]));
        console.log("User signed in successfully:", userInfo);
        alert(`Welcome ${userInfo.name}! Sign-in successful.`);
      },
      ux_mode: "popup",
      auto_select: false,
    });

    // show the popup (instead of rendering a button)
    window.google.accounts.id.prompt();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* 1. Load the Google Identity Services SDK on the client and call handleGsiLoad when it's ready */}
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={handleGsiLoad}
      />
    </div>
  );
}
