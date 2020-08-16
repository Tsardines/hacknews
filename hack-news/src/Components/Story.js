import React, {useState, useEffect} from 'react';
import { getStory, storyUrl } from '../Services/hnApi';
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from '../Styles/StoryStyles';

export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId)
            .then(data => data && data.url && setStory(data));
    }, []);

    return story && story.url ? (
        <StoryWrapper data-testid='story'>
            <StoryTitle>
                <a href={story.url} target='_blank'>
                    <p>{story.title}</p>
                </a>
            </StoryTitle>

            <StoryMeta>
                <span className='story__by' data-testid='story-by'> 
                    <StoryMetaElement color='#000'>By:</StoryMetaElement> {story.by}
                </span>
                <span className='story__time' data-testid='story-time'> 
                    <StoryMetaElement color='#000'>Posted:</StoryMetaElement> {` `}
                    {story.time && mapTime()}
                </span>
            </StoryMeta>

        </StoryWrapper>
    ) : null; // need null
}