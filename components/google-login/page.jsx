// "use client";

// import Script from "next/script";
// export default function Google() {
//   // This runs once, right when the GSI script is loaded
//   const handleGsiLoad = () => {
//     if (!window.google?.accounts?.id) {
//       console.error("GSI SDK not available");
//       return;
//     }

//     window.google.accounts.id.initialize({
//       client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID, // Replace with your Google Client ID
//       callback: (response) => {
//         const userInfo = JSON.parse(atob(response.credential.split(".")[1]));
//         console.log("User signed in successfully:", userInfo);
//         alert(`Welcome ${userInfo.name}! Sign-in successful.`);
//       },
//       ux_mode: "popup",
//       auto_select: true,
// });

//     // show the popup (instead of rendering a button)
//     window.google.accounts.id.prompt();
//   };

//   return (
//     <div>
//       <Script
//         src="https://accounts.google.com/gsi/client"
//         strategy="afterInteractive"
//         onLoad={handleGsiLoad}
//       />
//     </div>
//   );
// }


"use client";

import Script from "next/script";
import { useState, useEffect } from "react";

export default function Google() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Check if user has already signed in
  useEffect(() => {
    const signedInStatus = localStorage.getItem('google_signed_in');
    if (signedInStatus === 'true') {
      setIsSignedIn(true);
    }
  }, []);

  // Send user details via email
  const sendUserDetailsEmail = async (userInfo) => {
    try {
      const response = await fetch('https://numispark.com/api/google-sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
      if (result.success) {
        console.log('User details sent via email successfully');
      } else {
        console.error('Failed to send email:', result.message);
      }
    } catch (error) {
      console.error('Error sending user details email:', error);
    }
  };

  // This runs once, right when the GSI script is loaded
  const handleGsiLoad = () => {
    if (!window.google?.accounts?.id) {
      console.error("GSI SDK not available");
      return;
    }

    // Don't initialize if user is already signed in
    if (isSignedIn) {
      console.log("User already signed in, skipping Google Sign-In prompt");
      return;
    }

    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: async (response) => {
        try {
          const userInfo = JSON.parse(atob(response.credential.split(".")[1]));
          console.log("User signed in successfully:", userInfo);
          
          // Send user details via email
          await sendUserDetailsEmail(userInfo);
          
          // Mark user as signed in
          localStorage.setItem('google_signed_in', 'true');
          localStorage.setItem('user_info', JSON.stringify(userInfo));
          setIsSignedIn(true);
          
          alert(`Welcome ${userInfo.name}! Sign-in successful. Details sent via email.`);
        } catch (error) {
          console.error('Error processing sign-in:', error);
          alert('Sign-in successful, but there was an error processing your details.');
        }
      },
      ux_mode: "popup",
      auto_select: true, // Changed to false to prevent auto-selection for better UX
    });

    // Show the popup only if user hasn't signed in before
    window.google.accounts.id.prompt((notification) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        console.log("Google Sign-In prompt was not displayed or was skipped");
      }
    });
  };

  // Sign out function
  // const handleSignOut = () => {
  //   localStorage.removeItem('google_signed_in');
  //   localStorage.removeItem('user_info');
  //   setIsSignedIn(false);
    
  //   // Revoke Google tokens
  //   if (window.google?.accounts?.id) {
  //     window.google.accounts.id.disableAutoSelect();
  //   }
    
  //   alert('You have been signed out successfully.');
  // };

  // Get stored user info
  const getUserInfo = () => {
    const userInfo = localStorage.getItem('user_info');
    return userInfo ? JSON.parse(userInfo) : null;
  };

  const userInfo = getUserInfo();

  return (
    <div>
      {!isSignedIn ? (
        <div>
          <Script
            src="https://accounts.google.com/gsi/client"
            strategy="afterInteractive"
            onLoad={handleGsiLoad}
          />
        </div>
      ) : (
        null
      )}
    </div>
  );
}
