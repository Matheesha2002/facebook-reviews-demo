"use client";

import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Graph API", href: "/graph-api" },
  { name: "SociableKIT", href: "/sociablekit" },
  { name: "Elfsight", href: "/elfsight" },
  { name: "Taggbox", href: "/taggbox" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-5">
        <a
          href="/"
          className="text-2xl font-bold text-gray-900"
        >
          Facebook Reviews Demo
        </a>

        <nav className="mt-5 flex flex-wrap gap-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}