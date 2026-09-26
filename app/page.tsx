
import Link from "next/link";

const methods = [
  {
    title: "Meta Graph API",
    description:
      "Fetch Facebook Page reviews directly using the Meta Graph API.",
    href: "/graph-api",
    status: "Connected",
  },
  {
    title: "SociableKIT",
    description:
      "Display Facebook reviews using the SociableKIT widget.",
    href: "/sociablekit",
    status: "Connected",
  },
  {
    title: "Elfsight",
    description:
      "Display Facebook reviews using the Elfsight widget.",
    href: "/elfsight",
    status: "Connected",
  },
  {
    title: "Taggbox",
    description:
      "Display Facebook reviews using the Taggbox widget.",
    href: "/taggbox",
    status: "Connected",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">
            Facebook Reviews Integration Demo
          </h1>

          <p className="mt-3 text-gray-600">
            Comparison of four methods for displaying Facebook
            Page reviews in a web application.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {methods.map((method) => (
            <div
              key={method.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-semibold">
                  {method.title}
                </h2>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  {method.status}
                </span>
              </div>

              <p className="mt-4 text-gray-600">
                {method.description}
              </p>

              <Link
                href={method.href}
                className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
              >
                View Demo
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">
            Test Facebook Page
          </h2>

          <p className="mt-3 text-gray-600">
            Page: FB Reviews Demo
          </p>

          <p className="mt-1 text-gray-600">
            Test reviews added: 3
          </p>
        </div>
      </div>
    </main>
  );
}