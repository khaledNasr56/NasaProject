// SignIn.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // تحقق من الايميل المطلوب
    if (email === "example@email.com") {
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
   <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
  <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-12">
    <h2 className="text-4xl font-bold mb-4 text-gray-900 text-center">Sign In</h2>
    <p className="text-gray-600 mb-8 text-center text-lg">Welcome back! Please login to continue.</p>
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg"
        required
      />
      <button
        type="submit"
        className="w-full cursor-pointer bg-emerald-500 hover:bg-green-600 text-white font-semibold py-4 rounded-2xl text-lg transition-colors"
      >
        Sign In
      </button>
    </form>
    <p className="mt-6 text-center text-sm text-gray-500">
      Forgot your password? <Link to="/signup" className="text-emerald-500 hover:underline">Sign Up</Link>
    </p>
  </div>
</div>

  );
}
