import Script from "next/script";

export default function ElfsightReviews() {
  return (
    <div>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="afterInteractive"
      />

      <div
        className="elfsight-app-57426538-df8e-41a2-9aa7-b540421a33ed"
        data-elfsight-app-lazy=""
      />
    </div>
  );
}