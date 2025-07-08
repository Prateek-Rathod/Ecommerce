import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign up');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-gray-100 via-white to-gray-200 p-6">
      <form
        onSubmit={onSubmitHandler}
        className="backdrop-blur-md bg-white/70 border border-gray-300 shadow-xl rounded-2xl px-8 py-10 w-full max-w-md flex flex-col items-center gap-5 transition-all duration-300"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-3xl font-semibold text-gray-800">{currentState}</p>
          <hr className="w-10 h-1 bg-gray-800 border-none rounded-full" />
        </div>

        {/* Name Field */}
        {currentState === 'Login' ? null : (
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            placeholder="Full Name"
            required
          />
        )}

        {/* Email */}
        <input
          type="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
          placeholder="Email"
          required
        />

        {/* Password */}
        <input
          type="password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
          placeholder="Password"
          required
        />

        {/* Links */}
        <div className="w-full flex justify-between text-sm text-gray-600 mt-[-4px]">
          <p className="hover:underline cursor-pointer">Forgot password?</p>
          {currentState === 'Login' ? (
            <p
              onClick={() => setCurrentState('Sign up')}
              className="hover:underline cursor-pointer"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('Login')}
              className="hover:underline cursor-pointer"
            >
              Login Here
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gray-800 hover:bg-black text-white font-medium px-6 py-3 rounded-lg mt-4 w-full transition-all duration-300"
        >
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Login;
