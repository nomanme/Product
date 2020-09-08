import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          (value) => {
            const { id, company } = value.detailProduct;
          }
        }
      </ProductConsumer>
    );
  }
}

export default Details;
