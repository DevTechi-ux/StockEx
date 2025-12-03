'use client'

import { useState } from 'react'

interface TradingFormProps {
  balance: string
}

export function TradingForm({ balance: _ }: TradingFormProps) {
  const [activeTab] = useState('buy')
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div defaultValue="buy" className="w-full">
        {/* <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="buy">BUY</TabsTrigger>
          <TabsTrigger value="sell">SELL</TabsTrigger>
        </TabsList> */}
        <div className="space-y-6">
          <div className="flex justify-between mb-4">
            <button >MARKET ORDER</button>
            <button >LIMIT ORDER</button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-500">Price</label>
              <div className="flex items-center gap-2">
                <input type="number" placeholder="0.00" />
                <span className="text-sm text-gray-500">USDT</span>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-500">Amount</label>
              <div className="flex items-center gap-2">
                <input type="number" placeholder="Amount" />
                <span className="text-sm text-gray-500">BTC</span>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-500">Total</label>
              <div className="flex items-center gap-2">
                <input type="number" placeholder="Total" />
                <span className="text-sm text-gray-500">USDT</span>
              </div>
            </div>
            {/* <input
              type="range"
              className="w-full"
              min="0"
              max="100"
              defaultValue="27"
            /> */}
            <button className="w-full bg-violet-500 hover:bg-violet-600">
              {activeTab === 'buy' ? 'BUY' : 'SELL BTC'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradingForm

