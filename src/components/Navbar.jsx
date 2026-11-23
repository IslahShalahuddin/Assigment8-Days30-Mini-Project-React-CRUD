import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function Navbar({cartCount}) {
  const {token, logout}= useAuth();

  return (
    <nav className="border-t border-gray-800 px-5 py-6 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <span className="block w-6 h-6 rounded-sm bg-white"></span>
          <h2 className="text-white text-xl font-semibold sm:text-2xl">DibiTech</h2>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center justify-center gap-7 text-white md:flex">
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

          <Link
              to="/add-product"
              className="rounded-full bg-[#4f39f6] px-5 py-2 transition hover:bg-indigo-500"
            >
            + Add Product
          </Link>         
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
            )};
            <Link
              to="/add-product"
              className="text-white hover:text-indigo-400"
            >
              + Add Product
            </Link>
          </nav>
        </details>
      </div>      
    </nav>
  );
}

export default Navbar;
