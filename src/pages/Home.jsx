import React from "react";
import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";
import Hero from "../components/Home/Hero";
import Instagram from "../components/Home/Instagram";
import LatestBlog from "../components/Home/LatestBlog";
import Products from "../components/Home/Products";

const Home = (props) => {
  return (
    <>
      <Hero />
      <Banner />
      <Products />
      <Categories />
      <Instagram />
      <LatestBlog pageSize={3}/>
    </>
  );
};

export default Home;
