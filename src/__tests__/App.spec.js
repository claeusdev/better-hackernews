import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import App from "../App";
import { getStory, getStoryIds } from "../services/api";
import { useInfinteScroll } from "../hooks/useInfiteScroll";
import { STORY_INCREMENT } from "../constants";
import { singularStory, stories } from "../fixtures";

beforeEach(cleanup);

jest.mock("../hooks/useInfiteScroll.js");
jest.mock("../services/api", () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn()
}));

test("renders the application", async () => {
  useInfinteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT
  }));

  getStoryIds.mockImplementationOnce(() => Promise.resolve(stories));
  getStory.mockImplementationOnce(() => Promise.resolve(singularStory));
  const { getByText, queryByTestId } = render(<App />);
  await waitForElement(() => [
    expect(getByText("Better Hackernews")).toBeTruthy(),
    expect(getByText("Welcome to hacktoberfest 2019")).toBeTruthy(),
    expect(queryByTestId("story-by").textContent).toEqual("By: Nana")
  ]);
});
