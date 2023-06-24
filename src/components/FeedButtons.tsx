import { Dispatch, MouseEvent, SetStateAction } from "react";

export default function FeedButtons({
  feedType,
  setFeedType,
}: {
  feedType: string;
  setFeedType: Dispatch<SetStateAction<string>>;
}) {
  function handleFeedChange(e: MouseEvent<HTMLButtonElement>) {
    setFeedType(e?.currentTarget?.value);
  }

  return (
    <>
      <button
        className={`btn btn-ghost focus:bg-transparent ${
          feedType == "following" ? "text-secondary" : null
        }`}
        onClick={handleFeedChange}
        value="following"
      >
        Following
      </button>
      <button
        className={`btn btn-ghost focus:bg-transparent ${
          feedType == "latest" ? "text-secondary" : null
        }`}
        onClick={handleFeedChange}
        value="latest"
      >
        Latest
      </button>
    </>
  );
}
