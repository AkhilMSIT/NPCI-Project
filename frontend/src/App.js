import React, { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs"; // Import bcryptjs for password hashing

function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const cardStyle = {
    maxWidth: "400px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegistration = async (event) => {
    event.preventDefault();

    // Hash the password using bcryptjs
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a JSON object with the hashed password and other data
    const userData = {
      username,
      email,
      password: hashedPassword,
    };

    // Send the data to the backend for registration
    try {
      await axios.post("http://localhost:5000/api/insertdata", userData);
      setMessage(`${email} registered successfully`);
      // Clear form fields after successful registration
      setUsername("");
      setEmail("");
      setPassword("");
      setTimeout(() => {
        setMessage("");
      }, 3000); // 3 seconds in milliseconds

    } catch (error) {
      console.error("Error registering user:", error);
      setMessage("An error occurred during registration");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1>Sign-in Form</h1>
        <form onSubmit={handleRegistration}>
          <div>

            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>

            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>

            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
