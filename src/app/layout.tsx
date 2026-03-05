import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hush - Smart Notification Management for Android",
  description:
    "Silence the noise, keep what matters. Hush intelligently filters, categorizes, and manages your Android notifications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
