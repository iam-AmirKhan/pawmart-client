import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { registerUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    if (!/(?=.*[A-Z])/.test(password))
      return setError("Must include at least one uppercase letter");
    if (!/(?=.*[a-z])/.test(password))
      return setError("Must include at least one lowercase letter");
    if (password.length < 6)
      return setError("Password must be at least 6 characters");

    registerUser(email, password)
      .then((res) => {
        updateProfile(res.user, { displayName: name, photoURL });
        toast.success("Account created successfully!");
        e.target.reset();
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-2xl bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
      <form onSubmit={handleRegister} className="space-y-3">
        <input name="name" type="text" placeholder="Name" className="input input-bordered w-full" required />
        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" required />
        <input name="password" type="password" placeholder="Password" className="input input-bordered w-full" required />
        <input name="photoURL" type="text" placeholder="Photo URL" className="input input-bordered w-full" />
        <button className="btn btn-primary bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 transition w-full">Register</button>
      </form>
      <p className="text-red-500 text-sm mt-2">{error}</p>
      <div className="mt-4 text-center">
        <button onClick={googleLogin} className="btn btn-outline w-full">Continue with Google</button>
      </div>
      <p className="mt-3 text-center text-sm">
        Already have an account? <Link to="/login" className="text-blue-600 font-semibold">Login here</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default Register;
