import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sanjaesuresh.com"),
  title: "Sanjae Suresh · Software Engineer",
  description:
    "Software engineer at Bloomberg, CS grad from Wilfrid Laurier. Backend systems, distributed infrastructure, and photography.",
  openGraph: {
    title: "Sanjae Suresh · Software Engineer",
    description:
      "Software engineer at Bloomberg. Backend systems, distributed infrastructure, and photography.",
    url: "https://sanjaesuresh.com",
    siteName: "Sanjae Suresh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjae Suresh · Software Engineer",
    description:
      "Software engineer at Bloomberg. Backend systems, distributed infrastructure, and photography.",
  },
  alternates: {
    canonical: "https://sanjaesuresh.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
