import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-black">
      <h1 className="text-5xl font-bold text-red-600 mb-6">StreamFlix</h1>
      <p className="text-xl mb-8">Unlimited movies, shows, & entertainment.</p>

      <div className="space-x-4">
        <Link to="/login" className="bg-red-600 px-6 py-3 rounded text-lg">
          Login
        </Link>
        <Link to="/signup" className="bg-gray-700 px-6 py-3 rounded text-lg">
          Signup
        </Link>
      </div>
    </div>
  );
}