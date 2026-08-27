import type { Metadata } from "next";
import { Libre_Franklin, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { logos } from "@/content/logos";
import { site } from "@/content/site";
import "./globals.css";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre-franklin",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.shortName} · ${site.name}`,
    template: `%s · ${site.shortName}`,
  },
  description: `${site.tagline}. ${site.theme}. ${site.dateLabel}, ${site.venueShort}.`,
  icons: {
    icon: logos.medallionWhite,
    apple: logos.medallionWhite,
  },
  openGraph: {
    images: [
      {
        url: logos.wordmarkWhite,
        width: 1600,
        height: 1600,
        alt: logos.alt,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${libreFranklin.variable} ${plusJakarta.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
