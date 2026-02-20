import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pudoru Inc.",
  description: "Software made with intention.",
  openGraph: {
    title: "Pudoru Inc.",
    description: "Software made with intention. We build focused consumer apps for iOS.",
    url: "https://pudoru.com",
    siteName: "Pudoru Inc.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Pudoru Inc.",
    description: "Software made with intention.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
