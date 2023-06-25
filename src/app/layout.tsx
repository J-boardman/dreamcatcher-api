import React, { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Drawer from "@/components/Drawer";

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
      <body className={`${inter.className} text-white `}>
        <Background />
        <Drawer>
          {children}
          <Footer />
        </Drawer>
      </body>
    </html>
  );
}
