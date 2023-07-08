import FollowButton from "@/components/FollowButton";
import StoryCard from "@/components/StoryCard";
import UserAvatar from "@/components/user/UserAvatar";
import { getUser } from "@/lib/actions";
import Image from "next/image";

export default async function page({ params }: { params: { id: number } }) {
  const { id } = params;
  const { username, firstName, lastName } = await getUser(id);

  const userTitle = (
    <h1 className="text-center text-xl font-bold md:text-left md:text-4xl">
      <span className="text-secondary">{username}</span>&apos;s stories
    </h1>
  );

  return (
    <main className="flex max-h-full flex-col overflow-scroll">
      <div className="flex items-center justify-between">
        <div className="my-4">
          <UserAvatar
            primaryText={userTitle}
            secondaryText="99 followers"
            largeAvatarCard={true}
          />
        </div>
        <FollowButton />
      </div>

      <section className="flex max-h-full flex-col gap-4 overflow-scroll rounded-t-lg pb-20">
        {Array.from({ length: 4 }, (x, i) => (
          <StoryCard key={i} showUserDetails={false} />
        ))}
      </section>
    </main>
  );
}
