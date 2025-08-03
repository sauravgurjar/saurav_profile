import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, Share, User, ChevronRight, Database, Server, Shield, BarChart3, Globe, Zap, Users, Video, Search, Heart, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const FloatingParticles = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`
                    }}
                />
            ))}
        </div>
    );
};

const YouTubeMySQLBlog = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [readingProgress, setReadingProgress] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoaded(true);

        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrolled / maxHeight) * 100;
            setReadingProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const userActions = [
        { icon: <Search className="w-5 h-5" />, action: "Search for a video" },
        { icon: <User className="w-5 h-5" />, action: "Leave a comment" },
        { icon: <Heart className="w-5 h-5" />, action: "Like a video" },
        { icon: <Bell className="w-5 h-5" />, action: "Subscribe to a channel" }
    ];

    const metadataItems = [
        "Video titles & descriptions",
        "Upload timestamps",
        "Channel info",
        "View counts (initially)"
    ];

    const userDataItems = [
        "Your account info",
        "Subscriptions",
        "Watch history",
        "Notifications"
    ];

    const vitessFeatures = [
        { icon: <Server className="w-5 h-5" />, feature: "Connection pooling" },
        { icon: <Zap className="w-5 h-5" />, feature: "Query rewriting" },
        { icon: <Database className="w-5 h-5" />, feature: "Automated sharding" },
        { icon: <Shield className="w-5 h-5" />, feature: "Online schema changes (zero downtime)" }
    ];

    const reliabilityFeatures = [
        "Multi-region backups",
        "Failover mechanisms",
        "Redundant replicas",
        "Real-time monitoring"
    ];

    const analyticsTools = [
        "BigQuery",
        "Dataflow",
        "Dremel"
    ];

    const keyTakeaways = [
        "YouTube handles billions of users and videos with MySQL at its core.",
        "It uses sharding, replication, and Vitess to scale.",
        "MySQL is used for metadata, user info, and core transactions.",
        "Big data tools handle analytics — not day-to-day operations."
    ];

    return (
        <div className={`min-h-screen bg-black text-white font-sans transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <FloatingParticles />

            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
                <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-orange-500 transition-all duration-100"
                    style={{ width: `${readingProgress}%` }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-5 py-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 group transition-all duration-300"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Blog</span>
                </button>


                {/* Article Header */}
                <header className="mb-12">
                    <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                        <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>December 18, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 min read</span>
                            </div>
                            <div className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-cyan-400/20">
                                Database & Scaling
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
                            📺 How YouTube Supports 2.19 Billion Users with MySQL: Scaling the Unsung Hero
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                            Ever wondered how YouTube delivers billions of videos to billions of users — without crashing every second? One of the biggest secrets behind its massive scale is… <strong className="text-white bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">MySQL</strong>. Yep, the same database your college project might be using!
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full flex items-center justify-center">
                                    <span className="text-sm font-bold text-white">SS</span>
                                </div>
                                <div>
                                    <p className="text-white font-medium">Saurav Singh</p>
                                    <p className="text-gray-400 text-sm">Full-Stack Developer</p>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 bg-white/5 border border-gray-800 rounded-xl px-4 py-2 text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-orange-500 hover:text-white transition-all duration-300">
                                <Share className="w-4 h-4" />
                                <span>Share</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <article className="space-y-8">
                    {/* Why Database is Needed */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            🧩 Why a Database is Even Needed?
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Think of YouTube as a giant brain. Every time you:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {userActions.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 group">
                                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-300">{item.action}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            …YouTube needs to <strong className="text-white">store</strong> and <strong className="text-white">retrieve</strong> that data <strong className="text-white">fast</strong> and <strong className="text-white">accurately</strong>.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mt-4">
                            That's where <strong className="text-white bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">databases</strong> like <strong className="text-white bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">MySQL</strong> come in.
                        </p>
                    </section>

                    {/* Core Stack */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            🏗️ The Core Stack: YouTube + MySQL
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            Even though Google (YouTube's parent company) is known for BigTable, Spanner, and other fancy in-house tools, <strong className="text-white bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">YouTube still uses MySQL for a significant part of its infrastructure.</strong> Here's how:
                        </p>

                        <div className="space-y-6">
                            {/* Use Case 1 */}
                            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                        <Database className="w-5 h-5 text-green-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-green-400">✅ Use Case 1: Metadata Storage</h3>
                                </div>
                                <p className="text-gray-300 mb-4">MySQL stores:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {metadataItems.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 text-gray-400">
                                            <ChevronRight className="w-4 h-4 text-green-400" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-300 mt-4 italic">This is relatively structured data — a perfect fit for MySQL.</p>
                            </div>

                            {/* Use Case 2 */}
                            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <Users className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-blue-400">✅ Use Case 2: User Data</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {userDataItems.map((item, index) => (
                                        <div key={index} className="flex items-center gap-2 text-gray-400">
                                            <ChevronRight className="w-4 h-4 text-blue-400" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-gray-300 mt-4 italic">All of this is handled using MySQL clusters.</p>
                            </div>
                        </div>
                    </section>

                    {/* How Does It Scale */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            🧠 But... How Does It Scale to Billions?
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">Let's break it down:</p>

                        <div className="space-y-6">
                            {/* Sharding */}
                            <div className="bg-white/5 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">Sharding</h3>
                                        <p className="text-gray-300 mb-4">
                                            YouTube doesn't store <em>everything</em> in one MySQL server — that'd be a disaster.
                                        </p>
                                        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-4">
                                            <p className="text-cyan-400 font-medium mb-2">👉 Instead, it splits (or <strong>shards</strong>) the data by:</p>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {["user ID", "video ID", "region"].map((method, index) => (
                                                    <span key={index} className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-400/30">
                            {method}
                          </span>
                                                ))}
                                            </div>
                                            <p className="text-gray-300 text-sm">
                                                and stores those chunks across <strong>many MySQL servers</strong>. Each shard handles a manageable load.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Replication */}
                            <div className="bg-white/5 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">Replication</h3>
                                        <p className="text-gray-300 mb-4">
                                            YouTube uses <strong>master-slave replication</strong> (now called primary-replica). This means:
                                        </p>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                                <span className="text-gray-300"><strong className="text-green-400">Writes</strong> go to the primary MySQL server</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                <span className="text-gray-300"><strong className="text-blue-400">Reads</strong> are served from <strong>multiple replicas</strong></span>
                                            </div>
                                        </div>
                                        <p className="text-gray-300 mt-4 text-sm">
                                            This reduces the load on any single machine and allows millions of read requests per second.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Vitess */}
                            <div className="bg-white/5 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3">Vitess: The Secret Weapon</h3>
                                        <p className="text-gray-300 mb-4">
                                            Google built <strong className="text-orange-400">Vitess</strong> — an open-source database solution — <strong>on top of MySQL</strong>. It adds:
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                                            {vitessFeatures.map((item, index) => (
                                                <div key={index} className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                                                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400">
                                                        {item.icon}
                                                    </div>
                                                    <span className="text-gray-300 text-sm">{item.feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-gray-300 mb-4">
                                            This allows MySQL to behave like a <strong className="text-white bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">planet-scale</strong> database — just what YouTube needs.
                                        </p>
                                        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                                            <p className="text-orange-400 font-medium">💡 Fun Fact: Vitess now powers <strong>many other companies</strong> too, like Slack and Square!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Reliability */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            🔐 How About Reliability?
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            To avoid data loss and downtime, YouTube's MySQL setup includes:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {reliabilityFeatures.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                    <Shield className="w-6 h-6 text-green-400" />
                                    <span className="text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            Even if a datacenter goes down, YouTube still works — thanks to this high-availability architecture.
                        </p>
                    </section>

                    {/* Analytics */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            🧪 What About Analytics?
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            For heavy analytics (like watch time trends or ad revenue reports), YouTube uses <strong className="text-white">big data tools</strong> like:
                        </p>

                        <div className="flex flex-wrap gap-3 mb-6">
                            {analyticsTools.map((tool, index) => (
                                <div key={index} className="bg-purple-500/10 border border-purple-500/20 rounded-xl px-4 py-3 flex items-center gap-2">
                                    <BarChart3 className="w-5 h-5 text-purple-400" />
                                    <span className="text-purple-400 font-medium">{tool}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
                            <p className="text-cyan-400 font-medium text-lg">
                                But for <strong>real-time, transactional stuff</strong>, MySQL + Vitess still wins.
                            </p>
                        </div>
                    </section>

                    {/* Why This Matters */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            🌍 Why This Matters
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            YouTube's success shows that <strong className="text-white bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">traditional relational databases like MySQL can still thrive</strong> at the biggest scale — <em>if engineered right</em>. It's not about the tool, but how you use it.
                        </p>
                    </section>

                    {/* Key Takeaways */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            🚀 Key Takeaways
                        </h2>
                        <div className="space-y-4">
                            {keyTakeaways.map((takeaway, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                                        {index + 1}
                                    </div>
                                    <p className="text-gray-300">{takeaway}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Final Thoughts */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            👨‍💻 Final Thoughts
                        </h2>
                        <div className="bg-gradient-to-r from-cyan-400/10 to-orange-500/10 border border-cyan-400/20 rounded-2xl p-6">
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Next time you're watching a cat video at 2 AM, remember: a tiny part of that experience was powered by the humble MySQL — running at YouTube scale.
                            </p>
                        </div>
                    </section>
                </article>

                {/* Related Posts / CTA */}
                <footer className="mt-16 text-center">
                    <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Found this interesting?</h3>
                        <p className="text-gray-400 mb-6">Dive deeper into database scaling, system design, and backend architecture.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-cyan-400 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition-all duration-300">
                                Subscribe to Newsletter
                            </button>
                            <button className="bg-white/5 border border-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300">
                                View More Posts
                            </button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default YouTubeMySQLBlog;