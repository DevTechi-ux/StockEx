"use client"

import { useState } from "react"

const columns = ["Symbol", "LTP", "%", "BidQty", "Bid", "Ask", "AskQty", "Open", "High", "Low", "Close"]

export function SymbolTable() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="mb-6">
      {/* Search */}
      <div className="flex justify-end mb-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Search:</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded px-3 py-1 outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-600 text-white">
              {columns.map((col) => (
                <th key={col} className="px-4 py-3 text-center text-sm font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={columns.length} className="text-center py-6 text-gray-500 border border-gray-200">
                No data available in table
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination info */}
      <div className="mt-2 text-sm text-gray-600">Showing 0 to 0 of 0 entries</div>
    </div>
  )
}   
export default SymbolTable

