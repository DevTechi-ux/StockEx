import { useState } from 'react';
import { X } from 'lucide-react';

interface Coupon {
    id: number;
    coupon: string;
    createdDate: string;
    status: 'Used' | 'Unused';
    couponType: string;
    couponExpiryDate: string;
    userAccountExpiryDay: number;
    transferredTo: string;
    redeemedBy?: string;
}

export default function SubscriptionPin() {
    const [activeTab, setActiveTab] = useState<'unused' | 'used'>('unused');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCoupons, setSelectedCoupons] = useState<number[]>([]);
    const [showTransferModal, setShowTransferModal] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Sample data
    const allCoupons: Coupon[] = [
        {
            id: 1819,
            coupon: 'ZOF4HU13DM22JUZDHLUR',
            createdDate: '05-02-2025',
            status: 'Used',
            couponType: 'Paper Trader',
            couponExpiryDate: '20-02-2025',
            userAccountExpiryDay: 7,
            transferredTo: 'admin@tradex.info',
            redeemedBy: 'demouser1@gmail.com',
        },
        {
            id: 2713,
            coupon: 'YVL9HJJ23FS00S76JMK9',
            createdDate: '14-10-2025',
            status: 'Used',
            couponType: 'Paper Trader',
            couponExpiryDate: '16-10-2025',
            userAccountExpiryDay: 2,
            transferredTo: 'admin@tradex.info',
            redeemedBy: 'test@gmail.com',
        },
        {
            id: 2723,
            coupon: 'YYISLF58ST8QOTFIGHMLI',
            createdDate: '06-11-2025',
            status: 'Used',
            couponType: 'Paper Trader',
            couponExpiryDate: '13-11-2025',
            userAccountExpiryDay: 8,
            transferredTo: 'admin@tradex.info',
            redeemedBy: 'varsha@gmail.com',
        },
        {
            id: 2665,
            coupon: 'YI3U9H0KYSSF2H7WMGBR',
            createdDate: '13-08-2025',
            status: 'Used',
            couponType: 'Paper Trader',
            couponExpiryDate: '17-09-2025',
            userAccountExpiryDay: 56,
            transferredTo: 'admin@tradex.info',
            redeemedBy: 'Siddhantgupta1802@gmail.com',
        },
        {
            id: 2726,
            coupon: 'YCOTP48LRI36KYSSSTI',
            createdDate: '07-11-2025',
            status: 'Used',
            couponType: 'Paper Trader',
            couponExpiryDate: '14-11-2025',
            userAccountExpiryDay: 8,
            transferredTo: 'admin@tradex.info',
            redeemedBy: 'sanaifatest@gmail.com',
        },
        {
            id: 2240,
            coupon: 'Y3U615OCOWG9XS2EETDR',
            createdDate: '02-04-2025',
            status: 'Used',
            couponType: 'Paper Trader',
            couponExpiryDate: '30-04-2025',
            userAccountExpiryDay: 7,
            transferredTo: 'admin@tradex.info',
            redeemedBy: 'vedantgupta22@gmail.com',
        },
        {
            id: 2246,
            coupon: 'XCN9MX5WIX3NR578KJM',
            createdDate: '02-04-2025',
            status: 'Used',
            couponType: 'Paper Trader',
            couponExpiryDate: '30-04-2025',
            userAccountExpiryDay: 30,
            transferredTo: 'admin@tradex.info',
            redeemedBy: 'Megha.sharma12367@gmail.com',
        },
        {
            id: 2717,
            coupon: 'WWH1U5J1MZ6HTBRMSX04',
            createdDate: '24-10-2025',
            status: 'Used',
            couponType: 'Paper Trader',
            couponExpiryDate: '27-10-2025',
            userAccountExpiryDay: 2,
            transferredTo: 'admin@tradex.info',
            redeemedBy: 'sanaifatest@gmail.com',
        },
        {
            id: 2727,
            coupon: 'VX68EGUMY8U8CQX4PFF7P',
            createdDate: '07-11-2025',
            status: 'Used',
            couponType: 'Paper Trader',
            couponExpiryDate: '28-11-2025',
            userAccountExpiryDay: 7,
            transferredTo: 'admin@tradex.info',
            redeemedBy: 'demo@gmail.com',
        },
        {
            id: 2242,
            coupon: 'VQ0WR5E5G5ISTMSPO7FI',
            createdDate: '02-04-2025',
            status: 'Used',
            couponType: 'Paper Trader',
            couponExpiryDate: '30-04-2025',
            userAccountExpiryDay: 30,
            transferredTo: 'admin@tradex.info',
            redeemedBy: 'kamleshkharwarmatrix@gmail.com',
        },
    ];

    // Filter coupons based on tab and search
    const filteredCoupons = allCoupons
        .filter((coupon) => coupon.status === (activeTab === 'unused' ? 'Unused' : 'Used'))
        .filter((coupon) =>
            coupon.coupon.toLowerCase().includes(searchTerm.toLowerCase()) ||
            coupon.transferredTo.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (coupon.redeemedBy && coupon.redeemedBy.toLowerCase().includes(searchTerm.toLowerCase()))
        );

    // Pagination
    const totalPages = Math.ceil(filteredCoupons.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedCoupons = filteredCoupons.slice(startIndex, startIndex + itemsPerPage);

    const handleTransferClick = () => {
        if (selectedCoupons.length === 0) {
            setShowTransferModal(true);
            return;
        }
        // Handle transfer logic
    };

    const handleSelectCoupon = (id: number) => {
        setSelectedCoupons((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );
    };

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedCoupons(paginatedCoupons.map((c) => c.id));
        } else {
            setSelectedCoupons([]);
        }
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Tabs */}
            <div className="flex gap-8 mb-6 border-b">
                <button
                    onClick={() => {
                        setActiveTab('unused');
                        setCurrentPage(1);
                    }}
                    className={`pb-3 font-semibold flex items-center gap-2 ${
                        activeTab === 'unused'
                            ? 'border-b-2 border-blue-600 text-blue-600'
                            : 'text-gray-600 hover:text-gray-800'
                    }`}
                >
                    <div
                        className={`w-3 h-3 rounded-full ${
                            activeTab === 'unused' ? 'bg-red-500' : 'border-2 border-red-500'
                        }`}
                    />{' '}
                    Unused
                </button>
                <button
                    onClick={() => {
                        setActiveTab('used');
                        setCurrentPage(1);
                    }}
                    className={`pb-3 font-semibold flex items-center gap-2 ${
                        activeTab === 'used'
                            ? 'border-b-2 border-blue-600 text-blue-600'
                            : 'text-gray-600 hover:text-gray-800'
                    }`}
                >
                    <div
                        className={`w-3 h-3 rounded-full ${
                            activeTab === 'used' ? 'bg-red-500' : 'border-2 border-red-500'
                        }`}
                    />{' '}
                    Used
                </button>
            </div>

            {/* Top Controls */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <label className="font-semibold text-gray-700">Search:</label>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="px-4 py-2 border border-gray-300 rounded w-64 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    onClick={handleTransferClick}
                    className="px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700"
                >
                    ✓ Transfer Coupon
                </button>
            </div>

            {/* Table */}
            <div className="bg-white rounded overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="px-4 py-3 text-left font-semibold">
                                <input
                                    type="checkbox"
                                    onChange={handleSelectAll}
                                    checked={
                                        paginatedCoupons.length > 0 &&
                                        selectedCoupons.length === paginatedCoupons.length
                                    }
                                    className="rounded cursor-pointer"
                                />
                            </th>
                            <th className="px-4 py-3 text-left font-semibold">Id</th>
                            <th className="px-4 py-3 text-left font-semibold">Transfer</th>
                            <th className="px-4 py-3 text-left font-semibold">Coupon</th>
                            <th className="px-4 py-3 text-left font-semibold">Created Date</th>
                            <th className="px-4 py-3 text-left font-semibold">Status</th>
                            <th className="px-4 py-3 text-left font-semibold">Coupon Type</th>
                            <th className="px-4 py-3 text-left font-semibold">Coupon Expiry Date</th>
                            <th className="px-4 py-3 text-left font-semibold">User Account Expiry (Day)</th>
                            <th className="px-4 py-3 text-left font-semibold">Transferred To</th>
                            {activeTab === 'used' && (
                                <th className="px-4 py-3 text-left font-semibold">Redeemed By</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedCoupons.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={activeTab === 'used' ? 11 : 10}
                                    className="px-4 py-8 text-center text-gray-500"
                                >
                                    No data available in table
                                </td>
                            </tr>
                        ) : (
                            paginatedCoupons.map((coupon) => (
                                <tr key={coupon.id} className="border-b hover:bg-gray-50">
                                    <td className="px-4 py-3">
                                        <input
                                            type="checkbox"
                                            checked={selectedCoupons.includes(coupon.id)}
                                            onChange={() => handleSelectCoupon(coupon.id)}
                                            className="rounded cursor-pointer"
                                        />
                                    </td>
                                    <td className="px-4 py-3">{coupon.id}</td>
                                    <td className="px-4 py-3">
                                        <button className="text-blue-600 font-semibold hover:underline">
                                            Transfer
                                        </button>
                                    </td>
                                    <td className="px-4 py-3 font-mono text-sm">{coupon.coupon}</td>
                                    <td className="px-4 py-3">{coupon.createdDate}</td>
                                    <td className="px-4 py-3">
                                        <span
                                            className={`px-3 py-1 rounded font-semibold ${
                                                coupon.status === 'Used'
                                                    ? 'bg-red-100 text-red-600'
                                                    : 'bg-green-100 text-green-600'
                                            }`}
                                        >
                                            {coupon.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3">{coupon.couponType}</td>
                                    <td className="px-4 py-3">{coupon.couponExpiryDate}</td>
                                    <td className="px-4 py-3">{coupon.userAccountExpiryDay}</td>
                                    <td className="px-4 py-3 text-blue-600">{coupon.transferredTo}</td>
                                    {activeTab === 'used' && (
                                        <td className="px-4 py-3">{coupon.redeemedBy}</td>
                                    )}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                    Showing {filteredCoupons.length === 0 ? 0 : startIndex + 1} to{' '}
                    {Math.min(startIndex + itemsPerPage, filteredCoupons.length)} of {filteredCoupons.length} entries
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="px-3 py-2 border border-gray-300 rounded text-gray-600 disabled:text-gray-300 hover:bg-gray-50"
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
                                    : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="px-3 py-2 border border-gray-300 rounded text-gray-600 disabled:text-gray-300 hover:bg-gray-50"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Transfer Modal */}
            {showTransferModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded shadow-lg p-8 max-w-md w-full mx-4">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-semibold"></h2>
                            <button
                                onClick={() => setShowTransferModal(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <p className="text-red-600 font-semibold text-center mb-6">
                            Please Select Coupon Before Transfer.
                        </p>
                        <div className="flex justify-center">
                            <button
                                onClick={() => setShowTransferModal(false)}
                                className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
