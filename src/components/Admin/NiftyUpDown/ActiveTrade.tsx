import { useState } from "react";

export default function ActiveTrade(): JSX.Element {
const [activeTrades, setActiveTrades] = useState<any[]>([]);


    const uid = (p = "") => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}${p}`;
return (
    <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">📊</span>
                    <h2 className="text-lg font-semibold">Active Trades</h2>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Show</label>
                            <select className="px-3 py-2 border border-gray-300 rounded">
                                <option>10</option>
                                <option>25</option>
                                <option>50</option>
                                <option>50</option>
                            </select>
                        </div>
                        <div className="flex items-end">
                            <span className="text-sm text-gray-600">entries</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Search:</label>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="px-4 py-2 border border-gray-300 rounded w-48"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white rounded">
                    <table className="w-full">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="px-4 py-3 text-left">ID</th>
                                <th className="px-4 py-3 text-left">Type</th>
                                <th className="px-4 py-3 text-left">Amount</th>
                                <th className="px-4 py-3 text-left">Price</th>
                                <th className="px-4 py-3 text-left">Status</th>
                                <th className="px-4 py-3 text-left">Time</th>
                                <th className="px-4 py-3 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activeTrades.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="px-4 py-6 text-center text-gray-500">
                                        No data available in table
                                    </td>
                                </tr>
                            ) : (
                                activeTrades.map((trade) => (
                                    <tr key={trade.id} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">{trade.id.slice(-6)}</td>
                                        <td className="px-4 py-3 font-semibold text-blue-600">{trade.type}</td>
                                        <td className="px-4 py-3">₹{trade.amount}</td>
                                        <td className="px-4 py-3">₹{trade.price}</td>
                                        <td className="px-4 py-3">
                                            <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm font-semibold">
                                                {trade.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3">{trade.time}</td>
                                        <td className="px-4 py-3">
                                            <button className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">
                                                Close
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                    <div>Showing 0 to 0 of {activeTrades.length} entries</div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">Previous</button>
                        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">Next</button>
                    </div>
                </div>
            </div>
                );
}
