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
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                        </p>
                        <h2>Header Two Inserted</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                        </p>
                        <h3>Header Three Inserted</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.<br/> <br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Article;