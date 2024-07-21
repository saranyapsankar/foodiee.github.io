import { useState,useEffect } from "react";
import { API_ENDPOINT, RES_ENDPOINT } from "../assets/constant";
import * as tempRes from '../assets/tempData.json'

const setAllRestList = ()=> {
    const [deliverableResList, setDeliverableResList] = useState([]);
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filteredDelResList, setFilteredDelResList] = useState([]);
    const [cuisinesList, setCuisinesList] = useState([]);
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async ()=>{
        const data = await fetch(API_ENDPOINT);
        const restData = await data?.json();
        
        if(!data) restData = tempRes.result;
        setCuisinesList(
         restData?.data?.cards?.[0]?.card?.card?.imageGridCards?.info ||
         tempRes.result ?.data?.cards?.[0]?.card?.card?.imageGridCards?.info
        );
        setRestaurantsList(
         restData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || 
         tempRes.result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredDelResList(
         restData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
         tempRes.result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
        );
        setDeliverableResList(
         restData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
         tempRes.result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    }
    return { deliverableResList, restaurantsList, filteredDelResList, cuisinesList, setFilteredDelResList};
}

export default setAllRestList;