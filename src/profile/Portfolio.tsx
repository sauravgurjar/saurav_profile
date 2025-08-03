import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Calendar, Linkedin, Youtube, Instagram, Github, Send, Code, Palette, Cloud, Cpu } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.subject && formData.message) {
            alert("Thank you for your message! I'll get back to you soon.");
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            alert('Please fill in all fields.');
        }
    };

    const skillsData = [
        {
            icon: <Code className="w-6 h-6" />,
            title: "Frontend Development",
            description: "React, Vue.js, TypeScript, Next.js, and modern CSS frameworks for creating responsive and interactive user interfaces."
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Backend Development",
            description: "Node.js, Python, PostgreSQL, MongoDB, and RESTful API development for robust server-side solutions."
        },
        {
            icon: <Palette className="w-6 h-6" />,
            title: "UI/UX Design",
            description: "Figma, Adobe Creative Suite, design systems, and user research for creating intuitive and visually appealing experiences."
        },
        {
            icon: <Cloud className="w-6 h-6" />,
            title: "Cloud & DevOps",
            description: "AWS, Docker, CI/CD pipelines, and modern deployment strategies for scalable applications."
        }
    ];

    const blogPosts = [
        {
            category: "Tech",
            icon: "⚛️",
            date: "July 28, 2025",
            readTime: "5 min read",
            title: "🚀 The Rise of AI Agents: How They're Changing the Future of Work",
            excerpt: "Exploring the latest developments in...",
            tags: ["AutoGPT", "LangChain CrewAI", "Next.js"],
            url: "/ai"
        },
        {
            category: "Tech",
            icon: "🎨",
            date: "July 22, 2025",
            readTime: "8 min read",
            title: " 📺 How YouTube Supports 2.19 Billion Users with MySQL: Scaling the Unsung Hero",
            excerpt: "Why accessibility should be at the forefront...",
            tags: ["MySQL", "BigQuery", "Vitess"],
            url: "/youtube"
        },

    ];


    const projects = [
        {
            icon: "🚀",
            title: "EcoTracker App",
            description: "A comprehensive sustainability tracking application that helps users monitor their carbon footprint and discover eco-friendly alternatives.",
            tags: ["React Native", "Node.js", "MongoDB"]
        },
        {
            icon: "💰",
            title: "FinanceFlow Dashboard",
            description: "A real-time financial analytics dashboard for small businesses with advanced reporting and forecasting capabilities.",
            tags: ["React", "TypeScript", "AWS"]
        },
        {
            icon: "🎵",
            title: "MusicCollab Platform",
            description: "A collaborative platform for musicians to create, share, and remix music together in real-time from anywhere in the world.",
            tags: ["Vue.js", "WebRTC", "Docker"]
        },
        {
            icon: "🛒",
            title: "Smart Commerce Suite",
            description: "An AI-powered e-commerce platform with personalized recommendations and automated inventory management.",
            tags: ["Next.js", "Python", "TensorFlow"]
        },
        {
            icon: "📚",
            title: "LearnHub LMS",
            description: "A modern learning management system with interactive courses, progress tracking, and gamification elements.",
            tags: ["React", "GraphQL", "PostgreSQL"]
        },
        {
            icon: "🌐",
            title: "GlobalConnect Network",
            description: "A social networking platform for international professionals with translation features and cultural exchange tools.",
            tags: ["Angular", "Spring Boot", "Redis"]
        }
    ];

    const FloatingParticles = () => {
        return (
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className={`min-h-screen bg-black text-white font-sans transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <FloatingParticles />

            <div className="max-w-7xl mx-auto px-5 flex flex-col lg:flex-row gap-8 min-h-screen py-5">
                {/* Sidebar */}
                <aside className="lg:w-80 lg:sticky lg:top-5 h-fit">
                    <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                        {/* Profile Section */}
                        <div className="text-center mb-8">
                            <div className="w-28 h-28 mx-auto mb-5 rounded-full bg-gradient-to-r from-cyan-400 to-orange-500 p-0.5">
                                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">SS</span>
                                </div>
                            </div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-2">
                                SAURAV SINGH
                            </h1>
                            <p className="text-gray-400 mb-5">Full-Stack Developer</p>
                            <div className="inline-flex items-center gap-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm border border-cyan-400/20">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                                Available for work
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-gray-800 hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 hover:translate-x-1">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-lg flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xs text-gray-400 mb-1">Email</h4>
                                    <a href="mailto:saurav7747@gmail.com" className="text-white font-medium hover:text-cyan-400 transition-colors">
                                        Saurav7747@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-gray-800 hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 hover:translate-x-1">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-lg flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xs text-gray-400 mb-1">Phone</h4>
                                    <p className="text-white font-medium">+91 9220545606</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-gray-800 hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 hover:translate-x-1">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xs text-gray-400 mb-1">Location</h4>
                                    <p className="text-white font-medium">Gurgaon Haryana</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-gray-800 hover:border-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 hover:translate-x-1">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-lg flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-xs text-gray-400 mb-1">Birthday</h4>
                                    <p className="text-white font-medium">March 15, 1995</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-4">
                            <a href="https://www.linkedin.com/in/saurav-singh-750384230/" className="w-11 h-11 bg-white/5 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-orange-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://www.youtube.com/@SauravSingh-it2wz" className="w-11 h-11 bg-white/5 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-orange-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/saurav_singh_gujar/" className="w-11 h-11 bg-white/5 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-orange-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/sauravgurjar" className="w-11 h-11 bg-white/5 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-orange-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    {/* Navigation */}
                    <nav className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-4 mb-8">
                        <ul className="flex gap-2 flex-wrap justify-center lg:justify-start">
                            {['about', 'blog', 'projects', 'contact'].map((section) => (
                                <li key={section} className="flex-1 lg:flex-none">
                                    <button
                                        onClick={() => setActiveSection(section)}
                                        className={`w-full lg:w-auto px-6 py-3 rounded-xl font-medium transition-all duration-300 capitalize ${
                                            activeSection === section
                                                ? 'bg-gradient-to-r from-cyan-400 to-orange-500 text-white transform -translate-y-0.5 shadow-lg shadow-cyan-500/30'
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        {section}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* About Section */}
                    {activeSection === 'about' && (
                        <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-10 animate-fadeIn">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-8">
                                About Me
                            </h2>
                            <div className="text-lg text-gray-300 leading-relaxed mb-8 space-y-4">
                                <p>
                                    Hello! I'm <strong className="text-white bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">Saurav Singh</strong>, a passionate full-stack developer and UI/UX designer based in Gurgaon. With over 6 years of experience in creating digital experiences, I specialize in building modern, responsive web applications that combine beautiful design with powerful functionality.
                                </p>
                                <p>
                                    I love turning complex problems into simple, elegant solutions. My expertise spans across modern web technologies, cloud platforms, and design systems. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or capturing moments through photography.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {skillsData.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 hover:bg-cyan-400/5 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                            {skill.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3 text-white">{skill.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Blog Section */}
                    {activeSection === 'blog' && (
                        <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-10 animate-fadeIn">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-8">
                                Latest Blog Posts
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                I love sharing my knowledge and experiences through writing. Here are some of my recent thoughts on technology, development, and design.
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {blogPosts.map((post, index) => (
                                    <Link
                                        key={index}
                                        to={`/blog/${post.url}`} // Change this as per your route setup
                                        className="bg-white/5 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-400 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer group block"
                                    >
                                        <div className="h-44 bg-gradient-to-br from-cyan-400/10 to-orange-500/10 flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                                                {post.category}
                                            </div>
                                            <div className="text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                                {post.icon}
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex justify-between items-center mb-4 text-xs text-gray-400">
                                                <span className="text-cyan-400 font-medium">{post.date}</span>
                                                <span className="bg-white/5 px-2 py-1 rounded-lg border border-gray-800">
            {post.readTime}
          </span>
                                            </div>
                                            <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-5 line-clamp-3">{post.excerpt}</p>
                                            <div className="flex gap-2 flex-wrap">
                                                {post.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium border border-cyan-400/20"
                                                    >
              {tag}
            </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>


                        </section>
                    )}

                    {/* Projects Section */}
                    {activeSection === 'projects' && (
                        <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-10 animate-fadeIn">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-8">
                                Featured Projects
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-400 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer group"
                                        onClick={() => {
                                            const card = document.querySelector(`[data-project="${index}"]`);
                                        }}
                                        data-project={index}
                                    >
                                        <div className="h-48 bg-gradient-to-br from-cyan-400/10 to-orange-500/10 flex items-center justify-center relative overflow-hidden">
                                            <div className="text-5xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                                {project.icon}
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                                            <div className="flex gap-2 flex-wrap">
                                                {project.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-xs border border-cyan-400/20"
                                                    >
                            {tag}
                          </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Contact Section */}
                    {activeSection === 'contact' && (
                        <section className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-10 animate-fadeIn">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent mb-8">
                                Get In Touch
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!
                            </p>

                            <div>
                                <label htmlFor="name" className="block text-white font-medium mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your name"
                                    required
                                    className="w-full px-5 py-4 bg-white/5 border border-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-cyan-400/5 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-white font-medium mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="your.email@example.com"
                                    required
                                    className="w-full px-5 py-4 bg-white/5 border border-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-cyan-400/5 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-white font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder="What's this about?"
                                    required
                                    className="w-full px-5 py-4 bg-white/5 border border-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-cyan-400/5 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Tell me about your project or just say hello!"
                                    required
                                    rows={5}
                                    className="w-full px-5 py-4 bg-white/5 border border-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-cyan-400/5 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-y"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition-all duration-300"
                            >
                                <span>Send Message</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Portfolio;