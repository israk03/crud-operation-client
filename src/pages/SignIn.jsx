const SignIn = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          {/* Sign In Button */}
          <button className="btn btn-primary w-full">Sign In</button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="/sign-up" className="text-blue-500">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
