import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (

      <ProductWrapper className="col-9 mx-auto col-6 mx auto col-lg-3 my-3">
        <h3> This is Product</h3>
        <div className="card">
          <div className="img-container p-5" onClick={() => console.log("you clicked me")}>
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button className="cart-btn" disabled={inCart ? true : false} onClick={() => { console.log('go to cart'); }}>

              {
                inCart ? (
                  <p className="text-capitalize mb-0" disabled>
                    in cart
                  </p>)
                  :
                  (<i className="fas fa-cart-plus" />)
              }
            </button>
          </div>
          {/* card footer */}

          <div className="card-footer d-flex justify-content-between">
            <p className="align-slef-center mb-0">
              {title}
            </p>
            <h5 className="text-blue font-strong mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>

        </div>
      </ProductWrapper >
    );
  }
}
const ProductWrapper = styled.div`

`
export default Product;
