import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function SideBar() {
    const [categories, setCategories] = useState([]);

    const showCategory = (categoryId) => {
        // console.log("Redirecting ...");
        // this.props.history.push("/products/" + categoryId);
        // return <Redirect to={"/products/" + categoryId} />
        document.location.href = "/products/" + categoryId;
    }
    useEffect(() => {
        axios.get("https://stg.app2food.com/menu/").then(res => {
            console.log(res);
            setCategories(res.data.data.categories);
            console.log(res.data.data.imagePath.category);

        });
    }, []);
    return (<>
        <div className="col col-3 d-sm-none d-xs-none d-md-block d-lg-block  side-bar-box">


            {
                categories.map(cat => (
                    <div className="row">
                        <div className="col col-12 sidebar-item">
                            <a href="#" onClick={() => showCategory(cat.cat_id)} >{cat.category_name}  </a>
                        
                        </div>
                    </div>))}
        </div>

    </>);
}

export default SideBar;