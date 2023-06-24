"use client";

import { useState } from "react";
import FeedButtons from "./FeedButtons";
import Image from "next/image";
import Link from "next/link";

export default function Newsfeed() {
  const [feedType, setFeedType] = useState("following");

  return (
    <section className="max-h-full overflow-hidden">
      <section>
        <FeedButtons feedType={feedType} setFeedType={setFeedType} />
      </section>
      <section className="max-h-full overflow-scroll flex flex-col gap-4 rounded-t-lg pb-20">
        {Array.from({ length: 4 }, (x, i) => (
          <section key={i} className="join join-vertical">
            <section className="bg-base-200 join-item flex justify-between items-center p-4">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-full md:w-12 h-12">
                    <Image
                      src="https://avatars.dicebear.com/api/open-peeps/stefan.svg"
                      alt="Avatar Tailwind CSS Component"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Stefan Higgity</div>
                  <div className="text-sm opacity-50">1hr ago</div>
                </div>
              </div>
              <div>
                <button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md hover:bg-transparent focus:bg-transparent">Follow</button>
              </div>
            </section>
            <article className="hidden sm:flex card card-side bg-base-200 join-item p-4">
              <div className="avatar">
                <div className="sm:mask sm:mask-squircle w-32 h-32 md:w-64 md:h-64">
                  <Image
                    src="/story-cover.jpg"
                    alt="Avatar Tailwind CSS Component"
                    height={256}
                    width={256}
                  />
                </div>
              </div>
              <div className="px-4 md:py-4">
                <h2 className="font-bold text-md md:text-2xl pb-4">
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
            <label className="swap sm:hidden bg-base-200 join-item px-4 rounded-lg">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              <div className="swap-on">
              <div className="px-4 w-72 h-72 bg-base-100 rounded-3xl grid place-items-center overflow-scroll">
                <h2 className="font-bold text-md">
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
                  <div className="w-72 h-72 rounded-3xl">
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

            <section className="bg-base-200 join-item p-4">
              <button className="btn btn-ghost">Like</button>
              <Link href="/dreams/1" className="btn btn-ghost">Read</Link>
              <button className="btn btn-ghost">Comment</button>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}
