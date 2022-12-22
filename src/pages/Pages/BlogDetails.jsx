import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const BlogDetails = () => {

const [news, setNews] = useState();
const params = useParams()

const id = params



console.log(params);


 useEffect(() => {
    axios
      .get('https://newsapi.org/v2/everything', {
        params: {
          apiKey: '9f7b20595ca240bf81d10079c0e25890',
          q: 'fashion',
          searchIn: 'title',
          sortBy: 'relevancy',
       }
      })
      .then((response) => {
        console.log(response);
        setNews(response.data.articles[params.id]);
      });
  }, []);

  
 
  console.log(news);
  console.log('kkkkkk');

  return <>
  {news && <>
    <section className="blog-hero spad">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-9 text-center">
                    <div className="blog__hero__text">
                        <h2>{news.title}</h2>
                        <ul>
                            <li>{news.source?.name}</li>
                            <li>{news.publishedAt}</li>
                            <li>8 Comments</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="blog-details spad">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-12">
                    <div className="blog__details__pic">
                        <img src={news.urlToImage} alt="img"/>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="blog__details__content">
                        <div className="blog__details__share">
                            <span>share</span>
                            <ul>
                                <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                                <li><Link to="#" className="twitter"><i className="fa fa-twitter"></i></Link></li>
                                <li><Link to="#" className="youtube"><i className="fa fa-youtube-play"></i></Link></li>
                                <li><Link to="#" className="linkedin"><i className="fa fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                        <div className="blog__details__text">
                            <p>{news.content}</p>
                            
                        </div>
                        <div className="blog__details__quote">
                            <i className="fa fa-quote-left"></i>
                            <p>{news.description}</p>
                            <h6>
                                <Link to={news.author} target="_blank">
                                    {news.author}
                                </Link>
                            </h6>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
  </>}

  </>
};

export default BlogDetails;
