import React from 'react';
import './NewsCard.css';
import dummyUrl from '../../Images/dummyImg.jpg';

const NewsCard = ({ news }) => {
    return (
        <div className='main-newsCard'>
            <div className="left-div">
                <img src={news.urlToImage === null ? dummyUrl : news.urlToImage} alt="" />
                {/* <img src={dummyUrl} alt="" /> */}
                {news.source.name && <p> <span>Source : </span>{news.source.name}</p>}
                {news.author && <p>{news.author}</p>}
                {news.publishedAt && <p>{`${news.publishedAt.slice(0, 10)} , ${news.publishedAt.slice(11, 16)}`}</p>}
            </div>
            <div className="right-div">
                <h3>{news.title}</h3>
                <p>{news.description}</p>
                {news.content && <p>{news.content.slice(1, 200)}</p>}
                <a href={news.url} target="_blank" rel="noopener noreferrer">Read Full Coverage</a>
            </div>
        </div>
    )
}

export default NewsCard;