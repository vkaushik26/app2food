import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
import Navigation from './components/Navigation'
import Product from './components/product'
import ProductList from './components/ProductList'
import Appbar from './components/Appbar';


function App() {
  return (
    <div className="App">
      <div className="container" >
        {/* <div> <Appbar /></div> */}
        <div class="container">
          <div class="row">
            <div class="col">
              <Navigation catselected={} />
            </div>
            <div class="col">
              <Product />
            </div>
            <div class="col">
              1 of 3
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
