"use client";

import { useState } from "react";
import { HeartIcon } from "@heroicons/react/20/solid";

export default function LikeButton({ hideText} : { hideText?: boolean}) {
  const [liked, setLiked] = useState(false);

  return (
    <button className="btn-ghost btn" onClick={() => setLiked(!liked)}>
      <HeartIcon
        className={`h-6 w-6  ${liked ? "text-pink-400" : "text-white"}`}
      />
      99 
      {!hideText && <span className="hidden sm:inline-flex">likes</span>}
    </button>
  );
}
