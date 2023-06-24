import Newsfeed from "@/components/Newsfeed";

export default function page(){
  return (
    <section className="flex flex-col max-h-full overflow-scroll">
      <h1 className="text-4xl my-4 font-bold text-center md:text-left"><span className="text-secondary">Latest</span> stories</h1>
      <Newsfeed />
    </section>
  )
};