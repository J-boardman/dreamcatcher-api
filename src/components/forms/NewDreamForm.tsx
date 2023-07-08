"use client";
import { interpretDream } from "@/lib/actions/dreams";
import { generateFullStory } from "@/lib/actions/stories";
import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  dream: string;
  interpreting: boolean;
  generatingStory: boolean;
};

export default function NewDreamForm() {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const [interpretation, setInterpretation] = useState<string | undefined>("");
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const { dream, generatingStory, interpreting } = data
    setInterpretation("");
    setStatusMessage("Interpreting dream...");
    try {
      if(interpreting){
        const dreamInterpretation = await interpretDream(dream)
        setInterpretation(dreamInterpretation?.replaceAll("\n", ""))
      }
      if(generatingStory) {
        setStatusMessage("Writing a bedtime story...")
        const story = await generateFullStory(dream)
        console.table(story)
        setStatusMessage("")
        return story
      }
      else setStatusMessage("")
    } catch (error) {
      console.log(error)
      setStatusMessage("")
      setInterpretation("Error getting an interpretation... Try again later.")
    }
  };

  const { pending } = useFormStatus();
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-control my-4 h-full w-full gap-4 overflow-scroll font-medium md:[&>*]:mx-2"
      >
        <textarea
          cols={30}
          rows={10}
          {...register("dream")}
          placeholder="Describe your dream here"
          className="textarea-bordered textarea-ghost textarea m-1 min-h-[110px] flex-grow md:text-lg"
        />
        <section className="grid grid-cols-[min-content,_1fr] items-center gap-2 sm:flex">
          <input
            type="checkbox"
            {...register("interpreting")}
            id="interpreting"
            className="checkbox-secondary checkbox"
          />
          <label htmlFor="interpreting" className="text-lg">
            <span className="text-secondary">Interpret</span> dream?
          </label>
          <input
            type="checkbox"
            {...register("generatingStory")}
            id="generate-story"
            className="checkbox-secondary checkbox md:ml-2"
          />
          <label htmlFor="generate-story" className="text-lg">
            Include a <span className="text-secondary">bedtime story</span>?
          </label>
          <button
            className="btn-secondary btn ml-auto col-span-2 w-full sm:w-fit"
            disabled={!watch("generatingStory") && !watch("interpreting") || !watch("dream")}
          >
            Submit
          </button>
        </section>
      </form>
       {
        statusMessage
          ? <section className="flex gap-4 justify-center md:justify-start">
              <span className="loading text-secondary loading-bars loading-md" />
              <span>{statusMessage}</span>
            </section>
          : <section></section>
      }
      {
        interpretation &&
          <article className="p-2 md:py-4 md:px-0 md:text-xl text-center md:text-left h-fit">{interpretation}</article>
      }
    </>
  );
}
