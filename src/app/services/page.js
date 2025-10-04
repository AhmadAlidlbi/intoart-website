export const metadata = {
  title: "Services | IntoArt",
  description:
    "Explore IntoArt's design and development services — brand identity, web design, front-end engineering, and ongoing optimization.",
};

export default function Services() {
  return (
    <section className="py-4 sm:py-6">
      <div className="max-w-5xl mx-auto">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Services
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            We help brands grow through thoughtful strategy, clean design, and
            performant engineering. Here’s how we can partner with you.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Brand Identity
            </h2>
            <p className="mt-2 text-gray-600">
              Positioning, visual systems, typography, and guidelines that bring
              your brand to life across every touchpoint.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Web Design</h2>
            <p className="mt-2 text-gray-600">
              Accessible, conversion-focused interfaces designed for clarity,
              credibility, and measurable outcomes.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Front‑end Development
            </h2>
            <p className="mt-2 text-gray-600">
              Modern, maintainable code with Next.js and Tailwind — optimized
              for performance, SEO, and scalability.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              SEO & Performance
            </h2>
            <p className="mt-2 text-gray-600">
              Technical SEO, Core Web Vitals, analytics setup, and continuous
              optimization to keep you fast and findable.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Content & Copy
            </h2>
            <p className="mt-2 text-gray-600">
              Messaging frameworks and on‑brand copy that informs, inspires, and
              converts.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Ongoing Support
            </h2>
            <p className="mt-2 text-gray-600">
              Design and development retainers for iterative growth, testing,
              and roadmap execution.
            </p>
          </div>
        </div>

        <section className="mt-12 sm:mt-16">
          <div className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Ready to build something great?
              </h3>
              <p className="mt-1 text-gray-600">
                Tell us about your goals — we’ll recommend a right‑sized
                approach and timeline.
              </p>
            </div>
            <div>
              <a
                href="/book-consultation"
                className="inline-block bg-brand-brown hover:bg-brand-brown-dark text-white px-6 py-3 rounded font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none "
              >
                Book Your Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
