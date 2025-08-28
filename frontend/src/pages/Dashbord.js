import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access");
    console.log("Dashboard check: token in localStorage:", token);
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);
  return (
    <div>
      <h2>Welcome to Dashboard 🚀</h2>
    </div>
  );
};

export default Dashboard;
