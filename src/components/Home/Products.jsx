import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heart from "../../assets/img/icon/heart.png";
import compare from "../../assets/img/icon/compare.png";
import search from "../../assets/img/icon/search.png";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
  }, []);

  console.log(products);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => setCategories(response.data));
  }, []);

  console.log(categories);

  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="filter__controls">
                {categories.map((cate) => (
                  <li
                    className="active"
                    onClick={() => setFilterCategory(cate)}
                    data-filter="*"
                  >
                    {cate.charAt(0).toUpperCase() + cate.slice(1)}
                  </li>
                ))}
              </ul>
            </div>
            {products
              .filter((product) => {
                if (filterCategory) {
                  return product.category === filterCategory;
                }

                return true;
              })
              .map((prod) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                  <div className="product__item">
                    <div
                      className="product__item__pic set-bg"
                      style={{ backgroundImage: `url(${prod.image})` }}
                    >
                      <span className="label">{prod.category}</span>
                      <ul className="product__hover">
                        <li>
                          <Link to="#">
                            <img src={heart} alt="img" />
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src={compare} alt="img" />
                            <span>Compare</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <img src={search} alt="" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product__item__text">
                      <h6>{prod.title}</h6>
                      <Link to="#" className="add-cart">
                        + Add To Cart
                      </Link>
                      <div className="rating">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </div>
                      <h5>${prod.price}</h5>
                      <div className="product__color__select">
                        <label for="pc-1">
                          <input type="radio" id="pc-1" />
                        </label>
                        <label className="active black" for="pc-2">
                          <input type="radio" id="pc-2" />
                        </label>
                        <label className="grey" for="pc-3">
                          <input type="radio" id="pc-3" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
