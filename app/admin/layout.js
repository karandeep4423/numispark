export const metadata = {
  title: 'Admin Dashboard - Numispark Blog CMS',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({ children }) {
  return <div className="min-h-screen bg-gray-50">{children}</div>;
}

