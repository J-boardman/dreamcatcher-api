import React, { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Background from "@/components/layout/Background";
import Drawer from "@/components/layout/Drawer";
import Footer from "@/components/layout/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Header from "@/components/layout/Header";

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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#aa73f7",
        },
      }}
    >
      <html lang="en">
        <body
          className={`${inter.className} mx-auto max-w-4xl px-4 text-white`}
        >
          <Background />
          <section className="grid h-[100svh] grid-rows-[min-content,_1fr,_min-content]">
            <Header />
            {children}
            <Footer />
          </section>
        </body>
      </html>
    </ClerkProvider>
  );
}
