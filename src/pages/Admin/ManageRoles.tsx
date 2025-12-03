import { useState } from 'react';
import { Edit, Trash2 } from 'lucide-react';

type PermissionsType = {
    checkAll: boolean;
    dashboard: boolean;
    manageTransactions: boolean;
    fundRequest: boolean;
    fund: boolean;
    niftyUpdownPrediction: boolean;
    niftyUpdownAdmin: boolean;
    trade: boolean;
    systemAdmin: boolean;
    manageRisk: boolean;
    manageRoles: boolean;
    manageUsers: boolean;
    transactionReport: boolean;
    subscriptionPin: boolean;
    ledgerBalance: boolean;
    banScript: boolean;
    downloadReport: boolean;
    manualActiveTrade: boolean;
};

export default function ManageRoles() {
    const [currentView, setCurrentView] = useState<'list' | 'setRules'>('list');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [permissions, setPermissions] = useState<PermissionsType>({
        checkAll: false,
        dashboard: false,
        manageTransactions: false,
        fundRequest: false,
        fund: false,
        niftyUpdownPrediction: false,
        niftyUpdownAdmin: false,
        trade: false,
        systemAdmin: false,
        manageRisk: false,
        manageRoles: false,
        manageUsers: false,
        transactionReport: false,
        subscriptionPin: false,
        ledgerBalance: false,
        banScript: false,
        downloadReport: false,
        manualActiveTrade: false,
    });

    const [roles] = useState([
        {
            id: 1,
            slNo: 1,
            companyName: 'UAT Stockex',
            roleName: 'User',
        },
    ]);

    const handlePermissionChange = (key: keyof PermissionsType) => {
        if (key === 'checkAll') {
            const newState = !permissions.checkAll;
            setPermissions({
                checkAll: newState,
                dashboard: newState,
                manageTransactions: newState,
                fundRequest: newState,
                fund: newState,
                niftyUpdownPrediction: newState,
                niftyUpdownAdmin: newState,
                trade: newState,
                systemAdmin: newState,
                manageRisk: newState,
                manageRoles: newState,
                manageUsers: newState,
                transactionReport: newState,
                subscriptionPin: newState,
                ledgerBalance: newState,
                banScript: newState,
                downloadReport: newState,
                manualActiveTrade: newState,
            });
        } else {
            setPermissions({
                ...permissions,
                [key]: !permissions[key],
            });
        }
    };

    if (currentView === 'setRules') {
        return (
            <div className="p-8 bg-gray-50 min-h-screen">
                <h1 className="text-2xl font-bold mb-8">Set Rules</h1>

                {/* Dropdowns */}
                <div className="flex gap-6 mb-8">
                    <div className="flex-1">
                        <label className="block text-sm font-semibold mb-2">Select Role</label>
                        <select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                        >
                            <option value="">-Select Role-</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            <option value="broker">Broker</option>
                            <option value="subBroker">Sub Broker</option>
                            <option value="fundManager">Fund Manager</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-semibold mb-2">Select Company</label>
                        <select
                            value={selectedCompany}
                            onChange={(e) => setSelectedCompany(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded"
                        >
                            <option value="">-Select Company-</option>
                            <option value="uatStockex">UAT Stockex</option>
                            <option value="liveStockex">Live Stockex</option>
                        </select>
                    </div>
                </div>

                {/* Permissions Checkboxes */}
                <div className="bg-white p-6 rounded mb-8">
                    <div className="mb-6">
                        <label className="flex items-center gap-3 mb-4 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.checkAll}
                                onChange={() => handlePermissionChange('checkAll')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="font-semibold text-gray-700">Check All</span>
                        </label>
                    </div>

                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.dashboard}
                                onChange={() => handlePermissionChange('dashboard')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">Dashboard</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.manageTransactions}
                                onChange={() => handlePermissionChange('manageTransactions')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">Manage Transactions</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.fundRequest}
                                onChange={() => handlePermissionChange('fundRequest')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">Fund Request</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.fund}
                                onChange={() => handlePermissionChange('fund')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">Fund</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.niftyUpdownPrediction}
                                onChange={() => handlePermissionChange('niftyUpdownPrediction')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">Nifty Up/down Prediction</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.niftyUpdownAdmin}
                                onChange={() => handlePermissionChange('niftyUpdownAdmin')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">Nifty Up/down Admin</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.trade}
                                onChange={() => handlePermissionChange('trade')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">Trade</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.systemAdmin}
                                onChange={() => handlePermissionChange('systemAdmin')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">System Admin</span>
                        </label>

                        <div className="ml-8 space-y-2">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={permissions.manageRisk}
                                    onChange={() => handlePermissionChange('manageRisk')}
                                    className="w-4 h-4 rounded"
                                />
                                <span className="text-gray-700">Manage Risk</span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={permissions.manageRoles}
                                    onChange={() => handlePermissionChange('manageRoles')}
                                    className="w-4 h-4 rounded"
                                />
                                <span className="text-gray-700">Manage Roles</span>
                            </label>

                            <label className="flex items-center gap-3 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={permissions.manageUsers}
                                    onChange={() => handlePermissionChange('manageUsers')}
                                    className="w-4 h-4 rounded"
                                />
                                <span className="text-gray-700">Manage Users</span>
                            </label>
                        </div>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.transactionReport}
                                onChange={() => handlePermissionChange('transactionReport')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">Transaction Report</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.subscriptionPin}
                                onChange={() => handlePermissionChange('subscriptionPin')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">Subscription Pin</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.ledgerBalance}
                                onChange={() => handlePermissionChange('ledgerBalance')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">Ledger Balance</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.banScript}
                                onChange={() => handlePermissionChange('banScript')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">BanScript</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.downloadReport}
                                onChange={() => handlePermissionChange('downloadReport')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">Download Report</span>
                        </label>

                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={permissions.manualActiveTrade}
                                onChange={() => handlePermissionChange('manualActiveTrade')}
                                className="w-4 h-4 rounded"
                            />
                            <span className="text-gray-700">Manual Active Trade</span>
                        </label>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={() => setCurrentView('list')}
                        className="px-6 py-2 bg-gray-500 text-white rounded font-semibold hover:bg-gray-600"
                    >
                        Back
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 flex items-center gap-2">
                        ✓ Add
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Add Role Button */}
            <div className="flex justify-between items-center mb-6">
                <div />
                <button
                    onClick={() => setCurrentView('setRules')}
                    className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                >
                    Add Role
                </button>
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
                            <th className="px-6 py-3 text-left font-semibold">SL No.</th>
                            <th className="px-6 py-3 text-left font-semibold">Company Name</th>
                            <th className="px-6 py-3 text-left font-semibold">Role Name</th>
                            <th className="px-6 py-3 text-left font-semibold">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((role, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-3 text-center">{role.slNo}</td>
                                <td className="px-6 py-3">{role.companyName}</td>
                                <td className="px-6 py-3">{role.roleName}</td>
                                <td className="px-6 py-3 flex gap-3">
                                    <button
                                        onClick={() => setCurrentView('setRules')}
                                        className="text-blue-600 hover:text-blue-800"
                                        title="Edit"
                                    >
                                        <Edit size={18} />
                                    </button>
                                    <button className="text-red-600 hover:text-red-800" title="Delete">
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Info */}
            <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                    Showing 1 to 1 of {roles.length} entries
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100 disabled:opacity-50">
                        Previous
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold">
                        1
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100 disabled:opacity-50">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
