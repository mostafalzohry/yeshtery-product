import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Categories extends Component {
  render() {
    return (
      <div className="categories bg-dark">
        <div className="container py-3">
          <div className="row row-cols-2 row-cols-md-4">
            <div className="col-lg">
              <NavLink to="/men" className="text-decoration-none link-light">
                Men
              </NavLink>
            </div>
            <div className="col-lg">
              <NavLink to="/women" className="text-decoration-none link-light">
                Women
              </NavLink>
            </div>
            <div className="col-lg">
              <NavLink to="/unisex" className="text-decoration-none link-light">
                Unisex
              </NavLink>
            </div>
            <div className="col-lg">
              <NavLink to="/kids" className="text-decoration-none link-light">
                Kids
              </NavLink>
            </div>
            <div className="col-lg">
              <NavLink
                to="/best-sellers"
                className="text-decoration-none link-light"
              >
                Best Sellers
              </NavLink>
            </div>
            <div className="col-lg">
              <NavLink
                to="/new-arival"
                className="text-decoration-none link-light"
              >
                New Arrivals
              </NavLink>
            </div>
            <div className="col-lg">
              <NavLink  className="text-decoration-none link-danger mx-5">
                Offers
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;
