import React, { useState } from 'react';

function NewBlog() {
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlog),
    });

    if (response.ok) {
      console.log('Blog post created successfully');
      setNewBlog({ title: '', content: '' }); 
    } else {
      console.error('Failed to create blog post');
    }
  };

  return (
    <div>
      <h1>Add New Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newBlog.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={newBlog.content}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Add Blog Post</button>
        </div>
      </form>
    </div>
  );
}

export default NewBlog;