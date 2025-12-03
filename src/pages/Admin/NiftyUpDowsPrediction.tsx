import { useState } from "react";
import ActiveTrade from "../../components/Admin/NiftyUpDown/ActiveTrade";

export default function NiftyUpDowsPrediction(): JSX.Element {
    const [tradeType, setTradeType] = useState<string>("UP");
    const [lastPrice] = useState<number>(26084.55);
    const [amount, setAmount] = useState<string>("");
    const [scheduledTime, setScheduledTime] = useState<string>("");
    const [activeTrades, setActiveTrades] = useState<any[]>([]);

    const walletBalance = 8988748.38;

     const handleBookTrade = () => {
        if (!amount || parseFloat(amount) < 300) {
            alert("Amount must be at least 300");
            return;
        }
        const newTrade = {
            id: uid(),
            type: tradeType,
            amount: parseFloat(amount),
            price: lastPrice,
            status: "Active",
            time: new Date().toLocaleTimeString(),
        };
        setActiveTrades((prev) => [newTrade, ...prev]);
        setAmount("");
        setScheduledTime("");
    };

    const uid = (p = "") => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}${p}`;



    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Wallet Balance Display */}
            <div className="flex justify-end mb-6">
                <div className="bg-purple-600 text-white px-6 py-2 rounded font-semibold">
                    Wallet Balance: ₹{walletBalance.toFixed(2)}
                </div>
            </div>

            {/* Trade Form */}
            <div className="mb-8">
                <div className="flex gap-6 items-end flex-wrap">
                    {/* Trade Type */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Trade Type</label>
                        <select
                            value={tradeType}
                            onChange={(e) => setTradeType(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded flex items-center gap-2"
                        >
                            <option value="UP">📈 UP</option>
                            <option value="DOWN">📉 DOWN</option>
                        </select>
                    </div>

                    {/* Last Price */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Last Price</label>
                        <div className="px-4 py-2 bg-gray-200 rounded text-gray-700 font-medium">
                            {lastPrice}
                        </div>
                    </div>

                    {/* Amount */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Amount</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount (min 300, step 30)"
                            className="px-4 py-2 border border-gray-300 rounded w-48"
                        />
                    </div>

                    {/* Scheduled Time */}
                    <div>
                        <label className="block text-sm font-semibold mb-2">Scheduled Time</label>
                        <input
                            type="datetime-local"
                            value={scheduledTime}
                            onChange={(e) => setScheduledTime(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded w-48"
                        />
                    </div>

                    {/* Book Trade Button */}
                    <button
                        onClick={handleBookTrade}
                        className="px-6 py-2 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-500 flex items-center gap-2"
                    >
                        📖 Book Trade
                    </button>
                </div>
            </div>

            {/* Active Trades Section */}
            
            <ActiveTrade />
        </div>
    );
}