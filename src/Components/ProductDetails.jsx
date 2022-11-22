import React, { Component } from "react";
import search from "../images/search.svg";
import rotate from "../images/360.svg";

import ReactStars from "react-rating-stars-component";

class MainProduct extends Component {
  render() {
    const {
      id,
      img,
      images,
      discription,
      gender,
      rate,
      rate_count,
      old_price,
      new_price,
      discount,
      size,
      color,
      count,
      quantityincart,
    } = this.props.data[0];
    console.log(quantityincart);

    return (
      <div className="main-product pt-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="box">
                <div className="image">
                  <div className="position-absolute p-2 m-2 rounded-3 bg-light">
                    <img src={rotate} alt="360" className="rotate" />
                  </div>
                  <img src={img} alt="img" className="img-fluid w-100" />
                </div>
                <div className="gallary d-flex align-items-center justify-content-between gap-2 mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.589"
                    height="24"
                    viewBox="0 0 15.589 24"
                  >
                    <defs>
                      <style>.afill:#3c3c3b;</style>
                    </defs>
                    <path
                      class="a"
                      d="M7373.221,1274.066a.785.785,0,0,0,.491-1.4l-13.252-10.6,13.252-10.6a.785.785,0,1,0-.981-1.226l-14.018,11.215a.784.784,0,0,0,0,1.226l14.018,11.215A.781.781,0,0,0,7373.221,1274.066Z"
                      transform="translate(-7358.418 -1250.066)"
                    />
                  </svg>
                  <div className="images d-flex gap-2">
                    {images.map((img, index) => {
                      return (
                        <div key={index}>
                          <img src={img} alt="img" className="img-thumbnail" />
                        </div>
                      );
                    })}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.589"
                    height="24"
                    viewBox="0 0 15.589 24"
                  >
                    <defs>
                      <style>.afill#3c3c3b</style>
                    </defs>
                    <path
                      class="a"
                      d="M7911.615,1250.066a.785.785,0,0,0-.491,1.4l13.252,10.6-13.252,10.6a.785.785,0,1,0,.981,1.226l14.018-11.215a.784.784,0,0,0,0-1.226l-14.018-11.215A.787.787,0,0,0,7911.615,1250.066Z"
                      transform="translate(-7910.829 -1250.066)"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="box">
                <div className="image">
                  <img src={search} alt="img" />
                </div>

                <p className="fw-bold my-3">{discription}</p>

                <div className="gender fw-bold text-black-50">{gender}</div>

                <div className="rate d-flex align-items-center gap-5 my-3">
                  <div className="d-flex align-items-center gap-1">
                    <ReactStars
                      count={5}
                      edit={false}
                      size={24}
                      value={rate}
                      activeColor="#f1c40f"
                    />
                  </div>
                  <div>
                    <span className="fw-bold">{rate} of 5</span>
                  </div>
                  <div className="count fw-bold text-black-50">Rates</div>
                </div>

                <div className="price d-flex align-items-center gap-5 mb-3">
                  <div className="new_price fw-bold">
                    <span className="fs-4 me-1">{new_price}</span>
                    LE
                  </div>
                  <div className="old_price text-decoration-line-through text-black-50 fw-bold">
                    {old_price} LE
                  </div>
                  <div className="discount badge text-black px-3 ms-3">
                    {discount}% OFF
                  </div>
                </div>

                <hr />

                <div className="sizes">
                  <h5>Sizes</h5>

                  <div className="d-flex gap-3">
                    {size.map((s, i) => {
                      return (
                        <div
                          className={`size rounded-circle border ${
                            s === "Large" ? "bg-secondary" : null
                          } fw-semibold d-flex align-items-center justify-content-center`}
                          key={i}
                        >
                          {s}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <hr />

                <div className="colors">
                  <h5>Color</h5>

                  <div className="d-flex gap-3">
                    {color.map((c, i) => {
                      return <img src={c} key={i} alt="img" />;
                    })}
                  </div>
                </div>

                <hr />

                <div className="quantitiy">
                  <h5>Quantitiy</h5>

                  <button className="bg-light p-2 fw-bold rounded-pill w-50 border position-relative">
                    {quantityincart}
                    <span
                      className="position-absolute top-50 start-0 translate-middle-y ms-2 d-flex align-items-center justify-content-center fs-3 fw-bold rounded-circle"
                      onClick={() => this.props.handle_decrease_count(id)}
                    >
                      -
                    </span>
                    <span
                      className="position-absolute top-50 end-0 translate-middle-y me-2 d-flex align-items-center justify-content-center fs-3 fw-bold rounded-circle"
                      onClick={() => this.props.handle_increase_count(id)}
                    >
                      +
                    </span>
                  </button>
                </div>

                <hr />

                <div className="buttons d-flex gap-5">
                  <button
                    onClick={() => this.props.handle_add_to_cart(id)}
                    className="btn text-white fw-semibold rounded-pill flex-grow-1 py-2"
                  >
                    Add To Cart
                  </button>
                  <button className="btn text-black fw-semibold rounded-pill flex-grow-1 py-2">
                    Pickup From Store
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainProduct;
