import React, { useState } from "react";

const ChangePasswords: React.FC = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSave = () => {
    if (!confirmPassword) {
      setError("The ConfirmPassword field is required.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    alert("Password Updated!");
  };

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">

        {/* Username */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">User Name</label>
          <input
            type="text"
            disabled
            value="TEXONE529212SA"
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 dark:text-gray-400"
          />
        </div>

        {/* Expiry Date */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Expiry Date</label>
          <input
            type="text"
            disabled
            value="15-06-2026"
            className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 dark:text-gray-400"
          />
        </div>

        {/* New Password */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewPassword(e.target.value)
            }
            className="w-full px-4 py-2 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter new password"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-1">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full px-4 py-2 border rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Confirm new password"
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-600 dark:text-red-400 text-sm mt-1">{error}</p>}

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save
          </button>

          <button
            className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswords;
