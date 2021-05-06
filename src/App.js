import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
import Navigation from './components/Navigation'
import Product from './components/product'
import ProductList from './components/ProductList'
import Appbar from './components/Appbar';
import { useState } from 'react';


function App() {

  const [products, setProducts] = useState([
    {
        "store_product_id": "86692",
        "store_product_name": "Mac Daddy",
        "product_desc": "Pulled Pork Stuffed Waffle With Bacon-Mac Cheese Filling Topped With Bacon Jalapeno-Maple Syrup.",
        "product_price": "15.00",
        "d_price": "0",
        "order_number": "1",
        "active": "1",
        "store_category_id": "11088",
        "product_image": "product-1609992716.jpeg"
    },
    {
        "store_product_id": "86693",
        "store_product_name": "Buffalo Chicken",
        "product_desc": "Waffle Sandwich Filled With Fried Buffalo Chicken, Mozzarella, Arugula, And Bleu Cheese-Buffalo Spread With A Buffalo Sour Cream Drizzle.",
        "product_price": "15.00",
        "d_price": "0",
        "order_number": "2",
        "active": "1",
        "store_category_id": "11088",
        "product_image": "product-1609992742.jpeg"
    },
    {
        "store_product_id": "86694",
        "store_product_name": "Chicken Finger Melt",
        "product_desc": "Waffle Sandwich With Fried Chicken Fingers, Melted American Cheese, Bacon, French Fries, And Garlic Aioli Spread.",
        "product_price": "15.00",
        "d_price": null,
        "order_number": "3",
        "active": "1",
        "store_category_id": "11088",
        "product_image": ""
    }
]);


  function changeCategoryProducts(p){
      setProducts(p.target)
      console.log("products ki length in appjs"+p.target.value[0])
  }

  return (
    <div className="App">
      <div className="container" >
        {/* <div> <Appbar /></div> */}
        <div class="container">
          <div class="row">
            <div class="col">
              <Navigation catselected={changeCategoryProducts} />
            </div>
            <div class="col">
              <Product productInput = {products} />
            </div>
            <div class="col">
              Placeholder for cart
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
