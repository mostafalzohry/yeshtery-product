import React, { Component } from "react";

class Cart extends Component {
  render() {
    const data = this.props.data.filter((p) => {
      return p.is_in_cart;
    });

    const empty_cart = (
      <div className="alert alert-info fw-bold text-center">Empty Cart</div>
    );


    let total_price = 0;
    data.forEach((product) => {
      total_price += product.count * product.new_price;
    });

    const product_list = data.map(
      ({ img, discription, count, new_price, id }) => {
        return (
          <div>
          <div className="card mb-3 p-2" key={id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={img} className="img-fluid" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body py-0">
                  <p className="fw-bold m-0">{discription}</p>

                  <div className="quantity my-2">Quantitiy : {count}</div>

                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div className="new_price fw-bold">
                      <span className="fs-4 me-1">{count * new_price}</span>
                      LE
                    </div>

                    <button
                      className="remove btn rounded-pill px-5 fw-semibold"
                      onClick={() => this.props.handle_remove_from_cart(id)}
                    >
                      Remove
                    </button>

                    </div>
                </div>
              </div>
            </div>
            </div>


     
                    <div className="total text-center fw-bold fs-3">
                      Total: {total_price} LE
                    </div>

                    <div className="buttons d-flex gap-4 flex-wrap my-3">
                      <button className="btn text-white fw-semibold rounded-pill flex-grow-1 py-2">
                        Review Cart
                      </button>
                      <button className="btn text-black fw-semibold rounded-pill flex-grow-1 py-2">
                        Complete Chechout
                      </button>
                    </div>
                    </div>
                  
        );
      }
    );

    

    return (
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="cart_offcanvas"
        aria-labelledby="offcanvasExampleLabel"
      >
        {/* offcanvas-header */}
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title fw-bold fs-3 m-auto"
            id="offcanvasExampleLabel"
          >
            My Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <h5 className="fw-bold mb-4">Cart Summary</h5>

          <div className="products">
            {data.length === 0 ? empty_cart : product_list}
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
