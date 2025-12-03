import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate(email.includes('admin') ? '/admin' : '/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 tracking-tight">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-500">Sign in to continue to Dashboard</p>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@gmail.com"
              className="block w-full px-4 py-3 border border-gray-300 rounded-xl outline-none shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="block w-full px-4 py-3 border border-gray-300 rounded-xl outline-none shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl text-white font-semibold text-base shadow-md bg-indigo-600 hover:bg-indigo-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          <span>Don't have an account?</span>
          <a href="/register" className="font-medium text-indigo-600 hover:underline ml-1">
            Register
          </a>
        </div>
      <div className="text-center mt-2">
        <a href="#" className="text-sm font-medium text-indigo-600 hover:underline">
          Forgot password?
        </a>
      </div>
      </div>
    </div>
  );
};


export default Login;