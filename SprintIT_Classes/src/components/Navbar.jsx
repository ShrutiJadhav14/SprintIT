import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Placement", path: "/placement" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 
      bg-[var(--navbar-dark)] 
      ${scrolled ? "shadow-lg shadow-black/40 backdrop-blur" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          <span className="text-white">Sprint</span>
          <span className="text-[var(--accent)]">IT</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.path}
                className="hover:text-[var(--accent)] transition"
              >
                {item.name}
              </Link>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 
              bg-[var(--accent-glow)] transition-all duration-300 
              group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--navbar-dark)] border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 space-y-4 text-sm font-semibold">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-[var(--accent)] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
