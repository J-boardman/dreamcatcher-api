import Hero from "@/components/Hero";
import Newsfeed from "@/components/Newsfeed";
import { auth } from "@clerk/nextjs";

export default async function Page() {
  const {user} = auth()

  if (!user)
    return (
      <main className="flex h-full items-center justify-center text-white">
        <Hero />
      </main>
    );

  return (
    <main className="flex max-h-full flex-col overflow-hidden">
      <h1 className="my-4 text-center text-4xl font-bold md:text-left">
        <span className="text-secondary">Latest</span> stories
      </h1>
      <Newsfeed />
    </main>
  );
}
