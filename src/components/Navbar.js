import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Far Left */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-serif font-bold text-gray-800">
            DesignElite
          </Link>
        </div>

        {/* Navigation Links - Center */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA Button - Far Right */}
        <div className="flex-shrink-0">
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
            Book Your Consultation
          </button>
        </div>

        {/* Mobile Menu Button (Optional) */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-amber-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}