"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const MapEmbed = dynamic(() => import("./MapEmbed"), { ssr: false });

export default function Footer() {
  const year = new Date().getFullYear();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const services = [
    "Web Design",
    "Brand Identity",
    "UI/UX Design",
    "Digital Strategy",
  ];

  return (
    <footer className="bg-gray-50 text-gray-600 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Section */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="IntoArt Home"
              className="inline-flex items-center"
            >
              <Image
                src="/logo.png"
                alt="IntoArt Logo"
                width={160}
                height={60}
                className="h-14 w-auto"
                loading="lazy"
              />
            </Link>
            <p className="mt-5 text-sm leading-6 text-gray-600 max-w-xs">
              We craft elegant digital experiences that elevate brands and drive
              results.
            </p>

            {/* Socials */}
            <div
              className="mt-6 flex items-center space-x-4"
              aria-label="Social media"
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.01 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.78 8.44-4.93 8.44-9.94Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2H21l-6.5 7.43L22.5 22h-5.633l-4.4-5.744L6.4 22H3.644l7.036-8.04L1.5 2h5.76l3.983 5.28L18.244 2Zm-1.977 18h1.722L7.8 4h-1.8l10.267 16Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.94 7.5H3.56V20h3.38V7.5ZM5.25 3.5a2 2 0 1 0 0 4.001 2 2 0 0 0 0-4Zm6.94 6.1h-3.2V20h3.2v-6.3c0-1.66.6-2.8 2.1-2.8 1.13 0 1.72.78 1.72 2.8V20h3.2v-7.26c0-3.7-1.98-5.42-4.63-5.42-2.14 0-3.08 1.18-3.6 2.01h-.06V9.6Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM18.3 6.2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold tracking-wide">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold tracking-wide">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((item) => (
                <li
                  key={item}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Head Office Map */}
          <div>
            <h3 className="text-gray-900 font-semibold tracking-wide">
              Head Office
            </h3>
            <p className="mt-5 text-sm text-gray-600">Find us on the map.</p>
            <div className="mt-5 rounded-md overflow-hidden border border-gray-200 bg-white">
              <MapEmbed />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-gray-600">
            © {year} IntoArt. All rights reserved.
          </p>
          <div className="mt-3 md:mt-0 flex items-center space-x-6">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
