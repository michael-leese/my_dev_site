import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
    default: "Michael Leese | Full Stack Developer",
    template: "%s | Michael Leese",
  },
  description:
    "Full-stack developer delivering maintainable, production-ready web applications with a focus on clarity, reliability, and craft.",
  applicationName: "Michael Leese Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script id="theme-init" strategy="beforeInteractive">
        {`(() => {
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = stored ?? (prefersDark ? "dark" : "light");
  document.documentElement.dataset.theme = theme;
})();`}
      </Script>
      <body
        className={`${spaceGrotesk.variable} ${plexSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
