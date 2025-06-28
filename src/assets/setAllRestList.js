import { useState, useEffect, useCallback} from "react";
import { API_ENDPOINT } from "../assets/constant";
import * as tempRes from '../assets/tempData.json'

const setAllRestList = ()=> {
    const [deliverableResList, setDeliverableResList] = useState([]);
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filteredDelResList, setFilteredDelResList] = useState([]);
    const [cuisinesList, setCuisinesList] = useState([]);
    useEffect(()=>{
        fetchData();
    }, [])

    const loadInitialData = (restData) => {
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

    const fetchData = useCallback(async () => {
        try {
            const response = await fetch(API_ENDPOINT);
            if (!response.ok) throw new Error("Failed to fetch data");

            const restData = await response.json();
            loadInitialData(restData)
        } catch (error) {
            console.error("Error fetching data from proxy server", error);
            loadInitialData()
        }
    }, []);

    return { deliverableResList, restaurantsList, filteredDelResList, cuisinesList, setFilteredDelResList};
}

export default setAllRestList;