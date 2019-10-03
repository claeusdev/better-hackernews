import React, { useState, useEffect } from "react";
import { getStory } from "../services/api";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from "../styles/StoryStyles";

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
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>

      <StoryMeta>
        <span className="story__by" data-testid="story-by">
          <StoryMetaElement color="#000">By: </StoryMetaElement>
          {story.by}
        </span>{" "}
        <span className="story__time" data-testid="story-time">
          <StoryMetaElement color="#000">Posted: </StoryMetaElement>{" "}
          {story.time}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
