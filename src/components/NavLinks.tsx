import Link from "next/link";

export default function NavLinks(){
  
  return (
    <>
      <li><Link href="/feed">Latest stories</Link></li>
      <li><Link href="/new-dream">Log a dream</Link></li>
      <li><Link href="/dreams">Your stories</Link></li>
      <li><Link href="/account">Account</Link></li>
    </>
  )
};