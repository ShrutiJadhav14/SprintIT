import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 overflow-hidden">

      {/* Subtle Ambient Glow (Performance Friendly) */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 
                      w-80 h-80 bg-cyan-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-14">

        {/* Main Content */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 tracking-wide">
              Sprint IT Academy
            </h3>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
              Industry-focused IT training with real-world projects, expert
              mentors, and placement support.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h4 className="text-slate-200 font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h4 className="text-slate-200 font-semibold mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Pune, India</li>
              <li>
                <a
                  href="mailto:info@sprintitacademy.com"
                  className="hover:text-cyan-400 transition"
                >
                  info@sprintitacademy.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="hover:text-cyan-400 transition"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </address>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          © 2026{" "}
          <span className="text-slate-300 font-medium">
            Sprint IT Academy
          </span>
          . All rights reserved.
        </div>

      </div>
    </footer>
  );
}
