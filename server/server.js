const express = require('express');
const app = express();
const blogRoutes = require('./routes/blogs'); // Adjust the path as necessary

app.use(express.json()); 
app.use('/api/blogs', blogRoutes); 



const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
