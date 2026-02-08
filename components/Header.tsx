import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20j%E2%80%99obtiens%20des%20clients%20via%20:%20(Facebook%20%2F%20Instagram%20%2F%20site%20%2F%20bouche-%C3%A0-oreille%20%2F%20autre)%0A4)%20Budget%20marketing%20estim%C3%A9%20:%20...%0A5)%20Urgence%20:%20(cette%20semaine%20%2F%20ce%20mois%20%2F%20ce%20trimestre)%0A%0ALien%20site%20ou%20page%20(si%20existe)%20:%20...";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid #eee" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link href="/" style={{ fontWeight: 700, textDecoration: "none" }}>
          YANIS
        </Link>

        <nav style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <Link href="/offre">Offre</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid #111",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Diagnostic gratuit
          </a>
        </nav>
      </div>
    </header>
  );
}
