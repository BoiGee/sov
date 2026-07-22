import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Libre_Caslon_Display } from "next/font/google";
import "./globals.css";

const sansFont = IBM_Plex_Sans({
  variable: "--font-sans-family",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const monoFont = IBM_Plex_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const displayFont = Libre_Caslon_Display({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Sterling Vance LLP",
    template: "%s | Sterling Vance LLP",
  },
  description:
    "Sterling Vance LLP is a general-practice law firm serving clients across family law, business & corporate, personal injury, real estate, estate planning, and criminal defense.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${monoFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
