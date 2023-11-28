import React, { useState, useEffect } from 'react';
import BlogPreview from './BlogPreview';

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Fetching blogs failed:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map(blog => (
        <BlogPreview key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default AllBlogs;