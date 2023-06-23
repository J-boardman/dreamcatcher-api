import Image from "next/image";
import Link from "next/link";

export default function Header() {
  // return (
  //   <header className="flex items-center justify-between gap-8 py-4">
        // <Link className="ml-4" href="/">
        //   <Image
        //     src="/logo-transparent-white.png"
        //     width={300}
        //     height={25}
        //     alt="Dreamcatcher logo"
        //     // sizes="min-width(768px) 100px"
        //   />
        // </Link>
  //       <nav>
  //         <button className="btn btn-circle btn-secondary">JB</button>
  //       </nav>
  //   </header>
  // );
  return (
    <header className="navbar">
      <div className="flex-2 px-2 lg:flex-none">
      <Link href="/">
          <Image
            src="/logo-transparent-white.png"
            width={300}
            height={25}
            alt="Dreamcatcher logo"
            // sizes="min-width(768px) 100px"
          />
        </Link>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex">
          <div className="dropdown dropdown-end dropdown-hover">
            <label tabIndex={0} className="btn btn-circle btn-secondary">
              JB
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 pt-2"
            >
              <li>
                <Link href={"/new-dream"}>Account</Link>
              </li>
              <li>
                <Link href={"/new-dream"}>New Dream</Link>
              </li>
              <li>
                <Link href={"/dreams"}>Dreams</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
