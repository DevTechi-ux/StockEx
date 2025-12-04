import React, { useState } from "react";

const ChangePaswords: React.FC = () => {
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
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">

      {/* Username */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">User Name</label>
        <input
          type="text"
          disabled
          value="01"
          className="w-full px-4 py-2 bg-gray-200 rounded border border-gray-300"
        />
      </div>

      {/* Expiry Date */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Expiry Date</label>
        <input
          type="text"
          disabled
          value="04-12-2026"
          className="w-full px-4 py-2 bg-gray-200 rounded border border-gray-300"
        />
      </div>

      {/* New Password */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewPassword(e.target.value)
          }
          className="w-full px-4 py-2 border rounded border-gray-300"
          placeholder="Enter new password"
        />
      </div>

      {/* Confirm Password */}
      <div className="mb-1">
        <label className="block mb-1 font-medium">Confirm New Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmPassword(e.target.value)
          }
          className="w-full px-4 py-2 border rounded border-gray-300"
          placeholder="Confirm new password"
        />
      </div>

      {/* Error Message */}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

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
  );
};

export default ChangePaswords;
