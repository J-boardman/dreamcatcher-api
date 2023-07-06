import Link from "next/link";

export default function NavLinks(){
  
  return (
    <>
      <li><Link href="/">Newsfeed</Link></li>
      <li><Link href="/new-dream">Dream Journal</Link></li>
      <li><Link href="/dreams">Stories</Link></li>
      <li><Link href="/profile/1">Profile</Link></li>
    </>
  )
};