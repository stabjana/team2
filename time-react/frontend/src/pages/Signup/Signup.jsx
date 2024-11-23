import { useState, useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";

function Signup() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.name.value.trim();
    const email = e.email.value.trim();
    const password = e.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });

    if (password.length <= 6) {
      setError("Password should be at least 6 characters long.");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="hero min-h-screen bg-white my-12"
      >
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Register!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <p className="mb-2 link link-hover">
                  <small>
                    Already have an account?{" "}
                    <Link to="/login">Login here.</Link>
                  </small>
                </p>
                <button className="btn bg-yellow-300 text-black hover:text-white">
                  Register
                </button>
              </div>
              <p className="text-red-500">{error}</p>
              <p className="text-green-400">{success}</p>
            </div>
          </div>
        </div>{" "}
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Register!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="url"
                  placeholder="Your Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-4">
                <p className="mb-2 link link-hover">
                  <small>
                    Already have an account?{" "}
                    <Link to="/login">Login here.</Link>
                  </small>
                </p>
                <button className="btn bg-yellow-300 text-black hover:text-white">
                  Register
                </button>
              </div>
              <p className="text-red-500">{error}</p>
              <p className="text-green-400">{success}</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
