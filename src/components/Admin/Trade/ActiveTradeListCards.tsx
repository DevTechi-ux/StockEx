import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const stats = [
  {
    value: "0",
    label: "Wallet Balance",
    bgColor: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-gray-800 dark:text-gray-200",
  },
  {
    value: "0",
    label: "Active Trade",
    bgColor: "bg-green-300 dark:bg-green-800",
    textColor: "text-gray-800 dark:text-gray-200",
  },
  {
    value: "0",
    label: "Completed Trade",
    bgColor: "bg-gray-200 dark:bg-gray-700",
    textColor: "text-gray-800 dark:text-gray-200",
  },
]

export function ActiveTradeListCards() {
  const navigate = useNavigate()
  const [showCompletedModal, setShowCompletedModal] = useState(false)

  const handleViewDetails = (label: string) => {
    if (label === "Completed Trade") {
      setShowCompletedModal(true)
      return
    }
    if (label === "Wallet Balance") {
      navigate("/admin/balance")
      return
    }
    if (label === "Active Trade") {
      navigate("/admin/manage-transactions#active-trades")
      return
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.bgColor} rounded-lg p-4 ${stat.textColor}`}>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            <button
              onClick={() => handleViewDetails(stat.label)}
              className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm mt-2 hover:underline"
            >
              View Details <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Completed Trades Modal */}
      {showCompletedModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 dark:bg-black/60 pt-10">
          <div className="bg-white dark:bg-gray-800 w-full max-w-5xl rounded shadow-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between bg-sky-700 dark:bg-sky-800 text-white px-4 py-3">
              <h2 className="font-semibold">Completed Trades</h2>
            </div>

            {/* Content */}
            <div className="p-4">
              {/* Search */}
              <div className="flex justify-end mb-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="dark:text-gray-300">Search:</span>
                  <input
                    type="text"
                    className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                    placeholder="Search..."
                  />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-max w-full border dark:border-gray-700 text-sm">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th className="border dark:border-gray-600 px-3 py-2 text-left">Id</th>
                      <th className="border dark:border-gray-600 px-3 py-2 text-left">UserName</th>
                      <th className="border dark:border-gray-600 px-3 py-2 text-left">TradeSymbol</th>
                      <th className="border dark:border-gray-600 px-3 py-2 text-left">Lot/Qty</th>
                      <th className="border dark:border-gray-600 px-3 py-2 text-left">Unit</th>
                      <th className="border dark:border-gray-600 px-3 py-2 text-left">P&amp;L</th>
                      <th className="border dark:border-gray-600 px-3 py-2 text-left">Entrytime</th>
                      <th className="border dark:border-gray-600 px-3 py-2 text-left">position</th>
                      <th className="border dark:border-gray-600 px-3 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        className="border dark:border-gray-600 px-3 py-6 text-center text-gray-500 dark:text-gray-400"
                        colSpan={9}
                      >
                        No data available in table
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end px-4 py-3 bg-gray-50 dark:bg-gray-700">
              <button
                onClick={() => setShowCompletedModal(false)}
                className="px-4 py-2 rounded bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-800 text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default ActiveTradeListCards