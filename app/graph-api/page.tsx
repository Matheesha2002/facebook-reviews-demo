import FacebookReviews from "../components/FacebookReviews";

export default function GraphApiPage() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Meta Graph API
          </h1>

          <p className="mt-2 text-gray-600">
            Reviews are fetched directly from the Facebook Page
            using the Meta Graph API.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <FacebookReviews />
        </div>
      </div>
    </main>
  );
}