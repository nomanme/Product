import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product
    return (

      <div>
        <h3> This is Product</h3>
      </div >
    );
  }
}

export default Product;
