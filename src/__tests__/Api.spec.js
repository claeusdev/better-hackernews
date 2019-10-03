import axios from "axios";

import {
  getStoryIds,
  getStory,
  newStoriesUrl,
  storyUrl
} from "../services/api";
import { singularStory, stories, emptySingularStory } from "../fixtures";

jest.mock("axios");

describe("Calls APi", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("get single story", () => {
    it("requests and gets a story from the HAckerNews Api", async () => {
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: singularStory })
      );
      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl}/1.json`);
      expect(entity).toEqual(singularStory);
    });

    it("requests for single story fails", async () => {
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: emptySingularStory })
      );
      const entity = await getStory(10);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl}/10.json`);
      expect(entity).toEqual(emptySingularStory);
    });
  });

  describe("get all storyIds", () => {
    it("requests and gets a storyIds from the HAckerNews Api", async () => {
      axios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: stories })
      );
      const entity = await getStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${newStoriesUrl}`);
      expect(entity).toEqual(stories);
    });

    it("requests for stories throws", async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));
      const entity = await getStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${newStoriesUrl}`);
      expect(entity).toEqual([]);
    });
  });
});
