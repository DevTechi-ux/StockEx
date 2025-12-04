import React, { useState } from 'react';

const ActiveTrades: React.FC = () => {
    const [trades, setTrades] = useState<any[]>([]);

    const handleSquareOffAll = () => {
        setTrades([]);
    };

    return (
        // <div className="bg-slate-100">
            <div className="max-w-6xl mx-auto py-4 overflow-x-hidden">
                <div className="p-6 bg-white rounded overflow-x-hidden">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-lg font-semibold">Active Trades</h2>
                        <button
                            onClick={handleSquareOffAll}
                            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-semibold"
                        >
                            Sqr Off All
                        </button>
                    </div>

                    <div className="mb-4 flex justify-end">
                        <div>
                            <label className="text-sm font-semibold mr-2">Search:</label>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-3 py-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <div className="inline-block min-w-full align-middle">
                            <table className="min-w-full w-full border-collapse">
                                <thead>
                                    <tr className="bg-blue-600 text-white">
                                        <th className="px-4 py-3 text-left font-semibold">Square Off</th>
                                        <th className="px-4 py-3 text-left font-semibold">Action</th>
                                        <th className="px-4 py-3 text-left font-semibold">Trade Symbol</th>
                                        <th className="px-4 py-3 text-left font-semibold">Lot/Qty</th>
                                        <th className="hidden md:table-cell px-4 py-3 text-left font-semibold">Unit</th>
                                        <th className="px-4 py-3 text-left font-semibold">Current Position</th>
                                        <th className="px-4 py-3 text-left font-semibold">Order Price</th>
                                        <th className="hidden md:table-cell px-4 py-3 text-left font-semibold">Trigger Price</th>
                                        <th className="px-4 py-3 text-left font-semibold">LTP</th>
                                        <th className="px-4 py-3 text-left font-semibold">Profit/Loss</th>
                                        <th className="px-4 py-3 text-left font-semibold">Status</th>
                                        <th className="hidden md:table-cell px-4 py-3 text-left font-semibold">SL</th>
                                        <th className="hidden md:table-cell px-4 py-3 text-left font-semibold">TGT</th>
                                        <th className="hidden md:table-cell px-4 py-3 text-left font-semibold">Order Date</th>
                                        <th className="hidden md:table-cell px-4 py-3 text-left font-semibold">Order Time</th>
                                        <th className="hidden md:table-cell px-4 py-3 text-left font-semibold">Product Type</th>
                                        <th className="hidden md:table-cell px-4 py-3 text-left font-semibold">Strategy Name</th>
                                        <th className="hidden md:table-cell px-4 py-3 text-left font-semibold">Publish Name</th>
                                        <th className="hidden md:table-cell px-4 py-3 text-left font-semibold">Fund Manager</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trades.length === 0 ? (
                                        <tr>
                                            <td colSpan={19} className="px-4 py-6 text-center text-gray-500">
                                                No data available in table
                                            </td>
                                        </tr>
                                    ) : (
                                        trades.map((trade, index) => (
                                            <tr key={index} className="border-b hover:bg-gray-50">
                                                <td className="px-4 py-3">
                                                    <input type="checkbox" />
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button className="text-blue-600 hover:underline">Edit</button>
                                                </td>
                                                <td className="px-4 py-3">{trade.symbol}</td>
                                                <td className="px-4 py-3">{trade.quantity}</td>
                                                <td className="hidden md:table-cell px-4 py-3">{trade.unit}</td>
                                                <td className="px-4 py-3">{trade.position}</td>
                                                <td className="px-4 py-3">{trade.orderPrice}</td>
                                                <td className="hidden md:table-cell px-4 py-3">{trade.triggerPrice}</td>
                                                <td className="px-4 py-3">{trade.ltp}</td>
                                                <td className="px-4 py-3">{trade.profitLoss}</td>
                                                <td className="px-4 py-3">{trade.status}</td>
                                                <td className="hidden md:table-cell px-4 py-3">{trade.sl}</td>
                                                <td className="hidden md:table-cell px-4 py-3">{trade.tgt}</td>
                                                <td className="hidden md:table-cell px-4 py-3">{trade.orderDate}</td>
                                                <td className="hidden md:table-cell px-4 py-3">{trade.orderTime}</td>
                                                <td className="hidden md:table-cell px-4 py-3">{trade.productType}</td>
                                                <td className="hidden md:table-cell px-4 py-3">{trade.strategyName}</td>
                                                <td className="hidden md:table-cell px-4 py-3">{trade.publishName}</td>
                                                <td className="hidden md:table-cell px-4 py-3">{trade.fundManager}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default ActiveTrades;