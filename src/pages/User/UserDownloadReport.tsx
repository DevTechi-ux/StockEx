import { useState, useRef, useEffect } from 'react';

export default function DownloadReport() {
    const [getViaEmail, setGetViaEmail] = useState(false);
    const [selectedReport, setSelectedReport] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const reportTypes = [
        'Ledger Report',
        'Active Trade Report',
        'Brokerage Report',
        'Exchange Wise Report (I)',
        'Exchange Wise Report (II)',
        'TurnOver Report',
        'Summary Report',
        'Activity Log Report',
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelectReport = (report: string) => {
        setSelectedReport(report);
        setIsDropdownOpen(false);
    };

    const handleGenerateReport = () => {
        if (!selectedReport) {
            alert('Please select a report type');
            return;
        }
        // Handle report generation logic
        console.log('Generating report:', selectedReport);
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-2xl mx-auto bg-white rounded shadow p-8">
                {/* Header */}
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Generate Your Reports</h1>

                {/* Checkbox */}
                <div className="mb-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={getViaEmail}
                            onChange={(e) => setGetViaEmail(e.target.checked)}
                            className="w-4 h-4 rounded cursor-pointer"
                        />
                        <span className="text-gray-700 font-semibold">Get Report Via Email And on local storage</span>
                    </label>
                </div>

                {/* Select Report */}
                <div className="mb-8">
                    <label className="block text-gray-700 font-semibold mb-2">
                        Select Report <span className="text-red-600">*</span>
                    </label>
                    <div className="relative" ref={dropdownRef}>
                        <div
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full px-4 py-2 border border-blue-400 rounded focus:outline-none focus:border-blue-500 bg-white cursor-pointer flex justify-between items-center"
                        >
                            <span className={selectedReport ? 'text-gray-800' : 'text-gray-600'}>
                                {selectedReport || '-Select Report Type-'}
                            </span>
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>

                        {/* Dropdown Options Display */}
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 right-0 mt-0 border border-gray-300 rounded bg-white shadow-lg z-10">
                                <div className="px-4 py-2 text-gray-600 border-b">-Select Report Type-</div>
                                {reportTypes.map((report) => (
                                    <div
                                        key={report}
                                        onClick={() => handleSelectReport(report)}
                                        className={`px-4 py-2 cursor-pointer ${
                                            selectedReport === report
                                                ? 'bg-blue-600 text-white'
                                                : 'hover:bg-gray-50 text-gray-700'
                                        }`}
                                    >
                                        {report}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Generate Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleGenerateReport}
                        className="px-8 py-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition"
                    >
                        Generate Report
                    </button>
                </div>
            </div>
        </div>
    );
}
