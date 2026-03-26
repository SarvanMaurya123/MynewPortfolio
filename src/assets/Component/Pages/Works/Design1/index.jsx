import { FaStar, FaStarHalfAlt, FaPlayCircle, FaUsers, FaShieldAlt, FaRocket, FaCheckCircle, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";


const Design1 = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [stats, setStats] = useState({ users: 0, integrations: 0, countries: 0 });
    const [activeAccordion, setActiveAccordion] = useState(null);

    // Animated counter effect
    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                users: prev.users < 45 ? prev.users + 1 : 45,
                integrations: prev.integrations < 100 ? prev.integrations + 2 : 100,
                countries: prev.countries < 190 ? prev.countries + 2 : 190
            }));
        }, 20);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
            setError("Please enter a valid email address.");
            setSubmitted(false);
            return;
        }
        setError("");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setEmail("");
    };

    const features = [
        { title: "Real-time Collaboration", desc: "Work together seamlessly", icon: FaUsers },
        { title: "Secure & Reliable", desc: "Your data is protected", icon: FaShieldAlt },
        { title: "Lightning Fast", desc: "Optimized performance", icon: FaRocket }
    ];

    const faqs = [
        { q: "How do I get started?", a: "Sign up with your email and start collaborating in minutes. No credit card required." },
        { q: "Is my data secure?", a: "Yes, we use industry-leading encryption and comply with all data protection standards." },
        { q: "Can I integrate with other tools?", a: "Absolutely! We support 100+ integrations with your favorite tools." }
    ];

    return (<>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-black">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="mx-auto px-6 lg:px-20 py-10 w-full relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
                    {/* Content */}
                    <div className="w-full lg:w-[50%] space-y-6">
                        <div className="inline-block">
                            <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 text-sm font-semibold">✨ Trusted by millions</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Transform Ideas into<br /> <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">Reality Together</span>
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                            Collaboration platform trusted by leading companies. Connect, create, and innovate with your team in real-time on a digital workspace with no limits.
                        </p>

                        {/* Form */}
                        <form className="flex flex-col sm:flex-row gap-3 mt-8" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="px-6 py-3 rounded-lg border border-gray-600 bg-white/5 backdrop-blur-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all flex-1"
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                            >
                                {submitted ? "✓ Sent!" : "Get Started"}
                                {!submitted && <FaChevronRight className="text-sm" />}
                            </button>
                        </form>
                        {error && <p className="text-red-400 text-sm animate-pulse">{error}</p>}
                        {submitted && <p className="text-green-400 text-sm">Check your email for updates!</p>}

                        {/* Social Proof */}
                        <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
                            <div className="flex -space-x-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 border-2 border-slate-900"></div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-slate-900"></div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-slate-900"></div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400 text-sm" />
                                    <FaStar className="text-yellow-400 text-sm" />
                                    <FaStar className="text-yellow-400 text-sm" />
                                    <FaStar className="text-yellow-400 text-sm" />
                                    <FaStarHalfAlt className="text-yellow-400 text-sm" />
                                </div>
                                <p className="text-sm text-gray-400">Rated 4.8/5 from 5,000+ reviews</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-[50%] relative">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
                            <img src="../div.png" alt="Collaboration Platform" className="w-full h-auto rounded-3xl shadow-2xl border border-white/10 transform hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-b from-black to-slate-900 px-6 lg:px-20 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">{stats.users}M+</h3>
                        <p className="text-gray-400 mt-2">Active Users Worldwide</p>
                    </div>
                    <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">{stats.integrations}+</h3>
                        <p className="text-gray-400 mt-2">Third-party Integrations</p>
                    </div>
                    <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">{stats.countries}</h3>
                        <p className="text-gray-400 mt-2">Countries & Regions</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Trusted By Section */}
        <section className="mx-auto px-6 lg:px-20 py-20 bg-slate-900">
            <p className="text-center text-gray-400 text-lg mb-12">Trusted by industry leaders</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
                {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="p-4 hover:scale-110 transition-transform">
                        <img src={`../${i}.png`} alt={`Partner ${i}`} className="h-12 object-contain" />
                    </div>
                ))}
            </div>
        </section>

        {/* Features Section */}
        <section className="mx-auto px-6 lg:px-20 py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">Why Choose Our Platform?</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need for seamless collaboration</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {features.map((feature, idx) => (
                    <div key={idx} className="group p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-gray-700 hover:border-pink-400 hover:shadow-xl transition-all hover:scale-[1.02]">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-125 transition-transform">
                            <feature.icon className="text-white text-xl" />
                        </div>
                        <h3 className="text-xl font-bold dark:text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                    </div>
                ))}
            </div>

            {/* Feature Highlights */}
            <div className="bg-gradient-to-r from-pink-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-3xl font-bold dark:text-white mb-6">Unlimited Collaboration</h3>
                        <ul className="space-y-4">
                            {[
                                "Real-time editing & comments",
                                "Unlimited team members",
                                "300+ templates included",
                                "Version control history"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <FaCheckCircle className="text-green-500 text-lg flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <img src="../sec.png" alt="Features" className="rounded-2xl shadow-lg" />
                    </div>
                </div>
            </div>
        </section>

        {/* Integration Section */}
        <section className="mx-auto px-6 lg:px-20 py-20 bg-slate-50 dark:bg-slate-800">
            <h2 className="text-4xl font-bold dark:text-white text-center mb-16">Works with Your Favorite Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
                {['Google', 'Slack', 'Jira', 'Figma', 'Notion'].map((tool, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-gray-600 text-center hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                        <p className="font-semibold dark:text-white">{tool}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto px-6 lg:px-20 py-20">
            <h2 className="text-4xl font-bold dark:text-white text-center mb-16">Frequently Asked Questions</h2>

            <div className="max-w-2xl mx-auto space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden hover:border-pink-400 transition-colors">
                        <button
                            onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                            className="w-full p-6 flex justify-between items-center bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                        >
                            <span className="font-semibold text-left dark:text-white">{faq.q}</span>
                            <FaChevronRight className={`text-pink-500 transition-transform ${activeAccordion === idx ? 'rotate-90' : ''}`} />
                        </button>
                        {activeAccordion === idx && (
                            <div className="p-6 bg-gradient-to-r from-pink-50 to-blue-50 dark:from-slate-700 dark:to-slate-600 border-t border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto px-6 lg:px-20 py-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Collaboration?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Join millions of teams already using our platform to bring their ideas to life.</p>
            <button className="px-8 py-4 bg-white text-pink-600 font-bold rounded-lg hover:scale-105 shadow-lg transition-all">
                Start Your Free Trial Today
            </button>
        </section>
    </>)
}

export default Design1;