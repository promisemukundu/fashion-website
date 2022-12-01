import React from "react";
import insta1 from "../../assets/img/instagram/instagram-1.jpg";
import insta2 from "../../assets/img/instagram/instagram-2.jpg";
import insta3 from "../../assets/img/instagram/instagram-3.jpg";
import insta4 from "../../assets/img/instagram/instagram-4.jpg";
import insta5 from "../../assets/img/instagram/instagram-5.jpg";
import insta6 from "../../assets/img/instagram/instagram-6.jpg";

const Instagram = () => {
  return (
    <>
      <section class="instagram spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="instagram__pic">
                <div
                  class="instagram__pic__item set-bg"
                  style={{ backgroundImage: `url(${insta1})` }}
                ></div>
                <div
                  class="instagram__pic__item set-bg"
                  style={{ backgroundImage: `url(${insta2})` }}
                ></div>
                <div
                  class="instagram__pic__item set-bg"
                  style={{ backgroundImage: `url(${insta3})` }}
                ></div>
                <div
                  class="instagram__pic__item set-bg"
                  style={{ backgroundImage: `url(${insta4})` }}
                ></div>
                <div
                  class="instagram__pic__item set-bg"
                  style={{ backgroundImage: `url(${insta5})` }}
                ></div>
                <div
                  class="instagram__pic__item set-bg"
                  style={{ backgroundImage: `url(${insta6})` }}
                ></div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="instagram__text">
                <h2>Instagram</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3>#Male_Fashion</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Instagram;
