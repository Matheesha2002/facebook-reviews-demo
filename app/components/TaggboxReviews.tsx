import Script from "next/script";

export default function TaggboxReviews() {
  return (
    <div>
      <div
        className="taggbox"
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
        }}
        data-widget-id="336094"
        data-website="1"
      ></div>

      <Script
        src="https://widget.taggbox.com/embed.min.js"
        strategy="afterInteractive"
      />
    </div>
  );
}