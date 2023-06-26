import Newsfeed from "@/components/Newsfeed";

export default function page(){
  return (
    <main className="flex flex-col max-h-full overflow-hidden">
      <h1 className="text-4xl my-4 font-bold text-center md:text-left"><span className="text-secondary">Latest</span> stories</h1>
      <Newsfeed />
    </main>
  )
};