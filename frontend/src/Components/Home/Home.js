import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import NewsCard from '../NewsCard/NewsCard';
import './Home.css';
import { NewsContext } from './NewsContext';

const Home = () => {

    const [NewsData, setNewsData] = useState([]);
    const [page, setPage] = useState(1);
    const { query } = useContext(NewsContext);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
    ];

    useEffect(() => {
        setPage(1);
    }, [query]);

    useEffect(() => {
        const getNewsData = async () => {
            const newsData = await axios.get(`/api/v1/${query.mainQuery}?${query.subQuery}&page=${page}`);
            setNewsData(newsData);
        }
        getNewsData();
    }, [query, page]);

    const changePage = (value) => {
        if (page + value <= 0) {
            setPage(1);
        } else if (page + value >= 10) {
            setPage(9);
        } else {
            setPage(page + value);
        }
    };

    const date = new Date();

    return (
        <div className='home-container'>
            <p>{`${days[date.getUTCDay()]}, ${date.getDate()} ${months[date.getMonth()]} `}</p>
            <div className="newsCardContainer">
                {
                    NewsData.data && NewsData.data.articles.map((news) => (
                        <NewsCard news={news} key={news.publishedAt} />
                    ))
                }
            </div>
            <div className="btn-div">
                <button onClick={() => changePage(-1)}>{page === 1 ? 'X' : '<'}</button>
                <span>{page}</span>
                <button onClick={() => changePage(1)}>{page === 9 ? 'X' : '>'}</button>
            </div>
        </div>
    )
}

export default Home