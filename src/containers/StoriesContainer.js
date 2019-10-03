import React, { useEffect, useState, memo } from "react";
import { getStoryIds } from "../services/api";
import { Story } from "../components/Story";
import {
  StoriesContainerWrapper,
  GlobalStyle
} from "../styles/StoriesContainerStyles";
import { useInfinteScroll } from "../hooks/useInfiteScroll";

function StoriesContainer() {
  const { count } = useInfinteScroll();
  const [stories, setStories] = useState([]);
  useEffect(() => {
    async function allStories() {
      const { data } = await getStoryIds();
      return setStories(data);
    }
    allStories();
  }, [count]);

  console.log(count);
  return (
    <StoriesContainerWrapper data-testid="stories-container">
      <GlobalStyle />
      <h1>Better Hackernews</h1>
      <ul>
        {stories.slice(0, count).map(story => (
          <Story key={story} id={story} />
        ))}
      </ul>
    </StoriesContainerWrapper>
  );
}

export default StoriesContainer;
