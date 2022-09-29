import React, {useMemo} from 'react';

function ArticleCard({ blurb, date, id, imageAlt, imageSrc, title }){
    //TODO: make sure to go over link
    const articleDate = useMemo(() => {
        if(!date) return "";
        const parsedDate = new Date(date);
        return parsedDate.toDateString();
    }, [date]);

    return(
        <div className="article-card">
            <img className="article-card-img" alt={imageAlt} src={imageSrc}></img>
            <div className="article-card-text">
                <h2>{title}</h2>
                <p>{articleDate}</p>
                <p>{blurb}</p>
                <a href={`/article/${id}`}>Read More</a>
            </div>
        </div>
    )
}

export default ArticleCard;