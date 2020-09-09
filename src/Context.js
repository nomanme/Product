import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();
// Provider
// Consumer 

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct,
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let products = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            products = [...products, singleItem];
        });
        this.setState(() => {
            return { products };
        }, this.checkCartItems);
    };

    handleDetail = () => {
        console.log("hello details");
    }

    addToCart = (id) => {
        console.log(`hello carts.id is ${id}`);
    }

    // tester = () => {
    //     console.log('State Product : ', this.state.products[0].inCart);
    //     console.log('Data Product : ', storeProducts[0].inCart);
    //     const tempProducts = [...this.state.products];
    //     tempProducts[0].inCart = true;
    //     this.setState(() => {
    //         return { products: tempProducts }
    //     }, () => {
    //         console.log('State Product : ', this.state.products[0].inCart);
    //         console.log('Data Product : ', storeProducts[0].inCart);
    //     })
    // }


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }}>
                {/* <button onClick={this.tester}>Test Me</button> */}
                {this.props.children}

            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }