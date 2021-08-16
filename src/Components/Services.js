import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { RiHome8Fill } from "react-icons/ri";
const Services = () => {
  return (
    <>
      <div className="service">
        <div className="container">
          <div className="row">
            <div className="col-md-7 service_left">
              <p className="sub-heading">WELCOME TO LOVECARE CHARITY</p>
              <h1>
                We Help Thousands of <br /> Children to Get Their <br />{" "}
                Education
              </h1>
              <div className="content pe-3">
                <p className="pt-5">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
              <div className="row btns">
                <div className="col-md-4 d-flex align-items-stretch">
                  <div className="btn_section">
                    <FaDonate />
                    <p>Start Donating</p>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-stretch">
                  <div className="btn_section">
                    <RiHome8Fill />
                    <p>Join Our Communuity</p>
                  </div>
                </div>
                <div className="col-md-4 d-flex align-items-stretch">
                  <div className="btn_section">
                    <FaHandsHelping />
                    <p>Be A Volunteer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 service_right">
              <form action="#">
                <div className="row service_right_top">
                  <div className="col-4 my-auto">
                    <FaHandHoldingHeart />
                  </div>
                  <div className="col-8">
                    <h2>NaN</h2>
                    <p>FUNDS RAISED BY 1200 PEOPLE</p>
                  </div>
                </div>
                <div className="formStart">
                  <p>DONATE NOW</p>
                  <h2>Giving is the greatest act of grace</h2>
                  <div className="inner-form">
                    <label htmlFor="fname" className="form-label">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name=""
                      id="fname"
                      placeholder="Your Full Name"
                      className="form-control mb-4"
                    />
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name=""
                      id="email"
                      placeholder="Email"
                      className="form-control mb-4"
                    />
                    <label htmlFor="food" className="form-label">
                      Food
                    </label>
                    <select class="form-select mb-4" id="food">
                      <option selected>-Select Option-</option>
                      <option value="1">Items 1</option>
                      <option value="2">Items 2</option>
                      <option value="3">Items 3</option>
                    </select>
                    <label htmlFor="amount" className="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      name=""
                      id="amount"
                      placeholder="Amount"
                      className="form-control mb-4"
                    />
                    {/* pay option radio */}
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        Paypal
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        Credit Card
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio3"
                        value="option3"
                      />
                      <label class="form-check-label" for="inlineRadio3">
                        Payoneer
                      </label>
                    </div>
                    <div className="d-grid">
                      <button className="btn donteBtn">Donate Now</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
