import { ReactNode } from "react";
import NavLinks from "../NavLinks";
import Header from "./Header";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Drawer({ children }: { children: ReactNode }) {
  return (
    <section className="drawer drawer-end mx-auto max-w-4xl px-4">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <section className="drawer-content grid h-[100svh] grid-rows-[min-content,_1fr,_min-content]">
        <Header />
        {/* Page content here */}
        {children}
      </section>
      <div className="drawer-side">
        {/* Sidebar */}
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu h-full w-48 bg-base-200 py-12 font-semibold">
          <li className="ml-auto">
            <SignedIn>
              <UserButton afterSignOutUrl="/"/>
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </li>
          <NavLinks />
        </ul>
      </div>
    </section>
  );
}
