"use client";

import { useState } from "react";
import {
  UserIcon,
  UserPlusIcon,
  UserMinusIcon,
} from "@heroicons/react/20/solid";

export default function FollowButton() {
  const [following, setFollowing] = useState(false);
  return (
    <button className="btn-ghost btn-xs btn sm:btn-sm md:btn-md focus:bg-transparent group text-right" onClick={() => setFollowing(!following)}>
      <span className="hidden sm:inline-flex">{following ? "Following" : "Follow"}</span>
      <UserIcon className="h-6 w-6 hidden md:inline-flex md:group-hover:hidden" />
      {following ? (
        <UserMinusIcon className="md:hidden h-6 w-6 md:group-hover:inline-flex" />
      ) : (
        <UserPlusIcon className="md:hidden h-6 w-6 md:group-hover:inline-flex" />
      )}
    </button>
  );
}
