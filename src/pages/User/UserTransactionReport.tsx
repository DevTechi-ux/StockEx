import { useState } from 'react';

export default function TransactionReport() {
    const [searchTerm, setSearchTerm] = useState('');
    const [transactions] = useState<any[]>([]);

    const totalProfit = 0;
    const totalLoss = 0;
    const totalBrokerage = 0;

    return (
        <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-2">Total Profit:</div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{totalProfit.toFixed(2)}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-2">Total Loss:</div>
                    <div className="text-2xl font-bold text-red-600 dark:text-red-400">{totalLoss.toFixed(2)}</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold mb-2">Total Brokerage:</div>
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{totalBrokerage.toFixed(2)}</div>
                </div>
            </div>

            {/* Action Buttons and Search */}
            <div className="flex justify-between items-center mb-6">
                <div />
                <div className="flex gap-3">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                        PDF
                    </button>
                    <button className="px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800">
                        XLS
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                        Filter
                    </button>
                </div>
            </div>

            {/* Search */}
            <div className="flex justify-end mb-6">
                <div className="flex items-center gap-3">
                    <label className="font-semibold dark:text-gray-300">Search:</label>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded w-64 dark:bg-gray-700 dark:text-white"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-gray-800 rounded overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-600 text-white dark:bg-blue-700">
                            <th className="px-4 py-3 text-left font-semibold">Id</th>
                            <th className="px-4 py-3 text-left font-semibold">TradeSymbol</th>
                            <th className="px-4 py-3 text-left font-semibold">Current Position</th>
                            <th className="px-4 py-3 text-left font-semibold">Strategy</th>
                            <th className="px-4 py-3 text-left font-semibold">Status</th>
                            <th className="px-4 py-3 text-left font-semibold">Entry Time</th>
                            <th className="px-4 py-3 text-left font-semibold">Exit Time</th>
                            <th className="px-4 py-3 text-left font-semibold">Entry Price</th>
                            <th className="px-4 py-3 text-left font-semibold">Exit Price</th>
                            <th className="px-4 py-3 text-left font-semibold">Lot/Qty</th>
                            <th className="px-4 py-3 text-left font-semibold">Unit</th>
                            <th className="px-4 py-3 text-left font-semibold">P&L</th>
                            <th className="px-4 py-3 text-left font-semibold">Brokrage</th>
                            <th className="px-4 py-3 text-left font-semibold">N. P&L</th>
                            <th className="px-4 py-3 text-left font-semibold">Email</th>
                            <th className="px-4 py-3 text-left font-semibold">Margin Used</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.length === 0 ? (
                            <tr>
                                <td colSpan={16} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                                    No data available in table
                                </td>
                            </tr>
                        ) : (
                            transactions.map((transaction, index) => (
                                <tr key={index} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.id}</td>
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.tradeSymbol}</td>
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.currentPosition}</td>
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.strategy}</td>
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.status}</td>
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.entryTime}</td>
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.exitTime}</td>
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.entryPrice}</td>
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.exitPrice}</td>
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.lotQty}</td>
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.unit}</td>
                                    <td className={`px-4 py-3 font-semibold ${transaction.pnl >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                        {transaction.pnl}
                                    </td>
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.brokerage}</td>
                                    <td className={`px-4 py-3 font-semibold ${transaction.netPnl >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                        {transaction.netPnl}
                                    </td>
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.email}</td>
                                    <td className="px-4 py-3 dark:text-gray-300">{transaction.marginUsed}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Info */}
            <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing 0 to 0 of {transactions.length} entries
            </div>
        </div>
    );
}
