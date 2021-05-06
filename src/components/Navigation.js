import { Table } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import FoodService from '../service/FoodService'




const Navigation = (props) => {
    const [List, setList] = useState([])

    function food() {

        FoodService.getAllFoodService().then((Response) => {
            // this.setState({ inventory: Response.data })
            let cat = Response.data;
            setList(cat.data.categories);
            console.log(cat.data.categories);
        })

    }

    useEffect(() => {
        food();
        // setList(["Appple", "mango", "pizza", "Eggs"])
    }, [])
    return (
        <div class="sidenav">
            {
                List.map((categories)=>
                {
                    return (
                        <a href="">{categories.category_name}</a>
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
