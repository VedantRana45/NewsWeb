import React from 'react';
import './NewsCard.css';
import dummyUrl from '../../Images/dummyImg.jpg';

const NewsCard = ({ news }) => {
    return (
        <div className='main-newsCard'>
            <div className="left-div">
                <img src={news.urlToImage === null ? dummyUrl : news.urlToImage} alt="" />
                {/* <img src={dummyUrl} alt="" /> */}
                <p>Source : {news.source.name}</p>
                <p>{news.author}</p>
                <p>{news.publishedAt}</p>
            </div>
            <div className="right-div">
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                <p>{news.content}</p>
                <a href={news.url} target="_blank" rel="noopener noreferrer">Read More...</a>
            </div>
        </div>
    )
}

export default NewsCard;