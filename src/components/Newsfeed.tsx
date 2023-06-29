"use client";

import { useState } from "react";
import FeedButtons from "./FeedButtons";
import Image from "next/image";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import Modal from "./Modal";
import CommentSection from "./CommentSection";

export default function Newsfeed() {
  const [feedType, setFeedType] = useState("following");

  return (
    <section className="max-h-full overflow-hidden">
      <section>
        <FeedButtons feedType={feedType} setFeedType={setFeedType} />
      </section>
      <section className="flex max-h-full flex-col gap-4 overflow-scroll rounded-t-lg pb-20">
        {Array.from({ length: 4 }, (x, i) => (
          <section key={i} className="join-vertical join">
            <section className="join-item flex items-center justify-between bg-base-200 p-4">
              <div className="flex w-full items-center justify-between">
                <UserAvatar />
                <button className="btn-ghost btn-xs btn sm:btn-sm md:btn-md focus:bg-transparent">
                  Follow
                </button>
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
                  In &quot;Phoenix&apos;s Flight: A Tale of Courage and
                  Hope,&quot; a young protagonist finds themselves in a
                  heart-pounding predicament when their house suddenly becomes
                  engulfed in flames. Amidst the chaos and danger, they embark
                  on a harrowing journey, desperately running for their life.
                  Through adversity and fear, they discover inner strength they
                  never knew they possessed.
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
                    In &quot;Phoenix&apos;s Flight: A Tale of Courage and
                    Hope,&quot; a young protagonist finds themselves in a
                    heart-pounding predicament when their house suddenly becomes
                    engulfed in flames. Amidst the chaos and danger, they embark
                    on a harrowing journey, desperately running for their life.
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
            <section className="join-item bg-base-200 p-4 w-full flex justify-between">
              <div>
                <button className="btn-ghost btn">Like</button>
                <Modal content={<CommentSection />} openButtonClasses="btn-ghost" openButtonText="Comment"/>
              </div>
              <Link href="/dreams/1" className="btn-ghost btn ml-auto">
                Read more
              </Link>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}
