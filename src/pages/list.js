import React from 'react';
import ArticleCard from '../components/ArticleCard';

function List() {
    return(
        <main className="page-wrapper">
            <h1>Articles</h1>
            <ArticleCard imageAlt="hi" imageSrc="hi again"/>
            <ArticleCard/>
            <ArticleCard/>
        </main>
    );
}

export default List;