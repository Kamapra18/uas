import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

// Sans for body
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});


const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyBook Collection",
  description: "A collection of book summaries and articles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${libre.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
