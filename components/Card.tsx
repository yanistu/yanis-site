export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
      {children}
    </div>
  );
}
