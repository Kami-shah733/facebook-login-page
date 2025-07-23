import React from "react";
import { useState } from 'react';


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter your email");
    } else {
      // Here you'd normally send a request to backend
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
        {submitted ? (
          <p className="text-green-600">If the email is valid, a reset link has been sent.</p>
        ) : (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Send Reset Link
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
