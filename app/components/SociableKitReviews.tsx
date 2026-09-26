import Script from "next/script";

export default function SociableKitReviews() {
  return (
    <div>
      <div
        className="sk-ww-fb-page-reviews"
        data-embed-id="25716690"

      ></div>

      <Script
        src="https://widgets.sociablekit.com/facebook-page-reviews/widget.js"
        strategy="afterInteractive"
      />
    </div>
  );
}