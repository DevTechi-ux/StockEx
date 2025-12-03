import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';
import Sidebar from '../components/Shared/Sidebar';
import { useAuth } from '../contexts/AuthContext';

const UserLayout: React.FC = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;