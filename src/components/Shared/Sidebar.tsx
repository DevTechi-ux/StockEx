import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  LineChart,
  Wallet,
  Settings,
  Users,
  CircleDollarSign,
  History,
  ChevronDown,
  Shield,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useSidebar } from "../../contexts/SidebarContext";

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const location = useLocation();
  const { isCollapsed } = useSidebar();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const userLinks = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/trading", icon: LineChart, label: "Trading" },
    { to: "/wallet", icon: Wallet, label: "Wallet" },
    { to: "/settings", icon: Settings, label: "Settings" },
  ];

  const adminLinks = [
    { to: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/admin/manage-transactions", icon: CircleDollarSign, label: "Manage Transactions" },
    { to: "/admin/fundrequest", icon: Users, label: "Fund Requests" },
    { to: "/admin/fund", icon: History, label: "Fund" },
    { to: "/admin/nifty-updown-prediction", icon: Settings, label: "Nifty Up/Down Prediction" },
    { to: "/admin/nifty-updown", icon: LayoutDashboard, label: "Nifty Up/Down Admin" },
    { to: "/admin/trade", icon: Users, label: "Trade" },
    { to: "/admin/transaction-report", icon: CircleDollarSign, label: "Transaction Report" },
    { to: "/admin/subscription-pin", icon: History, label: "Subscription Pin" },
    { to: "/admin/balance", icon: History, label: "Legder Balance" },
    { to: "/admin/banscript", icon: Settings, label: "BanScript" },
    { to: "/admin/download-report", icon: Settings, label: "Download Report" },
    { to: "/admin/manual-active-trade", icon: Settings, label: "Manual Active Trade" },
    { to: "/admin/notification", icon: Settings, label: "Notification" },
    { to: "/admin/change-password", icon: Settings, label: "Change Password" },
  ];

  const systemAdminSubLinks = [
    { to: "/admin/manage-risk", icon: Settings, label: "Manage Risk" },
    { to: "/admin/manage-roles", icon: Users, label: "Manage Roles" },
    { to: "/admin/manage-users", icon: Shield, label: "Manage Users" },
  ];

  const links = user?.role === "admin" ? adminLinks : userLinks;

  return (
    <div
      className={`bg-gradient-to-b from-gray-200 to-gray-100 border-r shadow-md min-h-screen transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="p-4">
        <div className="space-y-1">
          {links.map(({ to, icon: Icon, label }) => {
            const active = location.pathname === to;
            return (
              <React.Fragment key={to}>
                <Link
                  to={to}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                    active
                      ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-300"
                  }`}
                  title={label}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${active ? "text-white" : "text-gray-700"}`} />
                  {!isCollapsed && <span>{label}</span>}
                </Link>
                
                {/* System Admin Dropdown - After Trade link */}
                {user?.role === "admin" && label === "Trade" && (
                  <div className="mt-2">
                    <button
                      onClick={() => setExpandedMenu(expandedMenu === "systemAdmin" ? null : "systemAdmin")}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                        expandedMenu === "systemAdmin"
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      <Shield className={`w-5 h-5 flex-shrink-0 ${expandedMenu === "systemAdmin" ? "text-white" : "text-gray-700"}`} />
                      {!isCollapsed && (
                        <>
                          <span>System Admin</span>
                          <ChevronDown
                            className={`w-4 h-4 ml-auto transition-transform ${
                              expandedMenu === "systemAdmin" ? "rotate-180" : ""
                            }`}
                          />
                        </>
                      )}
                    </button>
                    
                    {expandedMenu === "systemAdmin" && !isCollapsed && (
                      <div className="pl-4 mt-2 space-y-1 border-l-2 border-blue-500">
                        {systemAdminSubLinks.map(({ to, icon: SubIcon, label: subLabel }) => {
                          const active = location.pathname === to;
                          return (
                            <Link
                              key={to}
                              to={to}
                              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all ${
                                active
                                  ? "bg-blue-100 text-blue-600"
                                  : "text-gray-600 hover:bg-gray-200"
                              }`}
                            >
                              <SubIcon className="w-4 h-4" />
                              <span>{subLabel}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
