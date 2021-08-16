import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "./assets/img/blog1.webp";
const Blog = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 2000,
    });
  }, []);
  let blog = [
    {
      img: img1,
      title: "Give Hope to the People Need Most",
    },
    {
      img: img1,
      title: "Give Hope to the People Need Most",
    },
    {
      img: img1,
      title: "Give Hope to the People Need Most",
    },
  ];
  return (
    <>
      <div
        className="blog"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 header">
              <p>OUR BLOG</p>
              <h1>Recent From Blog</h1>
            </div>
          </div>
          <div className="row">
            {blog.map((val, index) => {
              const { img, title } = val;
              return (
                <>
                  <div className="col-md-4" key={index}>
                    <div className="card">
                      <img
                        src={img}
                        className="card-img-top img-fluid"
                        alt={title}
                      />
                      <div className="card-body">
                        <div className="card-pallet">
                          <span>ADMIN</span>
                          <span>FEB. 22.2021</span>
                          <span>3</span>
                          <small>COMMENTS</small>
                        </div>
                        <div className="card-content">
                          <h5 className="card-title">{title}</h5>
                          <p className="card-text">
                            Separated they live in Bookmarksgrove right at the
                            coast of the Semantics, a large language ocean.
                          </p>
                          <a href="#" className="btn">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
