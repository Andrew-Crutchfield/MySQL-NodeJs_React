const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/', (req, res) => {
  connection.query('SELECT * FROM Blogs', (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching blogs', error: err });
    } else {
      res.json(results);
    }
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM Blogs WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching blog', error: err });
    } else {
      res.json(results[0]);
    }
  });
});

router.post('/', (req, res) => {
  const { title, content, authorid } = req.body;
  connection.query('INSERT INTO Blogs (title, content, authorid) VALUES (?, ?, ?)', [title, content, authorid], (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error creating a new blog post', error: err });
    } else {
      res.json({ message: 'Blog post created', id: results.insertId });
    }
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, content, authorid } = req.body;
  connection.query('UPDATE Blogs SET title = ?, content = ?, authorid = ? WHERE id = ?', [title, content, authorid, id], (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error updating blog post', error: err });
    } else {
      res.json({ message: 'Blog post updated', id });
    }
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM Blogs WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error deleting blog post', error: err });
    } else {
      res.json({ message: 'Blog post deleted', id });
    }
  });
});

router.get('/:id/tags', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT t.* FROM Tags t INNER JOIN BlogTags bt ON t.id = bt.tagid WHERE bt.blogid = ?', [id], (err, results) => {
    if (err) {
      res.status(500).json({ message: 'Error fetching tags for blog post', error: err });
    } else {
      res.json(results);
    }
  });
});

const Blogs = () => {
  const [blogs, setBlogs] = useState([]); 

  useEffect(() => {
    fetch('/api/blogs')
      .then((response) => response.json())
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
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;

module.exports = router;