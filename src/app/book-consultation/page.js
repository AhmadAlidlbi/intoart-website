export const metadata = {
  title: "Book Consultation | IntoArt",
  description:
    "Schedule a free consultation to discuss your project with IntoArt.",
};

export default function BookConsultation() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-6 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Book your Consultation
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation to discuss your project.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
          </div>
        </header>

        {/* Book your Consultation Form */}
        <div className="mb-12 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold text-white">
                  Book your Consultation
                </h2>
                <p className="text-amber-100 text-sm mt-1">
                  Schedule a free consultation to discuss your project
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <form className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Building Condition *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 cursor-pointer">
                    <input
                      type="radio"
                      name="buildingCondition"
                      value="new"
                      className="mr-3 text-amber-600 focus:ring-amber-600 w-4 h-4"
                      required
                    />
                    <span className="text-sm font-medium text-gray-700">
                      New building
                    </span>
                  </label>
                  <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 cursor-pointer">
                    <input
                      type="radio"
                      name="buildingCondition"
                      value="restoration"
                      className="mr-3 text-amber-600 focus:ring-amber-600 w-4 h-4"
                      required
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Restoration
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Other Details
                </label>
                <input
                  type="text"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  placeholder="Additional details about your building"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3">
                  Selected Design Package *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 cursor-pointer">
                    <input
                      type="radio"
                      name="designPackage"
                      value="two-space"
                      className="mr-3 text-amber-600 focus:ring-amber-600 w-4 h-4"
                      required
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Two-space design package
                    </span>
                  </label>
                  <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 cursor-pointer">
                    <input
                      type="radio"
                      name="designPackage"
                      value="four-space"
                      className="mr-3 text-amber-600 focus:ring-amber-600 w-4 h-4"
                      required
                    />
                    <span className="text-sm font-medium text-gray-700">
                      4-space design package
                    </span>
                  </label>
                  <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 cursor-pointer">
                    <input
                      type="radio"
                      name="designPackage"
                      value="five-space"
                      className="mr-3 text-amber-600 focus:ring-amber-600 w-4 h-4"
                      required
                    />
                    <span className="text-sm font-medium text-gray-700">
                      5-space design package
                    </span>
                  </label>
                  <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 cursor-pointer">
                    <input
                      type="radio"
                      name="designPackage"
                      value="floor"
                      className="mr-3 text-amber-600 focus:ring-amber-600 w-4 h-4"
                      required
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Floor design package
                    </span>
                  </label>
                  <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl hover:border-amber-300 hover:bg-amber-50 transition-all duration-200 cursor-pointer col-span-1 sm:col-span-2 lg:col-span-1">
                    <input
                      type="radio"
                      name="designPackage"
                      value="complete"
                      className="mr-3 text-amber-600 focus:ring-amber-600 w-4 h-4"
                      required
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Complete Coupon Design Package
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Free consultation date *
                </label>
                <input
                  type="date"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Book Consultation
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
