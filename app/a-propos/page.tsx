import Container from "../../components/Container";
import Card from "../../components/Card";
import Button from "../../components/Button";

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.";

export default function AproposPage() {
  return (
    <Container>
      <div className="space-y-10">
        <section className="space-y-4">
          <div className="inline-flex w-fit items-center rounded-full border border-[rgba(109,40,217,0.20)] bg-[var(--accentSoft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
            Consultant • Stratégie • Exécution pragmatique
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            À propos
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
            Je suis <span className="font-semibold text-neutral-900">YANIS</span>, consultant
            en stratégie digitale & projets numériques. J’aide les PME à clarifier leurs
            priorités et obtenir des résultats concrets, sans dispersion.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={WHATSAPP_URL} variant="primary">
              Diagnostic gratuit
            </Button>
            <Button href="/offre" variant="secondary">
              Voir l’offre
            </Button>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold">Business d’abord</div>
            <p className="mt-2 text-sm text-neutral-700">
              Objectifs, offre, cible, budget, timing → ensuite canaux et outils.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Priorisation</div>
            <p className="mt-2 text-sm text-neutral-700">
              Plan simple : quick wins + actions structurantes.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Mesure</div>
            <p className="mt-2 text-sm text-neutral-700">
              KPI et itérations mensuelles pour optimiser.
            </p>
          </Card>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold">Crédibilité</div>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-neutral-700">
              <li>Cadrage, documentation, pilotage</li>
              <li>Approche pragmatique orientée ROI</li>
              <li>Collectif possible si besoin (web/SEO/contenu)</li>
            </ul>
          </Card>
          <Card>
            <div className="text-sm font-semibold">Secteurs</div>
            <p className="mt-2 text-sm text-neutral-700">
              Services B2B • Commerce/Distribution • Formation • Immobilier • IT
            </p>
          </Card>
        </section>
      </div>
    </Container>
  );
}
