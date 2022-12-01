import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import calendar from "../../assets/img/icon/calendar.png";


const LatestBlog = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get('https://newsapi.org/v2/everything', {
        params: {
          apiKey: '9f7b20595ca240bf81d10079c0e25890',
          q: 'fashion',
          searchIn: 'title',
          sortBy: 'relevancy',
          pageSize: 3
        }
      })
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      });
  }, []);

  console.log(news);
  return (
    <>
      <section className="latest spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div clasName="section-title">
                <span>Latest News</span>
                <h2>Fashion New Trends</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {news.map((infor) => (
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="blog__item">
                  <div
                    className="blog__item__pic set-bg"
                    style={{ backgroundImage: `url(${infor.urlToImage})` }}
                  ></div>
                  <div className="blog__item__text">
                    <span>
                      <img src={calendar} alt="img" /> {infor.publishedAt}
                    </span>
                    <h5>{infor.title}</h5>
                    <Link to="#">Read More</Link>
                  </div>
                </div>
              </div>
            ))
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default LatestBlog;
