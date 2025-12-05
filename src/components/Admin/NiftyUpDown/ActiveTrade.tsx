import { useState } from "react";

export default function ActiveTrade(): JSX.Element {
const [activeTrades, setActiveTrades] = useState<any[]>([]);


    const uid = (p = "") => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}${p}`;
return (
    <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">📊</span>
                    <h2 className="text-lg font-semibold dark:text-gray-200">Active Trades</h2>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Show</label>
                            <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 dark:text-white">
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                                <option>50</option>
                            </select>
                        </div>
                        <div className="flex items-end">
                            <span className="text-sm text-gray-600 dark:text-gray-400">entries</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2 dark:text-gray-300">Search:</label>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded w-48 dark:bg-gray-800 dark:text-white"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded">
                    <table className="w-full">
                        <thead className="bg-gray-800 dark:bg-gray-700 text-white">
                            <tr>
                                <th className="px-4 py-3 text-left">ID</th>
                                <th className="px-4 py-3 text-left">Type</th>
                                <th className="px-4 py-3 text-left">Amount</th>
                                <th className="hidden md:table-cell px-4 py-3 text-left">Price</th>
                                <th className="px-4 py-3 text-left">Status</th>
                                <th className="hidden md:table-cell px-4 py-3 text-left">Time</th>
                                <th className="px-4 py-3 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activeTrades.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                                        No data available in table
                                    </td>
                                </tr>
                            ) : (
                                activeTrades.map((trade) => (
                                    <tr key={trade.id} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <td className="px-4 py-3 dark:text-gray-300">{trade.id.slice(-6)}</td>
                                        <td className="px-4 py-3 font-semibold text-blue-600 dark:text-blue-400">{trade.type}</td>
                                        <td className="px-4 py-3 dark:text-gray-300">₹{trade.amount}</td>
                                        <td className="hidden md:table-cell px-4 py-3 dark:text-gray-300">₹{trade.price}</td>
                                        <td className="px-4 py-3">
                                            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded text-sm font-semibold">
                                                {trade.status}
                                            </span>
                                        </td>
                                        <td className="hidden md:table-cell px-4 py-3 dark:text-gray-300">{trade.time}</td>
                                        <td className="px-4 py-3">
                                            <button className="px-3 py-1 bg-red-500 dark:bg-red-600 text-white rounded text-sm hover:bg-red-600 dark:hover:bg-red-700">
                                                Close
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-center mt-4 text-sm text-gray-600 dark:text-gray-400">
                    <div>Showing 0 to 0 of {activeTrades.length} entries</div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">Previous</button>
                        <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700">Next</button>
                    </div>
                </div>
            </div>
                );
}
