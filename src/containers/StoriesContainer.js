import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/api";
import { Story } from "../components/Story";
import {
  StoriesContainerWrapper,
  GlobalStyle
} from "../styles/StoriesContainerStyles";

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
    <StoriesContainerWrapper data-testid="stories-container">
      <GlobalStyle />
      <h1>Better Hackernews</h1>
      <ul>
        {stories.map(story => (
          <Story key={story} id={story} />
        ))}
      </ul>
    </StoriesContainerWrapper>
  );
}

export default StoriesContainer;
