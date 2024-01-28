const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Import the jsonwebtoken module

const app = express();
app.use(cors());
const port = 5000;

// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

// Define a secret key for signing the JWT tokens
const JWT_SECRET_KEY = 'your_secret_key_here';

// Function to generate a JWT token
function generateToken(userId) {
  return jwt.sign({ userId }, JWT_SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
}

// Middleware to parse JSON
app.use(express.json());

// Login endpoint
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Check if the email and password are provided
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  // Query the database to find the user with the provided email
  const sql = "SELECT * FROM blog.users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Check if the user with the provided email exists
    if (results.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }

    // Verify the password
    const user = results[0];
    if (user.password !== password) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    // If email and password are correct, generate and return a token
    const token = generateToken(user.id);
    res.json({ success: true, token });
  });
});

// Register endpoint
app.post("/api/register", (req, res) => {
  const { username, email, password } = req.body;

  // Insert user data into MySQL
  const sql = "INSERT INTO blog.users (username, email, password, created_at) VALUES (?, ?, ?, NOW());";
  db.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.log("Error registering user:", err);
      res.status(500).json({ error: "Error registering user" });
    } else {
      console.log("User registered successfully");
      res.json({ success: true });
    }
  });
});

// Example endpoint to handle blog post creation
app.post("/api/posts", (req, res) => {
  console.log('Request in server.js:', JSON.stringify(req.body));
  const { title, description, category, file } = req.body;

  // Insert data into MySQL
  const sql = "INSERT INTO blog.blogs (title, description, category, file, created_at) VALUES (?, ?, ?, ?, '2024-01-01');";
  db.query(sql, [title, description, category, file], (err, result) => {
    if (err) {
      console.log("Error inserting post:", err);
      res.status(500).json({ error: "Error inserting post" });
    } else {
      console.log("Post inserted successfully");
      res.json({ success: true });
    }
  });
});

// Example endpoint to handle blog post creation
app.get("/category/:id", (req, res) => {
  console.log('Category Request in server.js:', JSON.stringify(req.body));
 // const { title, description, category, file } = req.body;
 var name = req.params.id;
 
  // Insert data into MySQL
  const sql = "SELECT * FROM blog.blogs where category=?;";
  db.query(sql, [name], (err, result) => {
    if (err) {
      console.log("Error Selecting Category Get:", err);
      res.status(500).json({ error: "Error Selecting categry Get" });
    } else {
      console.log(sql);
      console.log("Retrived data succcessfully.");
      res.send(result);
    
  }
  });
 
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
