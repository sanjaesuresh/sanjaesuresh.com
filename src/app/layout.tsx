import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// human voice: variable font, weight axis 300-700 (no `weight` array, so the
// full axis loads instead of pinning to a static cut).
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

// machine voice: labels, metadata, nav, config. static weights only.
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
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
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sanjae Suresh · software engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjae Suresh · Software Engineer",
    description:
      "Software engineer at Bloomberg. Backend systems, distributed infrastructure, and photography.",
    images: ["/og.png"],
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
