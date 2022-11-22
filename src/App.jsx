import React, { Component } from "react";
import "./App.scss";
import Breadcrumb from "./Components/Breadcrumb";
import Cart from "./Components/Cart";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import SimilarProducts from "./Components/SimilarProducts";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./Components/Loading";
import axios from "axios";


const ProductDetails = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 3000)).then(() =>
    import("./Components/ProductDetails")
  );
});




class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    axios
      .get("https://63594a8438725a1746acdddb.mockapi.io/products")
      .then((res) => {
        const data = res.data;
        this.setState({ data: data });
      })
      .catch((err) => console.log(err));
  }

  handle_add_to_cart = (id) => {
    const data = this.state.data;
    let product = data.find((product) => product.id === id);

    product.is_in_cart = true;
    product.count += product.quantityincart;

    this.setState({ data });
    toast.success("Product added successfully!");
  };

  handle_remove_from_cart = (id) => {
    const data = JSON.parse(JSON.stringify(this.state.data));
    let product = data.find((product) => product.id === id);
    product.is_in_cart = false;
    product.count = 0;
    this.setState({ data });
    toast.error("Product deleted successfully!");
  };

  handle_increase_count = (id) => {
    const data = JSON.parse(JSON.stringify(this.state.data));
    let product = data.find((product) => product.id === id);
    product.quantityincart++;
    this.setState({ data });
  };

  handle_decrease_count = (id) => {
    const data = JSON.parse(JSON.stringify(this.state.data));
    let product = data.find((product) => product.id === id);
    if (product.quantityincart > 1) {
      product.quantityincart--;
    }
    this.setState({ data });
  };

  render() {
    if (this.state.data) {


      return (
        <div className="App container-fluid">


          <Navbar></Navbar>

          <Searchbar data={this.state.data}></Searchbar>

          <Categories></Categories>



          <div className="container-product">
            <Breadcrumb data={this.state.data}></Breadcrumb>

            <React.Suspense fallback={<Loading></Loading>}>
              <ProductDetails
                data={this.state.data}
                handle_add_to_cart={this.handle_add_to_cart}
                handle_increase_count={this.handle_increase_count}
                handle_decrease_count={this.handle_decrease_count}
              ></ProductDetails>
            </React.Suspense>


            <SimilarProducts data={this.state.data}></SimilarProducts>
          </div>

          <Footer></Footer>

          <Cart
            data={this.state.data}
            handle_remove_from_cart={this.handle_remove_from_cart}
          ></Cart>

          <ToastContainer />
        </div>
      );
    }
  }
}
export default App;
