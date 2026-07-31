

```markdown
# Secure Login Application

This project demonstrates a simple and secure web login system using **HTML, CSS, JavaScript, and Node.js/Express**.  
It covers key concepts such as **user authentication**, **input validation**, and **secure password handling** with bcrypt.

---

## 🚀 Features
- User authentication with email and password
- Input validation on both frontend (JavaScript) and backend (Express)
- Secure password hashing using bcrypt
- Session management with express-session

---

---

## ⚙️ Installation
1. Clone or download this repository.
2. Install dependencies:
   ```bash
   npm install express bcryptjs body-parser express-session
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Open your browser at:
   ```
   http://localhost:3000/
   ```

---

## 🧪 Testing
- **Frontend validation**: Try invalid emails or short passwords (alerts should appear).
- **Correct login**: Use `test@example.com` with password `SecurePass123`.
- **Incorrect login**: Wrong credentials should return `401 Unauthorized`.
- **Session check**: After login, inspect cookies in browser dev tools.



This README is lightweight but covers **setup, usage, and testing instructions** clearly.  

Would you like me to also add a **section on common troubleshooting errors** (like “Cannot GET /” or missing dependencies) so it’s beginner-friendly?
