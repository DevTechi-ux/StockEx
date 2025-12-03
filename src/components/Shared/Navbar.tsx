import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, User, Menu } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useSidebar } from "../../contexts/SidebarContext";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { toggleCollapsed } = useSidebar();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-gray-200 to-gray-100 shadow-md border-b">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleCollapsed}
              className="p-2 hover:bg-gray-300 rounded-lg text-gray-700 transition"
              title="Toggle Sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>

            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent tracking-wide">
              StockEX
            </span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 text-gray-700">
              <User className="w-5 h-5" />
              <span>{user?.name}</span>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 transition"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
