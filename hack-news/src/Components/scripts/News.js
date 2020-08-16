import React from 'react';

class News extends React.Component {
    componentDidMount() {
        const apiUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => console.log('data', data))
    }
    render() {
        return (
            <div className="News">
                <div className="news-main">
                    news main
                </div>
            </div>
        )
    }
}

export default News;
