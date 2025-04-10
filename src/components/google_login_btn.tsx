import React from "react";

const GoogleLoginButton = () => {
  const handleLogin = () => {
    window.location.href = "https://example-auth.com";
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={handleLogin}
        className="flex items-center gap-3 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-md px-6 py-3 hover:shadow-lg transition duration-300"
      >
        <img
          src="https://www.svgrepo.com/show/355037/google.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span className="font-medium">Login with Google</span>
      </button>
    </div>
  );
};

export default GoogleLoginButton;
