import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";

export const viewport: Viewport = {
  themeColor: "#034efc",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hdsfinance.nl/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title:
    "HDS Finance",
  description:
    "Dominate your finances with HDS Finance.",
  keywords: [
    "HDSFinance",
    "HDS Finance",
    "finance",
    "online invoice",
    "create invoice",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "HDS Finance",
    description:
      "Dominate your finances with HDS Finance.",
    url: "https://hdsfinance.nl/",
    type: "website",
    images: "/og.png",
    siteName: "HDS Finance",
  },
  twitter: {
    card: "summary_large_image",
    site: "@HDSFinance",
    creator: "@HDSFinance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#034efc" />
        <meta name="msapplication-TileColor" content="#034efc" />
        <meta name="theme-color" content="#034efc" />
      </head>
      <body className={`${GeistSans.className}`}>{children}</body>
    </html>
  );
}
