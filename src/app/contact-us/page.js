export const metadata = {
  title: "Contact Us | IntoArt",
  description: "Get in touch with the IntoArt team to discuss your project.",
};

export default function ContactUs() {
  return (
    <section className="py-4 sm:py-6">
      <div className="max-w-3xl mx-auto">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Contact Us
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600">
            Tell us about your goals and timeline. We’ll respond within 1–2
            business days.
          </p>
        </header>

        <form className="mt-8 grid gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={5}
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
              placeholder="What would you like to build?"
            />
          </div>
          <div>
            <button
              type="button"
              className="bg-brand-brown hover:bg-brand-brown-dark text-white px-6 py-3 rounded font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Send Message (placeholder)
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
