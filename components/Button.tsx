import clsx from "clsx";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external,
}: ButtonProps) {
  const isExternal =
  (external ?? false) || href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        variant === "primary"
          ? "bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 focus:ring-neutral-900"
          : "bg-white text-[var(--accent)] border border-[rgba(109,40,217,0.25)] hover:bg-[var(--accentSoft)] focus:ring-[var(--accent)]"
      )}
    >
      {children}
    </a>
  );
}
