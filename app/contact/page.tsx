import type { Metadata } from "next";
import Container from "../../components/Container";
import Card from "../../components/Card";

export const metadata: Metadata = {
  title: "Contact | YANIS",
  description:
    "Contactez-moi pour un diagnostic digital gratuit et un plan d’action clair.",
};

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20j%E2%80%99obtiens%20des%20clients%20via%20:%20(Facebook%20%2F%20Instagram%20%2F%20site%20%2F%20bouche-%C3%A0-oreille%20%2F%20autre)%0A4)%20Budget%20marketing%20estim%C3%A9%20:%20...%0A5)%20Urgence%20:%20(cette%20semaine%20%2F%20ce%20mois%20%2F%20ce%20trimestre)%0A%0ALien%20site%20ou%20page%20(si%20existe)%20:%20...";

export default function ContactPage() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <section className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
            Réponse rapide • WhatsApp recommandé
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Contact
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-neutral-600">
            Le plus simple : envoyez-moi un message WhatsApp avec 5 infos
            (activité, objectif, canal actuel, budget, urgence). Je vous réponds
            rapidement avec les premières priorités.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:opacity-95 sm:w-auto"
            >
              Diagnostic gratuit sur WhatsApp
            </a>
            <a
              href="mailto:yanisghtu@gmail.com"
              className="inline-flex w-full items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-extrabold text-neutral-900 shadow-sm transition hover:bg-neutral-50 sm:w-auto"
            >
              Email
            </a>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-extrabold text-neutral-900">
              Option 1 (recommandée) : WhatsApp
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Diagnostic guidé en 2 minutes. Parfait pour démarrer vite.
            </p>
            <div className="mt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:opacity-95 sm:w-auto"
              >
                Envoyer les 5 infos
              </a>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-extrabold text-neutral-900">
              Option 2 : Email
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Si vous préférez, envoyez les mêmes 5 infos par email.
            </p>
            <div className="mt-4">
              <a
                href="mailto:yanisghtu@gmail.com?subject=Diagnostic%20digital%20gratuit&body=Bonjour%20Yanis%2C%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20:%20...%0A3)%20Canal%20actuel%20:%20...%0A4)%20Budget%20marketing%20:%20...%0A5)%20Urgence%20:%20...%0A%0ALien%20site%20ou%20page%20:%20..."
                className="inline-flex w-full items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-extrabold text-neutral-900 shadow-sm transition hover:bg-neutral-50 sm:w-auto"
              >
                Envoyer un email
              </a>
            </div>
          </Card>
        </section>
      </div>
    </Container>
  );
}
