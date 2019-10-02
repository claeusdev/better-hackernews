import React, { useState, useEffect } from "react";
import { getStory } from "../services/api";

export const Story = ({ id }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    async function findStory() {
      const story = await getStory(id);
      return setStory(story);
    }
    findStory();
  }, [id]);
  return story && story.url ? (
    <ul>
      <li>
        <a href={story.url}>
          <h1>{story.title}</h1>
          <p>By: {story.by}</p>
          <p>Posted: {story.time}</p>
        </a>
      </li>
    </ul>
  ) : null;
};
