import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Robot Simulator & Architect | Smart Robotics Platform',
  description:
    'A next-generation robot simulator platform. Scroll to simulate robot performance across Mars, Deep Sea, and Factory environments. Build your optimal robot with our intelligent component advisor.',
  keywords: ['robotics', 'simulator', 'robot builder', 'component advisor', 'Mars', 'Deep Sea'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased`}
        style={{ background: '#0A0F1A' }}
      >
        {children}
      </body>
    </html>
  );
}
