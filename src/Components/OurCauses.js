import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./assets/img/slider1.webp";
import img3 from "./assets/img/slider3.webp";
import img4 from "./assets/img/slider4.webp";
import AOS from "aos";
import "aos/dist/aos.css";
const OurCauses = () => {
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 1000,
    });
  }, []);
  let settings = {
    dot: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let cards = [
    {
      img: img1,
      title: "Give Food to Homeless Children",
      sub_title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
    {
      img: img4,
      title: "Give Food to Homeless Children",
      sub_title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
    {
      img: img3,
      title: "Give Food to Homeless Children",
      sub_title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
    {
      img: img4,
      title: "Give Food to Homeless Children",
      sub_title:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
  ];
  return (
    <>
      <div className="ourCauses" data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0 header">
              <p>OUR CAUSES</p>
              <h1>
                Our Causes & Help <br /> Us
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <Slider {...settings}>
                {cards.map((val, index) => {
                  const { img, title, sub_title } = val;
                  return (
                    <>
                      <div className="card" key={index}>
                        <img
                          src={img}
                          className="card-img-top"
                          alt="img"
                          className="img-fluid"
                        />
                        <div className="card-body">
                          <div className="card-content">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{sub_title}</p>
                          </div>
                          <div className="card-progress">
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: "70%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                75%
                              </div>
                            </div>
                            <div className="row card-progress_second">
                              <div className="col-6">
                                <p className="text-muted">
                                  Raised:{" "}
                                  <span className="text-dark">$9800</span>
                                </p>
                              </div>
                              <div className="col-6 text-end">
                                <p className="text-muted">
                                  Goal: <span className="fifteen">$15000</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurCauses;
