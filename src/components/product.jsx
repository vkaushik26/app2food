import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Product(props) {
  

    return(
            <div className="product thumbnail">
                <img src={null} alt="product" />
                <div className="caption">
                    <h3>{console.log(">>>>>>"+props.dataload)}</h3>
                    <div className="product__price">400 Rs</div>
                    <div className="product__button-wrap">
                        {/* <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button> */}
                    </div>
                </div>
            </div>
        );
}

export default Product;
