import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { useState, useEffect } from 'react';
import SideBar from './components/SideBar';
import Categories from './components/Categories';
import Products from './components/Products';
import Cart from './components/Cart';
import axios from 'axios';
import Appbar from './components/Appbar';
function App() {

  const [Url, setUrl] = useState([]);
  const [ImgUrl, setImgUrl] = useState([]);
  useEffect(() => {
    axios.get("https://stg.app2food.com/menu/").then(res => {
      setUrl(res.data.data.categories);
      console.log(res.data.data.imagePath.category);
      setImgUrl(res.data.data.imagePath.category);
      });
    }, []);

  return (
    <div className="App">
      <div className="row">
        
        <div className="col col-9 text-start"> <Appbar/></div>
        <div className="col col-3 cart-header"> Pickup at: Today 10:00 am </div>
      </div>

      <div className="row">
        <Router>
        
        <Route path="/products/:id"  exact component={SideBar} />
            <Switch>
           
              <Route path="/" exact  render={() => <Categories catarr={Url} baseimg={ImgUrl} />} />
              <Route path="/products/:id" exact component={Products} />
            </Switch>



          

        </Router>
        <div className="col col-md-3 col-sm-12 col-xs-12">
          <Cart />
        </div>

      </div>
    </div >
  );
}

export default App;
