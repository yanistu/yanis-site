"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import Button from "./Button";

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/offre", label: "Offre" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/85 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between gap-3">
          <Link href="/" className="font-extrabold tracking-tight">
            YANIS
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-950"
              >
                {i.label}
              </Link>
            ))}
            <Button href={WHATSAPP_URL} variant="primary" full={false}>
              Diagnostic gratuit
            </Button>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <Button href={WHATSAPP_URL} variant="primary" full={false}>
              Diagnostic
            </Button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="rounded-xl border border-neutral-200 px-3 py-2 text-sm font-semibold"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {open && (
          <div className="pb-4 md:hidden">
            <div className="mt-2 grid gap-2 rounded-2xl border border-neutral-200 bg-white p-3">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  {i.label}
                </Link>
              ))}
              <Button href={WHATSAPP_URL} variant="primary">
                Demander un diagnostic gratuit
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
