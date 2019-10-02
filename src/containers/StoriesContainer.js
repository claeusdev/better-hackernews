import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/api";
import { Story } from "../components/Story";

function StoriesContainer() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function allStories() {
      const { data } = await getStoryIds();
      return setStories(data);
    }
    allStories();
  }, []);

  console.log(stories);
  return (
    <div className="App">
      <h1>Better Hackernews</h1>
      {stories.map(story => (
        <Story key={story} id={story} />
      ))}
    </div>
  );
}

export default StoriesContainer;
