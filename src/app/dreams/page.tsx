import Modal from "@/components/Modal";
import ShareStoryForm from "@/components/ShareStoryForm";
import Image from "next/image";
import Link from "next/link";

export default function Dreams() {
  return (
    <main className="flex flex-col max-h-full overflow-hidden">
      <h1 className="text-4xl my-4 font-bold text-center md:text-left">
        Your <span className="text-secondary">stories</span>
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="hidden md:block">Cover</th>
              <th>Title</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Array.from({ length: 12 }, (x, i) => (
              <tr key={i}>
                <th className="hidden md:block"> 
                  <label>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <Link href={"/dreams/1"} className="mask mask-squircle w-16 h-16">
                          <Image
                            src="/story-cover.jpg"
                            alt="Avatar Tailwind CSS Component"
                            height={64}
                            width={64}
                          />
                        </Link>
                      </div>
                    </div>
                  </label>
                </th>
                <td>
                  <Link href={"/dreams/1"} className="font-bold">Phoenix&apos;s Flight: A Tale of Courage and Hope</Link>
                </td>
                <td>
                  <Modal
                    openButtonText="Share" 
                    openButtonClasses="btn-ghost text-secondary btn-xs"
                    content={<ShareStoryForm />}
                  />
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs text-error">Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
