import { useState, useEffect } from 'react'


function Cart() {

    const [items, setItems] = useState([]);

      useEffect(() => {
        var storedCart = [];
        var cartJson = localStorage.getItem("cart");
        try{
        if(cartJson && cartJson.length > 0){
            storedCart = JSON.parse(cartJson);
        }
    }catch(e){}
        setItems(storedCart);
        
      }, []);

   

    const removeItem = (itemId) => {
        var temp = items.filter(item => item.store_product_id != itemId);
        setItems(temp);
        var cartJson = JSON.stringify();
        localStorage.setItem("cart", cartJson);
    }

    const subtotal = () => {
        var sum = 0;
        for(var i = 0 ; i < items.length ; i++){
            sum += parseFloat(items[i].product_price);
        }
        return sum;
    }

    return (<>
        <div className="row cart-box" >

            <br /><br /><br />
            {items.map(item => (
                <div className="cart-item" key={item.store_product_id}>
                <div className="row">
                    <div className="col col-2">
                        <select>
                            <option>1</option>
                        </select>
                    </div>
                    <div className="col col-8 cart-item-name"> {item.store_product_name}
                <br />
                        <a href="#" className="cart-remove-link" onClick={() => {removeItem(item.store_product_id);}}>REMOVE</a>
                    </div>
                    <div className="col col-2">
                        $ {item.product_price}
                    <br />
                        <a href="#" className="cart-edit-link">EDIT</a>
                    </div>
                </div>
                <hr />
            </div>
            ))}
            
           <div className="row">
               <div className="col col-12">
                   <input type="text" className="form-control cart-instructions" placeholder="Add Special Instruction"/>
               </div>
           </div>
           <br/>
           <br/>
           <div className="row">
               <div className="col col-6 cart-sub-left">
                   Subtotal
               </div>
               <div className="col col-6 cart-sub-right">
                   $ {(subtotal()).toFixed(2)}
                   
               </div>
           </div>

           <div className="row">
               <div className="col col-6 cart-sub-left">
                   Taxes (10%)
               </div>
               <div className="col col-6 cart-sub-right">
                   $ {(subtotal()/10).toFixed(2)}
                   
               </div>
           </div>
           <div className="row">
               <div className="col col-6 cart-sub-left">
                   Delivery Charge
               </div>
               <div className="col col-6 cart-sub-right">
                   $ 2.00
                   
               </div>
           </div>
           <div className="row">
               <div className="col col-6 cart-sub-left">
                   Order Total
               </div>
               <div className="col col-6 cart-sub-right">
                   
                   $ {(subtotal() + subtotal()/10 + 2).toFixed(2)}
               </div>
           </div>
           <div className="row">
               <div className="col col-12">
                   <br/><br/>
                </div>
            </div>
           <div className="row cart-footer">
               
               <div className="col col-7 cart-checkout">
                   <button className="btn btn-success checkout-button">CHECKOUT</button>
                  
               </div>
               <div className="col col-5 cart-checkout-right">
                  <span className="cart-footer-tootal">ORDER TOTAL </span>
                  <br/>
                  $ {(subtotal() + subtotal()/10 + 2).toFixed(2)}
                  
               </div>
           </div>



        </div>
    </>);
}

export default Cart;