import { useState } from 'react';

export default function ManageRisk() {
    const [scripts] = useState<any[]>([]);
    const [isActive, setIsActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showEntries, setShowEntries] = useState(10);
    const [showFilterModal, setShowFilterModal] = useState(false);

    return (
        <div className="w-full ">
      <div className="max-w-6xl mx-auto py-4 overflow-x-hidden">
        <div className="p-8  min-h-screen">
            {/* Is Active Checkbox and Filter Button */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 font-semibold">
                        <input
                            type="checkbox"
                            checked={isActive}
                            onChange={(e) => setIsActive(e.target.checked)}
                            className="w-4 h-4 cursor-pointer"
                        />
                        Is Active
                    </label>
                </div>
                <button
                    onClick={() => setShowFilterModal(true)}
                    className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                >
                    Filter
                </button>
            </div>

            {/* Show Entries and Search */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <label className="font-semibold">Show</label>
                    <select
                        value={showEntries}
                        onChange={(e) => setShowEntries(Number(e.target.value))}
                        className="px-3 py-2 border border-gray-300 rounded w-16"
                    >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    <label className="font-semibold">entries</label>
                </div>

                <div className="flex items-center gap-3">
                    <label className="font-semibold">Search:</label>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded w-64"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="w-full  rounded overflow-x-auto mb-6">
                <div className="inline-block min-w-full align-middle">
                <table className="min-w-max w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="px-6 py-3 text-left font-semibold">Script</th>
                            <th className="px-6 py-3 text-left font-semibold">Apply Script Exchange Wise</th>
                            <th className="px-6 py-3 text-left font-semibold">RMS Rule</th>
                            <th className="px-6 py-3 text-left font-semibold">Minimum Quantity</th>
                            <th className="px-6 py-3 text-left font-semibold">Max Quantity/Price</th>
                            <th className="px-6 py-3 text-left font-semibold">Net Quantity/Price</th>
                            <th className="px-6 py-3 text-left font-semibold">Net Quantity/Price Day Wise</th>
                            <th className="px-6 py-3 text-left font-semibold">Net Quantity/Price Per Script</th>
                            <th className="px-6 py-3 text-left font-semibold">Upper/Lower Circuit</th>
                            <th className="px-6 py-3 text-left font-semibold">User Name</th>
                            <th className="px-6 py-3 text-left font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scripts.length === 0 ? (
                            <tr>
                                <td colSpan={11} className="px-6 py-8 text-center text-gray-500">
                                    No data available in table
                                </td>
                            </tr>
                        ) : (
                            scripts.map((script, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="px-6 py-3">{script.script}</td>
                                    <td className="px-6 py-3">{script.applyExchange}</td>
                                    <td className="px-6 py-3">{script.rmsRule}</td>
                                    <td className="px-6 py-3">{script.minQuantity}</td>
                                    <td className="px-6 py-3">{script.maxQuantity}</td>
                                    <td className="px-6 py-3">{script.netQuantity}</td>
                                    <td className="px-6 py-3">{script.netQuantityDay}</td>
                                    <td className="px-6 py-3">{script.netQuantityPerScript}</td>
                                    <td className="px-6 py-3">{script.circuit}</td>
                                    <td className="px-6 py-3">{script.userName}</td>
                                    <td className="px-6 py-3">
                                        <button className="text-blue-600 hover:underline font-semibold mr-2">
                                            Edit
                                        </button>
                                        <button className="text-red-600 hover:underline font-semibold">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                </div>
            </div>

            {/* Pagination Info and Controls */}
            <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600">
                    Showing 0 to 0 of {scripts.length} entries
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100 disabled:opacity-50">
                        Previous
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100 disabled:opacity-50">
                        Next
                    </button>
                </div>
            </div>
                </div>
            </div>

        

            {/* Note */}
            <div className="text-sm text-gray-700 italic">
                <strong>Note:</strong> Script Exchange Wise Risk Management Will Be Prioritized Most.
            </div>

            {/* Filter / Add Modal */}
            {showFilterModal && (
                <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 pt-10">
                    <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b">
                            <h3 className="text-2xl font-semibold">Add</h3>
                            <button
                                aria-label="Close"
                                onClick={() => setShowFilterModal(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                            >
                                ×
                            </button>
                        </div>

                        {/* Body */}
                        <div className="px-6 py-5 space-y-4">
                            <div>
                                <label className="block text-sm font-semibold mb-2">Script Exchange</label>
                                <select className="w-full border border-gray-300 rounded px-3 py-2">
                                    <option value="">Select</option>
                                    <option value="NSE">NSE</option>
                                    <option value="BSE">BSE</option>
                                    <option value="MCX">MCX</option>
                                </select>
                            </div>

                            <label className="flex items-center gap-2 text-sm font-semibold">
                                <input type="checkbox" className="w-4 h-4" />
                                Apply Script Exchange Wise
                            </label>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Script Name</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    placeholder="Enter script name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold mb-2">Risk Type</label>
                                <select className="w-full border border-gray-300 rounded px-3 py-2">
                                    <option value="">Select</option>
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>

                            <label className="flex items-center gap-2 text-sm font-semibold">
                                <input type="checkbox" className="w-4 h-4" />
                                Add Upper / Lower Circuit
                            </label>

                            <label className="flex items-center gap-2 text-sm font-semibold">
                                <input type="checkbox" className="w-4 h-4" />
                                Is Net Quantity/price Day Wise
                            </label>

                            <label className="flex items-center gap-2 text-sm font-semibold">
                                <input type="checkbox" className="w-4 h-4" defaultChecked />
                                Apply to all Users
                            </label>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end gap-3 bg-gray-50 px-6 py-4">
                            <button
                                onClick={() => setShowFilterModal(false)}
                                className="px-5 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
                            >
                                Close
                            </button>
                            <button className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
