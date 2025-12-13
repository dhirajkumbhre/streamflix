import { useState } from "react";
import { signup } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signup(email, password);
    if (res.id) nav("/login");
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl mb-4">Signup</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-80 space-y-4"
      >
        <input
          className="p-3 rounded bg-gray-800"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="p-3 rounded bg-gray-800"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-red-600 py-3 rounded">Signup</button>
      </form>
    </div>
  );
}