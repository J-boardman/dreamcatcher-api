import Link from "next/link";

export default function ProfileNavbar({ focused } : { focused: string}){
  
  return (
    <nav>
      <Link className={`btn btn-ghost ${focused == "stories" ? "text-secondary" : ""}`} href="/profile">
        Stories
      </Link>
      <Link className={`btn btn-ghost ${focused == "dreams" ? "text-secondary" : ""}`} href="/profile/dreams">
        Dreams
      </Link>
      <Link className={`btn btn-ghost ${focused == "likes" ? "text-secondary" : ""}`} href="/profile/likes">
        Liked Stories
      </Link>
    </nav>
  )
};