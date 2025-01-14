import React from "react";
import BlogCard from "./BlogCard";

function Blog() {
    const posts = [
      {
        id: 1,
        title: "Getting Started with React",
        excerpt: "React is a powerful library for building user interfaces...",
        content: "React is a JavaScript library created by Facebook...",
      },
      {
        id: 2,
        title: "Tailwind CSS for Beginners",
        excerpt: "Tailwind CSS is a utility-first CSS framework...",
        content: "Tailwind CSS allows you to build custom designs quickly...",
      },
      {
        id: 3,
        title: "Why I Love Coding",
        excerpt: "Coding allows me to bring ideas to life...",
        content: "Coding has always been a passion of mine...",
      },
      {
        id: 4, // New blog post
        title: "Deploying Apps with Vercel",
        excerpt: "Learn how to deploy your React apps with Vercel...",
        content: "Vercel is a platform that makes deploying front-end apps seamless...",
      },
    ];
  
    return (
      <div className="max-w-4xl mx-auto mt-12">
        <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }
  

export default Blog;
