import { useState } from 'react';
import { Edit, Trash2, FileText, Settings } from 'lucide-react';
import AddUser from '../../components/Admin/ManageUser/AddUser';

type User = {
    id: number;
    created: string;
    userName: string;
    sponsorId: string;
    name: string;
    email: string;
    expiry: string;
    role: string;
    p_l: number;
    balance: number;
    active: string;
};

export default function ManageUser() {
    const [currentView, setCurrentView] = useState<'list' | 'addUser' | 'addBulk'>('list');
    const [selectedOption, setSelectedOption] = useState('');
    const [users] = useState<User[]>([
        {
            id: 1,
            created: '14-10-2025',
            userName: 'demo',
            sponsorId: '5292125A',
            name: 'demo',
            email: 'demo@gmail.com',
            expiry: '16-10-2025',
            role: 'User',
            p_l: 44226.00,
            balance: 144166,
            active: 'Yes',
        },
        {
            id: 2,
            created: '14-08-2025',
            userName: 'demo2',
            sponsorId: '`5292125A',
            name: 'demo2',
            email: 'demo2@gmail.com',
            expiry: '17-11-2025',
            role: 'User',
            p_l: -3261212.00,
            balance: 99850.65,
            active: 'Yes',
        },
    ]);
    const [senderReceiver, setSenderReceiver] = useState({ sender: '', receiver: '' });

    const handleSaveUser = () => {
        alert('User added successfully');
        setCurrentView('list');
    };

    const handleAddBulkOpen = () => {
        setCurrentView('addBulk');
    };

    const handleAddUserOpen = () => {
        setCurrentView('addUser');
    };

    const handleReplace = () => {
        alert('Sender and Receiver selected for replacement');
        setCurrentView('list');
        setSenderReceiver({ sender: '', receiver: '' });
    };

    if (currentView === 'addBulk') {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-8 max-w-md w-full">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold">Add Bulk</h2>
                        <button
                            onClick={() => setCurrentView('list')}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2">Sender</label>
                        <select
                            value={senderReceiver.sender}
                            onChange={(e) => setSenderReceiver({ ...senderReceiver, sender: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                        >
                            <option value="">TEXONE465620U - demo@gmail.com</option>
                            <option value="user1">TEXONE640939U - test@gmail.com</option>
                            <option value="user2">TEXONE311799U - siddhant@gmail.com</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2">Receiver</label>
                        <select
                            value={senderReceiver.receiver}
                            onChange={(e) => setSenderReceiver({ ...senderReceiver, receiver: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                        >
                            <option value="">TEXONE465620U - demo@gmail.com</option>
                            <option value="user1">TEXONE640939U - test@gmail.com</option>
                            <option value="user2">TEXONE311799U - siddhant@gmail.com</option>
                        </select>
                    </div>

                    <div className="flex gap-3 justify-end">
                        <button
                            onClick={() => setCurrentView('list')}
                            className="px-6 py-2 bg-gray-600 text-white rounded font-semibold hover:bg-gray-700"
                        >
                            Close
                        </button>
                        <button
                            onClick={handleReplace}
                            className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                        >
                            Replace
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (currentView === 'addUser') {
        return <AddUser onBack={() => setCurrentView('list')} onSave={handleSaveUser} />;
    }

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Header with Buttons */}
            <div className="flex justify-between items-center mb-6">
                <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded w-64"
                >
                    <option value="">-Select-</option>
                    <option value="option1">demo1 1</option>
                    <option value="option2">demo2 2</option>
                </select>

                <div className="flex gap-3">
                    <button
                        onClick={handleAddBulkOpen}
                        className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                    >
                        Bulk Script
                    </button>
                    <button
                        onClick={handleAddUserOpen}
                        className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                    >
                        Add User
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-600 text-white">
                            <th className="px-4 py-3 text-left font-semibold">Created</th>
                            <th className="px-4 py-3 text-left font-semibold">User Name</th>
                            <th className="px-4 py-3 text-left font-semibold">Sponsor Id</th>
                            <th className="px-4 py-3 text-left font-semibold">Name</th>
                            <th className="px-4 py-3 text-left font-semibold">Email</th>
                            <th className="px-4 py-3 text-left font-semibold">Expiry</th>
                            <th className="px-4 py-3 text-left font-semibold">Role</th>
                            <th className="px-4 py-3 text-left font-semibold">P&L (Exc. Brokerage)</th>
                            <th className="px-4 py-3 text-left font-semibold">Balance</th>
                            <th className="px-4 py-3 text-left font-semibold">Active</th>
                            <th className="px-4 py-3 text-left font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-3">{user.created}</td>
                                <td className="px-4 py-3 font-semibold">{user.userName}</td>
                                <td className="px-4 py-3">{user.sponsorId}</td>
                                <td className="px-4 py-3">{user.name}</td>
                                <td className="px-4 py-3">{user.email}</td>
                                <td className="px-4 py-3 bg-red-500 text-white text-center font-semibold rounded">
                                    {user.expiry}
                                </td>
                                <td className="px-4 py-3">{user.role}</td>
                                <td className={`px-4 py-3 font-semibold ${user.p_l >= 0 ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                    {user.p_l.toFixed(2)}
                                </td>
                                <td className="px-4 py-3">{user.balance.toFixed(2)}</td>
                                <td className="px-4 py-3">{user.active}</td>
                                <td className="px-4 py-3">
                                    <div className="flex gap-2 flex-wrap">
                                        <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" title="Edit">
                                            <Edit size={16} />
                                        </button>
                                        <button className="px-2 py-1 bg-cyan-500 text-white rounded hover:bg-cyan-600" title="View">
                                            <FileText size={16} />
                                        </button>
                                        <button className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700" title="Deposit">
                                            Deposit
                                        </button>
                                        <button className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600" title="Withdrawal">
                                            Withdrawal
                                        </button>
                                        <button className="px-2 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700" title="Script Exposure">
                                            Script Exposure
                                        </button>
                                        <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600" title="Delete">
                                            <Trash2 size={16} />
                                        </button>
                                        <button className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600" title="Settings">
                                            <Settings size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
                <div className="text-sm text-gray-600">
                    Showing 1 to 6 of 6 entries
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-100">First</button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-100">Previous</button>
                    <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold">1</button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-100">Next</button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-100">Last</button>
                </div>
            </div>
        </div>
    );
}
