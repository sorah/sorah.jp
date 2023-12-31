//import Footer from "@/components/Footer";
//import Header from "@/components/Header";
import Header from "@/components/Header";
import { styleContainer } from "@/styles/blog/container.css";
import { theme } from "@/styles/fundamental.css";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://sorah.jp"),
  title: {
    default: "Sorah Fukumori",
    template: "%s | Sorah Fukumori",
  },
  description: "Sorah Fukumori's website",
  keywords: [
    "sorah",
    "Sorah Fukumori",
    "sora_h",
    "福森",
    "空葉",
    "福森空葉",
    "そらはー",
    "そらは",
  ],
  authors: [
    { name: "Sorah Fukumori", url: "https://sorah.jp" },
    { url: "http://www.hatena.ne.jp/sora_h" },
  ],
  creator: "Sorah Fukumori",
  publisher: "Sorah Fukumori",
  openGraph: {
    siteName: "Sorah Fukumori",
  },
};

const analyticsToken = "46d42180b13e4077853324d7d499720c";

const sourceSansThree = Source_Sans_3({
  display: "swap",
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-nextfont-source-sans-three",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSansThree.variable}`}>
      <head></head>
      <body className={theme}>
        <div className={styleContainer}>
          <Header />
          {children}
        </div>
        <Script
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${analyticsToken}"}`}
          defer
        />
      </body>
    </html>
  );
}
