import React from 'react';
import { Users as UsersIcon, Check, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Users: React.FC = () => {
  const { users, updateUserStatus } = useAuth();

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <UsersIcon className="w-6 h-6 text-blue-500" />
          <h2 className="text-xl font-semibold">User Management</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="pb-4">Name</th>
                <th className="pb-4">Email</th>
                <th className="pb-4">Registration Date</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Balance (USD)</th>
                <th className="pb-4">Total Trades</th>
                <th className="pb-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="py-4">{user.name}</td>
                  <td className="py-4">{user.email}</td>
                  <td className="py-4">{user.registeredAt.toLocaleDateString()}</td>
                  <td className="py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user.isActive
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {user.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="py-4">${user.balance.toFixed(2)}</td>
                  <td className="py-4">{user.totalTrades}</td>
                  <td className="py-4">
                    <button
                      onClick={() => updateUserStatus(user.id, !user.isActive)}
                      className={`inline-flex items-center px-3 py-1 rounded-lg text-white ${
                        user.isActive
                          ? 'bg-red-500 hover:bg-red-600'
                          : 'bg-green-500 hover:bg-green-600'
                      }`}
                    >
                      {user.isActive ? (
                        <>
                          <X className="w-4 h-4 mr-1" />
                          Deactivate
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4 mr-1" />
                          Activate
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;