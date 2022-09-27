import React from 'react';

function ArticleCard({ blurb, date, imageAlt, imageSrc, title }){
    //TODO: make sure to go over link
    return(
        <div className="article-card">
            <img className="article-card-img" alt={imageAlt} src={imageSrc}></img>
            <div className="article-card-text">
                <h2>{title}</h2>
                <p>{date}</p>
                <p>{blurb}</p>
                <a href="#">Read More</a>
            </div>
        </div>
    )
}

export default ArticleCard;