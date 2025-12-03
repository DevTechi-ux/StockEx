import React from 'react';
import { Wallet, TrendingUp, TrendingDown } from 'lucide-react';
import { useWallet } from '../../../contexts/WalletContext';

const Balance: React.FC = () => {
  const { balances } = useWallet();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Wallet className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Your Balance</h2>
      </div>

      <div className="grid gap-4">
        {balances.map((balance) => (
          <div
            key={balance.currency}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <span className="text-gray-600">{balance.currency}</span>
              <div className="text-2xl font-bold">
                {balance.currency === 'USD'
                  ? `$${balance.amount.toFixed(2)}`
                  : balance.amount.toFixed(8)}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="text-green-500">+2.5%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Balance;