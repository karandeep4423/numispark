'use client';

export default function DevisGratuitLayout({ children }) {
  return (
    <>
      <style jsx global>{`
        body nav,
        body footer,
        body .fixed-circle {
          display: none !important;
        }
      `}</style>
      {children}
    </>
  );
}
