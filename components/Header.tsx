import Link from "next/link";
import Container from "./Container";

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20j%E2%80%99obtiens%20des%20clients%20via%20:%20(Facebook%20%2F%20Instagram%20%2F%20site%20%2F%20bouche-%C3%A0-oreille%20%2F%20autre)%0A4)%20Budget%20marketing%20estim%C3%A9%20:%20...%0A5)%20Urgence%20:%20(cette%20semaine%20%2F%20ce%20mois%20%2F%20ce%20trimestre)%0A%0ALien%20site%20ou%20page%20(si%20existe)%20:%20...";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #eee",
        zIndex: 10,
      }}
    >
      <Container>
        <div
          style={{
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 800,
              letterSpacing: 0.5,
              textDecoration: "none",
              color: "#111",
            }}
          >
            YANIS
          </Link>

          <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Link href="/offre" style={{ color: "#111", textDecoration: "none", fontWeight: 600, opacity: 0.85 }}
>
              Offre
            </Link>
            <Link href="/a-propos" style={{ color: "#111", textDecoration: "none", fontWeight: 600, opacity: 0.85 }}
>
              À propos
            </Link>
            <Link href="/contact" style={{ color: "#111", textDecoration: "none", fontWeight: 600, opacity: 0.85 }}
>
              Contact
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "10px 14px",
                borderRadius: 14,
                background: "#111",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 700,
                boxShadow: "0 10px 24px rgba(0,0,0,0.10)",
              }}
            >
              Diagnostic gratuit
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
