import React, { useState } from 'react';
import { DollarSign, Percent } from 'lucide-react';

const TradeForm: React.FC = () => {
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market');
  const [side, setSide] = useState<'buy' | 'sell'>('buy');

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSide('buy')}
          className={`flex-1 py-2 rounded-lg font-semibold ${
            side === 'buy'
              ? 'bg-green-500 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setSide('sell')}
          className={`flex-1 py-2 rounded-lg font-semibold ${
            side === 'sell'
              ? 'bg-red-500 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          Sell
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setOrderType('market')}
          className={`flex-1 py-2 rounded-lg font-medium ${
            orderType === 'market'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          Market
        </button>
        <button
          onClick={() => setOrderType('limit')}
          className={`flex-1 py-2 rounded-lg font-medium ${
            orderType === 'limit'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          Limit
        </button>
      </div>

      <div className="space-y-4">
        {orderType === 'limit' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Limit Price
            </label>
            <div className="relative">
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="0.00"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <DollarSign className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <div className="relative">
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="0.00"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-400">BTC</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          {[25, 50, 75, 100].map((percent) => (
            <button
              key={percent}
              className="flex-1 py-1 px-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              {percent}%
            </button>
          ))}
        </div>

        <button
          className={`w-full py-3 rounded-lg font-semibold ${
            side === 'buy'
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-red-500 hover:bg-red-600'
          } text-white`}
        >
          {side === 'buy' ? 'Buy' : 'Sell'} BTC
        </button>
      </div>
    </div>
  );
};

export default TradeForm;