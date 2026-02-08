import type { Metadata } from "next";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Button from "../../components/Button";

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
    <Container>
      <div className="flex flex-col gap-12 py-2">
        {/* HERO */}
        <section className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
            Réponse rapide • WhatsApp recommandé
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
            Contact
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-neutral-700">
            Le plus simple : envoyez-moi un message WhatsApp avec 5 infos
            (activité, objectif, canal actuel, budget, urgence). Je vous réponds
            rapidement avec les premières priorités.
          </p>
        </section>

        {/* OPTIONS */}
        <section className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-base font-semibold text-neutral-900">
              Option 1 (recommandée) : WhatsApp
            </div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Diagnostic guidé en 2 minutes. Parfait pour démarrer vite.
            </p>

            <div className="mt-4">
              <Button href={WHATSAPP_URL} variant="primary" external>
                Ouvrir WhatsApp (diagnostic gratuit)
              </Button>
            </div>

            <div className="mt-3 text-sm text-neutral-700">
              📞 <span className="font-semibold text-neutral-900">+216 50 435 185</span>
            </div>
          </Card>

          <Card>
            <div className="text-base font-semibold text-neutral-900">
              Option 2 : Email
            </div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Si vous préférez l’email, envoyez : activité, ville, objectif,
              situation actuelle, budget et délai.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Button href={MAILTO} variant="secondary" external>
                Envoyer un email
              </Button>
              <Button href="/offre" variant="secondary">
                Voir l’offre
              </Button>
            </div>

            <div className="mt-3 text-sm text-neutral-700">
              📩 <span className="font-semibold text-neutral-900">{EMAIL}</span>
            </div>
          </Card>
        </section>

        {/* FOOT NOTE */}
        <section>
          <Card>
            <div className="text-base font-semibold text-neutral-900">
              Secteurs
            </div>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              Services B2B • Commerce/Distribution • Formation/Santé • Immobilier •
              IT/Startups
            </p>
          </Card>
        </section>
      </div>
    </Container>
  );
}
