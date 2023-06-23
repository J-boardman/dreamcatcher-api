export default async function page({ params }: { params: { id: string } }){
  return (
      <section className="w-full grid place-items-center my-4 rounded-3xl max-w-lg mx-auto bg-base-200 animate-pulse md:animate-none">
        <span className="loading loading-spinner loading-lg"></span>
      </section>
  )
};