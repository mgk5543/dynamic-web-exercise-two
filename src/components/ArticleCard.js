import React from 'react';

function ArticleCard({ blurb, date, imageAlt, imageSrc, title }){
    //TODO: make sure to go over link
    return(
        <div className="article-card">
            <div className="article-card-img" alt={imageAlt} src={imageSrc}></div>
            <div className="article-card-text">
                <h2>{title}Article Title</h2>
                <p>{date}Wednesday, August 22, 2022</p>
                <p>{blurb}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href="#">Read More</a>
            </div>
        </div>
    )
}

export default ArticleCard;