import type { Metadata } from "next";
import { Geist, Geist_Mono, Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { ClerkProvider } from "@clerk/nextjs";

const kumbhSans = Kumbh_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Kumbh_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consensys",
  description: "Create or join a consensystem with your friends and family",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${kumbhSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
