import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import { handleSuccess, handleError } from "../utils";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("access");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(login);
      const { success, token } = response.data;
      if (success) {
        localStorage.setItem("access", token);
        handleSuccess("Login successful!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      }
    } catch (error) {
      console.log("Login Error:", error.response?.data.message);

      let errorMsg = "Login failed. Try again.";

      if (error.response?.data?.message) {
        errorMsg = error.response.data.message;
      } else if (error.response?.data?.error) {
        errorMsg = error.response.data.error;
      } else if (error.message) {
        errorMsg = error.message;
      }

      handleError(errorMsg);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4 rounded">
            <h2 className="text-center mb-4 text-success">Login</h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={login.email}
                  className="form-control"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  value={login.password}
                  className="form-control"
                  placeholder="Enter Your Password"
                  required
                />
              </div>

              <button type="submit" className="btn btn-success w-100">
                Login
              </button>
            </form>
            <ToastContainer />

            <p className="mt-3 text-center">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-decoration-none">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
