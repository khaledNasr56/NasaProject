// SignUp.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Account created successfully!");
    // هنا ممكن تضيف منطق الحفظ أو ال API
  };

  return (
<div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
  <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-12">
    <h2 className="text-4xl font-bold mb-4 text-gray-900 text-center">Sign Up</h2>
    <p className="text-gray-600 mb-8 text-center text-lg">Create your account to start earning rewards.</p>
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg"
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg"
        required
      />
      <button
        type="submit"
        className="w-full cursor-pointer bg-emerald-500 hover:bg-green-600 text-white font-semibold py-4 rounded-2xl text-lg transition-colors"
      >
        Sign Up
      </button>
    </form>
    <p className="mt-6 text-center text-sm text-gray-500">
      Already have an account? <Link to="/" className="text-emerald-500 hover:underline">Sign In</Link>
    </p>
  </div>
</div>

  );
}
