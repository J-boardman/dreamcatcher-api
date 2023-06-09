import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavLinks(){
  
  return (
    <>
      <li><Link href="/">Newsfeed</Link></li>
      <li><Link href="/new-dream">Dream Journal</Link></li>
      <li><Link href="/profile">Profile</Link></li>
    </>
  )
};