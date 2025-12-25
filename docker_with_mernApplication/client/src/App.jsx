import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((responce) => {
        setUsers(responce.data.data);
      })
      .catch((error) => {
        console.error("there was an error in fetching users", error);
      });
  }, []);
  return (
    <>
      <h1>users</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
