import { useState } from 'react';

export default function TransactionReport() {
    const [searchTerm, setSearchTerm] = useState('');
    const [transactions] = useState<any[]>([]);

    const totalProfit = 38800.00;
    const totalLoss = -43831.62;
    const totalBrokerage = 220.00;
    const netLoss = -5251.62;

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Summary Cards */}
            <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded shadow">
                    <div className="text-sm text-gray-600 font-semibold mb-2">Total Profit:</div>
                    <div className="text-2xl font-bold text-green-600">{totalProfit.toFixed(2)}</div>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <div className="text-sm text-gray-600 font-semibold mb-2">Total Loss:</div>
                    <div className="text-2xl font-bold text-red-600">{totalLoss.toFixed(2)}</div>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <div className="text-sm text-gray-600 font-semibold mb-2">Total Brokerage:</div>
                    <div className="text-2xl font-bold text-purple-600">{totalBrokerage.toFixed(2)}</div>
                </div>
                <div className="bg-white p-6 rounded shadow">
                    <div className="text-sm text-gray-600 font-semibold mb-2">Net Loss:</div>
                    <div className="text-2xl font-bold text-red-600">{netLoss.toFixed(2)}</div>
                </div>
            </div>

            {/* Action Buttons and Search */}
            <div className="flex justify-between items-center mb-6">
                <div />
                <div className="flex gap-3">
                    <button className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700">
                        PDF
                    </button>
                    <button className="px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700">
                        XLS
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700">
                        Filter
                    </button>
                </div>
            </div>

            {/* Search */}
            <div className="flex justify-end mb-6">
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
            <div className="bg-white rounded overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-600 text-white">
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
                                <td colSpan={16} className="px-4 py-8 text-center text-gray-500">
                                    No data available in table
                                </td>
                            </tr>
                        ) : (
                            transactions.map((transaction, index) => (
                                <tr key={index} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3">{transaction.id}</td>
                                    <td className="px-4 py-3">{transaction.tradeSymbol}</td>
                                    <td className="px-4 py-3">{transaction.currentPosition}</td>
                                    <td className="px-4 py-3">{transaction.strategy}</td>
                                    <td className="px-4 py-3">{transaction.status}</td>
                                    <td className="px-4 py-3">{transaction.entryTime}</td>
                                    <td className="px-4 py-3">{transaction.exitTime}</td>
                                    <td className="px-4 py-3">{transaction.entryPrice}</td>
                                    <td className="px-4 py-3">{transaction.exitPrice}</td>
                                    <td className="px-4 py-3">{transaction.lotQty}</td>
                                    <td className="px-4 py-3">{transaction.unit}</td>
                                    <td className={`px-4 py-3 font-semibold ${transaction.pnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {transaction.pnl}
                                    </td>
                                    <td className="px-4 py-3">{transaction.brokerage}</td>
                                    <td className={`px-4 py-3 font-semibold ${transaction.netPnl >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {transaction.netPnl}
                                    </td>
                                    <td className="px-4 py-3">{transaction.email}</td>
                                    <td className="px-4 py-3">{transaction.marginUsed}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Info */}
            <div className="text-sm text-gray-600">
                Showing 0 to 0 of {transactions.length} entries
            </div>
        </div>
    );
}
