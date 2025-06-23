import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from '../components/Navbar'

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-[100vw] min-h-screen relative bg-gradient-to-b from-blue-400 to-slate-600 dark:from-gray-800 dark:to-black overflow-hidden p-8">
      <h1 className="text-white text-5xl font-bold mb-8 dark:text-white">Student Info →</h1>

      {loading && (
        <p className="text-white text-xl dark:text-white">Loading users...</p>
      )}

      {error && (
        <p className="text-red-300 text-xl">{error}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-indigo-300 rounded-[30px] p-6 text-black shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 ">{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
