import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.excerpt}</p>
      <Link
        to={`/blog/${post.id}`}
        className="text-blue-500 hover:underline font-bold"
      >
        Read More
      </Link>
    </div>
  );
}

export default BlogCard;
