export const metadata = {
  title: "Portfolio | IntoArt",
  description: "Gallery of visual explorations and brand assets by IntoArt.",
};

export default function Portfolio() {
  return (
    <section className="py-4 sm:py-6">
      <div className="max-w-5xl mx-auto">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Portfolio
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Selected visuals, components, and brand artifacts.
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="h-40 rounded-lg bg-amber-100" />
          <div className="h-40 rounded-lg bg-amber-200" />
          <div className="h-40 rounded-lg bg-amber-300" />
          <div className="h-40 rounded-lg bg-amber-100" />
          <div className="h-40 rounded-lg bg-amber-200" />
          <div className="h-40 rounded-lg bg-amber-300" />
        </div>
      </div>
    </section>
  );
}
