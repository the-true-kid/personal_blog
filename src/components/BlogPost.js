import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      content: "React is a JavaScript library created by Facebook...",
    },
    {
      id: 2,
      title: "Tailwind CSS for Beginners",
      content: "Tailwind CSS allows you to build custom designs quickly...",
    },
    {
      id: 3,
      title: "Why I Love Coding",
      content: "Coding has always been a passion of mine...",
    },
  ];

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <h1 className="text-4xl text-center mt-12">Post Not Found</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.content}</p>
    </div>
  );
}

export default BlogPost;
