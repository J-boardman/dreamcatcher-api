import BackButton from "@/components/BackButton";
import CommentSection from "@/components/CommentSection";
import Modal from "@/components/Modal";
import UserAvatar from "@/components/UserAvatar";
import { getDream } from "@/lib/actions";
import Image from "next/image";

export default async function page({ params }: { params: { id: string } }) {
  const story = await getDream(params.id);
  return (
    <main className="m-4 grid max-h-full max-w-4xl grid-cols-1 grid-rows-[80%,_20%,_100%] overflow-scroll rounded-3xl md:grid-flow-col md:grid-cols-2  md:grid-rows-[fit-content,_1fr] md:overflow-hidden">
      <section>
        <BackButton />
        <Image
          src={story.image}
          width={900}
          height={110}
          alt="book cover"
          className="h-full w-full"
        />
      </section>
      <article className="flex flex-col justify-center gap-2  bg-base-200 p-2 text-white md:justify-between ">
        <section className="flex items-center justify-around md:justify-between md:p-4">
          <UserAvatar />
          <button className="btn-ghost btn-xs btn sm:btn-sm md:btn-md focus:bg-transparent">
            Follow
          </button>
        </section>
        <section className="flex justify-around ">
          <button className="btn-ghost btn">Like</button>
          <Modal content={<CommentSection />} openButtonClasses="btn-ghost" openButtonText="Comment"/>
        </section>
      </article>
      <section className="row-span-2 bg-base-200 p-4 text-white md:overflow-scroll">
        <h2 className="py-2 text-center text-3xl font-bold">{story.title}</h2>
        {story.body.split("\n").map((paragraph, index) => (
          <p className="md:text-md my-4 text-sm" key={index}>
            {paragraph}
          </p>
        ))}
      </section>
    </main>
  );
}
