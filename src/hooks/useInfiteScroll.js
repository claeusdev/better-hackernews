import { useEffect, useState } from "react";
import { STORY_INCREMENT, MAX_STORIES } from "../constants";

export const useInfinteScroll = () => {
  const [loading, setLoading] = useState(false);

  const [count, setCount] = useState(STORY_INCREMENT);

  const handeScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  };

  useEffect(() => {
    if (!loading) return;

    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    } else {
      setCount(count + STORY_INCREMENT);
    }

    setLoading(false);
  }, [count, loading]);

  useEffect(() => {
    window.addEventListener("scroll", handeScroll);
    return () => window.removeEventListener("scroll", handeScroll);
  });
  return { count };
};
