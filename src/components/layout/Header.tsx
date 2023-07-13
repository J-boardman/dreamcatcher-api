import Image from "next/image";
import Link from "next/link";
import NavLinks from "../NavLinks";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="w-full navbar justify-center md:justify-between">
        <Link href="/">
          <Image
            src="/logo-transparent-white.png"
            width={300}
            height={25}
            alt="Dreamcatcher logo"
          />
        </Link>
      <nav className="hidden md:flex gap-4 ">
        <SignedIn>
        <ul className="menu menu-horizontal font-semibold">
          {/* Navbar menu content here */}
          <NavLinks />
        </ul>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </nav>
    </header>
  );
}
