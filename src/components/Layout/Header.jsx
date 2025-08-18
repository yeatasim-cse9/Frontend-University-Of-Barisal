import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Faculty", path: "/faculty" },
  { name: "Programs", path: "/programs" },
  { name: "Research", path: "/research" },
  { name: "Students", path: "/students" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
      <nav className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span className="text-white font-bold text-lg">BU</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-900">
              CSE Department
            </span>
            <span className="text-xs text-gray-500 -mt-1">
              University of Barishal
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-blue-600 bg-blue-50 shadow-md transform scale-105"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:scale-105"
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="px-6 py-4 space-y-2">
            {navLinks.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                  onClick={() => setMobileOpen(false)}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
