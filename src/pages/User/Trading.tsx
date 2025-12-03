import React from 'react';
import Chart from '../../components/User/TradingPanel/Chart';
import OrderBook from '../../components/User/TradingPanel/OrderBook';
import TradeForm from '../../components/User/TradingPanel/TradeForm';
import RecentTrades from '../../components/User/TradingPanel/RecentTrades';

const Trading: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Left column - Chart */}
        <div className="col-span-8">
          <Chart />
        </div>

        {/* Right column - Trade Form */}
        <div className="col-span-4">
          <TradeForm />
        </div>

        {/* Bottom left - Order Book */}
        <div className="col-span-6">
          <OrderBook />
        </div>

        {/* Bottom right - Recent Trades */}
        <div className="col-span-6">
          <RecentTrades />
        </div>
      </div>
    </div>
  );
};

export default Trading;