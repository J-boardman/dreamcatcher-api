import React, { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dreamcatcher",
  description:
    "A dream interpretation and storytelling service, where the mysterious realm of dreams comes alive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white`}>
          <Background />
          <main className="max-w-4xl mx-auto px-4 h-screen grid grid-rows-[min-content,_1fr,_min-content]">
            <Header />
            {children}
            <Footer />
          </main>
        </body>
    </html>
  );
}
