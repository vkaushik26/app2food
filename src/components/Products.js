import { useState, useEffect } from 'react'
import axios from 'axios'


function Products(props) {
    const [products, setProducts] = useState([]);
    
    const categoryId = props.match.params.id;
    useEffect(() => {
        axios.get("https://stg.app2food.com/menu/").then(res => {
            console.log(res);
            var selectedCategory = res.data.data.categories.filter(cat => cat.cat_id == categoryId);
            console.log("Products...");
            console.log(selectedCategory[0].product);
            console.log(selectedCategory[0].product);
            setProducts(selectedCategory[0].product);

            console.log(products);
        });
       
    }, []);

    window.addEventListener('storage', () => {
    
        console.log(JSON.parse(window.localStorage.getItem('cart')));
      });

    const addItem = (itemId) => {
        console.log("addIem called " + itemId);
        var items = products.filter(prod => prod.store_product_id == itemId);
        var item = items[0];

        var storedCart = [];
        var cartJson = localStorage.getItem("cart");
        try {
            if (cartJson) {
                storedCart = JSON.parse(cartJson);
            }
        } catch (e) { }
        storedCart.push(item);
        var cartJson = JSON.stringify(storedCart);
        localStorage.setItem("cart", cartJson);
        window.location.reload();
    }

  


    return (<div className="col col-md-6 col-sm-12 categories-box">
    <div className="products">
        <br />
        <div className="row">
            <div className="col col-12">
                <div className="card" style={{ borderRadius: '0px', textAlign: 'left', width: '100%', padding: '15px' }}>
                    <span style={{ color: 'red' }}>Closed, </span>
                    <span style={{ float: 'left', position: 'absolute', left: '75px' }}>Next Pickup at 10:00 am</span>
                </div>
            </div>
        </div>

        <br />
        <div className="row">
            {products.map(product => (
                <div className="col col-md-6 col-sm-12 col-xs-12" key={product.store_product_id}>
                    <div className="card">
                        <div className="product-title">
                            {product.store_product_name}
                        </div>
                        <p className="product-description">
                            {product.product_desc}
                        </p>
                        <div className="product-footer row">
                            <div className="col col-7 customize-product" >
                                <a href="#">Customize</a>
                            </div>
                            <div className="col col-5" style={{ textAlign: 'right', cursor: 'pointer' }} onClick={() => { addItem(product.store_product_id); }} >
                                <div className="trapezoid-left"><span> ADD &nbsp;  | </span></div>
                                <div className="trapezoid"><span>${product.product_price}</span></div>



                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div></div>);
}

export default Products;