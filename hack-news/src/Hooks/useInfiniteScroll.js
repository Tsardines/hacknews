import { useState, useEffect } from 'react';
import { STORY_INCREMENT, MAX_STORIES} from '../Constants';
import { debounce } from '../Utils/debounce';

export const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false); // initialize state
    const [count, setCount] = useState(STORY_INCREMENT);

    const handleScroll = debounce(() => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) {
            return false;
        }
        setLoading(true);
    }, 500);

    useEffect(() => { // watches for changing values
        if (!loading) return;

        if (count + STORY_INCREMENT >= MAX_STORIES) { // if count = 480
            setCount(MAX_STORIES); // set the count to 500
        } else {
            setCount(count + STORY_INCREMENT) // increment = 30
        }

        setLoading(false)
    }, [loading]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // add evt listener, once useEffect is done,
        return() => window.removeEventListener('scroll', handleScroll); // remove evt listener
    }, []);

    return { count };
}