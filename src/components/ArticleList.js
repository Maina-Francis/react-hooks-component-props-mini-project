import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const postInfo = posts.map((post) => (
    <Article
      key={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ));

  return <main>{postInfo}</main>;
}

export default ArticleList;
