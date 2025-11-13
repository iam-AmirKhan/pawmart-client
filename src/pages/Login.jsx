import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Google login successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-2xl bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      <form onSubmit={handleLogin} className="space-y-3">
        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
        <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />
        <button className="btn btn-primary bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition w-full">Login</button>
      </form>
      <div className="mt-4 text-center">
        <button onClick={handleGoogle} className="btn btn-outline w-full">Continue with Google</button>
      </div>
      <p className="mt-3 text-center text-sm">
        Don’t have an account? <Link to="/register" className="text-blue-600 font-semibold">Register here</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default Login;
