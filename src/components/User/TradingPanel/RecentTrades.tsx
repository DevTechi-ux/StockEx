import React from 'react';
import { History } from 'lucide-react';

const RecentTrades: React.FC = () => {
  const trades = [
    { price: 49245.30, amount: 0.0234, time: '14:32:45', type: 'buy' },
    { price: 49242.10, amount: 0.0567, time: '14:32:42', type: 'sell' },
    { price: 49240.80, amount: 0.0123, time: '14:32:40', type: 'buy' },
    { price: 49238.90, amount: 0.0445, time: '14:32:38', type: 'sell' },
    { price: 49237.50, amount: 0.0789, time: '14:32:35', type: 'buy' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <History className="w-5 h-5" />
        <h3 className="text-lg font-semibold">Recent Trades</h3>
      </div>

      <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-600 mb-2">
        <div>Price (USD)</div>
        <div>Amount (BTC)</div>
        <div>Time</div>
        <div>Type</div>
      </div>

      <div className="space-y-2">
        {trades.map((trade, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 text-sm">
            <div className={trade.type === 'buy' ? 'text-green-500' : 'text-red-500'}>
              {trade.price.toFixed(2)}
            </div>
            <div>{trade.amount.toFixed(4)}</div>
            <div className="text-gray-600">{trade.time}</div>
            <div className={trade.type === 'buy' ? 'text-green-500' : 'text-red-500'}>
              {trade.type.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTrades;