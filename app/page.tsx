import Link from "next/link";
import Button from "../components/Button";


const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20j%E2%80%99obtiens%20des%20clients%20via%20:%20(Facebook%20%2F%20Instagram%20%2F%20site%20%2F%20bouche-%C3%A0-oreille%20%2F%20autre)%0A4)%20Budget%20marketing%20estim%C3%A9%20:%20...%0A5)%20Urgence%20:%20(cette%20semaine%20%2F%20ce%20mois%20%2F%20ce%20trimestre)%0A%0ALien%20site%20ou%20page%20(si%20existe)%20:%20...";

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {/* HERO */}
      <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <p style={{ margin: 0, opacity: 0.85, fontWeight: 600 }}>
          Consultant en stratégie digitale & projets numériques
        </p>

        <h1 style={{ margin: 0, fontSize: 40, lineHeight: 1.1 }}>
          J’aide les PME en Tunisie à transformer le digital en résultats business
        </h1>

        <p style={{ margin: 0, fontSize: 18, opacity: 0.9, maxWidth: 900 }}>
          Diagnostic, priorisation et feuille de route claire pour gagner en
          visibilité, crédibilité et demandes qualifiées — sans dépenses inutiles.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid #111",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            <Button href={WHATSAPP_URL}>Demander un diagnostic gratuit</Button>
          </a>

          <Button href="/offre" variant="secondary">
            Voir l’offre
          </Button>
        </div>
      </section>

      {/* POUR QUI */}
      <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h2 style={{ margin: 0 }}>Pour qui</h2>
        <p style={{ margin: 0, maxWidth: 950, opacity: 0.9 }}>
          J’accompagne des PME et organisations qui veulent structurer ou améliorer
          leur présence digitale, notamment dans ces secteurs :
        </p>

        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>Services B2B & cabinets (comptables, bureaux d’études, conseil)</li>
          <li>Commerce, distribution & PME industrielles</li>
          <li>Formation, santé & services spécialisés</li>
          <li>Immobilier & services premium</li>
          <li>Sociétés IT, startups & intégrateurs</li>
        </ul>
      </section>

      {/* CE QUE TU OBTIENS */}
      <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h2 style={{ margin: 0 }}>Ce que vous obtenez</h2>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
          <li>Un diagnostic clair de votre situation digitale</li>
          <li>Une stratégie simple, réaliste et actionnable</li>
          <li>Un plan d’action priorisé (quick wins + actions structurantes)</li>
          <li>Des KPI concrets pour mesurer les progrès</li>
        </ul>
      </section>

      {/* PREUVE */}
      <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h2 style={{ margin: 0 }}>Cas réel</h2>
        <div style={{ border: "1px solid #eee", borderRadius: 14, padding: 16 }}>
          <strong>Idéal Informatique (PME IT)</strong>
          <p style={{ margin: "8px 0 0 0", opacity: 0.9 }}>
            Accompagnement stratégique : diagnostic, positionnement, recommandations
            et feuille de route exploitable immédiatement pour développer la
            présence digitale B2B.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
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
        <strong>Vous voulez des priorités claires et actionnables ?</strong>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Envoyez-moi ces 5 infos (activité, objectif, canal actuel, budget,
          urgence) et je vous réponds avec les premières recommandations.
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
