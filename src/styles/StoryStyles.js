import styled from "styled-components";

export const StoryWrapper = styled.li`
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;

  &:first-of-type {
    border-top: 0;
  }
  &:last-of-type {
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  text-decoration: none;

  a {
    color: #2e2e3c;
    background-color: #f8dc3d;
    text-decoration: none;
  }
`;

export const StoryMeta = styled.div`
  font-style: italic;
  
  > span:not(:first-child):before {
    content: "."
    margin: 0 7px;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${props => props.color || "red"};
`;
