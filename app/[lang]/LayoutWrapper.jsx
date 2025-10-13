'use client';
import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import AnimatedCircle from "@/components/AnimatedCircle";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Check if the current path is a landing page (devis-gratuit)
  const isLandingPage = pathname?.includes('/devis-gratuit');

  return (
    <>
      {!isLandingPage && <Navbar />}
      {children}
      {!isLandingPage && <Footer />}
      {!isLandingPage && (
        <div className="fixed-circle">
          <AnimatedCircle />
        </div>
      )}
    </>
  );
}
