import Link from "next/link";
import Image from "next/image";
import UserAvatar from "./user/UserAvatar";
import LikeButton from "./buttons/LikeButton";
import CommentButton from "./buttons/CommentButton";
import { BookOpenIcon } from "@heroicons/react/20/solid"
import FollowButton from "./FollowButton";

export default function FeedItem() {
  return (
    <section className="join-vertical join">
      <section className="join-item flex items-center justify-between bg-base-200 p-4">
        <div className="flex w-full items-center justify-between">
          <UserAvatar />
          <FollowButton />
        </div>
      </section>
      <article className="card card-side join-item hidden bg-base-200 p-4 sm:flex">
        <div className="avatar">
          <div className="h-32 w-32 sm:mask sm:mask-squircle md:h-64 md:w-64">
            <Image
              src="/story-cover.jpg"
              alt="Avatar Tailwind CSS Component"
              height={256}
              width={256}
            />
          </div>
        </div>
        <div className="px-4 md:py-4">
          <h2 className="text-md pb-4 font-bold md:text-2xl">
            Phoenix&apos;s Flight: A Tale of Courage and Hope
          </h2>
          <p>
            In &quot;Phoenix&apos;s Flight: A Tale of Courage and Hope,&quot; a
            young protagonist finds themselves in a heart-pounding predicament
            when their house suddenly becomes engulfed in flames. Amidst the
            chaos and danger, they embark on a harrowing journey, desperately
            running for their life. Through adversity and fear, they discover
            inner strength they never knew they possessed.
          </p>
        </div>
      </article>
      <label className="swap join-item rounded-lg bg-base-200 px-4 sm:hidden">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        <div className="swap-on">
          <div className="grid h-72 w-72 place-items-center overflow-scroll rounded-3xl bg-base-100 px-4">
            <h2 className="text-md font-bold">
              Phoenix&apos;s Flight: A Tale of Courage and Hope
            </h2>
            <p className="text-sm">
              In &quot;Phoenix&apos;s Flight: A Tale of Courage and Hope,&quot;
              a young protagonist finds themselves in a heart-pounding
              predicament when their house suddenly becomes engulfed in flames.
              Amidst the chaos and danger, they embark on a harrowing journey,
              desperately running for their life.
            </p>
          </div>
        </div>
        <div className="swap-off">
          <div className="avatar">
            <div className="h-72 w-72 rounded-3xl">
              <Image
                src="/story-cover.jpg"
                alt="Avatar Tailwind CSS Component"
                width={320}
                height={320}
              />
            </div>
          </div>
        </div>
      </label>
      <section className="join-item flex w-full justify-between bg-base-200 p-4">
        <LikeButton />
        <CommentButton />
        <Link href="/dreams/1" className="btn-ghost btn ml-auto">
          <BookOpenIcon className="h-6 w-6"/>
          Read <span className="hidden sm:inline-flex">more</span>
        </Link>
      </section>
    </section>
  );
}
