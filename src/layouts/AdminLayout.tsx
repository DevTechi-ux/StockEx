// Full redesigned AdminLayout, Navbar, and Sidebar with modern UI
// Includes glass UI, hover animations, profile menu dropdown, and better spacing

import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Sidebar from "../components/Shared/Sidebar";
import { useAuth } from "../contexts/AuthContext";

const AdminLayout: React.FC = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div className="h-screen flex items-center justify-center text-lg">Loading...</div>;
  if (!user || user.role !== "admin") return <Navigate to="/login" replace />;

  return (
     <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 min-h-[80vh] ">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;