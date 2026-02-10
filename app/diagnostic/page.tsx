"use client";

import { useMemo, useState } from "react";

const PHONE = "21650435185";

function waLinkFromText(text: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
}

export default function DiagnosticPage() {
  const [activite, setActivite] = useState("");
  const [ville, setVille] = useState("");
  const [objectif, setObjectif] = useState("");
  const [canal, setCanal] = useState("");
  const [budget, setBudget] = useState("");
  const [urgence, setUrgence] = useState("");
  const [lien, setLien] = useState("");


  const message = useMemo(() => {
    return [
      "Bonjour Yanis, je souhaite un diagnostic digital gratuit.",
      "",
      `1) Activité : ${activite || "..."}`,
      `   Ville : ${ville || "..."}`,
      `2) Objectif principal (1 seul) : ${objectif || "..."}`,
      `3) Aujourd’hui, j’obtiens des clients via : ${canal || "..."}`,
      `4) Budget marketing estimé : ${budget || "..."}`,
      `5) Urgence : ${urgence || "..."}`,
      "",
        `Lien site / page : ${lien || "..."}`,
    ].join("\n");
  }, [activite, ville, objectif, canal, budget, urgence]);

  const waLink = useMemo(() => waLinkFromText(message), [message]);

  const canSend =
    activite.trim().length > 1 &&
    ville.trim().length > 1 &&
    objectif.trim().length > 2 &&
    canal.trim().length > 2 &&
    budget.trim().length > 0 &&
    urgence.trim().length > 0;

  return (
    <main className="mx-auto w-full max-w-2xl px-4 sm:px-6 py-10">
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Diagnostic gratuit (2 minutes)
        </h1>
        <p className="mt-2 text-neutral-600">
          Remplis ces infos → on prépare ton message WhatsApp automatiquement.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Activité" value={activite} onChange={setActivite} placeholder="Ex: Cabinet comptable" />
            <Field label="Ville" value={ville} onChange={setVille} placeholder="Ex: Nabeul" />
          </div>

          <Field
            label="Objectif principal (1 seul)"
            value={objectif}
            onChange={setObjectif}
            placeholder="Ex: +20 demandes / mois"
          />

          <Field
            label="Canal actuel (Facebook / Instagram / site / bouche-à-oreille / autre)"
            value={canal}
            onChange={setCanal}
            placeholder="Ex: Facebook + bouche-à-oreille"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Budget marketing estimé" value={budget} onChange={setBudget} placeholder="Ex: 300 TND / mois" />
            <Select
              label="Urgence"
              value={urgence}
              onChange={setUrgence}
              options={[
                { value: "", label: "Choisir..." },
                { value: "Cette semaine", label: "Cette semaine" },
                { value: "Ce mois", label: "Ce mois" },
                { value: "Ce trimestre", label: "Ce trimestre" },
              ]}
            />
          </div>
              <Field
                label="Lien site / page (si existe)"
                value={lien}
                onChange={setLien}
                placeholder="Ex: https://facebook.com/ma-page"
                />

          <div className="mt-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
            <p className="text-xs font-medium text-neutral-500">Aperçu du message :</p>
            <pre className="mt-2 whitespace-pre-wrap text-sm text-neutral-800">{message}</pre>
          </div>

          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold transition
                ${canSend ? "bg-neutral-900 text-white hover:bg-neutral-800" : "bg-neutral-200 text-neutral-500 pointer-events-none"}
              `}
            >
              Envoyer sur WhatsApp
            </a>

            <button
              type="button"
              onClick={() => navigator.clipboard.writeText(message)}
              className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold border border-neutral-300 hover:bg-neutral-50"
            >
              Copier le message
            </button>
          </div>

          <p className="text-xs text-neutral-500">
            Si WhatsApp ne s’ouvre pas : copie le message puis envoie-le manuellement.
          </p>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-1">
      <span className="text-sm font-medium text-neutral-800">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-12 rounded-2xl border border-neutral-300 px-4 outline-none focus:ring-4 focus:ring-neutral-200"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <label className="grid gap-1">
      <span className="text-sm font-medium text-neutral-800">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-2xl border border-neutral-300 px-4 outline-none focus:ring-4 focus:ring-neutral-200 bg-white"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
