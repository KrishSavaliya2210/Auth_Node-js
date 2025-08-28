import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./auth/LoginForm";
import SignUpForm from "./auth/SignupForm";
import Dashbord from "./pages/Dashbord";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route
        path="/login"
        element={
          <Layout>
            <LoginForm />
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <SignUpForm />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashbord />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
