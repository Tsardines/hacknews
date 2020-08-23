import { useState, useEffect } from 'react';
import { STORY_INCREMENT, MAX_STORIES} from '../Constants';

export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false); // initialize state
    const [count, setCount] = useState(STORY_INCREMENT);

    const handleScroll = () => {
        console.log('window====', window);
    }

    handleScroll();
}