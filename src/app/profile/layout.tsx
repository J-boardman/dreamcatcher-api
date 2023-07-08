import UserAvatar from "@/components/user/UserAvatar";
import { currentUser } from "@clerk/nextjs";
import { ReactNode } from "react";

export default async function ProfileLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await currentUser();
  console.log(user);

  const userTitle = (
    <h1 className="text-center text-xl font-bold md:text-left md:text-4xl">
      <span className="text-secondary">{user?.username}</span>&apos;s profile
    </h1>
  );

  return (
    <main className="flex max-h-full flex-col overflow-scroll">
      <div className="my-4">
        <UserAvatar
          primaryText={userTitle}
          secondaryText="99 followers"
          largeAvatarCard={true}
        />
      </div>
      {children}
    </main>
  );
}
