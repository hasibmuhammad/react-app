import { useState, useEffect } from "react";
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-red-400">{error}</p>}
      <ol className="list-decimal">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </>
  );
};

export default Users;
