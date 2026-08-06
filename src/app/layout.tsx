import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
        alt: "Sanjae Suresh — software engineer",
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
      className={inter.variable}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
