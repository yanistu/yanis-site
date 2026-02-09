import React from "react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  full?: boolean; // ✅ ajout
  className?: string; // ✅ pratique si tu utilises tailwind
  target?: string;
  rel?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  full = false,
  className = "",
  target = "_blank",
  rel = "noreferrer",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-3 font-semibold transition " +
    (full ? "w-full " : "");

  const styles =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-800"
      : "bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50";

  return (
    <a href={href} target={target} rel={rel} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
