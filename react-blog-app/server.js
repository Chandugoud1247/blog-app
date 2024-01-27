const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'blog',
});

db.connect();

// Create blog table if not exists
db.query(`CREATE TABLE IF NOT EXISTS blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  category VARCHAR(50),
  attachFile VARCHAR(255)
)`, (err) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created successfully');
  }
});

app.post('/api/blogs', (req, res) => {
  const { title, description, category, attachFile } = req.body;
  const insertQuery = `INSERT INTO blogs (title, description, category, attachFile) VALUES (?, ?, ?, ?)`;
  db.query(insertQuery, [title, description, category, attachFile], (err, result) => {
    if (err) {
      console.error('Error inserting blog:', err);
      res.status(500).send('Error inserting blog');
    } else {
      console.log('Blog inserted successfully');
      res.status(200).send('Blog inserted successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
