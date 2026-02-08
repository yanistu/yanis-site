import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YANIS – Stratégie digitale & projets numériques",
  description:
    "Consultant en stratégie digitale & projets numériques. J’accompagne les PME en Tunisie à structurer leur présence digitale et obtenir des résultats concrets.",
  verification: {
    google: "yL_L1RtEvxF7KerTalF4ub_8sxIT6Q2i44hyUhC-rs4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto max-w-5xl px-5 py-6">{children}</main>
        <Footer />

        {/* ✅ GA4 — TOUJOURS ici, dans <body> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-79SCM188RL"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-79SCM188RL');
          `}
        </Script>
      </body>
    </html>
  );
}
