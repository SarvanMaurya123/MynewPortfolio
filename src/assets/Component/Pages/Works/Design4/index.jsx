import PlantCards from "./Cards";
import { FaSearch, FaSort, FaFilter, FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const Design4 = () => {
    const [sortBy, setSortBy] = useState('popular');
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All Plants', 'Indoor', 'Outdoor', 'Low Light', 'Air Purifying'];
    const [activeCategory, setActiveCategory] = useState('All Plants');

    const sortOptions = [
        { value: 'popular', label: 'Most Popular' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' },
        { value: 'newest', label: 'Newest' },
        { value: 'rating', label: 'Highest Rated' }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-96 md:min-h-screen flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(../design/data.jpg)',
                        backgroundAttachment: 'fixed'
                    }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 w-full px-6 md:px-16 lg:px-32 py-16 md:py-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Hero Text */}
                        <div className="flex flex-col justify-center space-y-6">
                            <div>
                                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                                    Breathe Natural
                                </h1>
                                <p className="text-lg md:text-xl text-gray-200 max-w-lg leading-relaxed">
                                    Transform your space with our curated collection of premium indoor and outdoor plants. Each plant is carefully selected and packaged to ensure it arrives in perfect condition.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-green-500 text-white font-bold rounded-lg hover:shadow-lg shadow-pink-500/50 transition-all hover:scale-105">
                                    Shop Collection
                                </button>
                                <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Featured Product Card */}
                        <div className="flex justify-center items-center">
                            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/30 p-8 w-full max-w-sm hover:border-white/50 transition-all">
                                <div className="relative mb-6">
                                    <img src="../design/dataflower.png" alt="Calathea Plant" className="w-full h-64 object-contain" />
                                    <span className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                        New
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">Calathea Plant</h3>
                                <p className="text-sm text-gray-200 mb-4">Trendy House Plant</p>
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-3xl font-bold text-white">Rs. 599/-</span>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-yellow-400">⭐</span>
                                        ))}
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-all">
                                    Shop Now →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Shopping Section */}
            <section className="px-6 md:px-16 lg:px-32 py-16 bg-white dark:bg-gray-900">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h2 className="text-4xl font-bold dark:text-white mb-2 text-black">Our Collection</h2>
                        <p className="text-gray-600 dark:text-gray-400">Discover our premium selection of plants</p>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        {/* Search */}
                        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-2 flex-1 md:flex-initial">
                            <FaSearch className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search plants..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="ml-3 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 w-full"
                            />
                        </div>

                        {/* Sort */}
                        <div className="relative">
                            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white font-semibold whitespace-nowrap">
                                <FaSort />
                                Sort
                                <FaChevronDown className="text-xs" />
                            </button>
                            <div className="absolute right-0 mt-2 hidden group-hover:block w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-10 p-2">
                                {sortOptions.map(opt => (
                                    <button key={opt.value} className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded text-sm text-gray-900 dark:text-white">
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white font-semibold"
                        >
                            <FaFilter />
                            Filter
                        </button>
                    </div>
                </div>

                {/* Filters Panel */}
                {showFilters && (
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Category Filter */}
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Category</h4>
                                <div className="space-y-2">
                                    {categories.map(cat => (
                                        <label key={cat} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={activeCategory === cat}
                                                onChange={() => setActiveCategory(cat)}
                                                className="w-4 h-4 rounded accent-pink-500"
                                            />
                                            <span className="text-gray-700 dark:text-gray-300 text-sm">{cat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Price Range</h4>
                                <div className="space-y-3">
                                    <div>
                                        <input
                                            type="range"
                                            min="0"
                                            max="1000"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                            className="w-full accent-pink-500"
                                        />
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                        <span>Rs. {priceRange[0]}</span>
                                        <span>Rs. {priceRange[1]}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Rating Filter */}
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-3">Rating</h4>
                                <div className="space-y-2">
                                    {[5, 4, 3, 2, 1].map(rating => (
                                        <label key={rating} className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded accent-pink-500" />
                                            <span className="text-yellow-400">{'⭐'.repeat(rating)}</span>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">& Up</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors font-semibold">
                            Apply Filters
                        </button>
                    </div>
                )}

                {/* Category Tabs */}
                <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${activeCategory === cat
                                ? 'bg-gradient-to-r from-pink-500 to-green-500 text-white shadow-lg'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Products Section */}
            <section className="px-6 md:px-16 lg:px-32 pb-16 bg-white dark:bg-gray-900">
                <PlantCards />
            </section>

            {/* Benefits Section */}
            <section className="px-6 md:px-16 lg:px-32 py-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                <h2 className="text-3xl font-bold text-center dark:text-white mb-12">Why Shop With Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: '🌿', title: 'Premium Quality', desc: 'Carefully selected healthy plants' },
                        { icon: '📦', title: 'Safe Delivery', desc: 'Packaged with care for safe arrival' },
                        { icon: '💚', title: 'Plant Care Guide', desc: 'Free guide included with each plant' }
                    ].map((benefit, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-5xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-bold dark:text-white mb-2">{benefit.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Design4;
