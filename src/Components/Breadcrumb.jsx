import React, { Component } from "react";

class Breadcrumb extends Component {
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
    } = this.props?.data[4];
    return (
      <nav aria-label="breadcrumb" className="py-3 border-bottom border-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
            <u>   Men </u>
            </li>
            <li className="breadcrumb-item">
             <u>  Clothing </u>
            </li>
            <li className="breadcrumb-item">
              <u> Tops </u>
            </li>
            <li className="breadcrumb-item">
             <u> Adidas </u>
            </li>
            <li
              className="breadcrumb-item active text-black"
           
            >
              adidas black t-shirt 
            </li>
          </ol>
        </div>
      </nav>
    );
  }
}

export default Breadcrumb;
