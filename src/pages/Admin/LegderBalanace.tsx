import { useState } from 'react';
import { X } from 'lucide-react';

interface LedgerEntry {
    id: number;
    description: string;
    date: string;
    refId: string;
    amount: number;
    transactionDetails: string;
}

export default function LedgerBalance() {
    const [searchTerm, setSearchTerm] = useState('');
    const [showFilter, setShowFilter] = useState(false);
    const [filterData, setFilterData] = useState({
        startDate: '',
        endDate: '',
        selectedUser: '',
    });
    const [ledgerEntries] = useState<LedgerEntry[]>([]);
    const [payinChecked, setPayinChecked] = useState(false);

    const users = ['User 1', 'User 2', 'User 3', 'User 4'];

    const handleFilterChange = (field: string, value: string) => {
        setFilterData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleGetFilter = () => {
        // Handle filter logic
        setShowFilter(false);
    };

    const handleCloseFilter = () => {
        setShowFilter(false);
    };

    return (
        <div className="p-8  min-h-screen">
            {/* Checkbox */}
            <div className="mb-6">
                <label className="flex items-center gap-2 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={payinChecked}
                        onChange={(e) => setPayinChecked(e.target.checked)}
                        className="w-4 h-4 rounded cursor-pointer"
                    />
                    <span className="text-gray-700 font-semibold">Payin Payout</span>
                </label>
            </div>

            {/* Top Controls */}
            <div className="flex justify-end mb-6">
                <div className="flex items-center gap-3">
                    <label className="font-semibold">Search:</label>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded w-64 focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>

            {/* Filter Button */}
            <div className="mb-6 flex justify-end">
                <button
                    onClick={() => setShowFilter(true)}
                    className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                >
                    Filter
                </button>
            </div>

            {/* Table */}
            <div className="     rounded overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="px-4 py-3 text-left font-semibold">ID</th>
                            <th className="px-4 py-3 text-left font-semibold">Description</th>
                            <th className="px-4 py-3 text-left font-semibold">Date</th>
                            <th className="px-4 py-3 text-left font-semibold">Ref Id</th>
                            <th className="px-4 py-3 text-left font-semibold">Amount</th>
                            <th className="px-4 py-3 text-left font-semibold">Transaction Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ledgerEntries.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                                    No data available in table
                                </td>
                            </tr>
                        ) : (
                            ledgerEntries.map((entry) => (
                                <tr key={entry.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3">{entry.id}</td>
                                    <td className="px-4 py-3">{entry.description}</td>
                                    <td className="px-4 py-3">{entry.date}</td>
                                    <td className="px-4 py-3">{entry.refId}</td>
                                    <td className="px-4 py-3 font-semibold">{entry.amount}</td>
                                    <td className="px-4 py-3">{entry.transactionDetails}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="text-sm text-gray-600">
                Showing 0 to 0 of {ledgerEntries.length} entries
            </div>

            {/* Filter Modal */}
            {showFilter && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded shadow-lg p-8 max-w-md w-full">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-semibold">Filter</h2>
                            <button
                                onClick={handleCloseFilter}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Start Date */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">Start Date</label>
                            <input
                                type="date"
                                value={filterData.startDate}
                                onChange={(e) => handleFilterChange('startDate', e.target.value)}
                                placeholder="dd-mm-yyyy --:-- --"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* End Date */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">End Date</label>
                            <input
                                type="date"
                                value={filterData.endDate}
                                onChange={(e) => handleFilterChange('endDate', e.target.value)}
                                placeholder="dd-mm-yyyy --:-- --"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Select User */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">Select User</label>
                            <select
                                value={filterData.selectedUser}
                                onChange={(e) => handleFilterChange('selectedUser', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 appearance-none bg-white"
                            >
                                <option value="">--Select--</option>
                                {users.map((user) => (
                                    <option key={user} value={user}>
                                        {user}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 justify-center">
                            <button
                                onClick={handleCloseFilter}
                                className="px-6 py-2 bg-gray-500 text-white rounded font-semibold hover:bg-gray-600"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleGetFilter}
                                className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                            >
                                Get
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
