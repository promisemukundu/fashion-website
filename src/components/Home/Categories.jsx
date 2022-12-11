import React from "react";
import { Link } from "react-router-dom";
import sale from "../../assets/img/product-sale.png";


import { useSelector } from "react-redux";
import {  productsSliceName } from "../../store/products-slice";

const Categories = () => {


  const products = useSelector(state => state[productsSliceName].products)



  const randomImage = products[(Math.floor(Math.random( ) * (products.length)))]

  return (
    <>
      <section className="categories spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="categories__text">
                <h2>
                  Clothings Hot <br /> <span>Shoe Collection</span> <br />{" "}
                  Accessories
                </h2>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories__hot__deal">
                <img src={randomImage ? randomImage.image : sale} alt="img" />
                <div className="hot__deal__sticker">
                  <span>Sale Of</span>
                  <h5>{randomImage ? randomImage.price : sale}</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="categories__deal__countdown">
                <span>Deal Of The Week</span>
                <h2>Multi-pocket Chest Bag Black</h2>
                <div
                  className="categories__deal__countdown__timer"
                  id="countdown"
                >
                  <div className="cd-item">
                    <span>3</span>
                    <p>Days</p>
                  </div>
                  <div className="cd-item">
                    <span>1</span>
                    <p>Hours</p>
                  </div>
                  <div className="cd-item">
                    <span>50</span>
                    <p>Minutes</p>
                  </div>
                  <div className="cd-item">
                    <span>18</span>
                    <p>Seconds</p>
                  </div>
                </div>
                <Link to="shop" class="primary-btn">
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
