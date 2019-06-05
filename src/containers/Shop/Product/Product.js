import React from 'react';

import './Product.css';
import Image from '../../../assets/img/t-shirt1.jpg';
import ProductSettings from '../../../components/Collection/Product/ProductSettings/ProductSettings';
import Footer from '../../../components/Footer/Footer';

const Product = () => (
    <React.Fragment>
        <div className="ProductPage">
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <img src={Image} alt="" className="w-100" />
                    </div>
                    <div className="col-5">
                        <ProductSettings />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </React.Fragment>
);

export default Product;