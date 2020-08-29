import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../Services/hnApi';
import { Story } from '../Components/Story';
import {GlobalStyle, StoriesContainerWrapper  } from "../Styles/StoriesContainerStyles";
import { useInfiniteScroll } from '../Hooks/useInfiniteScroll';

export const StoriesContainer = () => {
  	const { count } = useInfiniteScroll();
	const [storyIds, setStoryIds] = useState([]); 
	// const test = useInfiniteScroll();
      // want the storyIds to be stored in this var
      // once this loads, assign an empty arr to it
  
      // an effect hook that lets you perform side effects in fn components
        // similar to componentDidMount
      useEffect(() => { 
		  getStoryIds().then(data => setStoryIds(data));
		  console.log('count', count)
          // by writing setStoryIds, we're replacing the empty arr in L5 w/ 500 storyIds
        //   storyIds && storyIds.length > 0
      }, [count]);
  
    return  (
        <>
			<GlobalStyle />
			<StoriesContainerWrapper data-test-id='stories-container'>
            	<h1>HN Stories</h1>
              {storyIds
                .slice(0, count) // user scrolls, 0 to 60, user scrolls, 0 to 90, etc
                .map(storyId => ( 
					<Story key={storyId} storyId={storyId} />
				))}
			</StoriesContainerWrapper>
        </>
    );
};
  