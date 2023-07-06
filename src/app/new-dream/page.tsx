import NewDreamForm from "@/components/forms/NewDreamForm";
import { generateStory } from "@/lib/actions";

export default function page() {
  return (
    <main className="mx-auto text-white flex flex-col w-full max-h-full overflow-scroll">
      <h1 className="text-4xl my-4 font-bold text-center md:text-left">Had a <span className="text-secondary">dream</span>?</h1>
      <form className="max-w-xs sm:max-w-xl md:max-w-4xl w-full h-full mx-auto form-control gap-4  my-4 font-medium md:[&>*]:mx-2 overflow-scroll" action={generateStory}>
        <NewDreamForm />
      </form>
    </main>
  );
}
