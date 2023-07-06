import FollowButton from "@/components/FollowButton";
import StoryCard from "@/components/StoryCard";
import { getUser } from "@/lib/actions";
import Image from "next/image";

export default async function page({ params }: { params: { id: number } }) {
  const { id } = params;
  const { username, firstName, lastName } = await getUser(id);
  return (
    <main className="flex max-h-full flex-col overflow-scroll">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 my-4">
          <div className="mask mask-circle w-16 h-16 bg-base-200 ">
            <Image
              src={"https://avatars.dicebear.com/api/open-peeps/stefan.svg"}
              alt="Avatar Tailwind CSS Component"
              width={64}
              height={64}
            />
          </div>
          <h1 className="my-4 text-center text-xl md:text-4xl font-bold md:text-left">
            <span className="text-secondary">{username}</span>&apos;s stories
          </h1>
        </div>
        <FollowButton />
      </div>

      <section className="flex max-h-full flex-col gap-4 overflow-scroll rounded-t-lg pb-20">
        {Array.from({ length: 4 }, (x, i) => (
          <StoryCard key={i} showUserDetails={false}/>
        ))}
      </section>
    </main>
  );
}
