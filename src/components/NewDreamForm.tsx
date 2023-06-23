"use client";
import { openai } from "@/lib/openai";
import { useState } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function NewDreamForm() {
  const [dream, setDream] = useState("");
  const [interpretation, setInterpretation] = useState<string | undefined>("");
  const [statusMessage, setStatusMessage] = useState("")
  const [isInterpreting, setisInterpreting] = useState(false)
  const [generatingStory, setGeneratingStory] = useState(false)

  async function handleSubmit() {
    if(!isInterpreting) return
    setInterpretation("")
    setStatusMessage("Interpreting dream...")
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: "I want you to act as a dream interpreter. I will give you descriptions of my dreams, and you will provide short interpretations based on the symbols and themes present in the dream. Prompt: " + dream,
        // prompt: "Respond with the number 1",
        max_tokens: 256,
        temperature: 0,
      });
      console.log(response.data)
      const responseMessage = response.data.choices[0].text;
  
      setInterpretation(responseMessage?.replaceAll("\n", ""))
      if(generatingStory) setStatusMessage("Writing a bedtime story...")
      else setStatusMessage("")
    } catch (error) {
      console.log(error)
      setStatusMessage("")
      setInterpretation("Error getting an interpretation... Try again later.")      
    }
  }

  const { pending } = useFormStatus();
  return (
    <>
      <label htmlFor="prompt" className="hidden">Describe your dream:</label>
      <textarea
        className="text-lg textarea textarea-bordered textarea-xs textarea-ghost"
        onChange={(e) => setDream(e.target.value)}
        name="prompt"
        id="prompt"
        cols={30}
        rows={5}
        required
        placeholder="Describe your dream here..."
      ></textarea>
      <section className="grid grid-cols-[min-content,_1fr] sm:flex items-center gap-2">
        <input
          type="checkbox"
          name="include-interpretation"
          id="include-interpretation"
          className="checkbox checkbox-secondary"
          defaultChecked={isInterpreting}
          onChange={() => setisInterpreting(!isInterpreting)}
        />
        <label className="text-lg" htmlFor="include-interpretation">
          <span className="text-secondary">Interpret</span> dream?
        </label>
        <input
          type="checkbox"
          name="include-story"
          id="include-story"
          className="checkbox checkbox-secondary sm:ml-2"
          defaultChecked={generatingStory}
          onChange={() => setGeneratingStory(!generatingStory)}
        />
        <label className="text-lg" htmlFor="include-story">
          Include a <span className="text-secondary">bedtime story</span>?
        </label>

        {pending ? (
          <button disabled className="btn btn-secondary ml-auto col-span-2 w-full sm:w-fit">
            <span className="loading loading-spinner"></span>
            Submit
          </button>
        ) : (
          <button disabled={!isInterpreting && !generatingStory || !dream} className="btn btn-secondary ml-auto col-span-2 w-full sm:w-fit" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </section>
      {
        statusMessage
          ? <section className="flex gap-4">
              <span className="loading text-secondary loading-bars loading-md"></span>
              <span>{statusMessage}</span>
            </section>
          : <section></section>
      }
      {
        interpretation &&
        <article className="p-2 md:py-4 md:px-0 text-xl">{interpretation}</article>
      }
    </>
  );
}
