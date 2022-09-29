import React, { useMemo } from 'react';
import { useParams } from "react-router";
import Data from '../components/data';

function Article() {
    const { id } = useParams();

    const articleData = Data.find((article) => article.id === id)

    const articleDate = useMemo(() => {
        if(!articleData) return "";
        const parsedDate = new Date(articleData.publishedDate);
        return parsedDate.toDateString();
    }, [articleData]);

    return(
        <main>
            <header className="article-header"
                style={{
                    backgroundImage: `url('${articleData.image.url}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="article-wrap">
                    <h1 className="article-title">{articleData.title}</h1>
                    <p className="article-date">{articleDate}</p>
                    <p className="article-blurb">{articleData.blurb}</p>
                </div>
            </header>
            <section>
                <div className="article-wrap">
                    <div className="article-text">
                        {articleData.articleText.map((text, i) => {
                            const type = text.type;
                            switch (type) {
                                case "p":
                                    return <p key={i}>{text.data}</p>;
                                case "h1":
                                    return <h1 key={i}>{text.data}</h1>;
                                case "h2":
                                    return <h2 key={i}>{text.data}</h2>;
                                case "h3":
                                    return <h3 key={i}>{text.data}</h3>;
                                case "h4":
                                    return <h4 key={i}>{text.data}</h4>;
                                default:
                                    return <p key={i}>{text.data}</p>;
                            }
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Article;