import Image from "next/image";

export default function UserAvatar({
  profilePictureURL = "https://avatars.dicebear.com/api/open-peeps/stefan.svg",
  primaryText = "Stefan Higgity",
  secondaryText = "1hr ago",
} : {
  profilePictureURL ?: string
  primaryText?: string
  secondaryText?: string
}) {
  return (
    <div className="flex items-center space-x-3">
      <div className="avatar">
        <div className="mask mask-squircle w-full md:w-12 h-12">
          <Image
            src={profilePictureURL}
            alt="Avatar Tailwind CSS Component"
            width={48}
            height={48}
          />
        </div>
      </div>
      <div>
        <div className="font-bold">{primaryText}</div>
        <div className="text-sm opacity-50">{secondaryText}</div>
      </div>
    </div>
  );
}
