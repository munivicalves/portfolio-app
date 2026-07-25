import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

function Navbar({ darkMode, toggleTheme }) {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const logo = darkMode
    ? "/assets/logo-light.png"
    : "/assets/logo-dark.png";

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Sobre",
      path: "/about",
    },
    {
      name: "Portfólio",
      path: "/portfolio",
    },
  ];

  return (
    <header className="sticky top-4 z-50 px-5">
      <nav
        className="
          mx-auto
          w-full
          max-w-[1540px]
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          px-8
          py-4
          shadow-lg
        "
      >

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="h-10 transition duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`transition duration-300 ${
                  location.pathname === link.path
                    ? "font-semibold text-pink-500"
                    : "text-[var(--text-color)] hover:text-pink-500"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop direita */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="rounded-xl p-2 transition hover:bg-white/10"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" size={20} />
            ) : (
              <Moon className="text-indigo-500" size={20} />
            )}
          </button>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 transition hover:bg-white/10 md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* Menu Mobile */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 rounded-2xl border border-white/10 bg-[var(--navbar-bg)]/95 p-4 shadow-xl backdrop-blur-xl">

          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 transition ${
                location.pathname === link.path
                  ? "bg-pink-500 text-white"
                  : "hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="mt-2 flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-white/10"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            {darkMode ? "Modo claro" : "Modo escuro"}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;