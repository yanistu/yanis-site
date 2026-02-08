import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20j%E2%80%99obtiens%20des%20clients%20via%20:%20(Facebook%20%2F%20Instagram%20%2F%20site%20%2F%20bouche-%C3%A0-oreille%20%2F%20autre)%0A4)%20Budget%20marketing%20estim%C3%A9%20:%20...%0A5)%20Urgence%20:%20(cette%20semaine%20%2F%20ce%20mois%20%2F%20ce%20trimestre)%0A%0ALien%20site%20ou%20page%20(si%20existe)%20:%20...";

export default function HomePage() {
  return (
    <Container>
      <div className="space-y-10">
        {/* HERO */}
        <section className="space-y-5">
          <div className="inline-flex w-fit items-center rounded-full border border-[rgba(109,40,217,0.20)] bg-[var(--accentSoft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            Conseil stratégique • Projets numériques • PME Tunisie
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            J’aide les PME en Tunisie à transformer le digital en résultats business
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
            Diagnostic, priorisation et feuille de route claire pour gagner en visibilité,
            crédibilité et demandes qualifiées — sans dépenses inutiles.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={WHATSAPP_URL} variant="primary">
              Demander un diagnostic gratuit
            </Button>
            <Button href="/offre" variant="secondary">
              Voir l’offre
            </Button>
          </div>
        </section>

        {/* 3 points */}
        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold">Clarté</div>
            <p className="mt-2 text-sm text-neutral-700">
              On définit l’objectif, la cible et le message — puis on choisit les bons leviers.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Priorités</div>
            <p className="mt-2 text-sm text-neutral-700">
              Quick wins + actions structurantes, dans le bon ordre.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">KPI</div>
            <p className="mt-2 text-sm text-neutral-700">
              Visibilité, demandes, conversion : on mesure et on ajuste.
            </p>
          </Card>
        </section>

        {/* Cas réel */}
        <section className="grid gap-4 sm:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">Cas réel — Idéal Informatique</div>
            <p className="mt-2 text-sm text-neutral-700">
              Diagnostic, positionnement, recommandations et feuille de route exploitable
              immédiatement pour développer la présence digitale B2B.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Pour qui ?</div>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>PME qui veulent plus de demandes qualifiées</li>
              <li>Dirigeants qui veulent un plan clair (90 jours)</li>
              <li>Équipes qui ont besoin de méthode + KPI</li>
            </ul>
          </Card>
        </section>

        {/* CTA final */}
        <section>
          <Card>
            <div className="space-y-3">
              <div className="text-base font-semibold">
                Vous voulez un plan clair pour les 90 prochains jours ?
              </div>
              <p className="text-sm text-neutral-700">
                Envoyez-moi ces 5 infos (activité, objectif, canal actuel, budget, urgence)
                et je vous réponds rapidement.
              </p>
              <Button href={WHATSAPP_URL} variant="primary">
                Diagnostic gratuit sur WhatsApp
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </Container>
  );
}
