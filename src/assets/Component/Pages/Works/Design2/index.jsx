import { FaCheck, FaStar, FaChevronRight, FaTimes, FaBolt, FaLock, FaSmile } from "react-icons/fa";
import { useState } from "react";

const Design2 = () => {
    const [billingPeriod, setBillingPeriod] = useState('monthly');
    const [expandedFeature, setExpandedFeature] = useState(null);

    const features = [
        {
            title: "Lightning Fast",
            desc: "Optimized performance for seamless collaboration",
            icon: FaBolt,
            gradient: "from-yellow-400 to-orange-500"
        },
        {
            title: "Enterprise Secure",
            desc: "Bank-level security and privacy protection",
            icon: FaLock,
            gradient: "from-blue-400 to-purple-500"
        },
        {
            title: "Easy to Use",
            desc: "Intuitive interface that anyone can master",
            icon: FaSmile,
            gradient: "from-pink-400 to-red-500"
        }
    ];

    const pricingPlans = [
        { name: "Starter", price: 29, yearly: 290, features: ["Up to 5 projects", "Basic support", "2GB storage"] },
        { name: "Professional", price: 79, yearly: 790, features: ["Unlimited projects", "Priority support", "100GB storage", "Team collaboration", "Advanced analytics"], popular: true },
        { name: "Enterprise", price: 199, yearly: 1990, features: ["Everything in Pro", "Custom integrations", "Dedicated support", "Unlimited storage", "SSO & SAML"] }
    ];

    const comparisonFeatures = [
        { name: "Projects", starter: "5", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Storage", starter: "2GB", pro: "100GB", enterprise: "Unlimited" },
        { name: "Team Members", starter: "Limit", pro: "Up to 50", enterprise: "Unlimited" },
        { name: "API Access", starter: false, pro: true, enterprise: true },
        { name: "Custom Domain", starter: false, pro: true, enterprise: true },
        { name: "Priority Support", starter: false, pro: true, enterprise: true }
    ];

    return (<>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 md:px-16 lg:px-32 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-black">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 text-sm font-semibold">🚀 Premium Product Launch</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                        Launch Your Product <br /><span className="bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">Effortlessly</span>
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Create stunning product showcases with our comprehensive UI kit. Impress your audience and convert visitors into customers.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-pink-500/50 transition-all flex items-center gap-2">
                            Get UI Kit <FaChevronRight className="text-sm" />
                        </button>
                        <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-lg transition-all">
                            View Demo
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
                    <img src="../design/Group.png" alt="Product Showcase" className="w-full h-auto rounded-3xl shadow-2xl border border-white/10 transform hover:scale-105 transition-transform" />
                </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-16 lg:px-32 bg-slate-50 dark:bg-slate-900">
            <h2 className="text-4xl font-bold text-center mb-16 dark:text-white text-black">Why Choose Our UI Kit?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <div key={idx} className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 text-black dark:border-gray-700 hover:shadow-xl transition-all">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-125 transition-transform`}>
                            <feature.icon className="text-white text-xl" />
                        </div>
                        <h3 className="text-xl font-bold dark:text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-20 px-4 md:px-16 lg:px-32">
            <div className="space-y-20">
                {[1, 2, 3, 4].map((section, idx) => (
                    <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
                        <div className="flex-1 space-y-4">
                            <div className="inline-block px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-sm font-semibold">
                                Feature {section}
                            </div>
                            <h3 className="text-3xl font-bold dark:text-white">Professional Components</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                All components are meticulously designed and optimized for performance. Fully responsive, accessible, and production-ready.
                            </p>
                            <ul className="space-y-3 pt-4">
                                {["Complete customization", "Dark mode support", "Smooth animations"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <FaCheck className="text-green-500 text-lg" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex-1">
                            <img src={`../design/Group${section === 1 ? 10 : section === 2 ? 12 : 14}.png`} alt="Feature" className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform" />
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 md:px-16 lg:px-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-black text-black dark:text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4 dark:text-white">Flexible Pricing Plans</h2>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Choose the perfect plan for your needs</p>

                {/* Billing Toggle */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex rounded-full bg-gray-200 dark:bg-gray-800 p-1">
                        <button
                            onClick={() => setBillingPeriod('monthly')}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${billingPeriod === 'monthly'
                                ? 'bg-white dark:bg-gray-700 text-pink-600 shadow-lg'
                                : 'text-gray-600 dark:text-gray-400'
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingPeriod('yearly')}
                            className={`px-6 py-2 rounded-full font-medium transition-all relative ${billingPeriod === 'yearly'
                                ? 'bg-white dark:bg-gray-700 text-pink-600 shadow-lg'
                                : 'text-gray-600 dark:text-gray-400'
                                }`}
                        >
                            Yearly
                            <span className="absolute -top-2 -right-8 text-xs bg-green-500 text-white px-2 py-1 rounded-full font-bold">Save 20%</span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black dark:text-white">
                    {pricingPlans.map((plan, idx) => (
                        <div key={idx} className={`relative rounded-2xl border transition-all hover:shadow-xl ${plan.popular
                            ? 'border-pink-500 bg-gradient-to-br from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 transform scale-105'
                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800'
                            } p-8`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">POPULAR</span>
                                </div>
                            )}
                            <h3 className="text-2xl font-bold dark:text-white mb-2">{plan.name}</h3>
                            <div className="mb-6">
                                <span className="text-4xl font-bold dark:text-white">
                                    ${billingPeriod === 'monthly' ? plan.price : plan.yearly}
                                </span>
                                <span className="text-gray-600 dark:text-gray-400">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                            </div>
                            <button className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${plan.popular
                                ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:shadow-lg'
                                : 'border-2 border-gray-300 dark:border-gray-600 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}>
                                Get Started
                            </button>
                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 dark:text-gray-300">
                                        <FaCheck className="text-green-500 text-lg" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-4 md:px-16 lg:px-32 bg-white dark:bg-slate-900 text-black dark:text-white">
            <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Feature Comparison</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                            <th className="text-left py-4 px-6 font-bold dark:text-white">Feature</th>
                            <th className="text-center py-4 px-6 font-bold text-gray-600 dark:text-gray-400">Starter</th>
                            <th className="text-center py-4 px-6 font-bold bg-gradient-to-r from-pink-100 to-blue-100 dark:from-pink-900/20 dark:to-blue-900/20 dark:text-white">Professional</th>
                            <th className="text-center py-4 px-6 font-bold text-gray-600 dark:text-gray-400">Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonFeatures.map((feature, idx) => (
                            <tr key={idx} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <td className="py-4 px-6 font-medium dark:text-white">{feature.name}</td>
                                <td className="py-4 px-6 text-center dark:text-gray-400">
                                    {typeof feature.starter === 'boolean' ? (
                                        feature.starter ? <FaCheck className="text-green-500 mx-auto" /> : <FaTimes className="text-gray-400 mx-auto" />
                                    ) : feature.starter}
                                </td>
                                <td className="py-4 px-6 text-center bg-gradient-to-r from-pink-50 to-blue-50 dark:from-pink-900/20 dark:to-blue-900/20 dark:text-white font-semibold">
                                    {typeof feature.pro === 'boolean' ? (
                                        feature.pro ? <FaCheck className="text-green-500 mx-auto" /> : <FaTimes className="text-gray-400 mx-auto" />
                                    ) : feature.pro}
                                </td>
                                <td className="py-4 px-6 text-center dark:text-gray-400">
                                    {typeof feature.enterprise === 'boolean' ? (
                                        feature.enterprise ? <FaCheck className="text-green-500 mx-auto" /> : <FaTimes className="text-gray-400 mx-auto" />
                                    ) : feature.enterprise}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 md:px-16 lg:px-32 bg-slate-50 dark:bg-slate-900">
            <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Loved by Creators</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((_, idx) => (
                    <div key={idx} className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
                        <div className="flex gap-1 mb-4">
                            {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            "This UI kit has transformed the way we approach design. The components are beautiful and incredibly flexible."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-blue-500"></div>
                            <div>
                                <p className="font-semibold dark:text-white">User {idx + 1}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Designer & Developer</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-pink-500 to-blue-500">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Launch Your Product?</h2>
                <p className="text-xl text-white/80 mb-8">Get started with our premium UI kit today and save time on design.</p>
                <button className="px-8 py-4 bg-white text-pink-600 font-bold rounded-lg hover:scale-105 shadow-lg transition-all">
                    Purchase UI Kit Now
                </button>
            </div>
        </section>
    </>)
}

export default Design2;