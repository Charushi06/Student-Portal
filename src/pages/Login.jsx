import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.includes("@gmail.com") && password.length >= 4) {
      navigate("/dashboard");
    } else {
      setError("Enter a valid Gmail ID and password (min 4 characters)");
    }
  };

  const fillDummyCredentials = () => {
    setEmail("student@gmail.com");
    setPassword("1234");
    setError("");
  };

  return (
    <div className="w-[100vw] h-[1024px] relative bg-gradient-to-b from-blue-400 to-slate-600 dark:from-gray-800 dark:to-black overflow-hidden p-8">
      <div className="w-[1034px] h-[584px] left-[222px] top-[220px] absolute opacity-50 bg-white rounded-3xl" />
      <div className="w-[517px] h-[584px] left-[222px] top-[220px] absolute opacity-50 bg-white rounded-3xl" />

      <form
        onSubmit={handleLogin}
        className="absolute top-[400px] left-[779px] space-y-6"
      >
        <div>
          <label className="block text-2xl text-black mb-2">Email Id</label>
          <input
            type="email"
            className="w-96 h-11 p-2 rounded-[40px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-2xl text-black mb-2">Password</label>
          <input
            type="password"
            className="w-96 h-11 p-2 rounded-[40px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-600">{error}</p>}

        <div className="space-x-4">
          <button
            type="submit"
            className="w-[150px] h-11 bg-slate-600 text-white rounded-[40px]"
          >
            Login
          </button>

          <button
            type="button"
            onClick={fillDummyCredentials}
            className="w-30 h-11 bg-indigo-500 text-white rounded-[40px]"
          >
            Use Dummy Credentials
          </button>
        </div>
      </form>

      <h1 className="w-72 left-[342px] top-[360px] absolute text-center text-black text-7xl font-normal font-['Inria_Serif']">
        Student Portal
      </h1>
    </div>
  );
}

export default Login;
