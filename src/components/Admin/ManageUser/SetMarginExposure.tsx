import { useState } from 'react';

interface MarginExposureSection {
    name: string;
    enabled: boolean;
    equityTradingUnit: string;
    equityBuySell: string;
    equityMISBuyExposure: number;
    equityMISSellExposure: number;
    equityNormalBuyExposure: number;
    equityNormalSellExposure: number;
    equityBrokerType: string;
    equityBrokerValue: number;
}

interface NFOData extends MarginExposureSection {
    futuresTradingUnit: string;
    futuresBuySell: string;
    futuresMISBuyExposure: number;
    futuresMISSellExposure: number;
    futuresNormalBuyExposure: number;
    futuresNormalSellExposure: number;
    futuresBrokerType: string;
    futuresBrokerValue: number;
    optionsTradingUnit: string;
    optionsBuySell: string;
    optionsMISBuyExposure: number;
    optionsMISSellExposure: number;
    optionsNormalBuyExposure: number;
    optionsNormalSellExposure: number;
    optionsBrokerType: string;
    optionsBrokerValue: number;
    optionSellRequiredMargin: number;
}

interface SetMarginExposureProps {
    onBack: () => void;
    onSave: (data: any) => void;
}

export default function SetMarginExposure({ onBack, onSave }: SetMarginExposureProps) {
    const [bse, setBse] = useState<MarginExposureSection>({
        name: 'BSE',
        enabled: true,
        equityTradingUnit: 'Lot',
        equityBuySell: 'BOTH',
        equityMISBuyExposure: 1000,
        equityMISSellExposure: 1000,
        equityNormalBuyExposure: 1000,
        equityNormalSellExposure: 1000,
        equityBrokerType: 'FIXED',
        equityBrokerValue: 20,
    });

    const [nse, setNse] = useState<MarginExposureSection>({
        name: 'NSE',
        enabled: true,
        equityTradingUnit: 'Lot',
        equityBuySell: 'BOTH',
        equityMISBuyExposure: 1000,
        equityMISSellExposure: 1000,
        equityNormalBuyExposure: 1000,
        equityNormalSellExposure: 1000,
        equityBrokerType: 'FIXED',
        equityBrokerValue: 20,
    });

    const [nfo, setNfo] = useState<NFOData>({
        name: 'NFO',
        enabled: true,
        equityTradingUnit: 'All selected (2)',
        equityBuySell: 'BOTH',
        equityMISBuyExposure: 1000,
        equityMISSellExposure: 1000,
        equityNormalBuyExposure: 1000,
        equityNormalSellExposure: 1000,
        equityBrokerType: 'FIXED',
        equityBrokerValue: 20,
        futuresTradingUnit: 'All selected (2)',
        futuresBuySell: 'BOTH',
        futuresMISBuyExposure: 1000,
        futuresMISSellExposure: 1000,
        futuresNormalBuyExposure: 1000,
        futuresNormalSellExposure: 1000,
        futuresBrokerType: 'FIXED',
        futuresBrokerValue: 20,
        optionsTradingUnit: 'All selected (2)',
        optionsBuySell: 'BOTH',
        optionsMISBuyExposure: 1000,
        optionsMISSellExposure: 1000,
        optionsNormalBuyExposure: 1000,
        optionsNormalSellExposure: 1000,
        optionsBrokerType: 'FIXED',
        optionsBrokerValue: 20,
        optionSellRequiredMargin: 0,
    });

    const [mcx, setMcx] = useState<NFOData>({
        name: 'MCX',
        enabled: true,
        equityTradingUnit: 'All selected (2)',
        equityBuySell: 'BOTH',
        equityMISBuyExposure: 1000,
        equityMISSellExposure: 1000,
        equityNormalBuyExposure: 1000,
        equityNormalSellExposure: 1000,
        equityBrokerType: 'FIXED',
        equityBrokerValue: 20,
        futuresTradingUnit: 'All selected (2)',
        futuresBuySell: 'BOTH',
        futuresMISBuyExposure: 1000,
        futuresMISSellExposure: 1000,
        futuresNormalBuyExposure: 1000,
        futuresNormalSellExposure: 1000,
        futuresBrokerType: 'FIXED',
        futuresBrokerValue: 20,
        optionsTradingUnit: 'All selected (2)',
        optionsBuySell: 'BOTH',
        optionsMISBuyExposure: 1000,
        optionsMISSellExposure: 1000,
        optionsNormalBuyExposure: 1000,
        optionsNormalSellExposure: 1000,
        optionsBrokerType: 'FIXED',
        optionsBrokerValue: 20,
        optionSellRequiredMargin: 0,
    });

    const [crypto, setCrypto] = useState<MarginExposureSection>({
        name: 'CRYPTO',
        enabled: true,
        equityTradingUnit: 'Lot',
        equityBuySell: 'BOTH',
        equityMISBuyExposure: 1000,
        equityMISSellExposure: 1000,
        equityNormalBuyExposure: 1000,
        equityNormalSellExposure: 1000,
        equityBrokerType: 'FIXED',
        equityBrokerValue: 10,
    });

    const [forex, setForex] = useState<MarginExposureSection>({
        name: 'FOREX',
        enabled: true,
        equityTradingUnit: 'Lot',
        equityBuySell: 'BOTH',
        equityMISBuyExposure: 1000,
        equityMISSellExposure: 1000,
        equityNormalBuyExposure: 1000,
        equityNormalSellExposure: 1000,
        equityBrokerType: 'FIXED',
        equityBrokerValue: 10,
    });

    const handleSave = () => {
        const data = { bse, nse, nfo, mcx, crypto, forex };
        onSave(data);
        alert('Margin Exposure settings saved successfully');
    };

    const MarginSection = ({ title, data, setData, isSingleColumn = false }: any) => (
        <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-6">{title}</h3>
            <div className="flex justify-center mb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                    <div className={`w-12 h-6 rounded-full transition ${data.enabled ? 'bg-blue-500' : 'bg-gray-300'}`}
                        onClick={() => setData({ ...data, enabled: !data.enabled })}
                    >
                        <div className={`w-5 h-5 bg-white rounded-full transition transform ${data.enabled ? 'translate-x-6' : 'translate-x-1'}`} />
                    </div>
                    <span className="text-sm font-semibold">Disable</span>
                </label>
            </div>

            {!isSingleColumn ? (
                <div className="grid grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-2">Equity Trading Unit</label>
                            <input
                                type="text"
                                value={data.equityTradingUnit}
                                onChange={(e) => setData({ ...data, equityTradingUnit: e.target.value })}
                                placeholder="Lot"
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Equity Buy / Sell</label>
                            <select
                                value={data.equityBuySell}
                                onChange={(e) => setData({ ...data, equityBuySell: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            >
                                <option value="BOTH">BOTH</option>
                                <option value="BUY">BUY</option>
                                <option value="SELL">SELL</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Equity MIS Buy Exposure</label>
                            <input
                                type="number"
                                value={data.equityMISBuyExposure}
                                onChange={(e) => setData({ ...data, equityMISBuyExposure: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Equity MIS Sell Exposure</label>
                            <input
                                type="number"
                                value={data.equityMISSellExposure}
                                onChange={(e) => setData({ ...data, equityMISSellExposure: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Equity Normal Buy Exposure</label>
                            <input
                                type="number"
                                value={data.equityNormalBuyExposure}
                                onChange={(e) => setData({ ...data, equityNormalBuyExposure: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Equity Normal Sell Exposure</label>
                            <input
                                type="number"
                                value={data.equityNormalSellExposure}
                                onChange={(e) => setData({ ...data, equityNormalSellExposure: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Equity Broker Fixed / Percentage</label>
                            <select
                                value={data.equityBrokerType}
                                onChange={(e) => setData({ ...data, equityBrokerType: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            >
                                <option value="FIXED">FIXED</option>
                                <option value="PERCENTAGE">PERCENTAGE</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Equity Broker Fixed / Percentage Value</label>
                            <input
                                type="number"
                                value={data.equityBrokerValue}
                                onChange={(e) => setData({ ...data, equityBrokerValue: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                </div>
            ) : (
                // NFO and MCX sections with Futures and Options
                <div className="grid grid-cols-2 gap-8">
                    {/* Futures Column */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg mb-4">Futures</h4>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Future Trading Unit</label>
                            <input
                                type="text"
                                value={data.futuresTradingUnit}
                                onChange={(e) => setData({ ...data, futuresTradingUnit: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Futures Buy / Sell</label>
                            <select
                                value={data.futuresBuySell}
                                onChange={(e) => setData({ ...data, futuresBuySell: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            >
                                <option value="BOTH">BOTH</option>
                                <option value="BUY">BUY</option>
                                <option value="SELL">SELL</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Futures MIS Buy Exposure</label>
                            <input
                                type="number"
                                value={data.futuresMISBuyExposure}
                                onChange={(e) => setData({ ...data, futuresMISBuyExposure: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Futures MIS Sell Exposure</label>
                            <input
                                type="number"
                                value={data.futuresMISSellExposure}
                                onChange={(e) => setData({ ...data, futuresMISSellExposure: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Futures Normal Buy Exposure</label>
                            <input
                                type="number"
                                value={data.futuresNormalBuyExposure}
                                onChange={(e) => setData({ ...data, futuresNormalBuyExposure: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Futures Normal Sell Exposure</label>
                            <input
                                type="number"
                                value={data.futuresNormalSellExposure}
                                onChange={(e) => setData({ ...data, futuresNormalSellExposure: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Futures Broker Fixed / Percentage</label>
                            <select
                                value={data.futuresBrokerType}
                                onChange={(e) => setData({ ...data, futuresBrokerType: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            >
                                <option value="FIXED">FIXED</option>
                                <option value="PERCENTAGE">PERCENTAGE</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Futures Broker Fixed / Percentage Value</label>
                            <input
                                type="number"
                                value={data.futuresBrokerValue}
                                onChange={(e) => setData({ ...data, futuresBrokerValue: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>

                    {/* Options Column */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-lg mb-4">Options</h4>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Options Trading Unit</label>
                            <input
                                type="text"
                                value={data.optionsTradingUnit}
                                onChange={(e) => setData({ ...data, optionsTradingUnit: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Options Buy / Sell</label>
                            <select
                                value={data.optionsBuySell}
                                onChange={(e) => setData({ ...data, optionsBuySell: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            >
                                <option value="BOTH">BOTH</option>
                                <option value="BUY">BUY</option>
                                <option value="SELL">SELL</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Options MIS Buy Exposure</label>
                            <input
                                type="number"
                                value={data.optionsMISBuyExposure}
                                onChange={(e) => setData({ ...data, optionsMISBuyExposure: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Options MIS Sell Exposure</label>
                            <input
                                type="number"
                                value={data.optionsMISSellExposure}
                                onChange={(e) => setData({ ...data, optionsMISSellExposure: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Options Normal Buy Exposure</label>
                            <input
                                type="number"
                                value={data.optionsNormalBuyExposure}
                                onChange={(e) => setData({ ...data, optionsNormalBuyExposure: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Options Normal Sell Exposure</label>
                            <input
                                type="number"
                                value={data.optionsNormalSellExposure}
                                onChange={(e) => setData({ ...data, optionsNormalSellExposure: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Options Broker Fixed / Percentage</label>
                            <select
                                value={data.optionsBrokerType}
                                onChange={(e) => setData({ ...data, optionsBrokerType: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            >
                                <option value="FIXED">FIXED</option>
                                <option value="PERCENTAGE">PERCENTAGE</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Options Broker Fixed / Percentage Value</label>
                            <input
                                type="number"
                                value={data.optionsBrokerValue}
                                onChange={(e) => setData({ ...data, optionsBrokerValue: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2">Option Sell Required Margin</label>
                            <input
                                type="number"
                                value={data.optionSellRequiredMargin}
                                onChange={(e) => setData({ ...data, optionSellRequiredMargin: parseFloat(e.target.value) })}
                                className="w-full px-4 py-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-12">Set Margin Exposure For Paper Trading Only</h1>

            <div className="bg-white p-8 rounded">
                <MarginSection title="BSE" data={bse} setData={setBse} />
                <hr className="my-8" />

                <MarginSection title="NSE" data={nse} setData={setNse} />
                <hr className="my-8" />

                <MarginSection title="NFO" data={nfo} setData={setNfo} isSingleColumn={true} />
                <hr className="my-8" />

                <MarginSection title="MCX" data={mcx} setData={setMcx} isSingleColumn={true} />
                <hr className="my-8" />

                <MarginSection title="CRYPTO" data={crypto} setData={setCrypto} />
                <hr className="my-8" />

                <MarginSection title="FOREX" data={forex} setData={setForex} />

                <div className="flex justify-end gap-4 mt-12">
                    <button
                        onClick={onBack}
                        className="px-6 py-2 bg-gray-600 text-white rounded font-semibold hover:bg-gray-700"
                    >
                        Back
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
