import React from "react";
import BlogSection from "../components/Blog/BlogSection";
import LatestBlog from "../components/Home/LatestBlog";

const Blog = (props) => {
  return <>
  
  <BlogSection/>
  <LatestBlog pageSize={12} />
   </>
};

export default Blog;
