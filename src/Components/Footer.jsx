import React, { Component } from "react";
import logo from "../images/logo_colored.svg";
import nasnav from "../images/nasnav.svg";
import crash from "../images/Rectangle 586.png";
import master from "../images/Group 1438.png";
import visa from "../images/Group 1437.png";
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.svg";
import instgram from "../images/instgram.svg";
import twitter from "../images/twitter.svg";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer py-5 text-bg-dark">
        <div className="container">
          <div className="row row-cols-1 row-cols-lg-2 g-5">
            <div className="col border-end">
              <div className="box">
                <img src={logo} alt="logo" />
                <p className="my-3 text-white-50">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat.
                  <span className="my-3 d-block">
                    Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu
                    feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed dia
                  </span>
                  m nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui blandit
                </p>
              </div>
            </div>
            <div className="col">
              <div className="box">
                <h5 className="mb-3">Subscribe to our newsletter</h5>
                <div className="subscribe position-relative">
                  <input
                    type="email"
                    className="form-control rounded-pill p-3 shadow-none"
                    placeholder="Enter Your Mail"
                  />
                  <button className="btn rounded-pill px-4 fw-bold position-absolute end-0 top-50 translate-middle-y me-3">
                    Subscribe {"  "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.688"
                      height="20.674"
                      viewBox="0 0 20.688 20.674"
                    >
                      <g transform="translate(-5905.927 -6908.532)">
                        <path d="M5926.438,6908.7a.6.6,0,0,0-.658-.123l-19.495,8.544a.6.6,0,0,0-.357.516.589.589,0,0,0,.3.547l6.8,3.855,4.035,6.867a.6.6,0,0,0,.512.3h.035a.6.6,0,0,0,.512-.358l8.447-19.486A.59.59,0,0,0,5926.438,6908.7Zm-3.1,2.245-9.977,9.911-5.509-3.122Zm-5.844,16.347-3.286-5.6,10.034-9.968Z" />
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="row my-3">
                  <div className="col border-end">
                    <ul className="list-unstyled">
                      <li className="my-2">
                        <Link className="text-decoration-none link-light">
                          About Us
                        </Link>
                      </li>
                      <li className="my-2">
                        <Link className="text-decoration-none link-light">
                          Contact Us
                        </Link>
                      </li>
                      <li className="my-2">
                        <Link className="text-decoration-none link-light">
                          Take Order
                        </Link>
                      </li>
                      <li className="my-2">
                        <Link className="text-decoration-none link-light">
                          Tearm & Conditions
                        </Link>
                      </li>
                      <li className="my-2">
                        <Link className="text-decoration-none link-light">
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="my-2">
                        <Link className="text-decoration-none link-light">
                          Sell With Us
                        </Link>
                      </li>
                      <li className="my-2">
                        <Link className="text-decoration-none link-light">
                          Shipping And Returns
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col ps-5">
                    <ul className="list-unstyled">
                      <li className="my-2">
                        <img src={facebook} alt="" />
                        <span className="ms-2">/ Yeshtery</span>
                      </li>
                      <li className="my-2">
                        <img src={linkedin} alt="" />
                        <span className="ms-2">/ Yeshtery</span>
                      </li>
                      <li className="my-2">
                        <img src={instgram} alt="" />
                        <span className="ms-2">/ Yeshtery</span>
                      </li>
                      <li className="my-2">
                        <img src={twitter} alt="" />
                        <span className="ms-2">/ Yeshtery</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-bottom my-3"></div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-center text-center justify-content-center g-3">
            <div className="col text-lg-start">
              © 2021 yeshtery, all rights reserved.
            </div>
            <div className="col text-md-end text-lg-center">
              <img src={crash} alt="crash" className="mx-2" />
              <img src={master} alt="master" className="mx-2" />
              <img src={visa} alt="visa" className="mx-2" />
            </div>
            <div className="col text-lg-end">
              <span>Powered By</span>
              <img src={nasnav} alt="navnas" className="ms-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
