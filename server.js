const express = require("express");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: "secureSecret", resave: false, saveUninitialized: true }));

// Mock user database
const users = [{ email: "test@example.com", passwordHash: bcrypt.hashSync("SecurePass123", 10) }];

//welcome
const path = require("path");

// Serve static files (CSS, JS, HTML)
app.use(express.static(__dirname));

// Root route → show login form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);

  if (user && bcrypt.compareSync(password, user.passwordHash)) {
    req.session.user = user.email;
    res.send("Login successful!");
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
