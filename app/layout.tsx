import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#171719",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://liftit.fit"),
  title: "LiftIt — Track Your Lifts. Beat your best.",
  description:
    "A high-performance, mobile-first workout tracker with ghost workout system for progressive overload. Track sets, reps, and volume. Beat your previous performance every session.",
  keywords: [
    "workout tracker",
    "fitness",
    "progressive overload",
    "mobile",
    "weightlifting",
    "strength training",
    "gym",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://liftit.fit",
    siteName: "LiftIt",
    title: "LiftIt — Track Your Lifts. Beat your best.",
    description:
      "A high-performance, mobile-first workout tracker with ghost workout system for progressive overload.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiftIt — Track Your Lifts. Beat your best.",
    description:
      "A high-performance, mobile-first workout tracker with ghost workout system for progressive overload.",
  },
  icons: {
    icon: "/icon-192x192.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
