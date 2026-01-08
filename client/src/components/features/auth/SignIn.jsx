import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../../../services/api';
import useStore from '../../../store/useStore';
import PasswordInput from '../../ui/PasswordInput';
import GoogleLoginButton from './GoogleLoginButton';

const SignIn = () => {
  const navigate = useNavigate();
  const setAuth = useStore((s) => s.setAuth);

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await api.signIn(form.email, form.password);
      localStorage.setItem('auth_token', data.token);
      setAuth(data.user, data.token);
      navigate('/');
    } catch (err) {
      setError(err?.response?.data?.message || 'Sign in failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0f172a] text-white">

      <main className="relative z-10 px-4 sm:px-6 pt-8 sm:pt-12 pb-12">
        <div className="max-w-md mx-auto">
          <div className="bg-[#0b1224]/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Sign in to continue</h2>
            <p className="text-gray-400 mb-6 text-center">Enter your credentials to access your workspace.</p>
            
            {/* Google Login on Top */}
            <div className="mb-6">
              <GoogleLoginButton onError={(msg) => setError(msg)} />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px bg-white/10 w-full" />
              <span className="text-xs text-gray-400 whitespace-nowrap">or sign in with email</span>
              <div className="h-px bg-white/10 w-full" />
            </div>

            {error && <div className="mb-4 text-red-400 text-sm">{error}</div>}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className="w-full bg-[#0b1224] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-300">Password</label>
                  <PasswordInput name="password" value={form.password} onChange={onChange} placeholder="Your password" />
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>Keep your password secure.</span>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-bold py-3 rounded-xl"
                >
                  {loading ? 'Signing in…' : 'Sign In'}
                </button>
            </form>
            <p className="text-sm text-gray-400 mt-4 text-center">
              New here? <Link to="/signup" className="text-indigo-400 hover:underline">Create an account</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
