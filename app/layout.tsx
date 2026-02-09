import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yanis-lac.vercel.app"),
  title: {
    default: "YANIS – Stratégie digitale & projets numériques (Tunisie)",
    template: "%s | YANIS",
  },
  description:
    "Consultant en stratégie digitale & projets numériques. Diagnostic, priorisation et plan d’action 90 jours pour PME en Tunisie.",
  applicationName: "YANIS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://yanis-lac.vercel.app",
    siteName: "YANIS",
    title: "YANIS – Stratégie digitale & projets numériques (Tunisie)",
    description:
      "Diagnostic, priorisation et plan d’action 90 jours pour PME en Tunisie. Une approche claire, mesurable et orientée résultats.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "YANIS – Stratégie digitale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YANIS – Stratégie digitale & projets numériques (Tunisie)",
    description:
      "Diagnostic, priorisation et plan d’action 90 jours pour PME en Tunisie.",
    images: ["/og.png"],
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
        <main className="py-10">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-Z9SCM188RL" />

      </body>
    </html>
  );
}
