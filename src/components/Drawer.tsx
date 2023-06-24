import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import NavLinks from "./NavLinks";

export default function Drawer({ children } : { children: ReactNode } ){
  
  return (
  <div className="drawer drawer-end max-w-4xl mx-auto px-4 h-[100svh]">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content h-[100svh] overflow-scroll  grid grid-rows-[min-content,_1fr,_min-content]">
    {/* Navbar */}
    <div className="w-full navbar">
      <div className="flex-1">
      <Link href="/">
          <Image
            src="/logo-transparent-white.png"
            width={300}
            height={25}
            alt="Dreamcatcher logo"
            // sizes="min-width(768px) 100px"
          />
        </Link>
        <div className="flex-none md:hidden ml-auto">
        <label htmlFor="my-drawer-3" className="btn btn-circle btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      </div>
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal font-semibold">
          {/* Navbar menu content here */}
          <NavLinks />
        </ul>
      </div>
    </div>
    {/* Page content here */}
    {children}
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu py-12 w-48 h-full bg-base-200 font-semibold">
      {/* Sidebar content here */}
      <NavLinks />  
    </ul>
    
  </div>
</div>
  )
};