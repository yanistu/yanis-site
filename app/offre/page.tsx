import type { Metadata } from "next";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title: "Offre – Accompagnement stratégique digital | YANIS",
  description:
    "Diagnostic, stratégie, plan d’action priorisé (90 jours) et KPI. Accompagnement pragmatique pour PME en Tunisie.",
};

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20j%E2%80%99obtiens%20des%20clients%20via%20:%20(Facebook%20%2F%20Instagram%20%2F%20site%20%2F%20bouche-%C3%A0-oreille%20%2F%20autre)%0A4)%20Budget%20marketing%20estim%C3%A9%20:%20...%0A5)%20Urgence%20:%20(cette%20semaine%20%2F%20ce%20mois%20%2F%20ce%20trimestre)%0A%0ALien%20site%20ou%20page%20(si%20existe)%20:%20...";

export default function OffrePage() {
  return (
    
    <Container>
      <div className="flex flex-col gap-12 py-2">
        {/* HERO */}
        <section className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
            Accompagnement PME • Stratégie • Priorisation • KPI
          </div>
          
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
            Accompagnement stratégique digital (PME)
          </h1>

          <p className="max-w-3xl text-lg leading-relaxed text-neutral-700">
            Je vous aide à prendre de meilleures décisions digitales :
            positionnement, priorités, plan d’action et KPI. L’objectif : obtenir
            des résultats concrets sans vous disperser.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button href={WHATSAPP_URL} variant="primary" external>
              Demander un diagnostic gratuit
            </Button>

            <Button href="/contact" variant="secondary">
              Me contacter
            </Button>
          </div>
        </section>

        {/* PROBLEMES */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-neutral-900">
            Problèmes que je règle souvent
          </h2>

          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>On est invisible en ligne, on dépend du bouche-à-oreille.</li>
            <li>On a un site / une page Facebook, mais ça ne génère pas de demandes.</li>
            <li>On ne sait pas quoi prioriser (site, réseaux, pub, SEO…).</li>
            <li>On a essayé des actions, mais sans méthode ni résultats mesurables.</li>
          </ul>
        </section>

        {/* CE QUE JE FAIS */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-neutral-900">
            Ce que je fais concrètement
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <div className="text-sm font-semibold text-neutral-900">
                1) Diagnostic
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Analyse de votre situation : visibilité, message, concurrence,
                parcours client, canaux actuels.
              </p>
            </Card>

            <Card>
              <div className="text-sm font-semibold text-neutral-900">
                2) Stratégie & priorisation
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Définition d’un plan simple et réaliste : objectifs, cibles,
                messages, leviers, quick wins et actions structurantes.
              </p>
            </Card>

            <Card>
              <div className="text-sm font-semibold text-neutral-900">
                3) Accompagnement & mise en œuvre
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Je pilote la mission et je peux mobiliser un collectif agile (web,
                SEO, contenu, technique) selon vos besoins.
              </p>
            </Card>
          </div>
        </section>

        {/* LIVRABLES */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-neutral-900">Livrables</h2>

          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>Diagnostic synthétique (points forts / faiblesses / opportunités)</li>
            <li>Plan d’action priorisé (90 jours) + recommandations concrètes</li>
            <li>Définition des KPI (visibilité, demandes, conversion)</li>
            <li>Feuille de route claire (qui fait quoi, dans quel ordre)</li>
          </ul>
        </section>

        {/* CTA FINAL */}
        <section>
          <Card>
            <div className="text-base font-semibold text-neutral-900">
              Vous voulez un plan clair pour les 90 prochains jours ?
            </div>

            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-700">
              Envoyez-moi ces 5 infos (activité, objectif, canal actuel, budget,
              urgence) et je vous réponds rapidement.
            </p>

            <div className="mt-4">
              <Button href={WHATSAPP_URL} variant="primary" external>
                Diagnostic gratuit sur WhatsApp
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </Container>

  );
}
