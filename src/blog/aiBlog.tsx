import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft,
    Calendar,
    Clock,
    Share,
    User,
    ChevronRight,
    ExternalLink,
    Code,
    Zap,
    Brain,
    Users,
    Shield,
    AlertTriangle,
} from 'lucide-react';

const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
            <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                }}
            />
        ))}
    </div>
);

const AiBlogPost = () => {
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

    const useCases = [
        {
            icon: <User className="w-6 h-6" />,
            title: 'Virtual Assistants',
            description: 'Book meetings, manage inboxes, prioritize to-dos.',
            tools: 'Personal AI, Rewind AI, xAI\'s Grok (soon)',
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: 'Software Development',
            description: 'Write, test, and debug code collaboratively.',
            tools: 'DevGPT, GitHub Copilot Workspace, Cody',
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Customer Support',
            description: 'Handle queries, escalate issues, personalize responses.',
            tools: 'Zendesk AI, Intercom Fin, ChatGPT plugins',
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: 'Data & Research',
            description: 'Fetch, analyze, and summarize data from various sources.',
            tools: 'ChatGPT + browsing, Perplexity, Klarna AI Agent',
        },
    ];

    const challenges = [
        {
            icon: <Shield className="w-5 h-5" />,
            title: 'Security & Data Privacy',
            description: 'Agents accessing tools and data need safeguards.',
        },
        {
            icon: <AlertTriangle className="w-5 h-5" />,
            title: 'Error Handling',
            description: 'Agents still hallucinate or fail at edge cases.',
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: 'Alignment',
            description: 'Making sure agents work toward human goals responsibly.',
        },
        {
            icon: <Users className="w-5 h-5" />,
            title: 'Workforce Impact',
            description: 'Automation will displace some roles, demanding reskilling.',
        },
    ];

    return (
        <div
            className={`min-h-screen bg-black text-white font-sans transition-all duration-1000 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <FloatingParticles />

            {/* Progress bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
                <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-orange-500 transition-all duration-100"
                    style={{ width: `${readingProgress}%` }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-5 py-8">
                {/* 🔙 Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 group transition-all duration-300"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Blog</span>
                </button>

                {/* ✅ Put all article and sections here */}
                {/* Use your existing JSX content (which you've already written) below this point */}

                {/* Example header */}
                <header className="mb-12">
                    <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                        <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>December 15, 2024</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 min read</span>
                            </div>
                            <div className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-cyan-400/20">
                                AI & Technology
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6 leading-tight">
                            🚀 The Rise of AI Agents: How They're Changing the Future of Work
                        </h1>

                        <p className="text-xl text-gray-300 italic leading-relaxed mb-6">
                            "Software is eating the world, but AI agents are about to run it."
                        </p>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-white">SS</span>
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
                    {/* Introduction */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            We're standing at the edge of a new technological shift — the rise of <strong className="text-white bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">AI agents</strong>. These are not just smart chatbots or productivity tools. AI agents are autonomous digital workers that can understand goals, make decisions, execute tasks, and even collaborate with other agents or humans to complete complex workflows.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            From customer support and coding to research and personal assistance, AI agents are redefining how work is done — and who does it.
                        </p>
                    </section>

                    {/* What Are AI Agents */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            🧠 What Are AI Agents?
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            AI agents are software programs powered by advanced AI models (like GPT-4, Claude, Gemini, or open-source LLMs) that can:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {[
                                "Understand instructions",
                                "Plan a series of actions",
                                "Access external tools or APIs",
                                "Autonomously perform tasks",
                                "Learn and adapt over time"
                            ].map((capability, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                                    <ChevronRight className="w-5 h-5 text-cyan-400" />
                                    <span className="text-gray-300">{capability}</span>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Unlike traditional bots, agents don't need every step hardcoded — they can reason, make decisions, and respond to changes dynamically. Think of them as junior employees who never sleep.
                        </p>

                        <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-xl p-6">
                            <h4 className="text-cyan-400 font-semibold mb-3">Popular frameworks enabling agent behavior:</h4>
                            <div className="flex flex-wrap gap-2">
                                {["AutoGPT", "LangChain", "CrewAI", "AgentGPT", "OpenAI's Function Calling + Tool Use"].map((framework, index) => (
                                    <span key={index} className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm border border-cyan-400/30">
                    {framework}
                  </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* How AI Agents Work */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            ⚙️ How AI Agents Work
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            A typical AI agent system consists of:
                        </p>

                        <div className="space-y-4 mb-6">
                            {[
                                { step: "1", title: "Goal input", desc: "You give the agent a task (\"Research the best laptops under $1000 and summarize key specs\")." },
                                { step: "2", title: "Planning", desc: "The agent breaks it down into subtasks (search, filter, summarize)." },
                                { step: "3", title: "Tool use", desc: "It uses APIs, plugins, or browsers to gather and process data." },
                                { step: "4", title: "Memory", desc: "Keeps track of progress and context across steps." },
                                { step: "5", title: "Execution", desc: "The task gets done — fast and autonomously." }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-white/5 rounded-xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            This multi-step, iterative approach is far more powerful than asking a chatbot one question at a time.
                        </p>
                    </section>

                    {/* Real-World Use Cases */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            🏢 Real-World Use Cases
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            AI agents are already reshaping roles across industries:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {useCases.map((useCase, index) => (
                                <div key={index} className="bg-white/5 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 hover:bg-cyan-400/5 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group">
                                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                        {useCase.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-white">{useCase.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{useCase.description}</p>
                                    <div className="text-xs text-cyan-400 font-medium">
                                        Tools: {useCase.tools}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Future of Work */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            💼 The Future of Work: Co-working with AI
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            This isn't about replacing humans. It's about <strong className="text-white bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">augmenting</strong> them.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            <strong className="text-white">AI agents handle the repetitive stuff, so humans can focus on creativity, strategy, and empathy.</strong>
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Just like Excel didn't kill accounting jobs — it made accountants more powerful — AI agents will turn knowledge workers into <strong className="text-white bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">AI-augmented professionals</strong>.
                        </p>

                        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                            <h4 className="text-orange-400 font-semibold mb-3">Expect job roles like:</h4>
                            <div className="grid grid-cols-2 gap-2">
                                {["AI Ops Manager", "Prompt Engineer", "Agent Architect", "Workflow Designer"].map((role, index) => (
                                    <span key={index} className="bg-orange-500/20 text-orange-400 px-3 py-2 rounded-lg text-sm border border-orange-500/30 text-center">
                    {role}
                  </span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Challenges */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            ⚠️ Challenges Ahead
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            As with any revolution, there are hurdles:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {challenges.map((challenge, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-red-500/5 border border-red-500/20 rounded-xl hover:border-red-500/40 transition-all duration-300">
                                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 flex-shrink-0">
                                        {challenge.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-red-400 font-semibold mb-1">{challenge.title}</h4>
                                        <p className="text-gray-400 text-sm">{challenge.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            The next phase of AI development will focus heavily on reliability, trust, and human-AI collaboration.
                        </p>
                    </section>

                    {/* Final Thoughts */}
                    <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-6">
                            🔮 Final Thoughts
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            The rise of AI agents is not a sci-fi dream anymore — it's a <strong className="text-white bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">paradigm shift</strong> that's already unfolding. Businesses that embrace agentic workflows will boost efficiency, and individuals who learn to command AI agents will gain an edge in the evolving job market.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            This isn't the end of work. It's the <strong className="text-white bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">beginning of a smarter, faster, more collaborative future.</strong>
                        </p>

                        <div className="bg-gradient-to-r from-cyan-400/10 to-orange-500/10 border border-cyan-400/20 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">What's next?</h3>
                            <div className="space-y-3">
                                {[
                                    "Try using an AI agent for one repetitive task this week.",
                                    "Explore platforms like ChatGPT with Tools, AutoGPT, or Reworkd AgentGPT.",
                                    "And most importantly — stay curious."
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-300">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </article>

                {/* Related Posts / CTA */}
                <footer className="mt-16 text-center">
                    <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h3>
                        <p className="text-gray-400 mb-6">Subscribe to get notified about new posts on AI, development, and technology.</p>
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

export default AiBlogPost;