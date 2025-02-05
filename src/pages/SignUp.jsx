import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
            />
          </div>

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

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full"
            />
          </div>

          {/* Sign Up Button */}
          <button className="btn btn-primary w-full">Sign Up</button>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="border-t flex-grow"></div>
            <span className="px-4 text-gray-500">OR</span>
            <div className="border-t flex-grow"></div>
          </div>

          {/* Google Sign-Up Button */}
          <button className="btn btn-outline btn-accent w-full flex items-center justify-center">
            <FaGoogle className="mr-2" />
            Sign Up with Google
          </button>

          {/* Sign In Link */}
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/sign-in" className="text-blue-500">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
