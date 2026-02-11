import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Michael Leese | Full Stack Developer & Governance-Focused Delivery",
    template: "%s | Michael Leese",
  },
  description:
    "Full-stack developer focused on governance-first delivery, reproducible builds, and reliable software systems. I build maintainable, production-ready applications with an emphasis on clarity, traceability, and release discipline.",
  applicationName: "Michael Leese Portfolio",
  keywords: [
    "Michael Leese",
    "Full Stack Developer",
    "Governance-first delivery",
    "Platform Engineering",
    "Deterministic builds",
    "Audit-ready systems",
    "Next.js",
    "TypeScript",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${plexSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
