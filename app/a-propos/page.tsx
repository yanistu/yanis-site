import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | YANIS",
  description:
    "Consultant en stratégie digitale & projets numériques. Approche business, priorisation et résultats concrets pour PME en Tunisie.",
};

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20j%E2%80%99obtiens%20des%20clients%20via%20:%20(Facebook%20%2F%20Instagram%20%2F%20site%20%2F%20bouche-%C3%A0-oreille%20%2F%20autre)%0A4)%20Budget%20marketing%20estim%C3%A9%20:%20...%0A5)%20Urgence%20:%20(cette%20semaine%20%2F%20ce%20mois%20%2F%20ce%20trimestre)%0A%0ALien%20site%20ou%20page%20(si%20existe)%20:%20...";

export default function AproposPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h1 style={{ margin: 0, fontSize: 34, lineHeight: 1.15 }}>
          À propos
        </h1>
        <p style={{ margin: 0, fontSize: 18, opacity: 0.9, maxWidth: 950 }}>
          Je suis <strong>YANIS</strong>, consultant en{" "}
          <strong>stratégie digitale & projets numériques</strong>. J’aide les PME
          en Tunisie à clarifier leurs décisions digitales, prioriser les actions
          utiles et obtenir des résultats concrets.
        </p>
      </section>

      <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h2 style={{ margin: 0 }}>Mon approche</h2>
        <p style={{ margin: 0, opacity: 0.9, maxWidth: 980 }}>
          Je pars toujours du <strong>business avant les outils</strong> :
          objectifs, clients, budget, délais. Ensuite, je définis une stratégie
          digitale réaliste et actionnable, adaptée au contexte tunisien.
        </p>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>Clarté : un objectif principal, un plan simple</li>
          <li>Priorités : quick wins + actions structurantes</li>
          <li>Mesure : KPI concrets et suivi</li>
          <li>Exécution possible : collectif agile mobilisable si besoin</li>
        </ul>
      </section>

      <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h2 style={{ margin: 0 }}>Crédibilité (en bref)</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>+10 ans d’expérience dans des environnements structurés</li>
          <li>Pilotage de projets numériques et coordination des parties prenantes</li>
          <li>Habitude de cadrer, documenter et livrer avec méthode</li>
          <li>Double culture : projets publics & besoins PME (pragmatique)</li>
        </ul>
      </section>

      <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h2 style={{ margin: 0 }}>Cas réel – Idéal Informatique</h2>
        <div style={{ border: "1px solid #eee", borderRadius: 14, padding: 16 }}>
          <p style={{ margin: 0, opacity: 0.9 }}>
            Accompagnement stratégique digital : diagnostic, positionnement,
            recommandations concrètes et feuille de route exploitable
            immédiatement pour développer la présence digitale B2B.
          </p>
        </div>
      </section>

      <section
        style={{
          border: "1px solid #eee",
          borderRadius: 16,
          padding: 18,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <strong>Vous voulez savoir quoi faire en premier ?</strong>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Envoyez-moi ces 5 infos (activité, objectif, canal actuel, budget,
          urgence) et je vous réponds avec les premières priorités.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          style={{
            alignSelf: "flex-start",
            padding: "12px 16px",
            borderRadius: 12,
            border: "1px solid #111",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Diagnostic gratuit sur WhatsApp
        </a>
      </section>
    </div>
  );
}
