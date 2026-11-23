import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar({cartCount}) {
  const {token, logout}= useAuth();

  return (
    <nav className="flex items-center justify-between gap-3 px-5 py-3">

      {/* LOGO */}
      <Link to="/" className="flex items-center gap-3">
        <span className="block w-6 h-6 rounded-sm bg-white"></span>
        <h2 className="text-white text-xl font-semibold sm:text-2xl">DibiTech</h2>
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden items-center justify-center gap-7 text-[#928788] md:flex">
        <Link to="/" className="transition hover:text-white">
          Home
        </Link>
        <Link to="/Users" className="transition hover:text-white">
          Users
        </Link>
        
        {token ? (
          <button
            onClick={logout}
            className="transition hover:text-red-400"
          >
          Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="transition hover:text-white"
          >
            Login
          </Link>
        )}

        <a 
          href="#cart" 
          className="flex items-center justify-center gap-2 rounded-full text-white bg-[#192135] px-5 py-2 hover:bg-[#262b3d]">
              <img src="/iconkeranjang.png" alt="cart" className="w-5 h-5" />
              Cart
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1558ff]">{cartCount}</span>
        </a>        
      </div>

      {/* MOBILE HAMBURGER MENU */}
      <details className="group relative md:hidden">
        <summary aria-label="Buka menu" className="flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-lg border border-[#928788]">
          <span className="h-0.5 w-5 rounded bg-white"></span>
          <span className="h-0.5 w-5 rounded bg-white"></span>
          <span className="h-0.5 w-5 rounded bg-white"></span>
        </summary>
        <nav className="absolute right-0 top-full z-10 mt-2 hidden w-40 flex-col gap-3 rounded-xl border border-[#252937] bg-[#0c1120] p-4 text-[#928788] shadow-lg group-open:flex">
          <Link to="/" className="hover:text-white">
              Home
          </Link>

          <Link to="/users" className="hover:text-white">
              Users
          </Link>

          {token ? (
              <button
                  onClick={logout}
                  className="text-left hover:text-red-400"
              >
                  Logout
              </button>
          ) : (
              <Link to="/login" className="hover:text-white">
                  Login
              </Link>
          )}
          <a
            href="/#cart"
            className="flex items-center gap-2 border-t border-white/10 pt-3 text-white"
          >
            <img src="/iconkeranjang.png" alt="Cart" className="w-5"/>
            Cart
            <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-full bg-[#1558ff] text-sm">{cartCount}</span>
          </a>
        </nav>
      </details>
    </nav>
  );
}

export default Navbar;
