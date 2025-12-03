import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function ManualActiveTrade() {
    const [formData, setFormData] = useState({
        watchlist: '',
        productType: '',
        script: '',
        selectUser: '',
        lastPrice: '',
        position: '',
        unit: '',
        qty: '',
        entryDate: '',
        exitDate: '',
        entryPrice: '',
        exitPrice: '',
        profitOrLoss: '',
        orderStatus: '',
    });

    const watchlistOptions = ['NSE', 'NFO', 'MCX', 'CRYPTO'];
    const productTypeOptions = ['Normal', 'MIS'];
    const scriptOptions = ['HFCL/NSE', 'MRF/NSE'];
    const positionOptions = ['-Select-', 'Long', 'Short'];
    const unitOptions = ['-Select-', '1', '5', '10', '50', '100'];
    const orderStatusOptions = ['-Select-', 'Open', 'Closed', 'Pending', 'Cancelled'];

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleCreateOrder = () => {
        // Handle create order logic
        console.log('Creating order with data:', formData);
    };

    const handleRefresh = () => {
        // Refresh last price
        setFormData((prev) => ({
            ...prev,
            lastPrice: Math.random().toFixed(2),
        }));
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Title */}
            <h1 className="text-2xl font-bold mb-8 text-gray-800">Manual Trade</h1>

            {/* Form */}
            <div className="bg-white rounded shadow p-8">
                {/* First Row */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {/* Watchlist */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Watchlist</label>
                        <select
                            value={formData.watchlist}
                            onChange={(e) => handleInputChange('watchlist', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        >
                            <option value="">-Select-</option>
                            {watchlistOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Product Type */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Product Type</label>
                        <select
                            value={formData.productType}
                            onChange={(e) => handleInputChange('productType', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        >
                            <option value="">-Select-</option>
                            {productTypeOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Script */}
                    <div className="flex gap-2">
                        <div className="flex-1">
                            <label className="block text-gray-700 font-semibold mb-2">Script</label>
                            <select
                                value={formData.script}
                                onChange={(e) => handleInputChange('script', e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            >
                                <option value="">-Select-</option>
                                {scriptOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button className="mt-8 bg-teal-500 text-white rounded px-4 py-2 hover:bg-teal-600 flex items-center gap-2">
                            <Plus size={18} />
                        </button>
                    </div>
                </div>

                {/* Second Row */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {/* Select User */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Select User</label>
                        <input
                            type="text"
                            value={formData.selectUser}
                            onChange={(e) => handleInputChange('selectUser', e.target.value)}
                            placeholder=""
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Last Price */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Last price</label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={formData.lastPrice}
                                onChange={(e) => handleInputChange('lastPrice', e.target.value)}
                                placeholder=""
                                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            />
                            <button
                                onClick={handleRefresh}
                                className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                            >
                                ↻
                            </button>
                        </div>
                    </div>

                    {/* Position */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">position</label>
                        <select
                            value={formData.position}
                            onChange={(e) => handleInputChange('position', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        >
                            {positionOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Third Row */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {/* Unit */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Unit</label>
                        <select
                            value={formData.unit}
                            onChange={(e) => handleInputChange('unit', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        >
                            {unitOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Qty */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Qty</label>
                        <input
                            type="number"
                            value={formData.qty}
                            onChange={(e) => handleInputChange('qty', e.target.value)}
                            placeholder=""
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Entry Date */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Entry Date</label>
                        <input
                            type="datetime-local"
                            value={formData.entryDate}
                            onChange={(e) => handleInputChange('entryDate', e.target.value)}
                            placeholder="dd-mm-yyyy --:-- --"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Fourth Row */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {/* Exit Date */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Exit Date</label>
                        <input
                            type="datetime-local"
                            value={formData.exitDate}
                            onChange={(e) => handleInputChange('exitDate', e.target.value)}
                            placeholder="dd-mm-yyyy --:-- --"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Entry Price */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Entry price</label>
                        <input
                            type="number"
                            value={formData.entryPrice}
                            onChange={(e) => handleInputChange('entryPrice', e.target.value)}
                            placeholder=""
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Order Status */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Order Status</label>
                        <select
                            value={formData.orderStatus}
                            onChange={(e) => handleInputChange('orderStatus', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        >
                            {orderStatusOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Fifth Row */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {/* Exit Price */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Exit price</label>
                        <input
                            type="number"
                            value={formData.exitPrice}
                            onChange={(e) => handleInputChange('exitPrice', e.target.value)}
                            placeholder=""
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Profit Or Loss */}
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Profit Or Loss</label>
                        <input
                            type="number"
                            value={formData.profitOrLoss}
                            onChange={(e) => handleInputChange('profitOrLoss', e.target.value)}
                            placeholder=""
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Create Order Button */}
                <div>
                    <button
                        onClick={handleCreateOrder}
                        className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700"
                    >
                        Create Order
                    </button>
                </div>
            </div>
        </div>
    );
}
