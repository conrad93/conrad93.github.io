import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ToastWrapper from "@/containers/ToastWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Conrad Nunes",
  description: "Personal website of Conrad Nunes, a full stack JS/TS developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastWrapper>
          {children}
        </ToastWrapper> 
      </body>
    </html>
  );
}
