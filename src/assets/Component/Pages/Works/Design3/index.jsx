import { useState } from 'react';
import Overview from './Overview';
import Projects from './Project';

export default function Design3() {
    const [activeTab, setActiveTab] = useState('Overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const sidebarItems = [
        { name: 'Overview', icon: '🏠' },
        { name: 'Projects', icon: '📁' },
        { name: 'Transactions', icon: '💳' },
        { name: 'Bills', icon: '🧾' },
        { name: 'Expenses', icon: '💸' },
        { name: 'Goals', icon: '🎯' },
        { name: 'Settings', icon: '⚙️' },
        { name: 'Logout', icon: '🚪' }
    ];

    return (
        <div className="flex h-full">
            {/* Sidebar */}
            {isSidebarOpen && (
                <div className="w-64 bg-gray-800 text-white relative">
                    <div className="p-4 text-xl text-center font-bold">&#60;SM/&#62;</div>
                    <nav className="mt-6">
                        {sidebarItems.map(item => (
                            <button
                                key={item.name}
                                className={`flex items-center p-3 w-full hover:bg-gray-700 ${activeTab === item.name ? 'bg-pink-500' : ''}`}
                                onClick={() => setActiveTab(item.name)}
                            >
                                <span className="mr-3">{item.icon}</span>
                                {item.name}
                            </button>
                        ))}
                    </nav>
                    <button
                        className="absolute top-2 right-2 text-xl"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        ❌ {/* Close icon (X) */}
                    </button>
                </div>
            )}
            {!isSidebarOpen && (
                <button
                    className="text-gray-800 bg-white p-2 text-2xl h-10 rounded-md m-2"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    ☰
                </button>
            )}

            {/* Main Content */}
            <div className={`flex-grow bg-gray-100 p-1 ${isSidebarOpen ? '' : 'ml-0'}`}>
                {/* Top navigation */}
                <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-semibold">{activeTab}</div>
                    <input
                        type="text"
                        placeholder="Search here"
                        className="border rounded-lg p-2"
                    />
                </div>

                {/* Render Content Based on Active Tab */}
                {activeTab === 'Overview' && <Overview />}
                {activeTab === 'Projects' && <Projects />}
                {/* Uncomment and add more components as needed */}
                {/* {activeTab === 'Transactions' && <Transactions />} */}
                {/* {activeTab === 'Bills' && <Bills />} */}
                {/* {activeTab === 'Expenses' && <Expenses />} */}
                {/* {activeTab === 'Goals' && <Goals />} */}
                {/* {activeTab === 'Settings' && <Settings />} */}
            </div>
        </div>
    );
}
