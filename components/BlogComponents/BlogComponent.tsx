'use client'
import React, { useState } from "react";
import { blogs } from "./BlogData";
import Image from "next/image";
import ImageTopComponent from "../AboutComponents/ImageTopComponent";
import { IoPricetag } from "react-icons/io5";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRouter } from "next/navigation";


const BlogComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
   const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const router=useRouter();

  // Filter recent blogs for food, drink, pizza, restaurant categories
//   const recentBlogs = blogs.filter((blog) => ["food", "drink", "pizza", "restaurant"].includes(blog.category));

  const blogCategory=Array.from(new Set(blogs.map((value)=>value.category)));
  console.log("🚀 ~ file: BlogComponent.tsx:20 ~ blogCategory:", blogCategory);

  // Handle search functionality
 const handleSearch = (term: string) => {
   const filtered = blogs.filter(
     (blog) =>
       blog.title.toLowerCase().includes(term.toLowerCase()) ||
       blog.category.toLowerCase().includes(term.toLowerCase())
   );
   setFilteredBlogs(filtered);
 };

 // Filter blogs by category when tag buttons are clicked
 const handleCategoryFilter = (category: string) => {
   const filteredByCategory = blogs.filter(
     (blog) => blog.category === category
   );

   // Scroll to top of the page after filtering
   window.scrollTo({
     top: 350, // Scroll to top of the page
     behavior: "smooth", // Smooth scrolling
   });

   setFilteredBlogs(filteredByCategory);
 };

  return (
    <div className="container mx-auto  lg:p-6">
      <div>
        <ImageTopComponent
          img="/about/Breadcrump-Image.jpg"
          title="Blog"
          des="Home / Blog"
        />{" "}
      </div>
      <div className="max-w-7xl m-auto my-10 flex flex-col lg:flex-row">
        {/* Left Column - 80% width */}
        <div className="lg:basis-[3/4] order-last lg:order-none p-5">
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4">
              {filteredBlogs.map((blog, index) => (
                <div
                  key={index}
                  className="border border-black p-5  rounded-xl shadow-xl w-full"
                >
                  <div className="relative w-full h-64 rounded-xl ">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover mb-3 border-2 border-textColor rounded-xl"
                      fill
                      priority={true}
                      sizes="(min-width: 1280px) 376px, (min-width: 1040px) 293px, (min-width: 780px) 197px, (min-width: 660px) 149px, calc(37.35vw - 90px)"
                    />
                    <p className="text-sm text-textColor border border-textColor rounded-bl-xl px-8 py-2 bg-black/50 absolute left-0 bottom-0">
                      {blog.date}
                    </p>
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="inline-block">
                      <p className="text-lg px-4 py-2  rounded-full text-textColor  gap-2 bg-black flex w-auto items-center capitalize">
                        <span>
                          <IoPricetag />{" "}
                        </span>{" "}
                        {blog.category}
                      </p>
                    </div>
                    <h2 className="text-xl font-bold">{blog.title}</h2>

                    <p className="text-gray-800 ">{blog.description}</p>
                    <p className="text-gray-600 ">
                      {blog.paragraph.slice(0, 80)}...
                    </p>
                    <p className="py-2 inline-block group">
                      <Link
                        className="bg-textColor px-8 py-2 flex items-center justify-between gap-2 text-white transition-all duration-300 ease-in-out group-hover:bg-hoverColor"
                        href={`/blog/${blog.blogid}`}
                      >
                        Read More
                        <span className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                          <HiOutlineArrowNarrowRight size={26} />
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col w-full min-h-screen justify-center items-center">
              <p className="text-3xl font-bold">No Blogs found !</p>
            </div>
          )}
        </div>

        {/* Right Column - 20% width */}
        <div className="lg:basis-[1/4] p-5 py-10 bg-bgColor2 h-[100%] border border-black ">
          {/* Search Blog */}
          <div className="mb-5">
            <label htmlFor="text" className="text-2xl font-semibold ">
              Search
            </label>
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Search Blog"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch(e.target.value);
              }}
              className="w-full p-2 mt-2 border rounded"
            />
          </div>

          {/* Recent Blog Posts */}
          <h2 className="text-xl font-bold mb-3">Recent Blogs</h2>
          <div>
            {blogs.map((blog, index) => (
              <div key={index} className="mb-4">
                {/* Display only images for restaurant category */}
                {blog.category === "restaurant" ? (
                  <div className="relative w-full h-20">
                    <Link href={`/blog/${blog.blogid}`}>
                      <Image
                        fill
                        priority={true}
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover mb-2"
                        sizes="(min-width: 1280px) 257px, (min-width: 1040px) 202px, (min-width: 780px) 138px, (min-width: 680px) 106px, calc(23.61vw - 50px)"
                      />
                    </Link>
                  </div>
                ) : (
                  <div className=" ">
                    <Link
                      href={`/blog/${blog.blogid}`}
                      className="flex space-x-2"
                    >
                      <div className="relative w-16 h-16">
                        <Image
                          fill
                          priority={true}
                          src={blog.image}
                          alt={blog.title}
                          className="w-16 h-16 object-cover"
                          sizes="(min-width: 1280px) 64px, (min-width: 1040px) 56px, (min-width: 780px) 38px, (min-width: 660px) 28px, (min-width: 480px) calc(6.88vw - 16px), calc(25vw - 100px)"
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">{blog.title}</h3>
                        <p className="text-xs text-gray-600">{blog.date}</p>
                        <p className="text-xs text-gray-600 capitalize">
                          {blog.category}
                        </p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* tags */}
          <div className="py-5">
            <h5 className="text-2xl font-bold">Tags</h5>
            <div className="space-x-4 space-y-3">
              {blogCategory.map((value) => {
                return (
                  <button
                    type="button"
                    className="px-5 py-2  bg-black text-white rounded-full hover:text-textColor transition-colors duration-500 ease-in-out"
                    key={value}
                    onClick={() => handleCategoryFilter(value)}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>

          {/* instagram */}
          <h5 className="text-2xl font-semibold mt-8">Instagram</h5>
          <div className="w-full h-full flex flex-wrap gap-x-3 pb-10">
            {blogs.slice(0, 6).map((value) => {
              return (
                <div
                  className="relative w-20 h-20  flex-shrink-0"
                  key={value.blogid}
                >
                  <Image
                    src={value.image}
                    fill
                    className="object-contain rounded-xl w-full h-full"
                    alt={value.title}
                    priority
                    sizes="80px"
                  />
                </div>
              );
            })}
          </div>

          <div className="relative w-full h-96 ">
            <Image
              src={"/blog/blog15.jpg"}
              alt="blogBanner"
              className="object-contain w-full h-full"
              fill
              priority
              sizes="(min-width: 1280px) 257px, (min-width: 1040px) 202px, (min-width: 780px) 138px, (min-width: 680px) 106px, calc(23.61vw - 50px)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogComponent;
