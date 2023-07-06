import { ReactNode } from "react";
import NavLinks from "../NavLinks";
import Header from "./Header";

export default function Drawer({ children }: { children: ReactNode }) {
  return (
    <section className="drawer drawer-end max-w-4xl mx-auto px-4">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <section className="drawer-content h-[100svh] grid grid-rows-[min-content,_1fr,_min-content]">
        <Header />
        {/* Page content here */}
        {children}
      </section>
      <div className="drawer-side">
        {/* Sidebar */}
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu py-12 w-48 h-full bg-base-200 font-semibold">
          <NavLinks /> 
        </ul>
      </div>
    </section>
  );
}
