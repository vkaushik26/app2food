import React from 'react';
import PropTypes from 'prop-types';
import Product from './product';

function ProductList (props){



    return (
        <div>
            <h3>Products</h3>
            <ul className="product-list">
              {props.productInput.map((product) => (
                  <li key={product.id} className="product-list__item">
                    <Product dataload={product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

export default ProductList;
