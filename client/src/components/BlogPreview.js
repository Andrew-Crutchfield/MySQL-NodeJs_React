import React from 'react';
import { Link } from 'react-router-dom'; 

function BlogPreview({ blog }) {
  const contentSnippet = blog.content.slice(0, 100) + '...';

  return (
    <div className="blog-preview">
      <h2>{blog.title}</h2>
      <p>By {blog.authorName} on {new Date(blog._created).toLocaleDateString()}</p>
      <p>{contentSnippet}</p>
      <Link to={`/blogs/${blog.id}`}>Read more</Link>
    </div>
  );
}

export default BlogPreview;