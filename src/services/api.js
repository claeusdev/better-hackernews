import axios from "axios";
import { selectFields } from "../utils/selectFields";

export const baseUrl = "https://hacker-news.firebaseio.com/v0";
export const newStoriesUrl = `${baseUrl}/newstories.json`;
export const storyUrl = `${baseUrl}/item`;

export const getStory = async id => {
  const { data } = await axios.get(`${storyUrl}/${id}.json`);
  return data && selectFields(data);
};
export const getStoryIds = async () => {
  const { data } = await axios.get(newStoriesUrl);
  console.log(data);
  return data;
};
