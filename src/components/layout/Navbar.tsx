import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "resume" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    // 1. Önce mobil menüyü kapat
    setMobileOpen(false);

    // 2. Mobil menü kapanırken/DOM yenilenirken scroll işlemini güvenli bir gecikmeyle çalıştır
    setTimeout(() => {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="relative mx-auto flex max-w-6xl items-center justify-between md:justify-center px-6 py-4 lg:px-8"
      >
        {/* Masaüstü Menüsü */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`relative rounded-md px-4 py-2 text-sm transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-ink"
                    : "text-ink-secondary hover:text-ink"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-px h-px bg-accent-blue"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobil Menü Butonu */}
        <div className="flex w-full justify-end md:hidden">
          <button
            type="button"
            className="text-ink p-1 focus:outline-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobil Açılır Menü */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-bg/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`block rounded-md px-3 py-2.5 text-base transition-colors ${
                      activeSection === item.id
                        ? "text-ink font-medium"
                        : "text-ink-secondary"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}