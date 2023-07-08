import NewDreamForm from "@/components/forms/NewDreamForm";
import { generateStory } from "@/lib/actions";

export default function page() {
  return (
    <main className="mx-auto text-white flex flex-col w-full max-h-full overflow-scroll">
      <h1 className="text-4xl my-4 font-bold text-center md:text-left">Had a <span className="text-secondary">dream</span>?</h1>
      <NewDreamForm />
    </main>
  );
}
