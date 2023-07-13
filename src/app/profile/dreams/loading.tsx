
import ProfileNavbar from "@/components/ProfileNavbar";
import { getUserDreams } from "@/lib/actions/dreams";

export default async function page(){
  return (
    <section>
      <ProfileNavbar focused="dreams" />
      <span className="loading loading-spinner"></span>
    </section>
  )
};