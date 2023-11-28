import React, { useState, useEffect } from 'react';

function EditBlog({ match }) {
  const [blog, setBlog] = useState({
    title: '',
    content: '',
  });

  const { blogId } = match.params; 

  useEffect(() => {
    const fetchBlogDetail = async () => {
      const response = await fetch(`/api/blogs/${blogId}`);
      const data = await response.json();
      setBlog(data); 
    };

    fetchBlogDetail();
  }, [blogId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/blogs/${blogId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    });

    if (response.ok) {
      console.log('Blog updated successfully');
    } else {
      console.error('Failed to update blog');
    }
  };

  return (
    <div>
      <h1>Edit Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={blog.content}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default EditBlog;