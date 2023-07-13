"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome2, IconUser, IconZzz } from "@tabler/icons-react";
import { SignedIn } from "@clerk/nextjs";
export default function MobileFooter() {
  const pathname = usePathname();
  const links = [
    { name: "Home", path: "", icon: <IconHome2 /> },
    { name: "Dream Log", path: "new-dream", icon: <IconZzz /> },
    { name: "Profile", path: "profile", icon: <IconUser /> },
  ];

  const mappedLinks = links.map((link, i) => {
    const isActive =
      pathname.split("/")[1] == link.path || pathname == link.path;

    return (
      <Link
        href={"/" + link.path}
        key={i}
        className={isActive ? "active text-secondary" : ""}
      >
        {link.icon}
        <span className="btm-nav-link text-xs">{link.name}</span>
      </Link>
    );
  });

  return (
    <SignedIn>
      <nav className="btm-nav btm-nav-sm text-white md:hidden">
        {mappedLinks}
      </nav>
    </SignedIn>
  );
}
