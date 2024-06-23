import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <article className="blog-post">
      <h1 className="blog-title">{post.title}</h1>
      <p className="blog-date">{post.date}</p>
      <img src={post.image.src} alt={post.image.alt} className="blog-image" />
      <div className="blog-content">
        <p>{post.content}</p>
      </div>
    </article>
  );
};

export default BlogPost;