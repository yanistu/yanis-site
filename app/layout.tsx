import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "YANIS – Stratégie digitale & projets numériques",
  description:
    "Consultant en stratégie digitale & projets numériques. J’accompagne les PME en Tunisie à structurer leur présence digitale et obtenir des résultats concrets.",
    verification: {
    google: "yL_L1RtEvxF7KerTalF4ub_8sxIT6Q2i44hyUhC-rs4",},
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
          className={inter.className}
          style={{
            margin: 0,
            color: "#111",
            background: "#fff",
            ["--accent" as any]: "#6D28D9",      // violet premium
            ["--accentSoft" as any]: "#F3E8FF",  // violet très léger
          }}
        >

        <Header />
        <main style={{ padding: "56px 0" }}>{children}</main>
          

        <Footer />
      </body>
    </html>
  );
}
