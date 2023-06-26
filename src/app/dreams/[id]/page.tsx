import UserAvatar from "@/components/UserAvatar";
import { getDream } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";

export default async function page({ params }: { params: { id: string } }) {
  const dream = await getDream(params.id);
  return (
    <main
      className="m-4 grid max-h-full max-w-4xl grid-cols-1 grid-rows-[80%,_20%,_100%] overflow-scroll rounded-3xl md:grid-flow-col md:grid-cols-2  md:grid-rows-[fit-content,_1fr] md:overflow-hidden"
      id="scroll-to-top"
    >
      <section>
        <Image
          src={dream.image}
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
        <section className="flex justify-center md:justify-start">
          <button className="btn-ghost btn">Like</button>
          <Link href="/dreams/1" className="btn-ghost btn">
            Comment
          </Link>
          <button className="btn-ghost btn">Share</button>
        </section>
      </article>
      <section className="row-span-2 bg-base-200 p-4 text-white md:overflow-scroll">
        <h2 className="text-3xl font-bold text-center py-2">{dream.title}</h2>
        {dream.body.split("\n").map((paragraph, index) => (
          <p className="md:text-md my-4 text-sm" key={index}>
            {paragraph}
          </p>
        ))}
      </section>
    </main>
    // <main className="rounded-3xl max-w-lg grid-rows-2 my-4 mx-auto overflow-scroll text-black">
    // <Image
    //   src={dream.image}
    //   width={900}
    //   height={110}
    //   alt="book cover"
    //   className="mx-auto w-full"
    // />
    // <section className="p-4 bg-white">
    //   <h2 className="text-3xl text-center my-4 font-bold">{dream.title}</h2>
    //   <div className="flex items-center space-x-3">
    //     <div className="avatar">
    //       <div className="mask mask-squircle w-12 h-12">
    //         <Image
    //           src="https://avatars.dicebear.com/api/open-peeps/stefan.svg"
    //           alt="Avatar Tailwind CSS Component"
    //           width={64}
    //           height={64}
    //         />
    //       </div>
    //     </div>
    //     <div>
    //       <div className="font-bold">Shared by Stefan Higgity</div>
    //     </div>
    //   </div>
    // {dream.body.split("\n").map((paragraph, index) => (
    //   <p className="my-4" key={index}>
    //     {paragraph}
    //   </p>
    // ))}
    // </section>
    // </main>
  );
}
