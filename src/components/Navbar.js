"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuPanelRef = useRef(null);
  const menuTriggerRef = useRef(null);
  const isLinkActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname && pathname.startsWith(href);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Sticky navbar effect (throttled via rAF)
  useEffect(() => {
    // Set initial scroll state to prevent hydration mismatch
    setIsScrolled(window.scrollY > 50);

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on escape key, prevent background scroll, and trap focus in menu
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";

      // Focus trap
      const panel = menuPanelRef.current;
      if (panel) {
        const focusable = panel.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (first && typeof first.focus === "function") first.focus();

        const handleTab = (e) => {
          if (e.key !== "Tab") return;
          if (focusable.length === 0) return;
          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        };
        panel.addEventListener("keydown", handleTab);
        return () => {
          panel.removeEventListener("keydown", handleTab);
        };
      }
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`bg-white shadow-md py-4 px-6 sticky top-0 z-40 motion-safe:transition-all duration-300 ${
          isScrolled
            ? "shadow-lg bg-white/95 backdrop-blur-sm border-b border-gray-100"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center"
              aria-label="IntoArt Home"
            >
              <Image
                src="/logo.png"
                alt="IntoArt Logo"
                width={180}
                height={70}
                className="h-16 w-auto"
                priority
                sizes="(max-width: 768px) 140px, 180px"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isLinkActive(link.href) ? "page" : undefined}
                    className={`motion-safe:transition-colors duration-200 font-medium ${
                      isLinkActive(link.href)
                        ? "text-amber-600 font-semibold"
                        : "text-gray-700 hover:text-amber-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop CTA Button */}
          <div className="flex-shrink-0 hidden md:block">
          <Link href="/book-consultation">
            <button className="bg-brand-brown hover:bg-brand-brown-dark text-white px-6 py-2 rounded font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none active:outline-none">
              Book Your Consultation
            </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-amber-600 p-2 motion-safe:transition-colors duration-200 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              ref={menuTriggerRef}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`md:hidden fixed inset-0 z-50 motion-safe:transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black motion-safe:transition-opacity duration-300 ease-in-out ${
            isMobileMenuOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={closeMobileMenu}
          style={{ willChange: "opacity" }}
        />

        <div
          id="mobile-menu"
          ref={menuPanelRef}
          className={`absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform motion-safe:transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ willChange: "transform, opacity" }}
        >
          <div
            className="p-6 h-full flex flex-col"
            aria-label="Mobile navigation"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-amber-600 p-2 transition-colors duration-200 focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-4 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isLinkActive(link.href) ? "page" : undefined}
                  className={`text-lg py-3 border-b border-gray-100 motion-safe:transition-all duration-200 hover:pl-2 transform hover:scale-105 ${
                    isLinkActive(link.href)
                      ? "text-amber-600 font-semibold"
                      : "text-gray-700 hover:text-amber-600"
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-4 text-sm text-gray-600">
              <p className="flex items-center mb-2">
                <span>📧</span>
                <span className="ml-2">hello@intoart.com</span>
              </p>
              <p className="flex items-center">
                <span>📞</span>
                <span className="ml-2">+1 (555) 123-4567</span>
              </p>
            </div>

            {/* Mobile CTA Button */}
            <div className="pt-6 border-t border-gray-200">
            <Link href="/book-consultation">
              <button
                className="bg-brand-brown hover:bg-brand-brown-dark text-white px-6 py-3 rounded font-medium transition-all duration-200 shadow-lg hover:shadow-xl w-full transform hover:scale-105 active:scale-95 focus:outline-none"
                onClick={closeMobileMenu}
              >
                Book Your Consultation
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
