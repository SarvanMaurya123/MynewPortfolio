// import Statistics from "./Chart";

import Statistics from "./Chart";

export default function Overview() {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-auto">
            {/* Total Balance */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Total Balance</h3>
                <p className="text-gray-500 mb-4">All Accounts</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">$240,399</span>
                    <div className="flex items-center">
                        <div className="mr-2">
                            <span className="block text-sm text-gray-500">Debit Card</span>
                            <span className="block text-sm">**** 2598</span>
                        </div>
                        <div className="bg-pink-500 text-white p-2 rounded-md">
                            <span>$25,000</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Goals */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Goals</h3>
                <p className="text-gray-500 mb-4">May, 2023</p>
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-gray-500">Target Achieved</p>
                        <p className="text-xl font-bold">$12,500</p>
                    </div>
                    <div>
                        <div className="text-center text-pink-500 font-bold">
                            <span className="block">12K</span>
                            <span className="text-gray-500 text-sm">Target vs Achievement</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upcoming Bill */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Upcoming Bill</h3>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-gray-500">Odoo - Monthly</p>
                            <p className="text-sm text-gray-400">Last Charge - May 14, 2022</p>
                        </div>
                        <div className="text-right">
                            <p className="text-pink-500 font-bold">$150</p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <p className="text-gray-500">M365 - Yearly</p>
                            <p className="text-sm text-gray-400">Last Charge - June 17, 2023</p>
                        </div>
                        <div className="text-right">
                            <p className="text-pink-500 font-bold">$559</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Transaction */}
            <div className="bg-white dark:text-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
                <h3 className="text-xl font-semibold">Recent Transaction</h3>
                <div className="mt-4">
                    <div className="flex justify-between">
                        <div>
                            <p className="text-gray-500">Profit</p>
                            <p className="text-sm text-gray-400">Gadget & Gear - 17 May 2023</p>
                        </div>
                        <div className="text-right">
                            <p className="text-pink-500 font-bold">$16000</p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <p className="text-gray-500">Grant</p>
                            <p className="text-sm text-gray-400">XL Fashions - 17 May 2023</p>
                        </div>
                        <div className="text-right">
                            <p className="text-pink-500 font-bold">$20000</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics */}

            <Statistics />

            {/* <Statistics /> */}
        </div>
    );
}
