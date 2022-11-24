import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero1 from "../../assets/img/hero/hero-1.jpg";
import hero2 from "../../assets/img/hero/hero-2.jpg";

const Hero = () => {
  const [photo, setPhoto] = useState(0);

  const images = [hero1, hero2];

  const arrowLeftHandler = () => {
    setPhoto((photo) => {
      const newPosition = photo - 1;
      if (newPosition < 0) {
        return images.length - 1;
      }

      return newPosition;
    });
  };

  const arrowRightHandler = () => {
    setPhoto((photo) => {
      const newPosition = photo + 1;
      if (newPosition > images.length - 1) {
        return 0;
      }

      return newPosition;
    });
  };

  return (
    <>
      {/* Hero Section Begin */}
      <section className="hero">
        <div
          className="hero__slider owl-carousel owl-loaded owl-drag"
          style={{
            display: "block",
          }}
        >
          <div
            className="hero__items set-bg owl_item active"
            style={{ backgroundImage: `url(${images[photo]})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-7 col-md-8">
                  <div className="hero__text">
                    <h6>Summer Collection</h6>
                    <h2>Fall - Winter Collections 2030</h2>
                    <p>
                      A specialist label creating luxury essentials. Ethically
                      crafted with an unwavering commitment to exceptional
                      quality.
                    </p>
                    <Link to="#" className="primary-btn">
                      Shop now <span className="arrow_right"></span>
                    </Link>
                    <div className="hero__social">
                      <Link to="#">
                        <i className="fa fa-facebook"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa fa-twitter"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa fa-pinterest"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="owl-nav">
          <button
            onClick={arrowLeftHandler}
            type="button"
            role="presentation"
            className="owl-prev"
          >
            <span className="arrow_left">
              <span></span>
            </span>
          </button>
          <button
            onClick={arrowRightHandler}
            type="button"
            role="presentation"
            className="owl-next"
          >
            <span className="arrow_right">
              <span></span>
            </span>
          </button>
        </div>
        {photo}
      </section>
      {/* Hero Section End */}
    </>
  );
};

export default Hero;
