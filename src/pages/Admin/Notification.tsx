import { useState } from 'react';

interface UserLog {
    id: number;
    email: string;
    description: string;
    type: string;
    createdDate: string;
}

export default function Notification() {
    const [currentPage, setCurrentPage] = useState(1);
    const [showUserLogs, setShowUserLogs] = useState(false);
    const itemsPerPage = 10;

    const userLogsData: UserLog[] = [
        {
            id: 7820238,
            email: 'admin@tradex.info',
            description: 'User Logged In Sucessfully.',
            type: 'User Logged',
            createdDate: '02-12-2025 16:40:24',
        },
        {
            id: 7820237,
            email: 'admin@tradex.info',
            description: 'User Logged In Sucessfully.',
            type: 'User Logged',
            createdDate: '02-12-2025 16:40:20',
        },
        {
            id: 7820236,
            email: 'admin@tradex.info',
            description: 'User Logged In Sucessfully.',
            type: 'User Logged',
            createdDate: '02-12-2025 16:40:20',
        },
        {
            id: 7820235,
            email: 'admin@tradex.info',
            description: 'User Logged In Sucessfully.',
            type: 'User Logged',
            createdDate: '02-12-2025 16:40:20',
        },
        {
            id: 7820234,
            email: 'admin@tradex.info',
            description: 'User Logged In Sucessfully.',
            type: 'User Logged',
            createdDate: '02-12-2025 15:31:01',
        },
        {
            id: 7820233,
            email: 'admin@tradex.info',
            description: 'User Logged In Sucessfully.',
            type: 'User Logged',
            createdDate: '02-12-2025 14:51:08',
        },
        {
            id: 7820232,
            email: 'admin@tradex.info',
            description: 'User Logged In Sucessfully.',
            type: 'User Logged',
            createdDate: '02-12-2025 14:51:08',
        },
        {
            id: 7820231,
            email: 'admin@tradex.info',
            description: 'User Logged In Sucessfully.',
            type: 'User Logged',
            createdDate: '02-12-2025 13:38:43',
        },
        {
            id: 7820230,
            email: 'admin@tradex.info',
            description: 'User Logged In Sucessfully.',
            type: 'User Logged',
            createdDate: '02-12-2025 13:05:21',
        },
        {
            id: 7820229,
            email: 'admin@tradex.info',
            description: 'User Logged In Sucessfully.',
            type: 'User Logged',
            createdDate: '02-12-2025 12:57:01',
        },
    ];

    const tradeLogsData: UserLog[] = [
        {
            id: 7820158,
            email: 'Siddhantgupta1802@gmail.com',
            description: 'BTCUSDT Buy with Qty 1 order placed Successfully @96852.43',
            type: 'Trade Booked Manually',
            createdDate: '15-11-2025 16:56:33',
        },
        {
            id: 7820138,
            email: 'Siddhantgupta1802@gmail.com',
            description: 'Trade 42656 is completed on RRPDEFENSE Sell And Username= TEXONE311799U',
            type: 'Trade Square Off Manually',
            createdDate: '10-11-2025 15:22:52',
        },
        {
            id: 7820137,
            email: 'Siddhantgupta1802@gmail.com',
            description: 'RRPDEFENSE Sell with Qty 1. order placed Successfully @974.60',
            type: 'Trade Booked Manually',
            createdDate: '10-11-2025 14:52:49',
        },
        {
            id: 7820136,
            email: 'Siddhantgupta1802@gmail.com',
            description: 'RRPDEFENSE Buy with Qty 1. order placed Successfully @974.60',
            type: 'Trade Booked Manually',
            createdDate: '10-11-2025 14:52:28',
        },
        {
            id: 7820135,
            email: 'Siddhantgupta1802@gmail.com',
            description: 'RRPDEFENSE Sell with Qty 1 order placed Successfully @974.60',
            type: 'Trade Booked Manually',
            createdDate: '10-11-2025 14:37:25',
        },
        {
            id: 7820134,
            email: 'Siddhantgupta1802@gmail.com',
            description: 'RRPDEFENSE Buy with Qty 1. order placed Successfully @974.60',
            type: 'Trade Booked Manually',
            createdDate: '10-11-2025 14:11:03',
        },
        {
            id: 7820133,
            email: 'Siddhantgupta1802@gmail.com',
            description: 'RRPDEFENSE Sell with Qty 1 order placed Successfully @974.60',
            type: 'Trade Booked Manually',
            createdDate: '10-11-2025 14:10:52',
        },
        {
            id: 7820132,
            email: 'Siddhantgupta1802@gmail.com',
            description: 'RRPDEFENSE Buy with Qty 1. order placed Successfully @974.60',
            type: 'Trade Booked Manually',
            createdDate: '10-11-2025 14:03:08',
        },
        {
            id: 7820131,
            email: 'Siddhantgupta1802@gmail.com',
            description: 'RRPDEFENSE Sell with Qty 1 order placed Successfully @974.60',
            type: 'Trade Booked Manually',
            createdDate: '10-11-2025 13:54:42',
        },
        {
            id: 7820125,
            email: 'demo@gmail.com',
            description: 'Trades sqr off due to active loss reached 95% of wallet balance',
            type: 'Trade Auto Sqr Offed',
            createdDate: '07-11-2025 16:46:20',
        },
    ];

    const displayedLogs = showUserLogs ? userLogsData : tradeLogsData;

    // Pagination
    const totalPages = Math.ceil(displayedLogs.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedLogs = displayedLogs.slice(startIndex, startIndex + itemsPerPage);

    const handleDelete = (id: number) => {
        console.log('Deleting log:', id);
    };

    const handleToggleLogs = () => {
        setShowUserLogs(!showUserLogs);
        setCurrentPage(1);
    };

    const handleRefresh = () => {
        setCurrentPage(1);
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Buttons */}
            <div className="mb-8 flex gap-3">
                <button
                    onClick={handleToggleLogs}
                    className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                >
                    {showUserLogs ? 'Show My Logs' : 'Show User Logs'}
                </button>
                <button
                    onClick={handleRefresh}
                    className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                >
                    Refresh
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="px-4 py-3 text-left font-semibold">Id</th>
                            <th className="px-4 py-3 text-left font-semibold">Email</th>
                            <th className="px-4 py-3 text-left font-semibold">Description</th>
                            <th className="px-4 py-3 text-left font-semibold">Type</th>
                            <th className="px-4 py-3 text-left font-semibold">CreatedDate</th>
                            <th className="px-4 py-3 text-center font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedLogs.map((log) => (
                            <tr key={log.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-3">{log.id}</td>
                                <td className="px-4 py-3">{log.email}</td>
                                <td className="px-4 py-3">{log.description}</td>
                                <td className="px-4 py-3">{log.type}</td>
                                <td className="px-4 py-3">{log.createdDate}</td>
                                <td className="px-4 py-3 text-center">
                                    <button
                                        onClick={() => handleDelete(log.id)}
                                        className="px-4 py-2 bg-red-600 text-white rounded font-semibold hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end items-center gap-2">
                <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="px-3 py-2 text-gray-600 disabled:text-gray-300 hover:text-blue-600 font-semibold"
                >
                    First
                </button>
                <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 text-gray-600 disabled:text-gray-300 hover:text-blue-600 font-semibold"
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 rounded font-semibold ${
                            currentPage === page
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-600 hover:text-blue-600'
                        }`}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 text-blue-600 disabled:text-gray-300 hover:text-blue-700 font-semibold"
                >
                    Next
                </button>
                <button
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 text-gray-600 disabled:text-gray-300 hover:text-blue-600 font-semibold"
                >
                    Last
                </button>
            </div>
        </div>
    );
}
