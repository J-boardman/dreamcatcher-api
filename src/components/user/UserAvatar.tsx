import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export default function UserAvatar({
  profilePictureURL = "https://avatars.dicebear.com/api/open-peeps/stefan.svg",
  primaryText = "Stefan Higgity",
  secondaryText = "1hr ago",
  userProfileLink = "/user/1",
  largeAvatarCard = false
}: {
  profilePictureURL?: string;
  primaryText?: ReactNode | string;
  secondaryText?: string;
  userProfileLink?: string;
  largeAvatarCard?: boolean
}) {
  return (
    <div className="flex items-center space-x-3">
      <div className="avatar">
        <Link
          href={userProfileLink}
          className={`mask ${largeAvatarCard ? " mask-circle bg-base-100 w-16 h-16" : "mask-squircle w-12 h-12"}`}
        >
          <Image
            src={profilePictureURL}
            alt="Avatar Tailwind CSS Component"
            width={largeAvatarCard ? 64 : 48}
            height={largeAvatarCard ? 64 : 48}
          />
        </Link>
      </div>
      <div>
        {largeAvatarCard ? (
          <>
          {primaryText}
            <p>{secondaryText}</p>
          </>
        ) : (
          <>
            <Link href={userProfileLink} className="font-bold">
              {primaryText}
            </Link>
            <div className="text-sm opacity-50">{secondaryText}</div>
          </>
        )}
      </div>
    </div>
  );
}
