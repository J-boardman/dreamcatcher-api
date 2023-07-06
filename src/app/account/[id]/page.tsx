import FollowButton from "@/components/FollowButton"
import { getUser } from "@/lib/actions"

export default async function page(){
  const { username, firstName, lastName } = await getUser()
  return (
    <main className="flex flex-col max-h-full overflow-scroll">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl my-4 font-bold text-center md:text-left"><span className="text-secondary">{username}</span>&apos;s profile</h1>
        <FollowButton />
      </div>
      <div className="flex gap-4">
        <button className="btn btn-ghost ">Activity</button>
        <button className="btn btn-ghost ">Stories</button>
        <button></button>
      </div>
      <section className="p-4">

      </section>
    </main>
  )
}