export const metadata = {
  title: "Projects | IntoArt",
  description: "Selected client projects delivered by IntoArt.",
};

export default function Projects() {
  return (
    <section className="py-4 sm:py-6">
      <div className="max-w-5xl mx-auto">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Projects
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            A growing selection of recent client work.
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="h-40 rounded-md bg-gray-100 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Case Study</h3>
            <p className="text-gray-600 mt-1">Coming soon.</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="h-40 rounded-md bg-gray-100 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Case Study</h3>
            <p className="text-gray-600 mt-1">Coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
