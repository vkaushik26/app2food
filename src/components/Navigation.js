import { Table } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import FoodService from '../service/FoodService'




const Navigation = (props) => {
    const [List, setList] = useState([])

    function food() {
        FoodService.getAllFoodService().then((Response) => {
            let cat = Response.data;
            setList(cat.data.categories);
            // console.log(cat.data.categories);
        })

    }

    function setCategory(event) {
        // console.log(event.target.value)
        props.catselected(event);
    }

    useEffect(() => {
        food();
        // setList(["Appple", "mango", "pizza", "Eggs"])
    }, [])
    return (
        <div class="sidenav">
            {
                List.map((categories) => {
                    return (
                        <div class="container row">
                            <button className="button btn-primary" value={categories.product} onClick={setCategory}>{categories.category_name}</button>
                        </div>
                    )
                })
            }
        </div>

        // List.map((l) => {
        //     return (
        //         <span class="badge badge-pill badge-primary">{l}</span>
        //     )
        // })
    )
}


export default Navigation
