import { useState, useEffect } from "react"
import { Leaf, Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation() // بنجيب المسار الحالي

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/rewards", label: "Rewards" },
    { path: "/challenges", label: "Challenges" },
    { path: "/submit", label: "Submit-Challenges" },
    { path: "/contact", label: "Contact" },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* اللوجو */}
          <div className="flex items-center gap-2"> <img src="/Logo.jpg" alt="Earth Guardians Logo" className="w-42 h-32 md:w-28 md:h-19 object-cover" />
            <span className="text-xl md:text-2xl font-semibold text-emerald-500">
              EarthGuardins
            </span>
          </div>

          {/* اللينكات */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-bold transition-colors ${
                  location.pathname === link.path
                    ? "text-emerald-600" // active link
                    : "text-gray-500 hover:text-emerald-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Sign In & Sign Up */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/signin"
              className="bg-emerald-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-white text-emerald-600 font-bold px-4 py-2 rounded-lg border border-emerald-500 hover:bg-gray-100 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* زر الموبايل */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? "text-gray-900" : "text-emerald-600"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* موبايل منيو */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white shadow-lg rounded-b-lg space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? "bg-emerald-100 text-emerald-600 font-bold"
                    : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/signin"
              className="block px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="block px-4 py-2 bg-gray-100 text-emerald-600 rounded-lg border border-emerald-500 hover:bg-gray-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
