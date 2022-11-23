import React from "react";
import { Link } from "react-router-dom";
import search from "../assets/img/icon/search.png";
import logo from "../assets/img//logo.png";
import heart from "../assets/img/icon/heart.png";
import cart from "../assets/img/icon/cart.png";

const Header = () => {
  return (
    <>
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__option">
          <div className="offcanvas__links">
            <Link to="/">Sign in</Link>
            <Link to="/">FAQs</Link>
          </div>
          <div className="offcanvas__top__hover">
            <span>
              Usd <i className="arrow_carrot-down"></i>
            </span>
            <ul>
              <li>USD</li>
              <li>EUR</li>
              <li>USD</li>
            </ul>
          </div>
        </div>
        <div className="offcanvas__nav__option">
          <Link to="/" className="search-switch">
            <img src={search} alt="img"></img>
          </Link>

          <div className="price">$0.00</div>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__text">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
      </div>

      {/* Header Section Begin */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    <Link to="/">Sign in</Link>
                    <Link to="/">FAQs</Link>
                  </div>
                  <div className="header__top__hover">
                    <span>
                      Usd <i className="arrow_carrot-down"></i>
                    </span>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link to="./index.html">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="./about.html">About Us</Link>
                      </li>
                      <li>
                        <Link to="./shop-details.html">Shop Details</Link>
                      </li>
                      <li>
                        <Link to="./shopping-cart.html">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link to="./checkout.html">Check Out</Link>
                      </li>
                      <li>
                        <Link to="./blog-details.html">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="active">
                    <Link to="blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="contacts">Contacts</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option">
                <Link to="/" className="search-switch">
                  <img src={search} alt="img" />
                </Link>
                <Link to="/">
                  <img src={heart} alt="img" />
                </Link>
                <Link to="/">
                  <img src={cart} alt="img" /> <span>0</span>
                </Link>
                <div className="price">$0.00</div>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
