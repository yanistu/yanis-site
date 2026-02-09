"use client";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const isWhatsApp = href.includes("wa.me") || href.toLowerCase().includes("whatsapp");

  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition";

  const styles =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800"
      : "border border-neutral-300 text-neutral-900 hover:bg-neutral-50";

  const handleClick = () => {
    if (!isWhatsApp) return;

    // GA4 (si la balise est bien chargée)
    // @ts-ignore
    window.gtag?.("event", "whatsapp_click", {
      event_category: "conversion",
      event_label: "CTA WhatsApp",
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${styles}`}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
