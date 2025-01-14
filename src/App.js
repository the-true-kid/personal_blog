import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <header className="bg-blue-500 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">My Blog</h1>
          <div className="flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/blog" className="hover:underline">Blog</Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </main>
      <footer className="bg-gray-800 text-white py-6 mt-12 text-center">
        &copy; {new Date().getFullYear()} My Blog. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
