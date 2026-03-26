import Statistics from "./Chart";
import { FaArrowUp, FaArrowDown, FaCreditCard, FaExchangeAlt, FaBullseye } from "react-icons/fa";

export default function Overview() {
    const StatCard = ({ title, subtitle, value, secondary, icon: Icon, trend, color }) => (
        <div className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all`}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{title}</p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">{subtitle}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
                    <Icon className="text-white text-lg" />
                </div>
            </div>
            <div className="flex justify-between items-end">
                <div>
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{value}</span>
                    {secondary && <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{secondary}</p>}
                </div>
                {trend && (
                    <div className={`flex items-center gap-1 text-sm font-semibold ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {trend > 0 ? <FaArrowUp /> : <FaArrowDown />}
                        {Math.abs(trend)}%
                    </div>
                )}
            </div>
        </div>
    );

    const TransactionItem = ({ description, date, amount, type }) => (
        <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 px-2 rounded transition-colors">
            <div>
                <p className="font-medium text-gray-900 dark:text-white text-sm">{description}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
            </div>
            <div className={`text-sm font-bold ${type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {type === 'income' ? '+' : '-'}${amount}
            </div>
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <StatCard
                    title="Total Balance"
                    subtitle="All Accounts"
                    value="$240,399"
                    secondary="Debit Card • **** 2598"
                    icon={FaCreditCard}
                    trend={12}
                    color="from-blue-500 to-blue-600"
                />
                <StatCard
                    title="Goals"
                    subtitle="May, 2024"
                    value="$12,500"
                    secondary="Target Achieved"
                    icon={FaBullseye}
                    trend={8}
                    color="from-purple-500 to-purple-600"
                />
                <StatCard
                    title="Upcoming Bill"
                    subtitle="Monthly"
                    value="$150"
                    secondary="Odoo - Due Soon"
                    icon={FaBullseye}
                    trend={-3}
                    color="from-orange-500 to-orange-600"
                />
                <StatCard
                    title="Monthly Spend"
                    subtitle="This Month"
                    value="$3,250"
                    secondary="vs $2,890 last month"
                    icon={FaExchangeAlt}
                    trend={5}
                    color="from-pink-500 to-pink-600"
                />
            </div>

            {/* Recent Transactions & Statistics Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Transactions */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Recent Transactions</h3>
                        <button className="text-sm text-pink-600 dark:text-pink-400 hover:text-pink-700 font-semibold">View All →</button>
                    </div>

                    <div className="space-y-2">
                        <TransactionItem description="Profit" date="Gadget & Gear • 17 May 2024" amount="16000" type="income" />
                        <TransactionItem description="Grant" date="XL Fashions • 17 May 2024" amount="20000" type="income" />
                        <TransactionItem description="Shopping" date="Amazon • 16 May 2024" amount="250" type="expense" />
                        <TransactionItem description="Utilities" date="Electric Company • 15 May 2024" amount="89" type="expense" />
                        <TransactionItem description="Subscription" date="Netflix • 14 May 2024" amount="16" type="expense" />
                    </div>
                </div>

                {/* Upcoming Bills */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Bills</h3>

                    <div className="space-y-3">
                        <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg border border-orange-200 dark:border-orange-800">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Odoo</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Monthly • Due in 3 days</p>
                                </div>
                                <span className="text-sm font-bold text-orange-600 dark:text-orange-400">$150</span>
                            </div>
                        </div>

                        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white text-sm">M365</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Yearly • Due in 45 days</p>
                                </div>
                                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">$559</span>
                            </div>
                        </div>

                        <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-lg border border-pink-200 dark:border-pink-800">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="font-semibold text-gray-900 dark:text-white text-sm">Adobe CC</p>
                                    <p className="text-xs text-gray-600 dark:text-gray-400">Monthly • Due in 8 days</p>
                                </div>
                                <span className="text-sm font-bold text-pink-600 dark:text-pink-400">$79</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Statistics Chart */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Spending Trend</h3>
                <Statistics />
            </div>
        </div>
    );
}
