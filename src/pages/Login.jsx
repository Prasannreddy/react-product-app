// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../services/authService";
// import "./Login.css";
// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const handleLogin = async () => {
//     if (!username && !password) {
//       setError("Please enter username and password");
//       return;
//     }
//     if (!username) {
//       setError("Please enter username");
//       return;
//     }

//     if (!password) {
//       setError("Please enter password");
//       return;
//     }
//     setError("");

//     try {
//       const res = await loginUser({ username, password });
//       localStorage.setItem("token", res.data.token);
//       navigate("/products");
//     } catch (err) {
//       setError("Invalid username or password");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Product App</h2>
//         <p className="subtitle">Login to continue</p>
//         {error && <p className="error-text">{error}</p>}
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username && !password) {
      setError("Please enter username and password");
      return;
    }
    if (!username) {
      setError("Please enter username");
      return;
    }
    if (!password) {
      setError("Please enter password");
      return;
    }

    setError("");

    try {
      const res = await loginUser({ username, password });
      localStorage.setItem("token", res.data.token);
      navigate("/products");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-2">
          Product App
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        <input
          type="text"
          className="login-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="login-button"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
