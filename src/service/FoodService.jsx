import axios from 'axios'
import React from 'react'
const FoodUri = 'https://stg.app2food.com/menu/';
class FoodService {
    
    getAllFoodService() {

        return axios.get(FoodUri)
    }
}



export default new FoodService;