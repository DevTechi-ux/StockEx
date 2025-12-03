import React from 'react';
import { History } from 'lucide-react';
import { useWallet } from '../../../contexts/WalletContext';

const TransactionHistory: React.FC = () => {
  const { transactions } = useWallet();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <History className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Transaction History</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="pb-4">Type</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Currency</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      transaction.type === 'deposit'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {transaction.type}
                  </span>
                </td>
                <td className="py-4">
                  {transaction.type === 'deposit' ? '+' : '-'}
                  {transaction.amount}
                </td>
                <td className="py-4">{transaction.currency}</td>
                <td className="py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      transaction.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : transaction.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="py-4 text-gray-600">
                  {transaction.timestamp.toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;