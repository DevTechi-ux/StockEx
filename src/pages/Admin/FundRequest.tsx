import React, { useState } from 'react';

export default function FundRequest () {
    const [formData, setFormData] = useState({
        bankName: '',
        accountHolderName: '',
        accountNumber: '',
        ifscCode: '',
        upiId: '',
        usdt: '',
        qrCode: null,
    });

    const [showFundApproval, setShowFundApproval] = useState(true);
    const [showFundApprovalHistory, setShowFundApprovalHistory] = useState(true);
    const [responses, setResponses] = useState<Record<number, string>>({})
    const [accountInfos, setAccountInfos] = useState<Record<number, string>>({})

    const [approvals] = useState([
        {
            id: 1,
            name: 'user',
            userName: 'user123',
            phoneNumber: '1234567890',
            type: 'Deposit',
            amount: '12345',
            date: '24-10-2025 20:37:34',
        },
    ]);
    const [approvalsHistory] = useState([
        {
            id: 1,
            name: 'user',
            userName: 'user123',
            phoneNumber: '1234567890',
            type: 'Deposit',
            amount: '12345',
            response: 'Successful',
            status: 'Approved',
            createdDate: '24-10-2025 20:37:34',
            modifiedDate: '25-10-2025 15:20:10',
            accountInfo: 'SBI - 0987654321',
        },
            
    ]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        if (e.target.files) {
            setFormData({ ...formData, [field]: e.target.files[0] });
        }
    };
    const handleResponseChange = (id:number, value:string)=>{
        setResponses(prev=> ({...prev,[id]:value}))
    }
    const handleAccountInfoChange = (id:number, value:string)=>{
        setAccountInfos(prev=> ({...prev,[id]:value}))
    }

    const handleDelete = () => {
        setFormData({
            bankName: '',
            accountHolderName: '',
            accountNumber: '',
            ifscCode: '',
            upiId: '',
            usdt: '',
            qrCode: null,
        });
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                    <label className="block text-sm font-semibold mb-2">Bank Name</label>
                    <input
                        type="text"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        placeholder="Bank"
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-2">Account Holder Name</label>
                    <input
                        type="text"
                        name="accountHolderName"
                        value={formData.accountHolderName}
                        onChange={handleInputChange}
                        placeholder="Holder"
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-2">Account Number</label>
                    <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        placeholder="0987654321"
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                    <label className="block text-sm font-semibold mb-2">IFSC Code</label>
                    <input
                        type="text"
                        name="ifscCode"
                        value={formData.ifscCode}
                        onChange={handleInputChange}
                        placeholder="Ifsc"
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-2">UPI ID</label>
                    <input
                        type="text"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleInputChange}
                        placeholder="Upi"
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-2">QR Code <span className="text-blue-600">View</span></label>
                    <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'qrCode')}
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                    <label className="block text-sm font-semibold mb-2">USDT Address</label>
                    <input
                        type="text"
                        name="usdt"
                        value={formData.usdt}
                        onChange={handleInputChange}
                        placeholder="Usdt"
                        className="w-full px-4 py-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-2">QR Code <span className="text-blue-600">View</span></label>
                    <input type="file" className="w-full px-4 py-2 border border-gray-300 rounded" />
                </div>
            </div>

            <div className="flex gap-4 mb-8">
                <button onClick={handleDelete} className="px-6 py-2 bg-red-500 text-white rounded font-semibold hover:bg-red-600">
                    Delete
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700">
                    ✏️ Update
                </button>
            </div>

            <div className="mb-8">
                <div 
                    onClick={() => setShowFundApproval(!showFundApproval)}
                    className="bg-purple-600 text-white p-4 rounded font-semibold mb-2 cursor-pointer hover:bg-purple-700 transition-colors flex justify-between items-center"
                >
                    <span>Fund Approval</span>
                    <span>{showFundApproval ? '▼' : '▶'}</span>
                </div>
                {showFundApproval && (
                    <>
                        <div className="text-red-600 rounded mb-3 font-semibold">
                            Ensure to confirm with the recipient before sending money
                        </div>

                        <div className="overflow-x-auto bg-white rounded">
                            <table className="w-full">
                                <thead className="bg-blue-600 text-white">
                                    <tr>
                                        <th className="px-4 py-3 text-left">Name</th>
                                        <th className="px-4 py-3 text-left">UserName</th>
                                        <th className="px-4 py-3 text-left">Phone Number</th>
                                        <th className="px-4 py-3 text-left">Type</th>
                                        <th className="px-4 py-3 text-left">Amount</th>
                                        <th className="px-4 py-3 text-left">Response</th>
                                        <th className="px-4 py-3 text-left">Action</th>
                                        <th className="px-4 py-3 text-left">Date</th>
                                        <th className="px-4 py-3 text-left">Picture</th>
                                        <th className="px-4 py-3 text-left">Account Info</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {approvals.map((approval) => (
                                        <tr key={approval.id} className="border-b hover:bg-gray-50">
                                            <td className="px-4 py-3">{approval.name}</td>
                                            <td className="px-4 py-3">{approval.userName}</td>
                                            <td className="px-4 py-3">{approval.phoneNumber}</td>
                                            <td className="px-4 py-3">{approval.type}</td>
                                            <td className="px-4 py-3">{approval.amount}</td>
                                            <td className="px-4 py-3">
                                                <textarea
                                                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                    rows={2}
                                                    placeholder="Enter response..."
                                                    value={responses[approval.id] || ""}
                                                    onChange={(e)=>handleResponseChange(approval.id, e.target.value)}
                                                />
                                            </td>
                                            <td className="px-4 py-3">
                                                <button className="px-4 py-1 bg-green-500 text-white rounded mr-2 hover:bg-green-600">Approve</button>
                                                <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">Reject</button>
                                            </td>
                                            <td className="px-4 py-3">{approval.date}</td>
                                            <td className="px-4 py-3">
                                                <a href="#" className="text-blue-600 hover:underline">Picture</a>
                                            </td>
                                            <td className="px-4 py-3">
                                                <textarea
                                                    className="w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                                    rows={2}
                                                    placeholder="Enter account info..."
                                                    value={accountInfos[approval.id] || ""}
                                                    onChange={(e)=>handleAccountInfoChange(approval.id, e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>

            <div className="mb-8">
                <div 
                    onClick={() => setShowFundApprovalHistory(!showFundApprovalHistory)}
                    className="bg-purple-600 text-white p-4 rounded font-semibold mb-2 cursor-pointer hover:bg-purple-700 transition-colors flex justify-between items-center"
                >
                    <span>Fund Approval History</span>
                    <span>{showFundApprovalHistory ? '▼' : '▶'}</span>
                </div>
                {showFundApprovalHistory && (
                    <div className="overflow-x-auto bg-white rounded">
                        <table className="w-full">
                            <thead className="bg-purple-600 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Name</th>
                                    <th className="px-4 py-3 text-left">UserName</th>
                                    <th className="px-4 py-3 text-left">Phone Number</th>
                                    <th className="px-4 py-3 text-left">Type</th>
                                    <th className="px-4 py-3 text-left">Amount</th>
                                    <th className="px-4 py-3 text-left">Response</th>
                                    <th className="px-4 py-3 text-left">Status</th>
                                    <th className="px-4 py-3 text-left">Created Date</th>
                                    <th className="px-4 py-3 text-left">Modified Date</th>
                                    <th className="px-4 py-3 text-left">Picture</th>
                                    <th className="px-4 py-3 text-left">Account Info</th>
                                    <th className="px-4 py-3 text-left">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {approvalsHistory.map((approvalsHistory) => (
                                    <tr key={approvalsHistory.id} className="border-b hover:bg-gray-50">
                                        <td className="px-4 py-3">{approvalsHistory.name}</td>
                                        <td className="px-4 py-3">{approvalsHistory.userName}</td>
                                        <td className="px-4 py-3">{approvalsHistory.phoneNumber}</td>
                                        <td className="px-4 py-3">{approvalsHistory.type}</td>
                                        <td className="px-4 py-3">{approvalsHistory.amount}</td>
                                        <td className="px-4 py-3">{approvalsHistory.response}</td>
                                        <td className="px-4 py-3">{approvalsHistory.status}</td>
                                        <td className="px-4 py-3">{approvalsHistory.createdDate}</td>
                                        <td className="px-4 py-3">{approvalsHistory.modifiedDate}</td>
                                        <td className="px-4 py-3">
                                            <a href="#" className="text-blue-600 hover:underline">Picture</a>
                                        </td>
                                        <td className="px-4 py-3">{approvalsHistory.accountInfo}</td>
                                        <td className="px-4 py-3">
                                            <button className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

