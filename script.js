document.getElementById("loginForm").addEventListener("submit", function(e) {
  const email = e.target.email.value;
  const password = e.target.password.value;

  if (!email.includes("@")) {
    alert("Invalid email format");
    e.preventDefault();
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters");
    e.preventDefault();
  }
});
