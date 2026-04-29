import { ReactNode } from "react";

interface TrustCardProps {
  children: ReactNode;
  title?: string;
  privacyNote?: string;
  className?: string;
  role?: string;
  "aria-label"?: string;
}

/**
 * TrustCard — a content card that surfaces built-in trust signals and
 * privacy context to the user, aligned with the "privacy-by-design" principle.
 */
export function TrustCard({
  children,
  title,
  privacyNote,
  className = "",
  role,
  "aria-label": ariaLabel,
}: TrustCardProps) {
  return (
    <article
      role={role}
      aria-label={ariaLabel ?? title}
      className={[
        "rounded-2xl border border-clarity-gold/30 bg-clarity-light",
        "shadow-sm transition-shadow hover:shadow-md",
        "p-6 flex flex-col gap-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {title && (
        <h2 className="text-xl font-semibold text-clarity-dark">{title}</h2>
      )}
      <div className="flex-1">{children}</div>
      {privacyNote && (
        <footer className="text-sm text-clarity-muted border-t border-clarity-gold/20 pt-3 mt-2">
          <span className="font-medium">Privacy: </span>
          {privacyNote}
        </footer>
      )}
    </article>
  );
}
