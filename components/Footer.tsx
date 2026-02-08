import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 py-8">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <div>© {year} YANIS — Stratégie digitale & projets numériques</div>
          <div className="flex gap-4">
            <span>PME Tunisie</span>
            <span>•</span>
            <span>WhatsApp / Email</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
