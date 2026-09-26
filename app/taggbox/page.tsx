import TaggboxReviews from "../components/TaggboxReviews";

export default function TaggboxPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Taggbox
          </h1>

          <p className="mt-2 text-gray-600">
            Facebook reviews displayed using the Taggbox
            Facebook Reviews widget.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <TaggboxReviews />
        </div>
      </div>
    </main>
  );
}