import React, { useContext } from "react";
import { NewsContext } from "../context.jsx";
import Layout from "../Layout/index.jsx";
import "./article.css";

const Article = () => {
  const contextUse = useContext(NewsContext);

  console.log(contextUse);
  return (
    <Layout>
      <div className="articleSection">
        <div className="photoWithLink">
          <h2
            onClick={() => {
              window.open(contextUse.sentNews.url);
            }}>
            Read on official page
          </h2>
          <img src={contextUse.sentNews.urlToImage} alt="anithing" />
        </div>

        <div className="articleDescription">
          <h1>{contextUse.sentNews.title}</h1>
          <p>{contextUse.sentNews.content}</p>
          <h3>Source: {contextUse.sentNews.source.name}</h3>
          <h3>Published at: {contextUse.sentNews.publishedAt.slice(0, 10)}</h3>
        </div>
      </div>
    </Layout>
  );
};

export default Article;
