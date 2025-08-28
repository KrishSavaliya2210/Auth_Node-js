import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { verifyToken } from "../api";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("access");
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }
      try {
        const res = await verifyToken();
        setUser(res.data.user);
      } catch (err) {
        console.error(
          "Token invalid or expired:",
          err.response?.data || err.message
        );
        localStorage.removeItem("access");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkToken();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    setUser(null);
    navigate("/login");
  };

  if (loading) return null;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/dashboard">
          Banas Tech Private Ltd
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item d-flex align-items-center text-white me-2">
                  👋 Hi, {user.name || user.email}
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-danger ms-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
