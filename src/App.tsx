import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Portfolio from './profile/Portfolio';
import AiBlogPost from './blog/aiBlog';
import YouTubeMySQLBlog from "./blog/YouTubeBlog";

function App() {
    return (
        <Router basename="/saurav_profile">
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog/ai" element={<AiBlogPost />} />
                <Route path="/blog/youtube" element={<YouTubeMySQLBlog />} />
            </Routes>
        </Router>
    );
}

export default App;
