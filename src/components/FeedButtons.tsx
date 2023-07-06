import { Dispatch, MouseEvent, SetStateAction } from "react";

export default function FeedButtons({
  feedType,
  setFeedType,
  feedOptions,
}: {
  feedType: string;
  setFeedType: Dispatch<SetStateAction<string>>;
  feedOptions: string[]
}) {
  const mappedOptions = feedOptions.map((option) => (
    <button
      key={option}
      className={`btn-ghost btn focus:bg-transparent ${
        feedType === option ? "text-secondary" : null
      }`}
      onClick={() => setFeedType(option)}
    >
      {option}
    </button>
  ));

  return <>{mappedOptions}</>;
}
