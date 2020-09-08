import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
// import { storeProducts } from "../data";
import { ProductConsumer } from "../Context";

class ProductList extends Component {

  // state = {
  //   products: storeProducts
  // }

  render() {
    // console.log(this.state.products);
    return (

      <React.Fragment>

        <div className="py-5">

          <div className="container">
            <Title name="Our" title="Products"></Title>
            <div className="row">

              <ProductConsumer>
                {(value) => {
                  // console.log(value);
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} handleDetail={value.handleDetail}>

                    </Product>
                  })
                }}
              </ProductConsumer>
            </div>
          </div>

        </div>

      </React.Fragment >


    );
  }
}

export default ProductList;
