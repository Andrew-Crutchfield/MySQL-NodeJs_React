// const mysql = require('mysql');
// require('dotenv').config();
// const express = require('express');
// const blogsRouter = require('./routes/blogs'); 


// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'your_username',
//   password: 'cawl_admech',
//   database: 'blogs'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the MySQL server.');

//   connection.query('SELECT * FROM Blogs', (err, results, fields) => {
//     if (err) {
//       console.error('Error querying the database:', err);
//       return;
//     }
//     console.log(results);
//     connection.end();
//   });
// });

// const app = express();
// app.use(express.json()); // Middleware to parse JSON request bodies

// // Use the blogs router for requests to the /api/blogs endpoint
// app.use('/api/blogs', blogsRouter);

// // Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });