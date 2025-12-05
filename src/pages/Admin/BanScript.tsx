import React, { useState } from "react"

interface BanScriptEntry {
  id: number
  email: string
  scriptExchange: string
  scriptName: string
}

export default function BanScript() {
  const [enableBanScript, setEnableBanScript] = useState(false)
  const [allUsers, setAllUsers] = useState(false)

  const [selectedUser, setSelectedUser] = useState("")
  const [selectedExchange, setSelectedExchange] = useState("")
  const [selectedScript, setSelectedScript] = useState("")

  const [showEntries, setShowEntries] = useState(10)
  const [searchTerm, setSearchTerm] = useState("")

  // demo data for table
  const [bannedScripts] = useState<BanScriptEntry[]>([])

  const filtered = bannedScripts.filter(
    (row) =>
      row.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.scriptExchange.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.scriptName.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      {/* Header actions */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-6">
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              checked={enableBanScript}
              onChange={(e) => setEnableBanScript(e.target.checked)}
              className="w-4 h-4 cursor-pointer"
            />
            Enable Ban Script
          </label>
          <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              checked={allUsers}
              onChange={(e) => setAllUsers(e.target.checked)}
              className="w-4 h-4 cursor-pointer"
            />
            AllUsers
          </label>
        </div>

        <button className="px-6 py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700">
          Delete All BanScript
        </button>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-xl">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Select User</label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">--Select--</option>
            <option value="user1@example.com">user1@example.com</option>
            <option value="user2@example.com">user2@example.com</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Script Exchange</label>
          <select
            value={selectedExchange}
            onChange={(e) => setSelectedExchange(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="NSE">NSE</option>
            <option value="BSE">BSE</option>
            <option value="MCX">MCX</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Select Script</label>
          <select
            value={selectedScript}
            onChange={(e) => setSelectedScript(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">None selected</option>
            <option value="HFCL">HFCL</option>
            <option value="MRF">MRF</option>
          </select>
        </div>
      </div>

      <button className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 mb-8">
        Save
      </button>

      {/* Show entries and Search */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-sm">
          <span>Show</span>
          <select
            value={showEntries}
            onChange={(e) => setShowEntries(Number(e.target.value))}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded px-2 py-1"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          <span>entries</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span>Search:</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-800 rounded px-3 py-1 w-56 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="w-full bg-white dark:bg-gray-800 rounded overflow-x-auto mb-4">
        <div className="inline-block min-w-full align-middle">
          <table className="min-w-max w-full border-collapse">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="px-4 py-3 text-left font-semibold">Email</th>
                <th className="px-4 py-3 text-left font-semibold">Script Exchange</th>
                <th className="px-4 py-3 text-left font-semibold">Script Name</th>
                <th className="px-4 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                    No data available in table
                  </td>
                </tr>
              ) : (
                filtered.slice(0, showEntries).map((row) => (
                  <tr key={row.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-3">{row.email}</td>
                    <td className="px-4 py-3">{row.scriptExchange}</td>
                    <td className="px-4 py-3">{row.scriptName}</td>
                    <td className="px-4 py-3">
                      <button className="text-red-600 font-semibold hover:underline">Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination & back link */}
      <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
        <span>Showing 0 to 0 of {filtered.length} entries</span>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
            Previous
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
            Next
          </button>
        </div>
      </div>

      <button className="text-blue-600 hover:underline text-sm">Back</button>
    </div>
  )
}
