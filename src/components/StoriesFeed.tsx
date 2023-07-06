"use client";
import { useEffect, useState } from "react";
import FeedButtons from "./FeedButtons";
import StoryRow from "./StoryRow";

export default function StoriesFeed() {
  const [stories, setStories] = useState([])
  const [feedType, setFeedType] = useState("created");
  const feedOptions = ["created", "liked"];


  useEffect(() => {
    if(feedType == "created") setStories(Array.from({length: 4}))
    else setStories(Array.from({length: 4}))
  }, [feedType])

  const mappedStories = stories.map(((story, i) => <StoryRow key={i} feedType={feedType}/>))

  return (
    <>
      <section>
        <FeedButtons feedOptions={feedOptions} feedType={feedType} setFeedType={setFeedType} />
      </section>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="hidden md:block">Cover</th>
              <th>Title</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {/* row 1 */}
          {mappedStories}
          </tbody>
        </table>
      </div>
    </>
  );
}
