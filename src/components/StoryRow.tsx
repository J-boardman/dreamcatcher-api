import Image from "next/image";
import Link from "next/link";
import Modal from "./layout/Modal";
import ShareStoryForm from "./forms/ShareStoryForm";
import LikeButton from "./buttons/LikeButton";
import CommentButton from "./buttons/CommentButton";

export default function StoryRow({ feedType }: { feedType: string }) {
  return (
    <tr>
      <th className="hidden md:block">
        <label>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <Link href={"/dreams/1"} className="mask mask-squircle h-16 w-16">
                <Image
                  src="/story-cover.jpg"
                  alt="Avatar Tailwind CSS Component"
                  height={64}
                  width={64}
                />
              </Link>
            </div>
          </div>
        </label>
      </th>
      <td>
        <Link href={"/dreams/1"} className="text-xs sm:text-base font-bold">
          Phoenix&apos;s Flight: A Tale of Courage and Hope
        </Link>
      </td>
      <td>
        {feedType == "created" ? (
          <Modal
            openButtonText="Share"
            openButtonClasses="btn-ghost text-secondary btn-xs"
            content={<ShareStoryForm />}
          />
        ) : (
          <LikeButton hideText={true} />
        )}
      </td>
      <th>
        {feedType == "created" ? (
          <button className="btn-ghost btn-xs btn text-error">Delete</button>
        ) : (
          <CommentButton hideText={true}/>
        )}
      </th>
    </tr>
  );
}
