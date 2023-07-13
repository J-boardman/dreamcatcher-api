import Image from "next/image";
import Link from "next/link";
import NavLinks from "../NavLinks";
import { SignedIn, UserButton, auth } from "@clerk/nextjs";

export default async function Header() {
  const {user} = auth()
  return (
    <header className={`w-full navbar gap-4 ${user ? "justify-between" : "justify-center"}`}>
        <Link href="/">
          <Image
            src="/logo-transparent-white.png"
            width={300}
            height={25}
            alt="Dreamcatcher logo"
            className={`sm:max-w-none ${user ? " max-w-[80%]" : ""}`}
          />
        </Link>
      <nav className=" gap-4 ">
        <SignedIn>
        <ul className="hidden md:flex menu menu-horizontal font-semibold">
          {/* Navbar menu content here */}
          <NavLinks />
        </ul>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </nav>
    </header>
  );
}
