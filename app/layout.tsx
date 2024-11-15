import type { Metadata } from "next";
import {Inter as FontSans} from 'next/font/google'
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: "LiveDocs",
  description: "A live document collaboration application created with NextJs, Clerk for authentication, liveblock for live updates, and sentry for monitoring the application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
