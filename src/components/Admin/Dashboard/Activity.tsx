const activityData = [
  {
    username: "demo1",
    totalTrades: 2,
    activeProfit: "1,43,301.20",
    completedProfit: "0.00",
    walletBalance: "2,20,062.50",
    total: "1,43,301.20",
  },
  {
    username: "demo2",
    totalTrades: 1,
    activeProfit: "-10,562.43",
    completedProfit: "0.00",
    walletBalance: "99,850.65",
    total: "-10,562.43",
  },
  {
    username: "demo3",
    totalTrades: 2,
    activeProfit: "2,13,867.80",
    completedProfit: "0.00",
    walletBalance: "1,90,824.40",
    total: "2,13,867.80",
  },
  {
  username: "demo4",
    totalTrades: 1,
    activeProfit: "28,23,600.00",
    completedProfit: "0.00",
    walletBalance: "1,44,166.00",
    total: "28,23,600.00",
  },
]

export function ActivityTable() {
  return (
    <div className="bg-white rounded-lg overflow-hidden mb-6 shadow-sm">
      <div className="bg-indigo-600 text-white px-4 py-3 flex justify-between items-center">
        <h2 className="text-lg font-semibold">{"Today's Activity"}</h2>
        <button className="text-cyan-300 hover:underline text-sm">View Users</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-500 text-white text-sm">
              <th className="px-4 py-3 text-center font-medium">Username</th>
              <th className="px-4 py-3 text-center font-medium">Total Trades</th>
              <th className="px-4 py-3 text-center font-medium">Active Profit</th>
              <th className="px-4 py-3 text-center font-medium">Completed Profit</th>
              <th className="px-4 py-3 text-center font-medium">Wallet Balance</th>
              <th className="px-4 py-3 text-center font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            {activityData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100 bg-green-50">
                <td className="px-4 py-3 text-center text-gray-700">{row.username}</td>
                <td className="px-4 py-3 text-center text-gray-700">{row.totalTrades}</td>
                <td
                  className={`px-4 py-3 text-center ${row.activeProfit.startsWith("-") ? "text-red-500" : "text-green-600"}`}
                >
                  {row.activeProfit}
                </td>
                <td className="px-4 py-3 text-center text-green-600">{row.completedProfit}</td>
                <td className="px-4 py-3 text-center text-green-600">{row.walletBalance}</td>
                <td
                  className={`px-4 py-3 text-center ${row.total.startsWith("-") ? "text-red-500" : "text-green-600"}`}
                >
                  {row.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end items-center gap-2 p-4">
        <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">Previous</button>
        <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
        <button className="px-3 py-1 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">Next</button>
      </div>
    </div>
  )
}
export default ActivityTable