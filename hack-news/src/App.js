import React, { useEffect, useState } from 'react';
import { getStoryIds } from './Services/hnApi';

export const App = () => {
  const [storyIds, setStoryIds] = useState([]); 
    // want the storyIds to be stored in this var
    // once this loads, assign an empty arr to it

    useEffect(() => {}, []);
      // an effect hook that lets you perform side effects in fn components
      // similar to componentDidMount
	
    


  return <p>{storyIds}</p>;
  
};


// export default App;
