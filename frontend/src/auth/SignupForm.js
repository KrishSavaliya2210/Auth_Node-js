import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import { signupUser } from "../api";

const SignUp = () => {
  const navigate = useNavigate();
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = signup;
    if (!name || !email || !password) {
      return handleError("All Fiels are Required");
    }

    try {
      const response = await signupUser(signup);
      const { success, message, token } = response.data;

      if (success) {
        localStorage.setItem("access", token);
        handleSuccess(message);
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        handleError(error.response.data.message || "Validation Error");
      } else {
        handleError("Network Error");
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4 rounded">
            <h2 className="text-center mb-4 text-primary">Sign Up</h2>

            <form onSubmit={handleSubmit} method="POST">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  value={signup.name}
                  className="form-control"
                  placeholder="Enter Your Name"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={signup.email}
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={signup.password}
                  className="form-control"
                  placeholder="Enter Your Password"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>
            <ToastContainer />

            <p className="mt-3 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
