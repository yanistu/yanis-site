import type { Metadata } from "next";
import Container from "../../components/Container";
import Card from "../../components/Card";

export const metadata: Metadata = {
  title: "Offre – Accompagnement stratégique digital | YANIS",
  description:
    "Diagnostic, priorisation, plan d’action 90 jours et KPI. Accompagnement pragmatique pour PME en Tunisie.",
};

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20j%E2%80%99obtiens%20des%20clients%20via%20:%20(Facebook%20%2F%20Instagram%20%2F%20site%20%2F%20bouche-%C3%A0-oreille%20%2F%20autre)%0A4)%20Budget%20marketing%20estim%C3%A9%20:%20...%0A5)%20Urgence%20:%20(cette%20semaine%20%2F%20ce%20mois%20%2F%20ce%20trimestre)%0A%0ALien%20site%20ou%20page%20(si%20existe)%20:%20...";

export default function OffrePage() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <section className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
            Offre • Accompagnement PME
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Accompagnement stratégique digital (PME)
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-neutral-600">
            Je vous aide à prendre de meilleures décisions digitales :
            positionnement, priorités, plan d’action et KPI. L’objectif : obtenir
            des résultats concrets sans vous disperser.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:opacity-95 sm:w-auto"
            >
              Demander un diagnostic gratuit
            </a>
            <a
              href="#livrables"
              className="inline-flex w-full items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-extrabold text-neutral-900 shadow-sm transition hover:bg-neutral-50 sm:w-auto"
            >
              Voir les livrables
            </a>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-extrabold text-neutral-900">
              Cet accompagnement est fait pour vous si…
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li>Vous voulez structurer / améliorer votre présence digitale</li>
              <li>Vous cherchez de la clarté, des priorités et des KPI</li>
              <li>Vous voulez des résultats business (pas “juste être présent”)</li>
              <li>Vous voulez éviter les dépenses inutiles</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-xl font-extrabold text-neutral-900">
              Ce n’est pas pour vous si…
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li>Vous cherchez une solution magique sans réflexion</li>
              <li>Vous voulez “tout faire” sans priorités</li>
              <li>Vous cherchez un exécutant sans stratégie</li>
              <li>Vous n’êtes pas prêt à mesurer (KPI)</li>
            </ul>
          </Card>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
            Ce que je fais concrètement
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            <Card>
              <div className="text-sm font-extrabold text-neutral-900">
                1) Diagnostic
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Analyse : visibilité, message, concurrence, parcours client,
                canaux actuels.
              </p>
            </Card>

            <Card>
              <div className="text-sm font-extrabold text-neutral-900">
                2) Stratégie & priorisation
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Objectifs, cibles, messages, leviers, quick wins + structure.
              </p>
            </Card>

            <Card>
              <div className="text-sm font-extrabold text-neutral-900">
                3) Mise en œuvre (si besoin)
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Pilotage + collectif agile (web, SEO, contenu, technique) selon
                vos besoins.
              </p>
            </Card>
          </div>
        </section>

        <section id="livrables" className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
            Livrables
          </h2>

          <Card>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li>Diagnostic synthétique (forces / faiblesses / opportunités)</li>
              <li>Plan d’action priorisé (90 jours) + recommandations concrètes</li>
              <li>Définition des KPI (visibilité, demandes, conversion)</li>
              <li>Feuille de route claire (qui fait quoi, dans quel ordre)</li>
            </ul>
          </Card>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-neutral-950 p-6 sm:p-8">
          <h2 className="text-xl font-extrabold tracking-tight text-white">
            Vous voulez un plan clair ?
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-200">
            Envoyez-moi ces 5 infos (activité + ville, objectif, canal actuel,
            budget, urgence). Je vous réponds rapidement avec les premières
            priorités.
          </p>

          <div className="mt-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-neutral-900 shadow-sm transition hover:bg-neutral-100 sm:w-auto"
            >
              Diagnostic gratuit sur WhatsApp
            </a>
          </div>
        </section>
      </div>
    </Container>
  );
}
