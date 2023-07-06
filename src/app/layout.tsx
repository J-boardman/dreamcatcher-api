import React, { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Background from "@/components/layout/Background";
import Drawer from "@/components/layout/Drawer";
import Footer from "@/components/layout/Footer";

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
