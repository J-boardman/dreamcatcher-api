import Image from "next/image";
import Link from "next/link";

export default function UserAvatar({
  profilePictureURL = "https://avatars.dicebear.com/api/open-peeps/stefan.svg",
  primaryText = "Stefan Higgity",
  secondaryText = "1hr ago",
  userAccountLink = "/account/1"
} : {
  profilePictureURL ?: string
  primaryText?: string
  secondaryText?: string
  userAccountLink?: string
}) {
  return (
    <div className="flex items-center space-x-3">
      <div className="avatar">
        <Link href={userAccountLink} className="mask mask-squircle w-full md:w-12 h-12">
          <Image
            src={profilePictureURL}
            alt="Avatar Tailwind CSS Component"
            width={48}
            height={48}
          />
        </Link>
      </div>
      <div>
        <Link href={userAccountLink} className="font-bold">{primaryText}</Link>
        <div className="text-sm opacity-50">{secondaryText}</div>
      </div>
    </div>
  );
}
