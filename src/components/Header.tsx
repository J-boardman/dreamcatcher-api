import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="w-full navbar">
      <section className="flex-1">
        <Link href="/">
          <Image
            src="/logo-transparent-white.png"
            width={300}
            height={25}
            alt="Dreamcatcher logo"
          />
        </Link>
        <div className="flex-none md:hidden ml-auto">
          <label htmlFor="my-drawer-3" className="btn btn-circle btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
      </section>
      <nav className="flex-none hidden md:block">
        <ul className="menu menu-horizontal font-semibold">
          {/* Navbar menu content here */}
          <NavLinks />
        </ul>
      </nav>
    </header>
  );
}
