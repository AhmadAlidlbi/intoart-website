import Image from "next/image";

export default function Home() {
  return (
    <section className="py-4 sm:py-10">
      <div className="max-w-6xl mx-auto grid gap-10 sm:gap-16 sm:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
            Design that moves brands forward
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            IntoArt is a design and front‑end studio crafting brand identities
            and performant websites with Next.js and Tailwind.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="/book-consultation"
              className="bg-brand-brown hover:bg-brand-brown-dark text-white px-6 py-3 rounded font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none "
            >
              Start a Project
            </a>
            <a
              href="/services"
              className="px-6 py-3 rounded font-medium border border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="h-24 sm:h-28 rounded-lg bg-brand-beige" />
              <div className="h-24 sm:h-28 rounded-lg bg-amber-100" />
              <div className="h-24 sm:h-28 rounded-lg bg-amber-200" />
              <div className="h-24 sm:h-28 rounded-lg bg-amber-300" />
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Visual exploration of color, layout, and hierarchy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
