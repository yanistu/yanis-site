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
  const styles =
    variant === "primary"
      ? {
          background: "#111",
          color: "#fff",
          border: "1px solid #111",
        }
      : {
          background: "#fff",
          color: "#111",
          border: "1px solid #ddd",
        };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        padding: "12px 16px",
        borderRadius: 12,
        fontWeight: 700,
        textDecoration: "none",
        display: "inline-block",
        ...styles,
      }}
    >
      {children}
    </a>
  );
}
