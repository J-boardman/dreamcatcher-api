import Image from "next/image";
import Link from "next/link";

export default function UserAvatar({
  profilePictureURL = "https://avatars.dicebear.com/api/open-peeps/stefan.svg",
  primaryText = "Stefan Higgity",
  secondaryText = "1hr ago",
  userProfileLink = "/profile/1",
  largeAvatarCard = false
}: {
  profilePictureURL?: string;
  primaryText?: string;
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
            <h1 className="text-center text-xl font-bold md:text-left md:text-4xl">
              <span className="text-secondary">{primaryText}</span>&apos;s
              stories
            </h1>
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
