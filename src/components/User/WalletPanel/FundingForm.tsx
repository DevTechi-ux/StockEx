import React, { useState } from 'react';
import { CircleDollarSign } from 'lucide-react';
import { useWallet } from '../../../contexts/WalletContext';

const FundingForm: React.FC = () => {
  const { addTransaction } = useWallet();
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [type, setType] = useState<'deposit' | 'withdrawal'>('deposit');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addTransaction({
      userId: '1', // Should come from auth context
      type,
      amount: parseFloat(amount),
      currency,
      status: 'pending',
    });

    setAmount('');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <CircleDollarSign className="w-6 h-6 text-blue-500" />
        <h2 className="text-xl font-semibold">Fund Your Account</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4 mb-6">
          <button
            type="button"
            onClick={() => setType('deposit')}
            className={`flex-1 py-2 rounded-lg font-semibold ${
              type === 'deposit'
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Deposit
          </button>
          <button
            type="button"
            onClick={() => setType('withdrawal')}
            className={`flex-1 py-2 rounded-lg font-semibold ${
              type === 'withdrawal'
                ? 'bg-red-500 text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Withdraw
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="0.00"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Currency
          </label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="USD">USD</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
        </div>

        <button
          type="submit"
          className={`w-full py-3 rounded-lg font-semibold ${
            type === 'deposit'
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-red-500 hover:bg-red-600'
          } text-white`}
        >
          {type === 'deposit' ? 'Deposit' : 'Withdraw'} Funds
        </button>
      </form>
    </div>
  );
};

export default FundingForm;