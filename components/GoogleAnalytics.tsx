"use client";

import Script from "next/script";

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());

          // Debug local (optionnel)
          ${process.env.NODE_ENV !== "production" ? "gtag('config', '" + gaId + "', { debug_mode: true });" : "gtag('config', '" + gaId + "');"}
        `}
      </Script>
    </>
  );
}
