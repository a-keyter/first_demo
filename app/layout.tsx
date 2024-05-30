import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

import {
  ClerkProvider,
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS, Clerk, GenAI",
  description: "Alex's First AI Course for LCR Developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className + " h-full"}>
        <NavBar/>
        {children}
        </body>
    </html>
    </ClerkProvider>

  );
}
