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

const styles = {
    container: {
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: 20,
        color: "#222",
    } as React.CSSProperties,
    headerRow: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 12,
    } as React.CSSProperties,
    title: {
        fontWeight: 600,
        marginRight: 12,
    } as React.CSSProperties,
    select: {
        padding: "8px 10px",
        borderRadius: 4,
        border: "1px solid #ccc",
        background: "#fff",
    } as React.CSSProperties,
    search: {
        marginLeft: "auto",
        padding: "8px 10px",
        width: 320,
        borderRadius: 4,
        border: "1px solid #ccc",
    } as React.CSSProperties,
    table: {
        width: "100%",
        borderCollapse: "collapse",
    } as React.CSSProperties,
    th: {
        textAlign: "left",
        padding: "12px 8px",
        background: "#4b28ff", // purple header
        color: "#fff",
        fontWeight: 700,
        borderBottom: "2px solid #eee",
        fontSize: 14,
    } as React.CSSProperties,
    td: {
        padding: "12px 8px",
        borderBottom: "1px solid #eee",
        fontSize: 13,
    } as React.CSSProperties,
    symbolCell: {
        width: 220,
    } as React.CSSProperties,
    greenCell: {
        background: "#0d7d2f",
        color: "#fff",
        textAlign: "center" as const,
        fontWeight: 700,
    } as React.CSSProperties,
    actionsContainer: {
        display: "flex",
        gap: 8,
    } as React.CSSProperties,
    button: {
        padding: "6px 10px",
        borderRadius: 6,
        border: "none",
        cursor: "pointer",
        color: "#fff",
        fontWeight: 700,
    } as React.CSSProperties,
    btnBuy: {
        background: "#2bb673",
    } as React.CSSProperties,
    btnSell: {
        background: "#e24d4d",
    } as React.CSSProperties,
    btnDelete: {
        background: "#f0ad4e",
        color: "#000",
    } as React.CSSProperties,
    footer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 16,
    } as React.CSSProperties,
    paginationBtn: {
        padding: "8px 12px",
        borderRadius: 6,
        border: "1px solid #ddd",
        background: "#fff",
        cursor: "pointer",
        marginLeft: 6,
    } as React.CSSProperties,
    activePage: {
        background: "#4b28ff",
        color: "#fff",
        borderColor: "#4b28ff",
    } as React.CSSProperties,
    smallMuted: { color: "#666", fontSize: 13 },
} as const;

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
        <div style={styles.container}>
            <div style={styles.headerRow}>
                <div style={styles.title}>Add Scripts</div>

                <select
                    value={exchange}
                    onChange={(e) => {
                        setExchange(e.target.value);
                        setPage(1);
                    }}
                    style={styles.select}
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
                    style={styles.search}
                />
            </div>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={{ ...styles.th, ...styles.symbolCell }}>Symbol</th>
                        <th style={styles.th}>LTP</th>
                        <th style={styles.th}>%</th>
                        <th style={styles.th}>BidQty</th>
                        <th style={styles.th}>Bid</th>
                        <th style={styles.th}>Ask</th>
                        <th style={styles.th}>AskQty</th>
                        <th style={styles.th}>Open</th>
                        <th style={styles.th}>High</th>
                        <th style={styles.th}>Low</th>
                        <th style={styles.th}>Close</th>
                    </tr>
                </thead>
                <tbody>
                    {pageItems.map((row) => (
                        <tr key={row.id}>
                            <td style={{ ...styles.td, ...styles.symbolCell }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div>{row.symbol}</div>
                                    <div style={styles.actionsContainer}>
                                        <button
                                            onClick={() => handleBuy(row.symbol)}
                                            style={{ ...styles.button, ...styles.btnBuy }}
                                            title="Buy"
                                        >
                                            B
                                        </button>
                                        <button
                                            onClick={() => handleSell(row.symbol)}
                                            style={{ ...styles.button, ...styles.btnSell }}
                                            title="Sell"
                                        >
                                            S
                                        </button>
                                        <button
                                            onClick={() => handleDelete(row.id)}
                                            style={{ ...styles.button, ...styles.btnDelete }}
                                            title="Remove"
                                        >
                                            🗑
                                        </button>
                                    </div>
                                </div>
                            </td>

                            <td style={{ ...styles.td, ...styles.greenCell }}>{row.ltp}</td>
                            <td style={styles.td}>{row.changePct}%</td>
                            <td style={styles.td}>{row.bidQty}</td>
                            <td style={{ ...styles.td, ...styles.greenCell }}>{row.bid}</td>
                            <td style={{ ...styles.td, ...styles.greenCell }}>{row.ask}</td>
                            <td style={styles.td}>{row.askQty}</td>
                            <td style={styles.td}>{row.open}</td>
                            <td style={styles.td}>{row.high}</td>
                            <td style={styles.td}>{row.low}</td>
                            <td style={styles.td}>{row.close}</td>
                        </tr>
                    ))}

                    {pageItems.length === 0 && (
                        <tr>
                            <td style={styles.td} colSpan={11}>
                                No scripts found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div style={styles.footer}>
                <div style={styles.smallMuted}>
                    Showing {Math.min((currentPage - 1) * pageSize + 1, total || 0)} to{" "}
                    {Math.min(currentPage * pageSize, total)} of {total} entries
                </div>

                <div>
                    <button
                        style={styles.paginationBtn}
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
                                style={{
                                    ...styles.paginationBtn,
                                    ...(p === currentPage ? styles.activePage : {}),
                                }}
                                onClick={() => setPage(p)}
                            >
                                {p}
                            </button>
                        );
                    })}

                    <button
                        style={styles.paginationBtn}
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