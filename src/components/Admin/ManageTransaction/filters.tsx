"use client"

import { User } from "lucide-react"

export function TransactionFilters() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {/* Select User */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">Select User</label>
        <div className="flex items-center border border-gray-300 rounded-md bg-white">
          <span className="px-3 py-2 border-r border-gray-300 bg-gray-50">
            <User className="w-5 h-5 text-gray-500" />
          </span>
          <select className="flex-1 px-3 py-2 text-gray-600 bg-transparent outline-none">
            <option>--Select--</option>
            <option>User 1</option>
            <option>User 2</option>
          </select>
        </div>
      </div>

      {/* Select Admin */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">Select Admin</label>
        <div className="flex items-center border border-gray-300 rounded-md bg-white">
          <span className="px-3 py-2 border-r border-gray-300 bg-gray-50">
            <User className="w-5 h-5 text-gray-500" />
          </span>
          <select className="flex-1 px-3 py-2 text-gray-600 bg-transparent outline-none">
            <option>--Select--</option>
            <option>Admin 1</option>
            <option>Admin 2</option>
          </select>
        </div>
      </div>

      {/* Select Broker */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">Select Broker</label>
        <div className="flex items-center border border-gray-300 rounded-md bg-white">
          <span className="px-3 py-2 border-r border-gray-300 bg-gray-50">
            <User className="w-5 h-5 text-gray-500" />
          </span>
          <select className="flex-1 px-3 py-2 text-gray-600 bg-transparent outline-none">
            <option>--Select--</option>
            <option>Broker 1</option>
            <option>Broker 2</option>
          </select>
        </div>
      </div>
    </div>
  )
}
export default TransactionFilters