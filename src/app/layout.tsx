import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fuza AI",
  description: "THE FUTURE OF ",
  icons: {
    icon: [
      { url: "/FuzaFavicon.png", sizes: "32x32" },
      { url: "/FuzaFavicon.png", sizes: "192x192" },
      { url: "/FuzaFavicon.png", sizes: "512x512" },
    ],
    shortcut: ["/FuzaFavicon.png"],
    apple: [
      { url: "/FuzaFavicon.png", sizes: "180x180" },
    ],
  },
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
        {children}
      </body>
    </html>
  );
}
