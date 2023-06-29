import Image from "next/image";
import UserAvatar from "./UserAvatar";

export default function CommentsList() {
  return (
    <section className="overflow-scroll h-96">
      {Array.from({ length: 5 }, (x, i) => (
        <div key={i} className="flex flex-col w-full bg-base-100 gap-4 rounded-xl p-4 mb-4">
          <article>
            <UserAvatar />
            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eaque repudiandae repellendus voluptate doloremque ea exercitationem perferendis magnam esse! Provident sint animi similique consequatur voluptatum obcaecati aliquid eum labore facere.</p>
          </article>
        </div>
      ))}
    </section>
  );
}
