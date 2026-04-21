import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tai Wong | Software Engineer",
  description: "Software engineer building thoughtful, user-centered digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <a href="#content" className="skip-to-content">
          Skip to content
        </a>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
