import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import logo from "../assets/images/Logo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Staff", path: "/staff" },
  { name: "Apply", path: "/apply" },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" },
  { name: "Creative Corner", path: "/creative-corner" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        
    
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-3">
        <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center">
            <img
            src={logo}
            alt="Phafane Secondary School logo"
            className="h-full w-full object-contain"
            />
        </div>

        <div className="leading-tight">
            <h1 className="text-lg md:text-xl font-bold text-[#003366]">
            Phafane
            </h1>
            <p className="text-[10px] md:text-xs uppercase tracking-wider text-[#003366]/70">
            Secondary School
            </p>
        </div>
        </Link>


        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors
                  ${active
                    ? "text-[#003366]"
                    : "text-[#003366]/70 hover:text-[#003366]"
                  }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FFD700] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/apply"
            className="ml-4 inline-flex items-center rounded-full bg-[#FFD700] px-5 py-2 text-sm font-semibold text-[#003366] hover:bg-[#003366] hover:text-[#FFD700] transition"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[#003366] hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white">
          <ul className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 text-base font-medium
                      ${active
                        ? "text-[#003366]"
                        : "text-[#003366]/70 hover:text-[#003366]"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4">
              <Link
                to="/apply"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center rounded-full bg-[#FFD700] py-2 font-semibold text-[#003366]"
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
