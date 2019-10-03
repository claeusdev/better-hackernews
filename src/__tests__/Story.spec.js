import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import { getStory } from "../services/api";
import { singularStory } from "../fixtures";
import { Story } from "../components/Story";

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock("../services/api", () => ({
  getStory: jest.fn()
}));

test("renders the application", async () => {
  getStory.mockImplementationOnce(() => Promise.resolve(singularStory));
  const { getByText, queryByTestId } = render(<Story id="1" />);
  await waitForElement(() => [
    expect(getByText("Welcome to hacktoberfest 2019")).toBeTruthy(),
    expect(queryByTestId("story-by").textContent).toEqual("By: Nana")
  ]);
});
