"use client";

import { useState } from "react";
import FeedButtons from "./FeedButtons";
import FeedItem from "./FeedItem";

export default function Newsfeed() {
  const [feedType, setFeedType] = useState("following");
  const feedOptions = ["following", "global"];

  return (
    <section className="max-h-full overflow-hidden">
      <section>
        <FeedButtons feedType={feedType} setFeedType={setFeedType} feedOptions={feedOptions}/>
      </section>
      <section className="flex max-h-full flex-col gap-4 overflow-scroll rounded-t-lg pb-20">
        {Array.from({ length: 4 }, (x, i) => (
          <FeedItem key={i} />
        ))}
      </section>
    </section>
  );
}
