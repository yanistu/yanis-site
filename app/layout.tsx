import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "YANIS – Stratégie digitale & projets numériques",
  description:
    "Consultant en stratégie digitale & projets numériques. J’accompagne les PME en Tunisie à structurer leur présence digitale et obtenir des résultats concrets.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, Arial, sans-serif" }}>
        <Header />
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 20px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
