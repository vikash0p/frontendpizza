import BlogComponent from '@/components/BlogComponents/BlogComponent'
import React from 'react'
import { Metadata } from "next";
import { blogMetadata } from "@/utils/meta/blogMetadata";


export const metadata: Metadata = blogMetadata;
const Blog = () => {
  return (
    <div>
      <BlogComponent />
    </div>
  )
}

export default Blog
