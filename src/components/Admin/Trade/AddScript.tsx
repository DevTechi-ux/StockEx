import React, { useMemo, useState } from "react";

type Script = {
    id: string;
    symbol: string;
    exchange: string;
    ltp: number;
    changePct: number;
    bidQty: number;
    bid: number;
    ask: number;
    askQty: number;
    open: number;
    high: number;
    low: number;
    close: number;
};

const initialData: Script[] = [
    {
        id: "1",
        symbol: "HFCL",
        exchange: "BSE",
        ltp: 70.87,
        changePct: 0.12,
        bidQty: 582,
        bid: 70.83,
        ask: 70.87,
        askQty: 814,
        open: 71.17,
        high: 71.47,
        low: 70.51,
        close: 71.17,
    },
    {
        id: "2",
        symbol: "MRF",
        exchange: "NSE",
        ltp: 155130,
        changePct: 1.02,
        bidQty: 1,
        bid: 155135,
        ask: 155130,
        askQty: 1,
        open: 152445,
        high: 155695,
        low: 152445,
        close: 152420,
    },
    {
        id: "3",
        symbol: "SILVER25DEC FUT",
        exchange: "MCX",
        ltp: 175199,
        changePct: -0.35,
        bidQty: 1,
        bid: 175199,
        ask: 175199,
        askQty: 1,
        open: 176086,
        high: 176198,
        low: 174250,
        close: 178200,
    },
    {
        id: "4",
        symbol: "GOLD25DEC FUT",
        exchange: "MCX",
        ltp: 127357,
        changePct: 0.45,
        bidQty: 1,
        bid: 127357,
        ask: 127357,
        askQty: 1,
        open: 127593,
        high: 127593,
        low: 127350,
        close: 127315,
    },
    {
        id: "5",
        symbol: "BTCUSDT",
        exchange: "CRYPTO",
        ltp: 86951.51,
        changePct: 2.12,
        bidQty: 6,
        bid: 86951.5,
        ask: 86951.51,
        askQty: 1,
        open: 85765.44,
        high: 87350,
        low: 83822.76,
        close: 86951.51,
    },
    {
        id: "6",
        symbol: "NATURALGAS25DEC FUT",
        exchange: "FOREX",
        ltp: 440.4,
        changePct: -0.5,
        bidQty: 3,
        bid: 440.3,
        ask: 440.4,
        askQty: 16,
        open: 438.4,
        high: 441,
        low: 437.2,
        close: 433.5,
    },
];

export default function AddScript(): JSX.Element {
    const [data, setData] = useState<Script[]>(initialData);
    const [exchange, setExchange] = useState<string>("ALL");
    const [query, setQuery] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const pageSize = 6;

    const exchanges = ["ALL", "BSE", "NSE", "NFO", "MCX", "CRYPTO", "FOREX"];

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return data.filter((d) => {
            const matchExchange = exchange === "ALL" || d.exchange === exchange;
            const matchQuery =
                q === "" ||
                d.symbol.toLowerCase().includes(q) ||
                d.exchange.toLowerCase().includes(q);
            return matchExchange && matchQuery;
        });
    }, [data, exchange, query]);

    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const currentPage = Math.min(page, totalPages);

    const pageItems = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    function handleDelete(id: string) {
        setData((prev) => prev.filter((p) => p.id !== id));
    }

    function handleBuy(symbol: string) {
        // placeholder action
        alert(`Buy ${symbol}`);
    }

    function handleSell(symbol: string) {
        alert(`Sell ${symbol}`);
    }

    return (
        <div className="font-sans p-5 text-gray-800 dark:text-gray-200 bg-slate-100 dark:bg-gray-900">
            <div className="flex items-center gap-4 mb-3">
                <div className="font-semibold mr-3">Add Scripts</div>

                <select
                    value={exchange}
                    onChange={(e) => {
                        setExchange(e.target.value);
                        setPage(1);
                    }}
                    className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                >
                    {exchanges.map((ex) => (
                        <option key={ex} value={ex}>
                            {ex}
                        </option>
                    ))}
                </select>

                <input
                    placeholder="Search Script"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setPage(1);
                    }}
                    className="ml-auto p-2 w-80 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800"
                />
            </div>

            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="text-left p-3 bg-purple-600 text-white font-bold border-b-2 border-gray-200 dark:border-gray-700 text-sm w-56">Symbol</th>
                        <th className="text-left p-3 bg-purple-600 text-white font-bold border-b-2 border-gray-200 dark:border-gray-700 text-sm">LTP</th>
                        <th className="text-left p-3 bg-purple-600 text-white font-bold border-b-2 border-gray-200 dark:border-gray-700 text-sm">%</th>
                        <th className="text-left p-3 bg-purple-600 text-white font-bold border-b-2 border-gray-200 dark:border-gray-700 text-sm">BidQty</th>
                        <th className="text-left p-3 bg-purple-600 text-white font-bold border-b-2 border-gray-200 dark:border-gray-700 text-sm">Bid</th>
                        <th className="text-left p-3 bg-purple-600 text-white font-bold border-b-2 border-gray-200 dark:border-gray-700 text-sm">Ask</th>
                        <th className="text-left p-3 bg-purple-600 text-white font-bold border-b-2 border-gray-200 dark:border-gray-700 text-sm">AskQty</th>
                        <th className="text-left p-3 bg-purple-600 text-white font-bold border-b-2 border-gray-200 dark:border-gray-700 text-sm">Open</th>
                        <th className="text-left p-3 bg-purple-600 text-white font-bold border-b-2 border-gray-200 dark:border-gray-700 text-sm">High</th>
                        <th className="text-left p-3 bg-purple-600 text-white font-bold border-b-2 border-gray-200 dark:border-gray-700 text-sm">Low</th>
                        <th className="text-left p-3 bg-purple-600 text-white font-bold border-b-2 border-gray-200 dark:border-gray-700 text-sm">Close</th>
                    </tr>
                </thead>
                <tbody>
                    {pageItems.map((row) => (
                        <tr key={row.id}>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">
                                <div className="flex items-center justify-between">
                                    <div>{row.symbol}</div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleBuy(row.symbol)}
                                            className="p-1.5 rounded border-none cursor-pointer text-white font-bold bg-green-500"
                                            title="Buy"
                                        >
                                            B
                                        </button>
                                        <button
                                            onClick={() => handleSell(row.symbol)}
                                            className="p-1.5 rounded border-none cursor-pointer text-white font-bold bg-red-500"
                                            title="Sell"
                                        >
                                            S
                                        </button>
                                        <button
                                            onClick={() => handleDelete(row.id)}
                                            className="p-1.5 rounded border-none cursor-pointer text-black font-bold bg-yellow-400"
                                            title="Remove"
                                        >
                                            🗑
                                        </button>
                                    </div>
                                </div>
                            </td>

                            <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs bg-green-600 text-white text-center font-bold">{row.ltp}</td>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">{row.changePct}%</td>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">{row.bidQty}</td>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs bg-green-600 text-white text-center font-bold">{row.bid}</td>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs bg-green-600 text-white text-center font-bold">{row.ask}</td>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">{row.askQty}</td>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">{row.open}</td>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">{row.high}</td>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">{row.low}</td>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs">{row.close}</td>
                        </tr>
                    ))}

                    {pageItems.length === 0 && (
                        <tr>
                            <td className="p-3 border-b border-gray-200 dark:border-gray-700 text-xs" colSpan={11}>
                                No scripts found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="flex items-center justify-between mt-4">
                <div className="text-gray-500 dark:text-gray-400 text-xs">
                    Showing {Math.min((currentPage - 1) * pageSize + 1, total || 0)} to{" "}
                    {Math.min(currentPage * pageSize, total)} of {total} entries
                </div>

                <div>
                    <button
                        className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 cursor-pointer ml-1.5"
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }).map((_, idx) => {
                        const p = idx + 1;
                        return (
                            <button
                                key={p}
                                className={`p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 cursor-pointer ml-1.5 ${p === currentPage ? 'bg-purple-600 text-white border-purple-600' : ''}`}
                                onClick={() => setPage(p)}
                            >
                                {p}
                            </button>
                        );
                    })}

                    <button
                        className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 cursor-pointer ml-1.5"
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}