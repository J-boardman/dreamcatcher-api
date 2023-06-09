import ProfileNavbar from "@/components/ProfileNavbar";
import { getUserDreams } from "@/lib/actions/dreams";

export default async function page(){
  const dreams = await getUserDreams(1)
  console.log(dreams)
  
  return (
    <section>
      <ProfileNavbar focused="dreams" />
      {dreams.map(dream => (
        <article key={dream.id}>
          <p>{dream.prompt}</p>
          <p>{dream.interpretation}</p>
        </article>
      ))}
    </section>
  )
};