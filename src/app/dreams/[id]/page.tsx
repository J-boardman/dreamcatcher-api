import Storybook from "@/components/Storybook"
import { getDream } from "@/lib/actions"

export default async function page({ params }: { params: { id: string } }){
  const dream = await getDream(params.id)
  console.log(dream)
  return (
    <section className="flex justify-center items-center overflow-hidden">
      <Storybook story={dream}/>
    </section>
  )
};