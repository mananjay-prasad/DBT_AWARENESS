import React, { useState } from 'react';
import { Shield, Lock, User } from 'lucide-react';

interface LoginProps {
  onLogin: (credentials: { username: string; password: string }) => boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simple validation
    if (!username || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const success = onLogin({ username, password });
    
    if (!success) {
      setError('Invalid credentials');
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Government Header */}
        <div className="text-center mb-8">
          <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 h-2 w-full mb-4"></div>
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white">
              <Shield size={32} />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">DBT Awareness Portal</h1>
          <p className="text-gray-600">Ministry of Social Justice & Empowerment</p>
          <p className="text-sm text-gray-500 mt-2">Secure Login Required</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Sign In to Continue</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username / ID
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-3 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              For demo purposes, enter any username and password to continue
            </p>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Having trouble? Contact support: <br />
              <span className="text-orange-600">1800-XXX-XXXX</span>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-md p-4">
          <p className="text-sm text-blue-800">
            <strong>Security Notice:</strong> This portal uses secure encryption to protect your data. 
            Never share your login credentials with anyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;