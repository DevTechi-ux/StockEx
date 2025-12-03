import React from 'react';
import { BookOpen } from 'lucide-react';

const OrderBook: React.FC = () => {
  const asks = [
    { price: 49250.50, amount: 0.5423, total: 26712.54 },
    { price: 49245.30, amount: 0.3891, total: 19161.54 },
    { price: 49240.10, amount: 0.2145, total: 10562.00 },
  ];

  const bids = [
    { price: 49235.40, amount: 0.6234, total: 30691.31 },
    { price: 49230.20, amount: 0.4521, total: 22259.97 },
    { price: 49225.80, amount: 0.3456, total: 17014.43 },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5" />
        <h3 className="text-lg font-semibold">Order Book</h3>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-600 mb-2">
        <div>Price (USD)</div>
        <div>Amount (BTC)</div>
        <div>Total (USD)</div>
      </div>

      <div className="space-y-1">
        {asks.map((ask, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 text-sm text-red-500">
            <div>{ask.price.toFixed(2)}</div>
            <div>{ask.amount.toFixed(4)}</div>
            <div>{ask.total.toFixed(2)}</div>
          </div>
        ))}

        <div className="text-center py-2 text-lg font-semibold text-gray-800">
          49,242.30 USD
        </div>

        {bids.map((bid, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 text-sm text-green-500">
            <div>{bid.price.toFixed(2)}</div>
            <div>{bid.amount.toFixed(4)}</div>
            <div>{bid.total.toFixed(2)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBook;