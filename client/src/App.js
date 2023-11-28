import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllBlogs from './components/AllBlogs';
import BlogDetail from './components/BlogDetail';
import EditBlog from './components/EditBlog';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllBlogs />} />
        <Route path="/blogs/:blogId" element={<BlogDetail />} />
        <Route path="/edit-blog/:blogId" element={<EditBlog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;