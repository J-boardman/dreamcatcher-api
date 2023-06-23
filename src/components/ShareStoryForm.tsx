import Image from "next/image";

export default function ShareStoryForm() {
  return (
    <>
      <h3 className="font-bold text-lg">
        Share <span className="text-secondary">your story</span>
      </h3>
      <div className="flex items-center space-x-3 mt-4">
        <div className="avatar">
          <div className="mask mask-squircle w-24 h-24">
            <Image src="/story-cover.jpg" alt="Avatar Tailwind CSS Component" height={96} width={96}/>
          </div>
        </div>
        <div>
          <div className="text-lg opacity-50">Sharing the story</div>
          <div className="font-bold text-xl">Phoenix&apos;s Flight: A Tale of Courage and Hope</div>
        </div>
      </div>
        <form action="" className="form-control mt-4">
          <label htmlFor="sharing-message" className="label label-text">Share your thoughts:</label>
          <textarea name="sharing-message" id="sharing-message" cols={30} rows={3} className="textarea textarea-bordered textarea-sm textarea-ghost"></textarea>
          <div className="divider">OR</div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="generate-story-blurb" id="story-blurb-checkbox" className="checkbox"/>
            <label htmlFor="story-blurb-checkbox" className="label">Generate a story blurb</label>
          </div>
        </form>
      <div className="modal-action">
        <button className="btn btn-secondary">Share</button>
      </div>
    </>
  );
}
