import Link from "next/link";

export default function NavLinks(){
  
  return (
    <>
      <li><Link href="/feed">Newsfeed</Link></li>
      <li><Link href="/new-dream">Dream Journal</Link></li>
      <li><Link href="/dreams">Stories</Link></li>
      <li><Link href="/account">Account</Link></li>
    </>
  )
};