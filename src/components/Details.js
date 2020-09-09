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
            const { id, company, img, info, price, title, inCart } = value.detailProduct;
            return <div className="container py-5">
              {/* title */}
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3>model : {title}</h3>
                  <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">
                      {company}
                    </span>
                  </h5>
                  <h5 className="text-blue">
                    <strong>
                      price : <span> $</span>
                      {price}
                    </strong>
                  </h5>
                  <p className="text-capitalize font-weight-strong mt-3 mb-0">
                    about prodcut :
                  </p>
                  <p className="text-muted lead">
                    {info}
                  </p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>
                        back to products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer disabled={inCart ? true : false} onClick={() => {
                      value.addToCart(id)
                    }}>
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          }
        }
      </ProductConsumer >
    );
  }
}

export default Details;
