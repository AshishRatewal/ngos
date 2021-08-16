import React from "react";
import Branding from "../Components/Branding";
import Blog from "../Components/Blog";
import Footer from "../Components/Footer";
import Copyright from "../Components/Copyright";
const BlogPage = () => {
  return (
    <>
      <div className="blogPage">
        <Branding />
        <Blog />
        <Blog />
        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default BlogPage;
