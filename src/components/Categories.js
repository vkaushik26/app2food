import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Route } from 'react-router-dom'
import Ads from './Ads';



function Categories(props) {
  const [categories, setCategories] = useState([]);
  const [imgBaseUrl, setImgBaseUrl] = useState("https://cdn.app2food.com/olo/category/");
  useEffect(() => {
    console.log("checking length------"+ props.catarr.length);
      setCategories(props.catarr);
    }, [props.catarr]);


  return (<>
  <div className="col col-md-9 col-sm-12 categories-box">
    
  <Route path="/" exact component={Ads} />
    
    <div className="row ">
      <div className="col col-12">
        <br />
        <span style={{ float: 'left', color: '#28398d', fontWeight: 'bold', paddingLeft:'15px' }}>Main Categories</span>
        <hr style={{ marginLeft: '15px' }} />
      </div>
      </div>
      <div className="row">
      {categories.map(cat => (<div className="col col-md-4 col-sm-12 col-xs-12 category-container" key={cat.cat_id}>
        <div className="category-box" style={{ backgroundImage: `url(${imgBaseUrl + cat.category_image})` }}>
          <div className="category-name"> <Link to={"/products/" + cat.cat_id}> {cat.category_name} </Link></div>
        </div>
      </div>))}
      </div>
      
    </div></>);
}

export default Categories;