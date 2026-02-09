import type { Metadata } from "next";
import Container from "../../components/Container";
import Card from "../../components/Card";

export const metadata: Metadata = {
  title: "À propos | YANIS",
  description:
    "Consultant en stratégie digitale & projets numériques. J’aide les PME à prioriser et obtenir des résultats mesurables.",
};

export default function AProposPage() {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <section className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-700">
            À propos • Positionnement
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Je travaille sur la clarté avant les outils
          </h1>

          <p className="max-w-3xl text-base leading-relaxed text-neutral-600">
            J’ai vu trop de PME perdre du temps et de l’argent sur des actions
            mal priorisées : sites inutiles, réseaux sans objectif, publicités
            lancées trop tôt.
          </p>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-extrabold text-neutral-900">
              Mon rôle
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              Mon rôle n’est pas de vendre des outils. Mon rôle est de vous aider
              à voir clair, décider mieux et avancer avec méthode : objectifs,
              priorités, KPI, feuille de route.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-extrabold text-neutral-900">
              Ce que vous obtenez
            </h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li>Un diagnostic clair</li>
              <li>Un plan d’action réaliste (90 jours)</li>
              <li>Des KPI simples à suivre</li>
              <li>Des recommandations concrètes (pas de théorie)</li>
            </ul>
          </Card>
        </section>

        <section className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-extrabold text-neutral-900">
            Une règle simple
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            Si je pense que le digital n’est pas la priorité pour vous maintenant,
            je vous le dirai. La clarté avant tout.
          </p>
        </section>
      </div>
    </Container>
  );
}
