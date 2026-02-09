import Link from "next/link";
import type { Metadata } from "next";
import Container from "../components/Container";
import Card from "../components/Card";

export const metadata: Metadata = {
  title: "YANIS – Stratégie digitale & projets numériques (Tunisie)",
  description:
    "Diagnostic, priorisation et plan d’action 90 jours pour PME en Tunisie. Une approche claire, mesurable et orientée résultats.",
};

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20j%E2%80%99obtiens%20des%20clients%20via%20:%20(Facebook%20%2F%20Instagram%20%2F%20site%20%2F%20bouche-%C3%A0-oreille%20%2F%20autre)%0A4)%20Budget%20marketing%20estim%C3%A9%20:%20...%0A5)%20Urgence%20:%20(cette%20semaine%20%2F%20ce%20mois%20%2F%20ce%20trimestre)%0A%0ALien%20site%20ou%20page%20(si%20existe)%20:%20...";

export default function HomePage() {
  return (
    <Container>
      <div className="flex flex-col gap-12">
        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white/70 p-6 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
              Conseil stratégique • Projets numériques • PME Tunisie
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-5xl">
              J’aide les PME en Tunisie à transformer le digital en résultats
              business
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              Diagnostic, priorisation et feuille de route claire pour gagner en
              visibilité, crédibilité et demandes qualifiées — sans dépenses
              inutiles.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-95 sm:w-auto"
              >
                Demander un diagnostic gratuit
              </a>

              <Link
                href="/offre"
                className="inline-flex w-full items-center justify-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-bold text-neutral-900 shadow-sm transition hover:bg-neutral-50 sm:w-auto"
              >
                Voir l’offre
              </Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3">
                <div className="text-sm font-extrabold text-neutral-900">
                  Clarté
                </div>
                <div className="text-xs text-neutral-600">
                  Objectif • cible • message
                </div>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3">
                <div className="text-sm font-extrabold text-neutral-900">
                  Priorités
                </div>
                <div className="text-xs text-neutral-600">
                  Quick wins + structure
                </div>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-3">
                <div className="text-sm font-extrabold text-neutral-900">KPI</div>
                <div className="text-xs text-neutral-600">Mesure & itérations</div>
              </div>
            </div>
          </div>
        </section>

        {/* POUR QUI */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
            Pour qui
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <h3 className="text-lg font-extrabold text-neutral-900">
                PME & organisations
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Vous voulez structurer ou améliorer votre présence digitale,
                cadrer vos priorités et obtenir des résultats mesurables.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                <li>Services B2B (cabinets, bureaux d’études, conseil)</li>
                <li>Commerce / distribution / PME industrielles</li>
                <li>Formation, santé & services spécialisés</li>
                <li>Immobilier & IT / startups</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-lg font-extrabold text-neutral-900">
                Le problème typique
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-700">
                <li>“On est invisible en ligne, on dépend du bouche-à-oreille.”</li>
                <li>“On a un site / une page, mais zéro demandes.”</li>
                <li>“On ne sait pas quoi prioriser (SEO, pub, site, réseaux…).”</li>
                <li>“On a testé des actions, sans méthode ni KPI.”</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* MÉTHODE 4 ÉTAPES */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900">
            Une méthode simple, orientée résultats
          </h2>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <div className="text-sm font-extrabold text-neutral-900">
                1) Diagnostic
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Analyse rapide : visibilité, message, concurrence, parcours client,
                canaux actuels. Objectif : voir où vous perdez (ou gagnez) des
                opportunités.
              </p>
            </Card>

            <Card>
              <div className="text-sm font-extrabold text-neutral-900">
                2) Priorisation
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Objectifs business, cibles, messages et leviers à activer en
                priorité. Zéro dispersion : quick wins + actions structurantes.
              </p>
            </Card>

            <Card>
              <div className="text-sm font-extrabold text-neutral-900">
                3) Plan d’action 90 jours
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Feuille de route réaliste : quoi faire, dans quel ordre, avec
                quels KPI. Vous savez exactement où aller.
              </p>
            </Card>

            <Card>
              <div className="text-sm font-extrabold text-neutral-900">
                4) Accompagnement (si besoin)
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                Je peux accompagner la mise en œuvre ou mobiliser un collectif
                agile (web, SEO, contenu, technique) selon vos besoins.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="rounded-3xl border border-neutral-200 bg-neutral-950 p-6 sm:p-8">
          <h2 className="text-xl font-extrabold tracking-tight text-white">
            Vous voulez un plan clair pour les 90 prochains jours ?
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-200">
            Envoyez-moi ces 5 informations par WhatsApp : activité + ville,
            objectif principal, canal actuel, budget marketing estimé, urgence. Je
            vous réponds avec un premier diagnostic clair et actionnable.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-neutral-900 shadow-sm transition hover:bg-neutral-100 sm:w-auto"
            >
              Diagnostic gratuit sur WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/25 bg-transparent px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-white/10 sm:w-auto"
            >
              Me contacter
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}
