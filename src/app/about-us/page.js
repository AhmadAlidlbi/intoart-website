export const metadata = {
  title: "About Us | IntoArt",
  description:
    "Learn about IntoArt — our mission, values, and the team crafting beautiful digital experiences.",
};

export default function AboutUs() {
  return (
    <section className="py-4 sm:py-6">
      <div className="max-w-5xl mx-auto">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            About Us
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            We are a design-led studio focused on crafting thoughtful,
            accessible, and performant digital products that help brands grow.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Our Mission</h2>
            <p className="mt-2 text-gray-600">
              To elevate brands through purposeful design, human-centered
              strategy, and meticulous execution.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">What We Do</h2>
            <p className="mt-2 text-gray-600">
              From concept to launch: brand identity, web design, front-end
              development, and ongoing optimization.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">How We Work</h2>
            <p className="mt-2 text-gray-600">
              Collaborative sprints, transparent communication, and a strong
              focus on outcomes over deliverables.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Why IntoArt</h2>
            <p className="mt-2 text-gray-600">
              We blend aesthetics with performance to create experiences that
              are both beautiful and effective.
            </p>
          </div>
        </div>

        <section className="mt-12 sm:mt-16">
          <h2 className="text-2xl font-semibold text-gray-900">Our Values</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-3 rounded-md bg-white p-4 border border-gray-200">
              <span className="text-amber-600">●</span>
              <p className="text-gray-700">
                Craft with care and attention to detail.
              </p>
            </li>
            <li className="flex items-start gap-3 rounded-md bg-white p-4 border border-gray-200">
              <span className="text-amber-600">●</span>
              <p className="text-gray-700">
                Design inclusively, build accessibly.
              </p>
            </li>
            <li className="flex items-start gap-3 rounded-md bg-white p-4 border border-gray-200">
              <span className="text-amber-600">●</span>
              <p className="text-gray-700">
                Communicate openly and collaborate often.
              </p>
            </li>
            <li className="flex items-start gap-3 rounded-md bg-white p-4 border border-gray-200">
              <span className="text-amber-600">●</span>
              <p className="text-gray-700">
                Measure impact and iterate continuously.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
