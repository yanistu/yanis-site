export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #eee", marginTop: 40 }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "24px 20px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          fontSize: 14,
        }}
      >
        <strong>YANIS</strong>
        <div>Consultant en stratégie digitale & projets numériques (Tunisie)</div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <span>📞 +216 50 435 185</span>
          <a href="mailto:yanisghtu@gmail.com">📩 yanisghtu@gmail.com</a>
        </div>

        <div style={{ opacity: 0.8 }}>
          Secteurs : Services B2B • Commerce/Distribution • Formation/Santé •
          Immobilier • IT/Startups
        </div>
      </div>
    </footer>
  );
}
