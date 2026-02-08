import type { Metadata } from "next";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "À propos | YANIS",
  description:
    "Consultant en stratégie digitale & projets numériques. Approche business, priorisation et résultats concrets pour PME en Tunisie.",
};

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20j%E2%80%99obtiens%20des%20clients%20via%20:%20(Facebook%20%2F%20Instagram%20%2F%20site%20%2F%20bouche-%C3%A0-oreille%20%2F%20autre)%0A4)%20Budget%20marketing%20estim%C3%A9%20:%20...%0A5)%20Urgence%20:%20(cette%20semaine%20%2F%20ce%20mois%20%2F%20ce%20trimestre)%0A%0ALien%20site%20ou%20page%20(si%20existe)%20:%20...";

export default function AproposPage() {
  return (
    <Container>
      <div className="flex flex-col gap-12 py-2">
        {/* HERO */}
        <section className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center rounded-full border border-[rgba(109,40,217,0.20)] bg-[var(--accentSoft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            Consultant • Stratégie digitale • Projets numériques
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
            À propos
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-neutral-700">
            Je suis <span className="font-semibold text-neutral-900">YANIS</span>,
            consultant en{" "}
            <span className="font-semibold text-neutral-900">
              stratégie digitale & projets numériques
            </span>
            . J’aide les PME en Tunisie à clarifier leurs priorités et obtenir des
            résultats concrets, sans dépenses inutiles.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button href={WHATSAPP_URL} variant="primary" external>
              Diagnostic gratuit sur WhatsApp
            </Button>
            <Button href="/offre" variant="secondary">
              Voir l’offre
            </Button>
          </div>
        </section>

        {/* APPROCHE */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-neutral-900">Mon approche</h2>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold text-neutral-900">
                Business d’abord
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Objectifs, offre, clients, budget, délais. Ensuite seulement on
                choisit les canaux et les outils.
              </p>
            </Card>

            <Card>
              <div className="text-sm font-semibold text-neutral-900">
                Priorités & quick wins
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Un plan simple : actions rapides + actions structurantes, dans le
                bon ordre.
              </p>
            </Card>

            <Card>
              <div className="text-sm font-semibold text-neutral-900">
                Mesure & itération
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                KPI clairs (visibilité, demandes, conversion) et ajustements
                mensuels.
              </p>
            </Card>
          </div>
        </section>

        {/* CREDIBILITE + CAS */}
        <section className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-neutral-900">
              Crédibilité (en bref)
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>Expérience en environnements structurés et projets digitaux</li>
              <li>Habitude de cadrer, documenter et piloter</li>
              <li>Double lecture : public (process) & PME (ROI rapide)</li>
              <li>Possibilité de mobiliser un collectif agile si besoin</li>
            </ul>
          </Card>

          <Card>
            <div className="text-sm font-semibold text-neutral-900">
              Cas réel – Idéal Informatique
            </div>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700">
              Accompagnement stratégique digital : diagnostic, positionnement,
              recommandations concrètes et feuille de route exploitable
              immédiatement pour développer la présence digitale B2B.
            </p>
          </Card>
        </section>

        {/* CTA */}
        <section>
          <Card>
            <div className="text-base font-semibold text-neutral-900">
              Vous voulez des priorités claires en 48h ?
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-700">
              Envoyez-moi ces 5 infos (activité, objectif, canal actuel, budget,
              urgence) et je vous réponds avec les premières priorités.
            </p>
            <div className="mt-4">
              <Button href={WHATSAPP_URL} variant="primary" external>
                Lancer le diagnostic WhatsApp
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </Container>
  );
}
