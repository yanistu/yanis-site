import Container from "../components/Container";
import Card from "../components/Card";
import Button from "../components/Button";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20j%E2%80%99obtiens%20des%20clients%20via%20:%20(Facebook%20%2F%20Instagram%20%2F%20site%20%2F%20bouche-%C3%A0-oreille%20%2F%20autre)%0A4)%20Budget%20marketing%20estim%C3%A9%20:%20...%0A5)%20Urgence%20:%20(cette%20semaine%20%2F%20ce%20mois%20%2F%20ce%20trimestre)%0A%0ALien%20site%20ou%20page%20(si%20existe)%20:%20...";

export default function HomePage() {
  return (
    <Container>
      <div className="space-y-10">
        {/* HERO FUTURISTE */}
        <section className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-10">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-purple-200/70 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-indigo-200/60 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_20%_20%,rgba(109,40,217,0.12),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(79,70,229,0.10),transparent_50%)]" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div className="space-y-5">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(109,40,217,0.20)] bg-[rgba(243,232,255,0.70)] px-3 py-1 text-xs font-semibold text-purple-700">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                Conseil stratégique • Projets numériques • PME Tunisie
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-neutral-950 sm:text-5xl">
                J’aide les PME en Tunisie à transformer le digital en résultats business
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                Diagnostic, priorisation et feuille de route claire pour gagner en visibilité,
                crédibilité et demandes qualifiées — sans dépenses inutiles.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href={WHATSAPP_URL} variant="primary">
                  Demander un diagnostic gratuit
                </Button>
                <Button href="/offre" variant="secondary">
                  Voir l’offre
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4">
                  <div className="text-sm font-semibold">Clarté</div>
                  <div className="mt-1 text-xs text-neutral-600">Objectif • cible • message</div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4">
                  <div className="text-sm font-semibold">Priorités</div>
                  <div className="mt-1 text-xs text-neutral-600">Quick wins + structure</div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white/70 p-4">
                  <div className="text-sm font-semibold">KPI</div>
                  <div className="mt-1 text-xs text-neutral-600">Mesure & itérations</div>
                </div>
              </div>
            </div>

            {/* Right (Image A) */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-200/40 via-white to-indigo-200/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs font-semibold text-neutral-600">Digital Blueprint</div>
                </div>

                <div className="relative aspect-[16/10]">
                  {/* Mets ton image ici : /public/hero.webp */}
                  <Image
                    src="/hero.webp"
                    alt="Illustration futuriste stratégie digitale"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />
                </div>

                <div className="grid gap-3 p-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                    <div className="text-xs font-semibold text-neutral-600">Sortie</div>
                    <div className="mt-1 text-sm font-semibold">Plan 90 jours</div>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                    <div className="text-xs font-semibold text-neutral-600">Focus</div>
                    <div className="mt-1 text-sm font-semibold">Demandes qualifiées</div>
                  </div>
                </div>
              </div>
            </div>
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
