/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { getStory } from '../Services/hnApi';
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement,
} from '../Styles/StoryStyles';
import { mapTime } from '../Mappers/mapTime';

export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-test-id="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span data-test-id="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
        </span>
        <span data-test-id="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
          {mapTime(story.time)} ago
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};

