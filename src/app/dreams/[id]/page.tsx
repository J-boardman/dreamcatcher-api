import { getDream } from "@/lib/actions";
import Image from "next/image";

export default async function page({ params }: { params: { id: string } }) {
  const dream = await getDream(params.id);
  console.log(dream);
  return (
    <main className="rounded-3xl max-w-lg grid-rows-2 my-4 mx-auto overflow-scroll text-black">
      <Image
        src={dream.image}
        width={900}
        height={110}
        alt="book cover"
        className="mx-auto w-full"
      />
      <section className="p-4 bg-white">
        <h2 className="text-3xl text-center my-4 font-bold">{dream.title}</h2>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <Image
                src="https://avatars.dicebear.com/api/open-peeps/stefan.svg"
                alt="Avatar Tailwind CSS Component"
                width={64}
                height={64}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Shared by Stefan Higgity</div>
          </div>
        </div>
        {dream.body.split("\n").map((paragraph, index) => (
          <p className="my-4" key={index}>
            {paragraph}
          </p>
        ))}
      </section>
    </main>
  );
}
