"use client";
import React from "react";
import { blogs } from "./BlogData";
import Image from "next/image";
import ImageTopComponent from "../AboutComponents/ImageTopComponent";

interface BlogProps {
  id: string;
}

const SingleBlogCard: React.FC<BlogProps> = ({ id }) => {
  // Filter the blog based on the given id
  const singleBlog = blogs.find((blog) => blog.blogid === id);

  // Check if blog exists
  if (!singleBlog) {
    return <div className="text-center text-red-500">Blog not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <ImageTopComponent
        img="/about/Breadcrump-Image.jpg"
        title="Blog"
        des={`Home / Blog / ${singleBlog.blogid}`}
      />{" "}
      <div className="max-w-4xl mx-auto  shadow-lg rounded-lg overflow-hidden my-20">
        {/* Blog Image */}
        <div className="relative w-full h-64">
          <Image
            fill
            priority={true}
            src={singleBlog.image}
            alt={singleBlog.title}
            className="w-full h-full object-cover object-center sm:h-80 md:h-96"
            sizes="(min-width: 1040px) 896px, (min-width: 780px) 736px, (min-width: 680px) 608px, calc(94.44vw - 15px)"
          />
        </div>

        {/* Blog Content */}
        <div className="p-6 sm:p-8 bg-bgColor2">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
            {singleBlog.title}
          </h1>
          <p className="text-gray-600 text-sm mt-2">{singleBlog.date}</p>
          <p className="text-gray-500 capitalize mt-1 mb-4">
            Category: {singleBlog.category}
          </p>

          {/* Blog Description */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {singleBlog.description}
          </p>

          {/* Full Blog Paragraph */}
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            {singleBlog.paragraph}
          </p>

          {/* Call to Action Button */}
          <div className="mt-6">
            <a
              href="/blog"
              className="bg-red-500 text-white px-6 py-3 rounded-lg shadow hover:bg-red-600 transition-all duration-300"
            >
              Back to Blog List
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
