import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4">
        <Link className="mx-4" href="/">
          <Image
            src="/logo-transparent-white.png"
            width={400}
            height={25}
            alt="Dreamcatcher logo"
          />
        </Link>
        <nav>
          <button className="btn btn-circle btn-secondary">JB</button>
        </nav>
    </header>
  );
}
