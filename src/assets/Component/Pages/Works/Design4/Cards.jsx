import { useState } from 'react';
import { FaHeart, FaRegHeart, FaShoppingCart, FaStar, FaCheck } from 'react-icons/fa';

const PlantCards = () => {
    const plants = [
        { name: 'Calathea Plant', price: 399, rating: 4.8, reviews: 128, description: 'Beautiful striped foliage', imgSrc: '../design/dataflower2.png', badge: 'New' },
        { name: 'Fiddle Leaf Fig', price: 499, rating: 4.6, reviews: 95, description: 'Large statement plant', imgSrc: '../design/dataflower3.png', badge: 'Popular' },
        { name: 'Snake Plant', price: 299, rating: 4.9, reviews: 156, description: 'Low maintenance classic', imgSrc: '../design/dataflower.png', badge: 'Best Seller' },
        { name: 'Money Tree', price: 599, rating: 4.7, reviews: 88, description: 'Brings prosperity vibes', imgSrc: '../design/dataflower3.png', badge: 'Sale' },
        { name: 'Pothos Plant', price: 349, rating: 4.5, reviews: 112, description: 'Trailing beauty', imgSrc: '../design/dataflower2.png', badge: null },
        { name: 'Dracaena', price: 429, rating: 4.8, reviews: 103, description: 'Air purifying wonder', imgSrc: '../design/dataflower.png', badge: 'New' }
    ];

    const [wishlisted, setWishlisted] = useState(new Set());
    const [addedToCart, setAddedToCart] = useState(new Set());

    const toggleWishlist = (idx) => {
        const newSet = new Set(wishlisted);
        if (newSet.has(idx)) {
            newSet.delete(idx);
        } else {
            newSet.add(idx);
        }
        setWishlisted(newSet);
    };

    const toggleCart = (idx) => {
        const newSet = new Set(addedToCart);
        if (newSet.has(idx)) {
            newSet.delete(idx);
        } else {
            newSet.add(idx);
        }
        setAddedToCart(newSet);
    };

    const getBadgeColor = (badge) => {
        switch (badge) {
            case 'New': return 'from-blue-500 to-cyan-500';
            case 'Popular': return 'from-purple-500 to-pink-500';
            case 'Best Seller': return 'from-orange-500 to-red-500';
            case 'Sale': return 'from-green-500 to-emerald-500';
            default: return 'from-gray-500 to-gray-600';
        }
    };

    return (<>
        <h2 className="text-4xl font-bold dark:text-white mb-12">Featured Products</h2>
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {plants.map((plant, index) => (
                    <div
                        key={index}
                        className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-pink-400 dark:hover:border-pink-400"
                    >
                        {/* Image Container */}
                        <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                            <img
                                src={plant.imgSrc}
                                alt={plant.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />

                            {/* Badge */}
                            {plant.badge && (
                                <span className={`absolute top-4 right-4 bg-gradient-to-r ${getBadgeColor(plant.badge)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                                    {plant.badge}
                                </span>
                            )}

                            {/* Wishlist Button */}
                            <button
                                onClick={() => toggleWishlist(index)}
                                className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 hover:bg-red-500 hover:text-white transition-all rounded-full p-2 shadow-lg"
                            >
                                {wishlisted.has(index) ? (
                                    <FaHeart className="text-red-500" />
                                ) : (
                                    <FaRegHeart className="text-gray-600 dark:text-gray-400" />
                                )}
                            </button>

                            {/* Quick View Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <button className="bg-white text-gray-900 font-bold px-6 py-2 rounded-lg hover:bg-gray-100 transition-all transform -translate-y-4 group-hover:translate-y-0">
                                    Quick View
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            {/* Name & Type */}
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate">{plant.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{plant.description}</p>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={`text-xs ${i < Math.floor(plant.rating)
                                                    ? 'text-yellow-400'
                                                    : i < plant.rating
                                                        ? 'text-yellow-400 opacity-50'
                                                        : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-gray-600 dark:text-gray-400">
                                    {plant.rating} ({plant.reviews})
                                </span>
                            </div>

                            {/* Price */}
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Rs. {plant.price}/-
                                </span>
                                <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full font-semibold">
                                    In Stock
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3">
                                <button
                                    onClick={() => toggleCart(index)}
                                    className={`flex-1 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${addedToCart.has(index)
                                            ? 'bg-green-500 text-white hover:bg-green-600'
                                            : 'bg-gradient-to-r from-pink-500 to-green-500 text-white hover:shadow-lg hover:shadow-pink-500/50'
                                        }`}
                                >
                                    {addedToCart.has(index) ? (
                                        <>
                                            <FaCheck /> Added
                                        </>
                                    ) : (
                                        <>
                                            <FaShoppingCart /> Add
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
            <button className="px-12 py-3 bg-gradient-to-r from-pink-500 to-green-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-pink-500/50 transition-all hover:scale-105">
                Load More Products
            </button>
        </div>
    </>);
};

export default PlantCards;
