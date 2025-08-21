import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSignUpChange = (e) =>
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (
      loginData.email === "admin@enkonix.in" &&
      loginData.password === "admin123"
    ) {
      setError("");
      localStorage.setItem("loggedInUserEmail", loginData.email);
      const logins = JSON.parse(localStorage.getItem("userLogins")) || {};
      logins[loginData.email] = new Date().toISOString();
      localStorage.setItem("userLogins", JSON.stringify(logins));
      navigate("/admin");
      return;
    }

    const user = users.find(
      (user) =>
        user.email === loginData.email &&
        user.password === loginData.password
    );

    if (user) {
      console.log(user)
      setError("");
      localStorage.setItem("loggedInUserEmail", JSON.stringify(user));
      const logins = JSON.parse(localStorage.getItem("userLogins")) || {};
      logins[user.email] = new Date().toISOString();
      localStorage.setItem("userLogins", JSON.stringify(logins));
      navigate("/home");
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((user) => user.email === signUpData.email)) {
      setError("User already exists with this email.");
      return;
    }

    users.push(signUpData);
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    alert("Signup successful! Please login.");
    setSignUpData({ firstName: "", lastName: "", email: "", password: "" });
    setIsLogin(true);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{isLogin ? "Login" : "Sign Up"}</h2>

      {isLogin ? (
        <form onSubmit={handleLoginSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            value={loginData.email}
            onChange={handleLoginChange}
            required
          />
          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleLoginChange}
            required
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
          <p
            style={styles.toggle}
            onClick={() => {
              setError("");
              setIsLogin(false);
            }}
          >
            Don't have an account? Sign Up
          </p>
        </form>
      ) : (
        <form onSubmit={handleSignUpSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={signUpData.firstName}
            onChange={handleSignUpChange}
            required
          />
          <input
            style={styles.input}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={signUpData.lastName}
            onChange={handleSignUpChange}
            required
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            value={signUpData.email}
            onChange={handleSignUpChange}
            required
          />
          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={signUpData.password}
            onChange={handleSignUpChange}
            required
          />
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
          <p
            style={styles.toggle}
            onClick={() => {
              setError("");
              setIsLogin(true);
            }}
          >
            Already have an account? Login
          </p>
        </form>
      )}

      {error && <p style={styles.errorMsg}>{error}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    boxShadow: "0 0 15px rgba(0, 202, 224, 0.5)",
  },
  heading: {
    marginBottom: "20px",
    color: "#00CAE0",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #00CAE0",
    backgroundColor: "#111",
    color: "#fff",
  },
  inputFocus: {
    borderColor: "#00CAE0",
    boxShadow: "0 0 5px #00CAE0",
  },
  button: {
    padding: "12px",
    backgroundColor: "#00CAE0",
    color: "#000",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#fff",
    color: "#00CAE0",
  },
  toggle: {
    marginTop: "10px",
    color: "#00CAE0",
    cursor: "pointer",
  },
  errorMsg: {
    color: "red",
    marginTop: "10px",
  },
};

export default Login;
