import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./_components/Providers";
import { Orbitron } from "next/font/google";
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "TraderDash demo",
  description: "By Isaac Koczwara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background text-foreground dark">
      <body className={`${orbitron.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
