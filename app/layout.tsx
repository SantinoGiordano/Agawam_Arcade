import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
// import "@fontsource/press-start-2p";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brewcade Arcade and Bar",
  description: "Brewcades is a craft beer bar and arcade located in the heart of the city. We offer a wide selection of craft beers, wines, and classic arcade games for all ages. Whether you're looking for a fun night out with friends or a family-friendly environment, Brewcade has something for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<Footer/></body>
    </html>
  );
}
