import React, { useState, useEffect } from 'react';
import BlogPreview from './BlogPreview';

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs') 
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data); 
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
      });
  }, []); 

  return (
    <div>
      <h1>All Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <BlogPreview key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
}

export default AllBlogs;