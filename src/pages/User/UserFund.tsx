import { useState } from 'react';
import { X } from 'lucide-react';

const UserFund = () => {
  const [showAccountModal, setShowAccountModal] = useState<boolean>(false);
  const [showAddBalanceModal, setShowAddBalanceModal] = useState<boolean>(false);
  const [showWithdrawalModal, setShowWithdrawalModal] = useState<boolean>(false);
  const [showTransactionHistory, setShowTransactionHistory] = useState<boolean>(false);
  
  // Account information state
  const [accountInfo, setAccountInfo] = useState({
    bankName: '',
    accountHolderName: '',
    accountNumber: '',
    ifscCode: '',
    upiId: '',
    usdtAddress: '',
  });

  // Add Balance form state
  const [addBalanceData, setAddBalanceData] = useState({
    amount: '',
    phoneNumber: '',
    transactionScreenshot: null as File | null,
  });

  const [fileName, setFileName] = useState<string>('No file chosen');

  // Withdrawal form state
  const [withdrawalData, setWithdrawalData] = useState({
    amount: '',
    phoneNumber: '',
    accountInfo: '',
    qrCode: null as File | null,
  });

  const [qrCodeFileName, setQrCodeFileName] = useState<string>('No file chosen');

  // Handle file change for transaction screenshot
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAddBalanceData({ ...addBalanceData, transactionScreenshot: e.target.files[0] });
      setFileName(e.target.files[0].name);
    }
  };

  // Handle file change for QR code
  const handleQrCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setWithdrawalData({ ...withdrawalData, qrCode: e.target.files[0] });
      setQrCodeFileName(e.target.files[0].name);
    }
  };

  // Empty transaction history data (as shown in the image)
  const transactionHistory: any[] = [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">


      <div className="p-6">
        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button 
            onClick={() => setShowAccountModal(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
          >
            Account Information
          </button>
          <button 
            onClick={() => setShowAddBalanceModal(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
          >
            Add Balance
          </button>
          <button 
            onClick={() => setShowWithdrawalModal(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
          >
            Withdrawal
          </button>
        </div>

        {/* Transaction Approval History Section */}
        <div className="mb-8">
          <div 
            onClick={() => setShowTransactionHistory(!showTransactionHistory)}
            className="bg-purple-600 text-white p-4 rounded-t font-semibold cursor-pointer hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 transition-colors flex justify-between items-center"
          >
            <span>Transaction Approval History</span>
            <span className="text-white">{showTransactionHistory ? '▼' : '▶'}</span>
          </div>
          
          {showTransactionHistory && (
          <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-b">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-600 text-white dark:bg-purple-700">
                  <th className="px-4 py-3 text-left font-semibold border-b border-purple-700 dark:border-purple-800">Name</th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-purple-700 dark:border-purple-800">UserName</th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-purple-700 dark:border-purple-800">Phone Number</th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-purple-700 dark:border-purple-800">Type</th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-purple-700 dark:border-purple-800">Amount</th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-purple-700 dark:border-purple-800">Response</th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-purple-700 dark:border-purple-800">Status</th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-purple-700 dark:border-purple-800">Created Date</th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-purple-700 dark:border-purple-800">Modified Date</th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-purple-700 dark:border-purple-800">Picture</th>
                  <th className="px-4 py-3 text-left font-semibold border-b border-purple-700 dark:border-purple-800">Account Info</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.length === 0 ? (
                  <tr>
                    <td colSpan={11} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                      No transaction history available
                    </td>
                  </tr>
                ) : (
                  transactionHistory.map((transaction, index) => (
                    <tr key={index} className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-4 py-3 dark:text-gray-300">{transaction.name}</td>
                      <td className="px-4 py-3 dark:text-gray-300">{transaction.userName}</td>
                      <td className="px-4 py-3 dark:text-gray-300">{transaction.phoneNumber}</td>
                      <td className="px-4 py-3 dark:text-gray-300">{transaction.type}</td>
                      <td className="px-4 py-3 dark:text-gray-300">{transaction.amount}</td>
                      <td className="px-4 py-3 dark:text-gray-300">{transaction.response}</td>
                      <td className="px-4 py-3 dark:text-gray-300">{transaction.status}</td>
                      <td className="px-4 py-3 dark:text-gray-300">{transaction.createdDate}</td>
                      <td className="px-4 py-3 dark:text-gray-300">{transaction.modifiedDate}</td>
                      <td className="px-4 py-3">
                        {transaction.picture ? (
                          <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">View</a>
                        ) : (
                          <span className="text-gray-400 dark:text-gray-500">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3 dark:text-gray-300">{transaction.accountInfo || '-'}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          )}
        </div>
      </div>

      {/* Account Information Modal */}
      {showAccountModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-start justify-center z-50 pt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-4 rounded-t-lg flex justify-between items-center">
              <h2 className="text-xl font-semibold">Account Information</h2>
              <button
                onClick={() => setShowAccountModal(false)}
                className="text-white hover:text-gray-200 dark:hover:text-gray-400 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Bank Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    value={accountInfo.bankName}
                    onChange={(e) => setAccountInfo({ ...accountInfo, bankName: e.target.value })}
                    placeholder="Enter bank name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Account Holder Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    value={accountInfo.accountHolderName}
                    onChange={(e) => setAccountInfo({ ...accountInfo, accountHolderName: e.target.value })}
                    placeholder="Enter account holder name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Account Number */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Account Number
                  </label>
                  <input
                    type="text"
                    value={accountInfo.accountNumber}
                    onChange={(e) => setAccountInfo({ ...accountInfo, accountNumber: e.target.value })}
                    placeholder="Enter account number"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* IFSC Code */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    value={accountInfo.ifscCode}
                    onChange={(e) => setAccountInfo({ ...accountInfo, ifscCode: e.target.value })}
                    placeholder="Enter IFSC code"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* UPI ID */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    value={accountInfo.upiId}
                    onChange={(e) => setAccountInfo({ ...accountInfo, upiId: e.target.value })}
                    placeholder="Enter UPI ID"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* USDT Address */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    USDT Address
                  </label>
                  <input
                    type="text"
                    value={accountInfo.usdtAddress}
                    onChange={(e) => setAccountInfo({ ...accountInfo, usdtAddress: e.target.value })}
                    placeholder="Enter USDT address"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowAccountModal(false)}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded font-semibold hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    // Handle save logic here
                    setShowAccountModal(false);
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Balance Modal */}
      {showAddBalanceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-start justify-center z-50 pt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg mx-4">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Add Balance</h2>
              <button
                onClick={() => {
                  setShowAddBalanceModal(false);
                  setAddBalanceData({ amount: '', phoneNumber: '', transactionScreenshot: null });
                  setFileName('No file chosen');
                }}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Amount Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Amount
                  </label>
                  <input
                    type="text"
                    value={addBalanceData.amount}
                    onChange={(e) => setAddBalanceData({ ...addBalanceData, amount: e.target.value })}
                    placeholder="Enter amount"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={addBalanceData.phoneNumber}
                    onChange={(e) => setAddBalanceData({ ...addBalanceData, phoneNumber: e.target.value })}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Transaction Screenshot Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Transaction ScreenShot
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <span className="text-gray-700 dark:text-gray-300">Choose File</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{fileName}</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => {
                    setShowAddBalanceModal(false);
                    setAddBalanceData({ amount: '', phoneNumber: '', transactionScreenshot: null });
                    setFileName('No file chosen');
                  }}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded font-semibold hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    // Handle add balance logic here
                    console.log('Add Balance:', addBalanceData);
                    setShowAddBalanceModal(false);
                    setAddBalanceData({ amount: '', phoneNumber: '', transactionScreenshot: null });
                    setFileName('No file chosen');
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
                >
                  Add Balance
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Withdrawal Modal */}
      {showWithdrawalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-start justify-center z-50 pt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg mx-4">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Withdrawal</h2>
              <button
                onClick={() => {
                  setShowWithdrawalModal(false);
                  setWithdrawalData({ amount: '', phoneNumber: '', accountInfo: '', qrCode: null });
                  setQrCodeFileName('No file chosen');
                }}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="space-y-4">
                {/* Amount Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Amount
                  </label>
                  <input
                    type="text"
                    value={withdrawalData.amount}
                    onChange={(e) => setWithdrawalData({ ...withdrawalData, amount: e.target.value })}
                    placeholder="Enter amount"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={withdrawalData.phoneNumber}
                    onChange={(e) => setWithdrawalData({ ...withdrawalData, phoneNumber: e.target.value })}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* Account Info Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Account Info
                  </label>
                  <textarea
                    value={withdrawalData.accountInfo}
                    onChange={(e) => setWithdrawalData({ ...withdrawalData, accountInfo: e.target.value })}
                    placeholder="Enter account information"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-y dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {/* QR Code Field */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Qr Code
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <span className="text-gray-700 dark:text-gray-300">Choose File</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleQrCodeChange}
                        className="hidden"
                      />
                    </label>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{qrCodeFileName}</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => {
                    setShowWithdrawalModal(false);
                    setWithdrawalData({ amount: '', phoneNumber: '', accountInfo: '', qrCode: null });
                    setQrCodeFileName('No file chosen');
                  }}
                  className="px-6 py-2 bg-gray-300 text-gray-700 rounded font-semibold hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    // Handle withdrawal logic here
                    console.log('Withdrawal:', withdrawalData);
                    setShowWithdrawalModal(false);
                    setWithdrawalData({ amount: '', phoneNumber: '', accountInfo: '', qrCode: null });
                    setQrCodeFileName('No file chosen');
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
                >
                  Withdrawal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserFund;
