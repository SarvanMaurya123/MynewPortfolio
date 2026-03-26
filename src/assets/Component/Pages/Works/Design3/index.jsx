import { useState } from 'react';
import Overview from './Overview';
import Project from './Project';
import {
    FaHome,
    FaFolderOpen,
    FaCreditCard,
    FaFileInvoice,
    FaChartLine,
    FaBullseye,
    FaCog,
    FaSignOutAlt,
    FaSearch,
    FaBars,
    FaTimes,
    FaBell,
    FaUser,
} from 'react-icons/fa';

export default function Design3() {
    const [activeTab, setActiveTab] = useState('Overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [notifications, setNotifications] = useState(3);

    const sidebarItems = [
        { name: 'Overview', icon: FaHome, color: 'text-blue-500' },
        { name: 'Projects', icon: FaFolderOpen, color: 'text-purple-500' },
        { name: 'Transactions', icon: FaCreditCard, color: 'text-green-500' },
        { name: 'Bills', icon: FaFileInvoice, color: 'text-orange-500' },
        { name: 'Expenses', icon: FaChartLine, color: 'text-red-500' },
        { name: 'Goals', icon: FaBullseye, color: 'text-pink-500' },
        { name: 'Settings', icon: FaCog, color: 'text-gray-500' },
        { name: 'Logout', icon: FaSignOutAlt, color: 'text-red-600' }
    ];

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'w-64' : 'w-20'
                } bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 overflow-hidden shadow-xl`}>
                {/* Logo */}
                <div className="p-6 text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 border-b border-gray-700">
                    {isSidebarOpen ? '✨ SM' : '✨'}
                </div>

                {/* Navigation */}
                <nav className="mt-6 space-y-2 px-2">
                    {sidebarItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            className={`flex items-center w-full py-3 px-4 rounded-lg transition-all ${activeTab === item.name
                                ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg'
                                : 'text-gray-300 hover:bg-gray-700/50'
                                }`}
                            title={!isSidebarOpen ? item.name : ''}
                        >
                            <item.icon className={`text-lg flex-shrink-0 ${activeTab === item.name ? 'text-white' : item.color}`} />
                            {isSidebarOpen && <span className="ml-3 text-sm font-medium">{item.name}</span>}
                            {activeTab === item.name && isSidebarOpen && (
                                <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded">Active</span>
                            )}
                        </button>
                    ))}
                </nav>

                {/* Sidebar Toggle */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="absolute bottom-6 right-2 bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors text-gray-300 hover:text-white"
                    title="Toggle sidebar"
                >
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navigation Bar */}
                <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex justify-between items-center shadow-sm">
                    <div className="flex items-center gap-4">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{activeTab}</h1>
                        <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 flex-1 max-w-md">
                            <FaSearch className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search here..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="ml-3 bg-transparent outline-none text-gray-700 dark:text-gray-300 placeholder-gray-400 w-full"
                            />
                        </div>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <FaBell className="text-gray-600 dark:text-gray-400 text-xl cursor-pointer hover:text-gray-900 dark:hover:text-white" />
                            {notifications > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                    {notifications}
                                </span>
                            )}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow">
                            <FaUser className="text-white" />
                        </div>
                    </div>
                </div>

                {/* Mobile Search */}
                <div className="md:hidden bg-white dark:bg-gray-800 px-6 py-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2">
                        <FaSearch className="text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="ml-3 bg-transparent outline-none text-gray-700 dark:text-gray-300 placeholder-gray-400 w-full"
                        />
                    </div>
                </div>

                {/* Page Content */}
                <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900 p-6">
                    {activeTab === 'Overview' && <Overview />}
                    {activeTab === 'Projects' && <Project />}
                    {!['Overview', 'Projects'].includes(activeTab) && (
                        <div className="flex items-center justify-center h-full min-h-96">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🚀</div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{activeTab}</h2>
                                <p className="text-gray-600 dark:text-gray-400">Coming soon...</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
