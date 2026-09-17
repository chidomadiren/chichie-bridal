import { Link } from "react-router-dom";
import InstallButton from "./InstallButton";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#f0dfe4] bg-[#fffaf8]/90 shadow-[0_15px_45px_rgba(72,39,40,0.06)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8dfe4] text-lg shadow-sm">
            💍
          </span>
          <span className="text-2xl font-bold tracking-[0.08em] text-[#3f2a27]">
            Chichie Bridal
          </span>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-semibold text-[#584544] md:flex">
          <Link to="/" className="transition hover:text-[#b76e79]">
            Home
          </Link>
          <Link to="/dresses" className="transition hover:text-[#b76e79]">
            Dresses
          </Link>
          <Link to="/about" className="transition hover:text-[#b76e79]">
            About
          </Link>
          <Link to="/contact" className="transition hover:text-[#b76e79]">
            Contact
          </Link>
          <InstallButton />
        </div>

        <div className="md:hidden">
          <InstallButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;