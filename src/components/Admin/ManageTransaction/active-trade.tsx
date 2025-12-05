"use client"

import { useState } from "react"
import { Pencil, Plus, Trash2 } from "lucide-react"

interface Trade {
  id: number
  tradeSymbol: string
  lotQty: number
  unit: string
  email: string
  currentPosition: string
  orderPrice: number
  triggerPrice: number
  ltp: number
  profitLoss: number
  status: string
  sl: number
  tgt: number
  tgt2: number
  tgt3: number
  orderDate: string
  orderTime: string
  productType: string
  isLive: boolean
  strategyName: string
  watchlistName: string
  publishName: string
  fundManager: string
}

const tradesData: Trade[] = [
  {
    id: 1,
    tradeSymbol: "BTCUSDT",
    lotQty: 1,
    unit: "Lot",
    email: "Siddhantgupta1802@gmail.com",
    currentPosition: "Buy",
    orderPrice: 96852.43,
    triggerPrice: 0,
    ltp: 85884.8,
    profitLoss: -10967.63,
    status: "ACTIVE",
    sl: 0,
    tgt: 0,
    tgt2: 0,
    tgt3: 0,
    orderDate: "15-11-2025",
    orderTime: "16:56",
    productType: "NRML",
    isLive: false,
    strategyName: "Manual",
    watchlistName: "CRYPTO",
    publishName: "Name",
    fundManager: "Manager",
  },
  {
    id: 2,
    tradeSymbol: "BANKNIFTY25NOVFUT",
    lotQty: 20,
    unit: "Qty",
    email: "sanaitatest@gmail.com",
    currentPosition: "Buy",
    orderPrice: 57894,
    triggerPrice: 0,
    ltp: 58832.4,
    profitLoss: 18768,
    status: "ACTIVE",
    sl: 0,
    tgt: 0,
    tgt2: 0,
    tgt3: 0,
    orderDate: "14-10-2025",
    orderTime: "12:07",
    productType: "CNC",
    isLive: false,
    strategyName: "Manual",
    watchlistName: "MCX",
    publishName: "Name",
    fundManager: "Manager",
  },
  {
    id: 3,
    tradeSymbol: "NIFTY25NOVFUT",
    lotQty: 341,
    unit: "Qty",
    email: "sanaitatest@gmail.com",
    currentPosition: "Buy",
    orderPrice: 25518,
    triggerPrice: 0,
    ltp: 25883.2,
    profitLoss: 124533.2,
    status: "ACTIVE",
    sl: 0,
    tgt: 0,
    tgt2: 0,
    tgt3: 0,
    orderDate: "07-11-2025",
    orderTime: "11:19",
    productType: "CNC",
    isLive: false,
    strategyName: "Manual",
    watchlistName: "NFO",
    publishName: "Name",
    fundManager: "Manager",
  },
  {
    id: 4,
    tradeSymbol: "NIFTY25NOVFUT",
    lotQty: 22,
    unit: "Qty",
    email: "varsha@gmail.com",
    currentPosition: "Buy",
    orderPrice: 25466.3,
    triggerPrice: 0,
    ltp: 25883.2,
    profitLoss: 9171.8,
    status: "ACTIVE",
    sl: 0,
    tgt: 0,
    tgt2: 0,
    tgt3: 0,
    orderDate: "07-11-2025",
    orderTime: "10:59",
    productType: "CNC",
    isLive: false,
    strategyName: "Manual",
    watchlistName: "NFO",
    publishName: "Name",
    fundManager: "Manager",
  },
  {
    id: 5,
    tradeSymbol: "BANKNIFTY25NOVFUT",
    lotQty: 180,
    unit: "Qty",
    email: "varsha@gmail.com",
    currentPosition: "Buy",
    orderPrice: 57695.2,
    triggerPrice: 0,
    ltp: 58832.4,
    profitLoss: 204696,
    status: "ACTIVE",
    sl: 0,
    tgt: 0,
    tgt2: 0,
    tgt3: 0,
    orderDate: "07-11-2025",
    orderTime: "10:59",
    productType: "CNC",
    isLive: false,
    strategyName: "Manual",
    watchlistName: "NFO",
    publishName: "Name",
    fundManager: "Manager",
  },
  {
    id: 6,
    tradeSymbol: "SILVER25DECFUT",
    lotQty: 5,
    unit: "Lot",
    email: "test@gmail.com",
    currentPosition: "Buy",
    orderPrice: 155700,
    triggerPrice: 0,
    ltp: 174436,
    profitLoss: 2810400,
    status: "ACTIVE",
    sl: 0,
    tgt: 0,
    tgt2: 0,
    tgt3: 0,
    orderDate: "07-11-2025",
    orderTime: "11:19",
    productType: "CNC",
    isLive: false,
    strategyName: "Manual",
    watchlistName: "NFO",
    publishName: "Name",
    fundManager: "Manager",
  },
]

export function ActiveTradesTable() {
  const [pendingOrders, setPendingOrders] = useState(false)

  return (
    <div className="w-full p-6 rounded-lg shadow-md">
<div className="max-w-6xl mx-auto py-4 overflow-x-hidden">
      {/* <div className="w-full py-4"> */}
        <div id="active-trades" className="border-t-4 border-purple-500 pt-4">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Active Trades</h3>
            <label className="flex items-center gap-2 mt-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={pendingOrders}
                onChange={(e) => setPendingOrders(e.target.checked)}
                className="w-4 h-4"
              />
              Pending Orders
            </label>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-max">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-3 py-3 text-center text-sm font-medium">Square Off</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Action</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">TradeSymbol</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Lot/Qty</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Unit</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Email</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Current Position</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Order Price</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Trigger Price</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">LTP</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Profit/Loss</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Status</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">SL</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">TGT</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">TGT2</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">TGT3</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Order Date</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Order Time</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Product Type</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">IsLive</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Strategy Name</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Watchlist Name</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Publish Name</th>
                  <th className="px-3 py-3 text-center text-sm font-medium">Fund Manager</th>
                </tr>
              </thead>
              <tbody>
                {tradesData.map((trade) => (
                  <tr key={trade.id} className="border-b border-gray-200">
                    {/* Square Off Button */}
                    <td className="px-3 py-3 text-center">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1.5 rounded">
                        Sqr Off
                      </button>
                    </td>
                    {/* Action Buttons */}
                    <td className="px-3 py-3">
                      <div className="flex items-center justify-center gap-1">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded">
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded">
                          <Plus className="w-4 h-4" />
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-center text-sm">{trade.tradeSymbol}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.lotQty}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.unit}</td>
                    <td className="px-3 py-3 text-center text-sm text-blue-600">{trade.email}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.currentPosition}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.orderPrice}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.triggerPrice}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.ltp}</td>
                    {/* Profit/Loss with color */}
                    <td className="px-3 py-3 text-center">
                      <span
                        className={`inline-block px-2 py-1 text-sm font-medium text-white ${trade.profitLoss >= 0 ? "bg-green-500" : "bg-red-500"
                          }`}
                      >
                        {trade.profitLoss}
                      </span>
                    </td>
                    <td className="px-3 py-3 text-center text-sm font-medium">{trade.status}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.sl}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.tgt}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.tgt2}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.tgt3}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.orderDate}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.orderTime}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.productType}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.isLive ? "true" : "false"}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.strategyName}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.watchlistName}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.publishName}</td>
                    <td className="px-3 py-3 text-center text-sm">{trade.fundManager}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="mt-4 text-center text-sm text-gray-500">
            © Copyright 2018. All right reserved. uat.tradeex.info
          </div>
        </div>
      </div>
    </div>

  )
}
export default ActiveTradesTable