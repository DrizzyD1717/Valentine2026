import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Create Your Infinite Valentine Story",
    template: "%s | Aureoo", // This automatically adds "| Aureoo" to every sub-page title
  },
  description:
    "Turn your favorite memories into a beautiful, infinite-scrolling digital experience. Share a unique link with your person this Valentine's Day.",
  icons: { icon: "/lovebanner.jpg" },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Valentine Story",
    description:
      "Create a personalized digital journey for your favorite person.",
    images: ["/sitehome.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
