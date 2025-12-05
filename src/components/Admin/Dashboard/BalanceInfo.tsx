import { Monitor } from "lucide-react"

export function BalanceInfo() {
  return (
    <aside className="w-72 p-4 flex flex-col gap-4">
      {/* Profile Card */}
      <div className="bg-gradient-to-br from-violet-400 to-blue-400 rounded-xl p-4 text-center text-white">
        <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-white/80 rotate-45 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 -rotate-45" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3l7 7m0 0l7-7m-7 7v11" />
                <path d="M21 21l-7-7m0 0l-7 7" />
              </svg>
            </div>
          </div>
        </div>
        <p className="text-sm font-medium tracking-wider mb-1">STOCKEX</p>
        <h3 className="font-semibold text-lg">
          Super Admin<span className="text-green-300">✓</span>
        </h3>
        <p className="text-sm opacity-90">admin </p>
        <p className="text-xs mt-2 opacity-80">Customer ID:123456</p>
      </div>

      {/* Balance Card */}
      <div className="bg-gradient-to-br from-violet-400 to-blue-400 rounded-xl p-4 text-center text-white">
        <div className="w-16 h-16 mx-auto mb-3 bg-blue-500/30 rounded-xl flex items-center justify-center">
          <Monitor className="w-8 h-8" />
        </div>
        <p className="text-3xl font-bold">99999.99</p>
        <p className="text-sm opacity-90">Available Balance</p>
        <div className="flex mt-4 border-t border-white/20 pt-3">
          <button className="flex-1 text-blue-200 font-medium hover:text-white transition-colors">Report</button>
          <div className="w-px bg-white/20" />
          <button className="flex-1 text-green-300 font-medium hover:text-white transition-colors">Risk</button>
        </div>
      </div>
    </aside>
  )
}
export default BalanceInfo