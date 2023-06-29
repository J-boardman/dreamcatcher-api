import CommentsList from "./CommentsList";

export default function CommentSection() {
  return (
    <section className="max-h-full overflow-hidden">
      <h3 className="text-lg font-bold text-secondary mb-4">Comments</h3>
      <CommentsList />
      <div className="divider"></div>
      <form className="form-control w-full gap-4">
        <textarea
          name=""
          id=""
          cols={30}
          rows={3}
          className="textarea m-1 textarea-bordered "
        ></textarea>
        <button className="btn-secondary btn ml-auto w-fit">Post</button>
      </form>
    </section>
  );
}
