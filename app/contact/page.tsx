import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | YANIS",
  description:
    "Contact WhatsApp ou email pour un diagnostic digital gratuit. PME en Tunisie : stratégie digitale, projets numériques.",
};

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20j%E2%80%99obtiens%20des%20clients%20via%20:%20(Facebook%20%2F%20Instagram%20%2F%20site%20%2F%20bouche-%C3%A0-oreille%20%2F%20autre)%0A4)%20Budget%20marketing%20estim%C3%A9%20:%20...%0A5)%20Urgence%20:%20(cette%20semaine%20%2F%20ce%20mois%20%2F%20ce%20trimestre)%0A%0ALien%20site%20ou%20page%20(si%20existe)%20:%20...";

const EMAIL = "yanisghtu@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=Demande%20de%20diagnostic%20digital%20PME`;

export default function ContactPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <section style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <h1 style={{ margin: 0, fontSize: 34, lineHeight: 1.15 }}>Contact</h1>
        <p style={{ margin: 0, fontSize: 18, opacity: 0.9, maxWidth: 950 }}>
          Le plus simple : envoyez-moi un message WhatsApp avec 5 infos (activité,
          objectif, canal actuel, budget, urgence). Je réponds rapidement avec les
          premières priorités.
        </p>
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
        <strong>Option 1 (recommandée) : WhatsApp</strong>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Diagnostic guidé en 2 minutes. Parfait pour démarrer vite.
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
          Ouvrir WhatsApp (diagnostic gratuit)
        </a>

        <div style={{ opacity: 0.85, fontSize: 14 }}>
          📞 +216 50 435 185
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
        <strong>Option 2 : Email</strong>
        <p style={{ margin: 0, opacity: 0.9 }}>
          Si vous préférez l’email, envoyez votre demande avec : activité, ville,
          objectif, situation actuelle, budget et délai.
        </p>

        <a
          href={MAILTO}
          style={{
            alignSelf: "flex-start",
            padding: "12px 16px",
            borderRadius: 12,
            border: "1px solid #111",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Envoyer un email
        </a>

        <div style={{ opacity: 0.85, fontSize: 14 }}>📩 {EMAIL}</div>
      </section>

      <section style={{ opacity: 0.8, fontSize: 14 }}>
        <p style={{ margin: 0 }}>
          <strong>Secteurs :</strong> Services B2B • Commerce/Distribution •
          Formation/Santé • Immobilier • IT/Startups
        </p>
      </section>
    </div>
  );
}
