import React from "react";
import BackgroundBlogCard from "./BackgroundBlogCard"; // Import your BackgroundBlogCard component here

export function BlogCardContainer({ blogData }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {blogData.map((blog, index) => (
        <BackgroundBlogCard key={index} {...blog} />
      ))}
    </div>
  );
}
