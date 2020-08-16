import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../Services/hnApi';
import { Story } from '../Components/Story';

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]); 
      // want the storyIds to be stored in this var
      // once this loads, assign an empty arr to it
  
      // an effect hook that lets you perform side effects in fn components
        // similar to componentDidMount
      useEffect(() => { 
          getStoryIds().then(data => setStoryIds(data));
          // by writing setStoryIds, we're replacing the empty arr in L5 w/ 500 storyIds
        //   storyIds && storyIds.length > 0
      }, []);
  
    return  (
        <>
            <h1>HN Stories</h1>
            {storyIds.map(storyId => <Story key={storyId} storyId={storyId} />)};
        </>
    )
  };
  