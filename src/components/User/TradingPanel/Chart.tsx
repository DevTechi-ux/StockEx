import React from 'react';
import { LineChart, TrendingUp, TrendingDown } from 'lucide-react';

const Chart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 h-[400px]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <LineChart className="w-5 h-5" />
          Price Chart
        </h3>
        <div className="flex gap-4">
          <div className="flex items-center text-green-500">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+2.45%</span>
          </div>
          <div className="flex items-center text-red-500">
            <TrendingDown className="w-4 h-4 mr-1" />
            <span>-1.23%</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-[320px] border border-gray-200 rounded">
        <p className="text-gray-500">Chart visualization would go here</p>
      </div>
    </div>
  );
};

export default Chart;