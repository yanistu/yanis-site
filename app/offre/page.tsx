import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offre – Accompagnement stratégique digital | YANIS",
  description:
    "Diagnostic, stratégie, plan d’action priorisé (90 jours) et KPI. Accompagnement pragmatique pour PME en Tunisie.",
};

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20j%E2%80%99obtiens%20des%20clients%20via%20:%20(Facebook%20%2F%20Instagram%20%2F%20site%20%2F%20bouche-%C3%A0-oreille%20%2F%20autre)%0A4)%20Budget%20marketing%20estim%C3%A9%20:%20...%0A5)%20Urgence%20:%20(cette%20semaine%20%2F%20ce%20mois%20%2F%20ce%20trimestre)%0A%0ALien%20site%20ou%20page%20(si%20existe)%20:%20...";

export default function OffrePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h1 style={{ margin: 0, fontSize: 34, lineHeight: 1.15 }}>
          Accompagnement stratégique digital (PME)
        </h1>
        <p style={{ margin: 0, fontSize: 18, opacity: 0.9, maxWidth: 950 }}>
          Je vous aide à prendre de meilleures décisions digitales : positionnement,
          priorités, plan d’action et KPI. L’objectif : obtenir des résultats
          concrets sans vous disperser.
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
            marginTop: 6,
          }}
        >
          Demander un diagnostic gratuit
        </a>
      </section>

      <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h2 style={{ margin: 0 }}>Problèmes que je règle souvent</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>“On est invisible en ligne, on dépend du bouche-à-oreille.”</li>
          <li>“On a un site / une page Facebook, mais ça ne génère pas de demandes.”</li>
          <li>“On ne sait pas quoi prioriser (site, réseaux, pub, SEO…).”</li>
          <li>“On a essayé des actions, mais sans méthode ni résultats mesurables.”</li>
        </ul>
      </section>

      <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h2 style={{ margin: 0 }}>Ce que je fais concrètement</h2>
        <div style={{ border: "1px solid #eee", borderRadius: 14, padding: 16 }}>
          <strong>1) Diagnostic</strong>
          <p style={{ margin: "8px 0 0 0", opacity: 0.9 }}>
            Analyse de votre situation : visibilité, message, concurrence, parcours
            client, canaux actuels.
          </p>
        </div>

        <div style={{ border: "1px solid #eee", borderRadius: 14, padding: 16 }}>
          <strong>2) Stratégie & priorisation</strong>
          <p style={{ margin: "8px 0 0 0", opacity: 0.9 }}>
            Définition d’un plan simple et réaliste : objectifs, cibles, messages,
            leviers, quick wins et actions structurantes.
          </p>
        </div>

        <div style={{ border: "1px solid #eee", borderRadius: 14, padding: 16 }}>
          <strong>3) Accompagnement & mise en œuvre (si besoin)</strong>
          <p style={{ margin: "8px 0 0 0", opacity: 0.9 }}>
            Je pilote la mission et je peux mobiliser un collectif agile (web, SEO,
            contenu, technique) selon vos besoins.
          </p>
        </div>
      </section>

      <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h2 style={{ margin: 0 }}>Livrables</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>Diagnostic synthétique (points forts / faiblesses / opportunités)</li>
          <li>Plan d’action priorisé (90 jours) + recommandations concrètes</li>
          <li>Définition des KPI (visibilité, demandes, conversion)</li>
          <li>Feuille de route claire (qui fait quoi, dans quel ordre)</li>
        </ul>
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
        <strong>Vous voulez un plan clair pour les 90 prochains jours ?</strong>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Envoyez-moi ces 5 infos (activité, objectif, canal actuel, budget,
          urgence) et je vous réponds rapidement.
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
