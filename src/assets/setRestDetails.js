import { useState, useEffect } from "react";
import { REST_URL } from "../assets/constant";

const setRestDetails = (resId)=> {
    const [restDetails, setRestDetails] = useState(null);
    useEffect(() => {
        fetchResDetails();
      }, []);
    
      const fetchResDetails = async () => {
        const dataRes = await fetch(REST_URL + resId);
        const json = await dataRes?.json();
        setRestDetails(json?.data);
      };
    return restDetails;
}
export default setRestDetails;