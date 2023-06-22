import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-8 py-4">
        <Link className="ml-4" href="/">
          <Image
            src="/logo-transparent-white.png"
            width={300}
            height={25}
            alt="Dreamcatcher logo"
            // sizes="min-width(768px) 100px"
          />
        </Link>
        <nav>
          <button className="btn btn-circle btn-secondary">JB</button>
        </nav>
    </header>
  );
}
